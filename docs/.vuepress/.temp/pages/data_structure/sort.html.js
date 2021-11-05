export const data = {
  key: "v-6885f843",
  path: "/data_structure/sort.html",
  title: "排序算法",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "1. 选择排序",
      slug: "_1-选择排序",
      children: [],
    },
    {
      level: 2,
      title: "2. 冒泡排序",
      slug: "_2-冒泡排序",
      children: [],
    },
  ],
  filePathRelative: "data_structure/sort.md",
  git: {
    updatedTime: 1627211830000,
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
