export const data = {
  key: "v-3d3a37a2",
  path: "/web/array_de_duplication.html",
  title: "数组去重",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 3,
      title: "一 双层循环匹配",
      slug: "一-双层循环匹配",
      children: [],
    },
    {
      level: 3,
      title: "二 新建数组，保持数组数据的唯一性",
      slug: "二-新建数组-保持数组数据的唯一性",
      children: [],
    },
    {
      level: 3,
      title: "三 利用下标进行判断",
      slug: "三-利用下标进行判断",
      children: [],
    },
    {
      level: 3,
      title: "四 es6 新增 api Set",
      slug: "四-es6-新增-api-set",
      children: [],
    },
  ],
  filePathRelative: "web/array_de_duplication.md",
  git: {
    updatedTime: 1633685930000,
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
