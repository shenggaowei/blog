export const data = {
  key: "v-54673898",
  path: "/web/extends.html",
  title: "ES5 继承",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "1 构造函数继承",
      slug: "_1-构造函数继承",
      children: [],
    },
    {
      level: 2,
      title: "2 原型链继承",
      slug: "_2-原型链继承",
      children: [],
    },
    {
      level: 2,
      title: "3 组合继承",
      slug: "_3-组合继承",
      children: [],
    },
    {
      level: 2,
      title: "4 组合继承优化",
      slug: "_4-组合继承优化",
      children: [],
    },
  ],
  filePathRelative: "web/extends.md",
  git: {
    updatedTime: 1629097945000,
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
