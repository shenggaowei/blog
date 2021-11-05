export const data = {
  key: "v-6cb77acb",
  path: "/web/taro_optimization.html",
  title: "Taro小程序性能优化实战",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "长列表优化",
      slug: "长列表优化",
      children: [],
    },
    {
      level: 2,
      title: "预加载",
      slug: "预加载",
      children: [],
    },
  ],
  filePathRelative: "web/taro_optimization.md",
  git: {
    updatedTime: 1628653715000,
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
