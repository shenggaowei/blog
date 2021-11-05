import nav from "./utils/nav";
import { header } from "./utils/constant";
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "升高的博客",
  description: "升高的博客",
  head: [["link", { rel: "icon", href: header }]],

  themeConfig: {
    logo: header,
    displayAllHeaders: true,
    nav,
    sidebar: false,
    sidebarDepth: 0,
    lastUpdated: true,
    smoothScroll: true,
    search: true,
  },
});
