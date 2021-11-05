export const data = {
  key: "v-917ba40e",
  path: "/read/%E6%B4%BB%E7%9D%80.html",
  title: "《活着》",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "感想",
      slug: "感想",
      children: [],
    },
    {
      level: 2,
      title: "笔记",
      slug: "笔记",
      children: [],
    },
  ],
  filePathRelative: "read/活着.md",
  git: {
    updatedTime: 1627310080000,
    contributors: [
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
