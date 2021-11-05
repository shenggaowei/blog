export const data = {
  key: "v-0b822fe8",
  path: "/read/%E5%85%84%E5%BC%9F.html",
  title: "《兄弟》",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [],
  filePathRelative: "read/兄弟.md",
  git: {
    updatedTime: 1627184930000,
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
