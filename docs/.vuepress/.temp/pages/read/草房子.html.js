export const data = {
  key: "v-c2cb0606",
  path: "/read/%E8%8D%89%E6%88%BF%E5%AD%90.html",
  title: "《草房子》",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "笔记",
      slug: "笔记",
      children: [
        {
          level: 3,
          title: "红门",
          slug: "红门",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "read/草房子.md",
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
