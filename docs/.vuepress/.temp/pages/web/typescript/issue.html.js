export const data = {
  key: "v-d1dfb3d4",
  path: "/web/typescript/issue.html",
  title: "ts 常见飘红解决",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "1 类型“string”的参数不能赋给类型“Alignment”的参数。",
      slug: "_1-类型-string-的参数不能赋给类型-alignment-的参数。",
      children: [],
    },
  ],
  filePathRelative: "web/typescript/issue.md",
  git: {
    updatedTime: 1629457508000,
    contributors: [
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
