export const themeData = {
  logo: "https://shenggao.oss-cn-beijing.aliyuncs.com/info/head.jpg",
  displayAllHeaders: true,
  nav: [
    {
      text: "我的技术栈",
      items: [
        {
          text: "算法小记",
          link: "/data_structure/",
        },
      ],
    },
    {
      text: "个人记录",
      items: [
        {
          link: "/read/",
          text: "读书笔记",
        },
      ],
    },
  ],
  sidebar: false,
  sidebarDepth: 0,
  lastUpdated: true,
  smoothScroll: true,
  search: true,
  locales: {
    "/": {
      selectLanguageName: "English",
    },
  },
  navbar: [],
  darkMode: true,
  repo: null,
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",
  editLink: true,
  editLinkText: "Edit this page",
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
