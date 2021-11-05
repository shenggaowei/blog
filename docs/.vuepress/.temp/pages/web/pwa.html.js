export const data = {
  key: "v-37f4489a",
  path: "/web/pwa.html",
  title: "前端本地缓存之PWA",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "PWA简介",
      slug: "pwa简介",
      children: [],
    },
    {
      level: 2,
      title: "Service Worker",
      slug: "service-worker",
      children: [
        {
          level: 3,
          title: "使用方法",
          slug: "使用方法",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "技术实现",
      slug: "技术实现",
      children: [],
    },
    {
      level: 2,
      title: "HTTP缓存与Service Worker缓存",
      slug: "http缓存与service-worker缓存",
      children: [],
    },
  ],
  filePathRelative: "web/pwa.md",
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
