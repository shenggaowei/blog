import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { logo, repo } from "./utils/constant";
import navbar from "./utils/navbar";
import plugins from "./utils/plugins";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "升高的博客",
  description: "keep running",
  plugins,
  themeConfig: {
    logo,
    repo,
    navbar,
    darkMode: false,
  },
});
