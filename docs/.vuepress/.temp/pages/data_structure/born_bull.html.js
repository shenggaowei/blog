export const data = {
  key: "v-70493630",
  path: "/data_structure/born_bull.html",
  title: "母牛生产",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [],
  filePathRelative: "data_structure/born_bull.md",
  git: {
    updatedTime: 1633685930000,
    contributors: [
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 1,
      },
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
