export const data = {
  key: "v-2e869976",
  path: "/fronted/js/xss%E5%92%8Ccsrf%E6%94%BB%E5%87%BB.html",
  title: "CSRF 和 XSS 攻击",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "CSRF",
      slug: "csrf",
      children: [],
    },
  ],
  filePathRelative: "fronted/js/xss和csrf攻击.md",
  git: {
    updatedTime: 1611477099000,
    contributors: [
      {
        name: "weishenggao",
        email: "",
        commits: 1,
      },
      {
        name: "weishenggao",
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
