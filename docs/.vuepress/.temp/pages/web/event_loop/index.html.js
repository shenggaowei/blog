export const data = {
  key: "v-e839245c",
  path: "/web/event_loop/",
  title: "事件循环",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "一、异步 & 同步",
      slug: "一、异步-同步",
      children: [
        {
          level: 3,
          title: "1、什么是同步？",
          slug: "_1、什么是同步",
          children: [],
        },
        {
          level: 3,
          title: "2、什么是异步？",
          slug: "_2、什么是异步",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "二、什么是执行栈(stack)、堆(heap)、事件队列(task queue)？",
      slug: "二、什么是执行栈-stack-、堆-heap-、事件队列-task-queue",
      children: [
        {
          level: 3,
          title: "1、执行栈",
          slug: "_1、执行栈",
          children: [],
        },
        {
          level: 3,
          title: "2、堆",
          slug: "_2、堆",
          children: [],
        },
        {
          level: 3,
          title: "3、事件队列和事件循环",
          slug: "_3、事件队列和事件循环",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "四、宏任务 & 微任务",
      slug: "四、宏任务-微任务",
      children: [
        {
          level: 3,
          title: "async & await",
          slug: "async-await",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "五、总结",
      slug: "五、总结",
      children: [],
    },
  ],
  filePathRelative: "web/event_loop/readme.md",
  git: {
    updatedTime: 1629273175000,
    contributors: [
      {
        name: "gaogao",
        email: "weishenggao@innobuddy.com",
        commits: 4,
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
