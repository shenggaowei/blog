export const data = {
  key: "v-4342c3ef",
  path: "/fronted/js/ts%E5%AD%A6%E4%B9%A0.html",
  title: "ts 学习笔记",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 3,
      title: "接口",
      slug: "接口",
      children: [],
    },
  ],
  filePathRelative: "fronted/js/ts学习.md",
  git: {
    updatedTime: 1611477099000,
    contributors: [
      {
        name: "weishenggao",
        email: "",
        commits: 3,
      },
      {
        name: "weishenggao",
        email: "weishenggao@innobuddy.com",
        commits: 2,
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
