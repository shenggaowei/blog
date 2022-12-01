import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Divider from "../components/divider"
import { formattedData } from "../utils"

const formatPosts = posts => {
  // 按照年份进行分组
  const postsGroups = posts.reduce((info, post) => {
    const date = post.frontmatter.date
    const formatDate = new Date(date)
    const year = formatDate.getFullYear()
    info[year] = info[year] ? info[year].concat(post) : [].concat(post)
    return info
  }, {})

  // 转成数组，按照年份大小进行排序
  const postsGroupsByYear = Object.keys(postsGroups)
    .sort((a, b) => {
      return parseInt(b) - parseInt(a)
    })
    .map(year => {
      const posts = postsGroups[year]
      return {
        year,
        posts,
      }
    })

  return postsGroupsByYear
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const formattedPosts = React.useMemo(() => formatPosts(posts), [posts])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="升高" />
        <p>这是一片思想的荒漠</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="升高" />
      <ol style={{ listStyle: `none` }}>
        {formattedPosts.map((postGroups, index) => {
          const { year, posts } = postGroups
          return (
            <div key={index}>
              <Divider text={year} />
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                return (
                  <li key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <h4>
                        <Link to={post.fields.slug} itemProp="url">
                          <small>{formattedData(post.frontmatter.date)}</small>
                          <span className="title" itemProp="headline">
                            {title}
                          </span>
                        </Link>
                      </h4>
                    </article>
                  </li>
                )
              })}
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
