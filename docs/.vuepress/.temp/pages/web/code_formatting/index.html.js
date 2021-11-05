export const data = {
  key: "v-1d3f6828",
  path: "/web/code_formatting/",
  title: "代码美化小技巧",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "1. Git hooks",
      slug: "_1-git-hooks",
      children: [],
    },
    {
      level: 2,
      title: "2. prettier",
      slug: "_2-prettier",
      children: [],
    },
    {
      level: 2,
      title: "3. eslint",
      slug: "_3-eslint",
      children: [],
    },
    {
      level: 2,
      title: "3. lint-staged",
      slug: "_3-lint-staged",
      children: [],
    },
    {
      level: 2,
      title: "配合使用",
      slug: "配合使用",
      children: [],
    },
  ],
  filePathRelative: "web/code_formatting/readme.md",
  git: {
    updatedTime: 1629100591000,
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
