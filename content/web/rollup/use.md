---
title:  rollup 基础使用
date: 2022-07-21
description:  rollup
---


Rollup 是一个模块打包器，它能将代码片段打包成复杂的库或者应用。使用 esm 的方式去引用 javascript 代码，只把库中用到的函数打包进去，不携带其他未使用的代码，也就是 tree shaking。

## 和 webpack 的比较

Webpack 作为主流打包工具，通过配置 loader 和 plugin 可以解决各种问题，开发大型项目非常高效。

如果开发 js 库，只是把 esm 代码转换成不同环境的 js，例如支持 cjs,umd,amd 等，那么 rollup 完全可以做到。相比于 webpack， rollup 的配置简单，仅仅是一款 esm 打包器，没有其他额外功能。在开发 js 工具库的时候可以用 rollup。主流的库像 redux、react 等等都利用 roolup 进行构建打包。

## 使用

1 全局安装

```shell
yarn add rollup -g
```

2 项目内安装

```shell
yarn add rollup -D
```

3 cli 配置

```shell
# package.json
{
 "scripts": {
 		"build": "rollup -c"
 }
}
```

4 rollup.config.js

```js
export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
};
```

## 插件配置

src/index.js 代码如下，**引入一个 json 文件**,返回一个简单的方法

```js
import { version } from "./package.json";

function putName(name) {
  console.log(version);
  return true;
}
export default putName;
```

执行 npm run build 命令，会提示构建失败![image-20211205223857189](./assets/json_error.png)

不同于 webpack，可以直接加载 js 和 json 文件，默认的 rollup 配置只能加载 esm 文件。如果需要编译 json，需要安装插件。**在 rollup 中，功能的扩展都是通过插件来进行完成的。**[rollup 插件列表](https://github.com/rollup/plugins)

安装 json 解析插件。

```shell
yarn add @rollup/plugin-json -D
```

安装完成后，添加配置

```js
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
  },
  plugins: [json()],
};
```

执行 build， 通过。

```js
function o(o) {
  return console.log("1.0.0"), !0;
}
export { o as default };
```

编译出来的代码，相比较 webpack 非常的简洁。同时 json 中的 version 在编译时，被读取并打包，其他属性则被 tree shaking 掉。

---

js 库在开发阶段建议使用 ts, 于是便需要引入 typescript 插件。

```shell
yarn add @rollup/plugin-typescript -D

## 需要同时安装的 ts 相关库
yarn add tslib -D
yarn add typescript -D
```

修改入口文件后缀为 index.ts, 并同时修改配置文件。添加相应的 tsconfig.json 文件。

```js
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
  },
  plugins: [
    json(),
    typescript({ tsconfig: "./tsconfig.json" }), // ts 配置路径
  ],
};
```

执行 build, 通过。因为开发的是 js 库，可以同时在 tsconfig.json 中配置打包生成 types 定义文件。

---

安装使用 lodash 库

```shell
yarn add lodash
```

在文件中引入，执行 build，报错。

![image-20211205230444541](./assets/package_error.png)

由于 Rollup 默认只加载本地的 esm 模块，不支持加载第三方库。可通过安装插件进行解决

```shell
yarn add @rollup/plugin-node-resolve
```

修改配置文件

```js
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
  },
  plugins: [json(), resolve(), typescript({ tsconfig: "./tsconfig.json" })],
};
```

执行 build，依旧报错。

原因是因为 lodash 是 cjs 模块，而 rollup 默认只能加载 esm 模块。解决办法有两个。

1 安装 esm 的库。用 lodash-es 替换 lodash

```shell
yarn add lodash-es
```

更新文件导入，build ，通过。

2 安装插件，让 rollup 支持加载 cjs 模块。

```shell
yarn add @rollup/plugin-commonjs -D
```

修改配置文件

```js
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
  },
  plugins: [
    commonjs({ transformMixedEsModules: true }), //  允许模块以 esm 和 cjs 双模式进行混用
    resolve(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
```

需要注意的是, commonjs 插件需要最先执行，防止其他插件对第三方库的内容进行修改。导致模块 cjs 转 esm 失败。

执行 build，通过。

---

Build 通过后，目前可以用 ts 写库了，写完之后，应该对文件进行压缩混淆处理。rollup 默认不会进行压缩，还是需要通过插件来进行处理

```shell
yarn add rollup-plugin-terser -D
```

修改配置文件

```js
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
  },
  plugins: [
    commonjs({ transformMixedEsModules: true }),
    resolve(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
};
```

执行 build，通过，同时代码被压缩。

![image-20211205232659050](./assets/terser.png)
