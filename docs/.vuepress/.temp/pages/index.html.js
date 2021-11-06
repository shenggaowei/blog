export const data = {
  key: "v-8daa1a0e",
  path: "/",
  title: "升高的博客",
  lang: "zh-CN",
  frontmatter: {
    lang: "zh-CN",
    title: "升高的博客",
    description: "测试博客",
  },
  excerpt: "",
  headers: [],
  filePathRelative: "README.md",
  git: {
    updatedTime: 1636110322000,
    contributors: [
      {
        name: "weishenggao",
        email: "weishenggao@innobuddy.com",
        commits: 7,
      },
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 4,
      },
      {
        name: "weishenggao",
        email: "",
        commits: 4,
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
