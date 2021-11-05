export const data = {
  key: "v-1b99d91d",
  path: "/web/typescript/every_day_types.html",
  title: "",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 3,
      title: "return type annotations",
      slug: "return-type-annotations",
      children: [],
    },
    {
      level: 3,
      title: "Type Assertions",
      slug: "type-assertions",
      children: [],
    },
  ],
  filePathRelative: "web/typescript/every_day_types.md",
  git: {
    updatedTime: 1632364631000,
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
