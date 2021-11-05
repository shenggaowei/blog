export const data = {
  key: "v-76f4102d",
  path: "/web/two_column_layout.html",
  title: "两栏布局",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "实现方式",
      slug: "实现方式",
      children: [],
    },
    {
      level: 2,
      title: "代码实现",
      slug: "代码实现",
      children: [],
    },
  ],
  filePathRelative: "web/two_column_layout.md",
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
