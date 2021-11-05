export const data = {
  key: "v-744e6dd4",
  path: "/web/",
  title: "",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "前端趣记",
      slug: "前端趣记",
      children: [],
    },
    {
      level: 2,
      title: "微信小程序",
      slug: "微信小程序",
      children: [],
    },
  ],
  filePathRelative: "web/readme.md",
  git: {
    updatedTime: 1630042778000,
    contributors: [
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 11,
      },
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
