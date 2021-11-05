export const data = {
  key: "v-8daa1a0e",
  path: "/",
  title: "升高的日常博客",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [],
  filePathRelative: "README.md",
  git: {
    updatedTime: 1627962751000,
    contributors: [
      {
        name: "weishenggao",
        email: "weishenggao@innobuddy.com",
        commits: 7,
      },
      {
        name: "weishenggao",
        email: "",
        commits: 4,
      },
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 3,
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
