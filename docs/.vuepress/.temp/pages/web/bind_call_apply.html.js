export const data = {
  key: "v-07ccbb04",
  path: "/web/bind_call_apply.html",
  title: "实现 bind、call和apply",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "一 call实现",
      slug: "一-call实现",
      children: [],
    },
    {
      level: 2,
      title: "二 apply实现",
      slug: "二-apply实现",
      children: [
        {
          level: 3,
          title: "1. 方法一 借助call",
          slug: "_1-方法一-借助call",
          children: [],
        },
        {
          level: 3,
          title: "2. 方法二 原生实现",
          slug: "_2-方法二-原生实现",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "bind函数实现",
      slug: "bind函数实现",
      children: [
        {
          level: 3,
          title: "1. 方法一 借助call",
          slug: "_1-方法一-借助call-1",
          children: [],
        },
        {
          level: 3,
          title: "2. 方法二 借助apply",
          slug: "_2-方法二-借助apply",
          children: [],
        },
        {
          level: 3,
          title: "3. 方法三 自定义实现",
          slug: "_3-方法三-自定义实现",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "web/bind_call_apply.md",
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
