export const data = {
  key: "v-61b59f0c",
  path: "/backend/mysql/basic.html",
  title: "MySql 安装",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "mac unix 环境",
      slug: "mac-unix-环境",
      children: [
        {
          level: 3,
          title: "推荐 brew",
          slug: "推荐-brew",
          children: [],
        },
      ],
    },
  ],
  filePathRelative: "backend/mysql/basic.md",
  git: {
    updatedTime: 1633685930000,
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
