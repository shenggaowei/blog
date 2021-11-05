export const data = {
  key: "v-c33ddeba",
  path: "/web/typescript/interface_type.html",
  title: "Differences Between Type Aliases and interfaces",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "不同点",
      slug: "不同点",
      children: [
        {
          level: 3,
          title:
            "1 interface 只能定义结构类型，type 可以既可以定义结构类型，也可以定义基本类型。",
          slug: "_1-interface-只能定义结构类型-type-可以既可以定义结构类型-也可以定义基本类型。",
          children: [],
        },
        {
          level: 3,
          title: "2 interface 可以将多个同类型的声明进行合并。type 不可以。",
          slug: "_2-interface-可以将多个同类型的声明进行合并。type-不可以。",
          children: [],
        },
        {
          level: 3,
          title:
            "3 interface 可以被 class implements。换句话说， class 可以实现某一个接口",
          slug: "_3-interface-可以被-class-implements。换句话说-class-可以实现某一个接口",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "相同点",
      slug: "相同点",
      children: [
        {
          level: 3,
          title: "1 都可以定义一个对象或者函数。",
          slug: "_1-都可以定义一个对象或者函数。",
          children: [],
        },
        {
          level: 3,
          title: "2 都可以被扩展。",
          slug: "_2-都可以被扩展。",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "interface 和 type 究竟应该如何选择呢？",
      slug: "interface-和-type-究竟应该如何选择呢",
      children: [],
    },
  ],
  filePathRelative: "web/typescript/interface_type.md",
  git: {
    updatedTime: 1629361249000,
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
