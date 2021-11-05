export const data = {
  key: "v-6a038e50",
  path: "/read/%E6%96%87%E5%8C%96%E8%8B%A6%E6%97%85.html",
  title: "《文化苦旅》",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "莫高窟",
      slug: "莫高窟",
      children: [],
    },
    {
      level: 2,
      title: "阳关雪",
      slug: "阳关雪",
      children: [],
    },
  ],
  filePathRelative: "read/文化苦旅.md",
  git: {
    updatedTime: 1627184930000,
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
