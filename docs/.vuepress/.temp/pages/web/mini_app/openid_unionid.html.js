export const data = {
  key: "v-632a5307",
  path: "/web/mini_app/openid_unionid.html",
  title: "微信小程序 openId 和 unionId 详解",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "一 官网解释",
      slug: "一-官网解释",
      children: [
        {
          level: 3,
          title: "1. OpenID",
          slug: "_1-openid",
          children: [],
        },
        {
          level: 3,
          title: "2. UnionID",
          slug: "_2-unionid",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "二 理解方式",
      slug: "二-理解方式",
      children: [
        {
          level: 3,
          title: "微信号",
          slug: "微信号",
          children: [],
        },
        {
          level: 3,
          title: "OpenID",
          slug: "openid",
          children: [],
        },
        {
          level: 3,
          title: "UnionID",
          slug: "unionid",
          children: [],
        },
        {
          level: 3,
          title: "总结",
          slug: "总结",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "web/mini_app/openid_unionid.md",
  git: {
    updatedTime: 1629784803000,
    contributors: [
      {
        name: "gaogao",
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
