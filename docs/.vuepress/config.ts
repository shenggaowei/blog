import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import path from "path";
import { logo, repo } from "./utils/constant";
import navbar from "./utils/navbar";
import plugins from "./utils/plugins";

export default defineUserConfig<DefaultThemeOptions>({
  head: [["link", { rel: "icon", href: logo }]],
  lang: "zh-CN",
  title: "升高的博客",
  description: "keep running",
  plugins,
  themeConfig: {
    logo,
    repo,
    navbar,
    contributors: false,
  },
  templateSSR: path.resolve(__dirname, "./public/ssr.html"),
  templateDev: path.resolve(__dirname, "./public/dev.html"),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
});
