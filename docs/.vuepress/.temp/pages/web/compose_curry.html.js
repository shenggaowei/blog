export const data = {
  key: "v-a34b9b5a",
  path: "/web/compose_curry.html",
  title: "compose 和 curry",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "函数合并 compose",
      slug: "函数合并-compose",
      children: [],
    },
    {
      level: 2,
      title: "不可或缺的 curry",
      slug: "不可或缺的-curry",
      children: [],
    },
  ],
  filePathRelative: "web/compose_curry.md",
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
