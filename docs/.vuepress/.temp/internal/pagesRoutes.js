import { Vuepress } from "@vuepress/client/lib/components/Vuepress";

const routeItems = [
  ["v-8daa1a0e", "/", "升高的日常博客", ["/index.html", "/README.md"]],
  [
    "v-70493630",
    "/data_structure/born_bull.html",
    "母牛生产",
    ["/data_structure/born_bull", "/data_structure/born_bull.md"],
  ],
  [
    "v-5ef01690",
    "/data_structure/",
    "算法相关",
    ["/data_structure/index.html", "/data_structure/readme.md"],
  ],
  [
    "v-6885f843",
    "/data_structure/sort.html",
    "排序算法",
    ["/data_structure/sort", "/data_structure/sort.md"],
  ],
  ["v-1538da00", "/read/", "读书笔记", ["/read/index.html", "/read/readme.md"]],
  [
    "v-0b822fe8",
    "/read/%E5%85%84%E5%BC%9F.html",
    "《兄弟》",
    [
      "/read/兄弟.html",
      "/read/%E5%85%84%E5%BC%9F",
      "/read/兄弟.md",
      "/read/%E5%85%84%E5%BC%9F.md",
    ],
  ],
  [
    "v-26ef707f",
    "/read/%E5%9C%A8%E7%BB%86%E9%9B%A8%E4%B8%AD%E5%91%90%E5%96%8A.html",
    "《在细雨中呐喊》",
    [
      "/read/在细雨中呐喊.html",
      "/read/%E5%9C%A8%E7%BB%86%E9%9B%A8%E4%B8%AD%E5%91%90%E5%96%8A",
      "/read/在细雨中呐喊.md",
      "/read/%E5%9C%A8%E7%BB%86%E9%9B%A8%E4%B8%AD%E5%91%90%E5%96%8A.md",
    ],
  ],
  [
    "v-6a038e50",
    "/read/%E6%96%87%E5%8C%96%E8%8B%A6%E6%97%85.html",
    "《文化苦旅》",
    [
      "/read/文化苦旅.html",
      "/read/%E6%96%87%E5%8C%96%E8%8B%A6%E6%97%85",
      "/read/文化苦旅.md",
      "/read/%E6%96%87%E5%8C%96%E8%8B%A6%E6%97%85.md",
    ],
  ],
  [
    "v-45b0115c",
    "/read/%E6%A8%A1%E7%89%88.html",
    "",
    [
      "/read/模版.html",
      "/read/%E6%A8%A1%E7%89%88",
      "/read/模版.md",
      "/read/%E6%A8%A1%E7%89%88.md",
    ],
  ],
  [
    "v-67fee85d",
    "/read/%E6%B2%89%E9%BB%98%E7%9A%84%E5%A4%A7%E5%A4%9A%E6%95%B0.html",
    "《沉默的大多数》",
    [
      "/read/沉默的大多数.html",
      "/read/%E6%B2%89%E9%BB%98%E7%9A%84%E5%A4%A7%E5%A4%9A%E6%95%B0",
      "/read/沉默的大多数.md",
      "/read/%E6%B2%89%E9%BB%98%E7%9A%84%E5%A4%A7%E5%A4%9A%E6%95%B0.md",
    ],
  ],
  [
    "v-917ba40e",
    "/read/%E6%B4%BB%E7%9D%80.html",
    "《活着》",
    [
      "/read/活着.html",
      "/read/%E6%B4%BB%E7%9D%80",
      "/read/活着.md",
      "/read/%E6%B4%BB%E7%9D%80.md",
    ],
  ],
  [
    "v-c2cb0606",
    "/read/%E8%8D%89%E6%88%BF%E5%AD%90.html",
    "《草房子》",
    [
      "/read/草房子.html",
      "/read/%E8%8D%89%E6%88%BF%E5%AD%90",
      "/read/草房子.md",
      "/read/%E8%8D%89%E6%88%BF%E5%AD%90.md",
    ],
  ],
  [
    "v-68d7c1ec",
    "/tools/vim.html",
    "Vim 常用操作学习",
    ["/tools/vim", "/tools/vim.md"],
  ],
  [
    "v-61b59f0c",
    "/backend/mysql/basic.html",
    "MySql 安装",
    ["/backend/mysql/basic", "/backend/mysql/basic.md"],
  ],
  ["v-3706649a", "/404.html", "", ["/404"]],
];

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    },
  ]
);
