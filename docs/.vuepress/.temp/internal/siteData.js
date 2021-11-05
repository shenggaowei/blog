export const siteData = {
  base: "/",
  lang: "en-US",
  title: "升高的博客",
  description: "升高的博客",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://shenggao.oss-cn-beijing.aliyuncs.com/info/head.jpg",
      },
    ],
  ],
  locales: {},
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  });
}
