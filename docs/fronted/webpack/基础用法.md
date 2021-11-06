# webpack 入门基础

## [webpack 核心概念之 entry](https://webpack.docschina.org/concepts/entry-points/)

1. 单页和多页的配置语法
2. v4 以上不推荐单独将第三库代码打包为一个单独的 vendor
   - 利用**optimization.splitChunks** 选项，将 vendor 和 app(应用程序) 模块分开，并为其创建一个单独的文件。不要 为 vendor 或其他不是执行起点创建 entry

## [webpack 核心概念之 output](https://webpack.docschina.org/concepts/output/)

output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件

多页应用可利用占位符来打包所有的 chunk

## [webpack 核心概念之 loaders](https://webpack.docschina.org/concepts/loaders/#example)

webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。

1. loader 支持链式调用。从后向前执行调用。前面的 loader 将执行结果返回给后面的 loader
2. loader 可以是同步的，也可以是异步的。

## [webpack 核心概念之 plugins](https://webpack.docschina.org/concepts/plugins/)

插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

常用的 plugins

![plugins](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/11/plugins.jpeg)

## [webpack 核心概念之 mode](https://webpack.docschina.org/configuration/mode/#usage)

webpack 会开启相应模式的内置优化

如果没有设置，mode 默认为 production

## 解析 es6 和 react jsx

### es6

默认支持解析 js，但是解析 es6 需要编译器去兼容低版本的浏览器

```shell

# babel-loader 转码依赖的 babel-core 和 env
yarn add @babel/core @babel/preset-env babel-loader

# 公共方法避免重复引入辅助代码。引入 @babel/plugin-transform-runtime 并且使所有辅助代码从这里引用。@babel/plugin-transform-runtime 依赖于 @babel-runtime
yarn add @babel/plugin-transform-runtime @babel/runtime

```

### jsx

```shell

yarn add react react-dom

yarn add @babel/preset-react
```

```js
// .babelrc 文件

{
    "presets": [
        [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```

## 解析 css、less 和 sass

```shell

# sass 解析依赖于 node-sass 或者 dart-sass
# style-loader 用于将样式用 style 标签插入到 head 节点中
yarn add style-loader css-loader node-sass sass-loader

```

## 解析图片和字体

```shell
# file-loader 解析文件。
yarn add file-loader

# url-loader 可以将文件打包为 base-64 内联引入到文件中
yarn add url-loader
```

## webpack 中的文件监听

两种方式

1 --watch

```shell
"watch": "webpack --watch"
```

2 watch:true

```js
module.exports = {
  watch: true,
  watchOptions: {
    ignored: "/node_modules",
    // 监听到变化 300 ms 后再去执行
    aggregateTimeout: 300,
    // 1s 询问 1000 次指定的文件有没有变化
    poll: 1000,
  },
};
```

缺陷：每次需要手动刷新浏览器。

## webpack 中的热更新以及原理分析

### 实现方式

1. webpack-dev-server

2. webpack-dev-middleware

## 文件指纹策略：chunkHash、contentHash 和 hash

给构建后的文件创建 hash 值，可以起到版本管理的作用。未改变的文件使用浏览器缓存，优化体验。

使用：

hash: 每一次构建，只要项目文件有修改，整个项目构建的 hash 值就会更改
chunkHash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值
contenthash: 根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

```js
// js 添加 chunkhash
output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
}

// css 使用 MiniCssExtractPlugin 提取成单独的 css文件后，添加 contenthash
plugins: [new MiniCssExtractPlugin({
        filename: '[name]_[contenthash:8].css'
    })],

    // 图片则添加 hash(相对于自身的内容变化)
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name]_[hash:8].[ext]'
            }
        }, ],
    },
```

## html、css 和 javascript 代码压缩
