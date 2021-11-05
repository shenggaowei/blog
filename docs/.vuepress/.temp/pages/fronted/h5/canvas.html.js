export const data = {
  key: "v-6b194242",
  path: "/fronted/h5/canvas.html",
  title: "canvas 画布",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "1 准备工作",
      slug: "_1-准备工作",
      children: [],
    },
    {
      level: 2,
      title: "2 画一条线段",
      slug: "_2-画一条线段",
      children: [
        {
          level: 3,
          title: "2.1 设置画布的大小",
          slug: "_2-1-设置画布的大小",
          children: [],
        },
        {
          level: 3,
          title: "2.2 设置绘制的起始和结束",
          slug: "_2-2-设置绘制的起始和结束",
          children: [],
        },
        {
          level: 3,
          title: "3 线条属性",
          slug: "_3-线条属性",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "fronted/h5/canvas.md",
  git: {
    updatedTime: 1627145681000,
    contributors: [
      {
        name: "weishenggao",
        email: "",
        commits: 3,
      },
      {
        name: "weishenggao",
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
