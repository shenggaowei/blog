const plugins = [
  [
    "@vuepress/plugin-search",
    {
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },
  ],
];

export default plugins;
