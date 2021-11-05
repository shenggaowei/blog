export const data = {
  key: "v-d8f897aa",
  path: "/web/publish_npm_package.html",
  title: "如何发布一个 npm 包",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "一 背景",
      slug: "一-背景",
      children: [],
    },
    {
      level: 2,
      title: "二 流程",
      slug: "二-流程",
      children: [],
    },
    {
      level: 2,
      title: "三 开发过程",
      slug: "三-开发过程",
      children: [
        {
          level: 3,
          title: "1 注册npm账号。",
          slug: "_1-注册npm账号。",
          children: [],
        },
        {
          level: 3,
          title: "2 在本地登录npm账号。",
          slug: "_2-在本地登录npm账号。",
          children: [],
        },
        {
          level: 3,
          title: "3 编写npm包",
          slug: "_3-编写npm包",
          children: [],
        },
        {
          level: 3,
          title: "4 发布包",
          slug: "_4-发布包",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "四 遇到的问题",
      slug: "四-遇到的问题",
      children: [
        {
          level: 3,
          title:
            "4.1 在服务端渲染(ssr)的项目中引入该包时，会报错误 ”window is not defined“",
          slug: "_4-1-在服务端渲染-ssr-的项目中引入该包时-会报错误-window-is-not-defined",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "web/publish_npm_package.md",
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
