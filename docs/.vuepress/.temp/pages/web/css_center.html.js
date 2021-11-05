export const data = {
  key: "v-256b8514",
  path: "/web/css_center.html",
  title: "图片在盒子内上下左右居中对齐",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 3,
      title: "1. vertical-align middle处理居中",
      slug: "_1-vertical-align-middle处理居中",
      children: [],
    },
    {
      level: 3,
      title: "2. flex",
      slug: "_2-flex",
      children: [],
    },
    {
      level: 3,
      title: "3. position + transform",
      slug: "_3-position-transform",
      children: [],
    },
    {
      level: 3,
      title: "4. margin + transform",
      slug: "_4-margin-transform",
      children: [],
    },
  ],
  filePathRelative: "web/css_center.md",
  git: {
    updatedTime: 1627549761000,
    contributors: [
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 1,
      },
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
