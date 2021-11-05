export const data = {
  key: "v-8daa1a0e",
  path: "/",
  title: "升高的博客",
  lang: "zh-CN",
  frontmatter: {
    lang: "zh-CN",
    title: "升高的博客",
    description: "测试博客",
  },
  excerpt: "",
  headers: [],
  filePathRelative: "readme.md",
  git: {
    updatedTime: null,
    contributors: [],
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
