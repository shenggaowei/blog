export const data = {
  key: "v-12052996",
  path: "/web/browser_request.html",
  title: "客户端请求",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "JSONP",
      slug: "jsonp",
      children: [],
    },
    {
      level: 2,
      title: "AJAX",
      slug: "ajax",
      children: [],
    },
    {
      level: 2,
      title: "fetch",
      slug: "fetch",
      children: [],
    },
    {
      level: 2,
      title: "fetch 和 ajax 的区别",
      slug: "fetch-和-ajax-的区别",
      children: [],
    },
  ],
  filePathRelative: "web/browser_request.md",
  git: {
    updatedTime: 1627145681000,
    contributors: [
      {
        name: "weishenggao",
        email: "",
        commits: 1,
      },
    ],
  },
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
