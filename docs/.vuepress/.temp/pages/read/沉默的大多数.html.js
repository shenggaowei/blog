export const data = {
  key: "v-67fee85d",
  path: "/read/%E6%B2%89%E9%BB%98%E7%9A%84%E5%A4%A7%E5%A4%9A%E6%95%B0.html",
  title: "《沉默的大多数》",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "笔记",
      slug: "笔记",
      children: [],
    },
  ],
  filePathRelative: "read/沉默的大多数.md",
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
