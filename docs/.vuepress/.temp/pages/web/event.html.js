export const data = {
  key: "v-5f7ad95a",
  path: "/web/event.html",
  title: "跨浏览器事件对象",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [],
  filePathRelative: "web/event.md",
  git: {
    updatedTime: 1627025728000,
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
