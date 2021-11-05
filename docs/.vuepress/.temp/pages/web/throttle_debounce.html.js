export const data = {
  key: "v-5bcfeaa2",
  path: "/web/throttle_debounce.html",
  title: "",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "函数节流",
      slug: "函数节流",
      children: [],
    },
    {
      level: 2,
      title: "函数防抖",
      slug: "函数防抖",
      children: [],
    },
  ],
  filePathRelative: "web/throttle_debounce.md",
  git: {
    updatedTime: 1627025728000,
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
