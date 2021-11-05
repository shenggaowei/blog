export const data = {
  key: "v-d15bb12a",
  path: "/web/cache.html",
  title: "前端本地缓存概况之浏览器缓存策略",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "引子",
      slug: "引子",
      children: [],
    },
    {
      level: 2,
      title: "前言",
      slug: "前言",
      children: [],
    },
    {
      level: 2,
      title: "缓存分类",
      slug: "缓存分类",
      children: [
        {
          level: 3,
          title: "1、强缓存",
          slug: "_1、强缓存",
          children: [],
        },
        {
          level: 3,
          title: "2、协商缓存(对比缓存)",
          slug: "_2、协商缓存-对比缓存",
          children: [],
        },
        {
          level: 3,
          title: "测试代码",
          slug: "测试代码",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "web/cache.md",
  git: {
    updatedTime: 1627145681000,
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
