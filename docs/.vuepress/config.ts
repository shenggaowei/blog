import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import path from "path";
import { repo } from "./utils/constant";
import navbar from "./utils/navbar";
import plugins from "./utils/plugins";

const logoPath = "/assets/head.jpg";

export default defineUserConfig<DefaultThemeOptions>({
  head: [["link", { rel: "icon", href: logoPath }]],
  lang: "zh-CN",
  title: "大芒果",
  description: "keep running",
  plugins,
  themeConfig: {
    logo: logoPath,
    repo,
    navbar,
    contributors: false,
    sidebar: false,
  },
  templateSSR: path.resolve(__dirname, "./public/ssr.html"),
  templateDev: path.resolve(__dirname, "./public/dev.html"),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
});
