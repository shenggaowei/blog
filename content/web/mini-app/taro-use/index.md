---
title:  Taro
date: 2022-07-21
description:  Taro
---


> 👽 Taro['tɑ:roʊ]，泰罗·奥特曼，宇宙警备队总教官，实力最强的奥特曼。

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5/react-native 等应用。

## 一 Taro 优势

1. 用 `react` 渲染视图层, 目前支持到 17 版本
2. 可以用 ts,项目更加工程化,可扩展配置
3. 可以使用 `sass` 或者 `less` 等前置处理器
4. 有相关配套的 ui 组件库 `taro-ui`
5. 常用的库都可在 taro 项目中进行使用,比如 classnames, aHook,lodash, dayjs,redux, react-redux,redux-saga,qs。
6. 京东大厂开发维护，整体迭代更新稳定
7. 跨端解决方案

## 二 创建运行项目

```shell
# 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# npm info 查看版本信息
npm info @tarojs/cli

# 初始化项目
taro init myApp

cd myApp

yarn

yarn run dev:weapp

# 发布前打包
yarn run build:weapp
```

## 三 目录结构

### 微信小程序和 taro 目录结构对比

<img src="./mini-programmer.jpg" alt="微信目录" style="zoom:50%; margin-right: 80px" /><img src="./taro_dir.jpg" alt="taro目录" style="zoom:50%; " />

```tree
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.js index 页面配置
|   |
|   ├── app.js                  项目入口文件
|   ├── app.css                 项目总通用样式
|   └── app.config.js           项目入口配置
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             字节跳动小程序项目配置 project.config.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.config.json
|
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json
```

## 四 工程配置

```ts
const config = {
  projectName: "mini-programmer",
  date: "2020-12-3",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: "src",
  outputRoot: `dist`,
  babel: {
    sourceMap: true,
    presets: [
      [
        "env",
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      "transform-decorators-legacy",
      "transform-class-properties",
      "transform-object-rest-spread",
      [
        "transform-runtime",
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: "babel-runtime",
        },
      ],
    ],
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    esnextModules: ["taro-ui"],
  },
  alias: {
    "@/services": path.resolve(__dirname, "..", "src/services"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/redux": path.resolve(__dirname, "..", "src/redux"),
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/common": path.resolve(__dirname, "..", "src/common"),
  },
};
```

## 五 生命周期

### 1 微信小程序生命周期

App 生命周期

1. onLaunch (小程序初始化完成时触发，`全局只触发一次`)
2. onShow (进入前台显示时触发)

3. onHide (进入后台时触发)

Pages 生命周期

1. onLoad (页面加载时触发)

   1. 可获取从上级页面所获取的 query 参数

2. onShow (进入前台触发)

3. onReady (页面初次渲染完成，可以与视图进行交互)

   1. 页面首次加载可以获取元素尺寸

4. onHide (进入后台时触发)

5. onUnLoad (页面卸载时触发)

### 2 Taro 对生命周期的封装

| 微信小程序 |                                     Taro                                     |
| ---------- | :--------------------------------------------------------------------------: |
| onLaunch   |                                   onLaunch                                   |
| onLoad     |                                    onLoad                                    |
| onReady    |                       onReady()<br>useReady(() => {})                        |
| onShow     |                   componentDidShow()<br>useDidShow(()=>{})                   |
| onHide     |                   componentDidHide()<br>useDidHide(()=>{})                   |
|            | componentDidMount<br>componentDidUpdate<br>componentWillUnMount<br>useEffect |

### 3 微信原生小程序的支持度

1. 组件支持
   1. Taro 以微信小程序组件库为标准，结合 jsx 语法规范，定制了一套自己的组件库规范。基于以上原则，在小程序端，可以使用所有的小程序原生组件。
2. api
   1. wx.method => Taro.method。如果 taro.method 调用不兼容，先暂时调用 wx.method。
   2. 部分异步 api 调用可使用 promise
3. 插件支持
   1. 官网目前支持小程序插件。暂未实践。

```tsx
import Taro from "@tarojs/taro";

Taro.request(url).then(function (res) {
  console.log(res);
});
```

## 六 具体开发

### 页面跳转以及传参

Taro 遵循微信小程序的路由规范, 只需要修改全局配置的 pages 属性，配置为 Taro 应用中每个页面的路径即可

```javascript
wx.navigateTo();

Taro.navigateTo();
```

### 开发问题

#### 1 dom 节点获取的时期

节点相关操作在 onReady 生命周期中进行

> `componentDidMount` 触发时机是 react 将页面组件生成完成后触发，此时组件并没有展示在 ui 中。然后 react 将组件交给 Taro 进行处理，生成小程序的页面。因此在 componentDidMount 中有时会无法获取到元素节点属性。保险起见，为准确获取到生成节点的信息，节点相关操作放在 `onReady` 中进行

#### 2 使用 taroUi 的样式问题

taroUi 当前版本默认只支持 750 设计稿，如果项目按照 375 设计稿来做，ui 整体元素偏小

#### 3 版本升级问题

taro cli 和 taro 相关依赖库的版本必须保持一致，现均为 3.3.0

## 性能优化

## 原理解析
