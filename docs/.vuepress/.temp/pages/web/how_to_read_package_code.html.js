export const data = {
  key: "v-13a8c9ab",
  path: "/web/how_to_read_package_code.html",
  title: "如何阅阅读源码",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [],
  filePathRelative: "web/how_to_read_package_code.md",
  git: {
    updatedTime: 1629784803000,
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
