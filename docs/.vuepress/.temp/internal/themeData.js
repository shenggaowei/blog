export const themeData = {
  logo: "https://shenggao.oss-cn-beijing.aliyuncs.com/info/head.jpg",
  repo: "https://github.com/weishisi/blog/",
  navbar: [
    {
      text: "我的技术栈",
      children: [
        {
          text: "web小记",
          link: "/web/",
        },
        {
          text: "算法小记",
          link: "/data_structure/",
        },
      ],
    },
    {
      text: "个人记录",
      children: [
        {
          link: "/read/",
          text: "读书笔记",
        },
      ],
    },
  ],
  darkMode: false,
  locales: {
    "/": {
      selectLanguageName: "English",
    },
  },
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",
  sidebar: "auto",
  sidebarDepth: 2,
  editLink: true,
  editLinkText: "Edit this page",
  lastUpdated: true,
  lastUpdatedText: "Last Updated",
  contributors: true,
  contributorsText: "Contributors",
  notFound: [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links.",
  ],
  backToHome: "Take me home",
  openInNewWindow: "open in new window",
  toggleDarkMode: "toggle dark mode",
  toggleSidebar: "toggle sidebar",
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  });
}
