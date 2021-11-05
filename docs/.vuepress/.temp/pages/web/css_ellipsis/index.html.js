export const data = {
  key: "v-e5cf0e24",
  path: "/web/css_ellipsis/",
  title: "文本省略号",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "规定单行文本出现省略号",
      slug: "规定单行文本出现省略号",
      children: [],
    },
    {
      level: 2,
      title: "规定多行文本出现省略号",
      slug: "规定多行文本出现省略号",
      children: [],
    },
  ],
  filePathRelative: "web/css_ellipsis/index.md",
  git: {
    updatedTime: 1633685930000,
    contributors: [
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
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
