export const data = {
  key: "v-048d9d14",
  path: "/fronted/css/%E5%8A%A8%E7%94%BB.html",
  title: "动画和过渡",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "动画",
      slug: "动画",
      children: [
        {
          level: 3,
          title: "@keyframes 规则",
          slug: "keyframes-规则",
          children: [],
        },
        {
          level: 3,
          title: "animation",
          slug: "animation",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "css 过渡",
      slug: "css-过渡",
      children: [
        {
          level: 3,
          title: "概念和用法",
          slug: "概念和用法",
          children: [],
        },
        {
          level: 3,
          title: "分开使用",
          slug: "分开使用",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "fronted/css/动画.md",
  git: {
    updatedTime: 1627145681000,
    contributors: [
      {
        name: "weishenggao",
        email: "",
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
