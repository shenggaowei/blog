---
title:  webpack 配置优化方案学习总结
date: 2022-07-21
description:  webpack 配置优化方案学习总结
---


## 拆分配置和 merge

- webpack-merge 合并公共配置和各个环境的配置
- webpack-dev-sever 启动本地服务
  - 本地开发 proxy，设置代理
- babel-loader 处理 es6
- 处理样式
  - 放到 common 里面去处理
  - loader 执行顺序从后往前
    - [style-loader,css-loader,less-loader]
    - postcss-loader css 后置处理器，css 兼容性
- 处理图片
  - dev 使用 file-loader，直接引用图片地址
  - prod 使用 url-loader，小文件（<5kb）使用 base64 格式，减少 http 请求，否则依然然采用 file-loader 的形式。将图片打包放到统一的文件夹中。
- 模块化
  - webpack 本身支持模块化。

## webpack 高级配置

- 多入口
  - entry 入口修改。
  - output 出口修改。
    - filename: '[name].[contentHash:8].js'
  - plugins 修改
    - HtmlWebpackPlugin
      - 每一个入口都要创建插件实例
      - filename
      - chunks
- 构建之前清空 dist 目录
  - cleanWebpackPlugin
- 抽离压缩 css 文件
  - 抽离 css 文件（生产环境抽离，dev 环境可不管）
    - mini-css-extract-plugin
      - loader 配置替换 style-loader
      - plugins 中配置 css 文件生成的位置
  - 压缩 css 文件
    - optimization.minimizer
      - terser-js-plugin
      - optimize-css-assers-plugin
- 抽离公共代码
  - 第三方库（lodash)、公共模块单独打包。打包后的 contentHash 不变，使用浏览器缓存加速加载。
    - optimization
      - splitChunks
        - chunks: 'all'(异步同步引入)
        - cacheGroups
          - vendor(第三方模块)
            - priority 权重
            - text: /node_modules/
            - minSize 大小限制 3kb
            - minChunks 最少复用过几次
          - common(公共模块)
            - minChunks: 2
    - htmlWebpackPlugin 引入相应的 chunks 名字
- 懒加载
  - import() 方式进行引用，webpack 默认支持。类似定义一个 chunk。
- 处理 jsx
  - 通过 babel 处理。
- 处理 vue
  - 通过 vue-loader 处理

## webpack 性能优化

- module chunk bundle 的区别
  - module 各个源码文件， webpack 中一切皆模块
  - chunk 多模块合并成的
    - entry
    - import()
    - splitChunks
  - bundle 最终的输出文件
- 优化打包构建速度，提高开发体验和效率
  - 优化 babel-loader
    - 开启缓存 loader:['babel-loader?cacheDirectory']
    - include / exlude 明确选择范围
  - IgnorePlugin 避免引入无用模块
    - plugin 启用 webpack.IgnorePlugin 目录
    - `import 'moment/locale/zh-cn'` 单独引入 moment 中文语言包
  - noParse 避免重复打包
    - `noParse: [/react\.min\.js$/]`
    - 和 ignorePlugin 区别
      - ignorePlugin 直接不引入，代码中没有
      - noParse 引入，但不打包
  - happyPack 多进程打包
    - 背景以及原因
      - js 单线程，开启多进程打包
      - 提高构建速度（特别是多核 cpu）
    - 安装 happyPack
      - rules 中 js 使用 happer 进行打包
      - plugins 创建 happyPack 实例， 确定 id 和使用的 loader
    - 可以放到生产环境或者开发环境
  - ParallelUglifyPlugin 多进程压缩 js
    - 背景
      - webpack 内置 uglify 工具压缩 js
      - js 单线程，开启多线程压缩更快
      - 和 happyPack 同理
    - 安装插件
      - plugins 创建 ParallelUglifyPlugin 实例
    - 安装在**生产环境**中使用， 开发环境没必要
    - 关于开启多进程
      - 项目较大，打包较慢，开启多进程能提高速度
      - 项目较小，打包很快，开启多进程会降低速度（进程开销）
      - 按需使用
  - 自动刷新
    - 缺点
      - 整个网页全部刷新，速度较慢
      - 整个网页全部刷新，状态会丢失
    - watch: true
  - 热更新
    - webpack-dev-server
    - 特点
      - 新代码生效，网页不刷新，状态不丢失
    - 使用
      - plugins 创建 HotModuleReplacementPlugin 实例
      - devServer
        - hot : true
  - DllPlugin 动态连接库插件（**不能用于生产环境**）
    - 背景
      - 前端框架如 vue react,体积大，构建满
      - 较稳定，不常升级版本
      - 同一个版本只构建一次即可，不用每次都重新构建
    - 使用
      - webpack 已内置 DllPlugin 支持
      - DllPlugin 打出 dll 文件
        - 内容
        - 索引 mainifest.json
        - 在 html 中引入 dll 地址
      - DllReferencePlugin 使用 dll 文件
        - plugin 创建实例引用 manifest 文件
        - module
          - rule js 编译忽略 node_modules 代码
    - 特点
      - 配置完成后对逻辑代码没有修改
      - 满足开发环境对于速度和体验的优化
- 优化产出代码，提高产品性能
  - 特点
    - 体积更小
    - 合理分包，不重复加载
    - 速度更快、内存使用更少
  - 方式
    - 小图片 base64 编码
    - bundle 加 hash。
      - 有更新导致浏览器缓存失效，新资源立即生效
      - 无更新则走浏览器缓存，无变化
    - 懒加载
      - import()
    - 提取公共代码
      - splitChunks
        - 单独打包第三方模块和公共的模块
    - IgnorePlugin
    - 使用 CDN 加速
      - 使用方式
        - output
          - publicPath
            - 修改所有静态文件的 url 前缀。可以引用 cdn 地址
        - 将 dist 目录下的打包结果上传到服务器 cdn 上
      - 图片 css js 都可放到 cdn 上
    - 使用 production
      - 特点
        - 自动开启代码压缩（webpack 4.x 后支持）
        - vue React 等会自动删除掉调试代码（如开发环境的 warn）
        - 启动 tree-shaking
          - 移除掉未引用的模块，体积更小，加载更快
          - 必须用 ES6 Module 才能用 tree-shaking 生效。同理用 commonjs 就不行。ESM 支持静态引入，静态分析。CJS 只能在执行时进行分析。
        - ES6 Module 和 Commonjs 区别
          - ESM 静态引入，编译时引入
          - CJS 动态引入，执行时引入
          - 静态和动态的区别
            - import 引入必须放到最上面，不支持放到条件判断语句里面，编译时报错，只能静态引入
            - CJS 可以动态引入，执行时引入
    - Scope Hoisting
      - 特点
        - 代码体积更小
        - 创建函数作用域更少
        - 代码可读性更好
      - 使用
        - 引入 ModuleConcatenationPlugin
        - resolve
          - mainFields
            - `['jsnext:main', 'browser', 'main']`
            - `jsnext:main` 指向 ES6 模块化语法的文件
        - plugins
          - 创建 ModuleConcatenationPlugin 实例

## babel

### 环境搭建 & 基本配置

- 环境搭建
- .babelrc 配置
  - presets 常用 plugins 的集合
  - plugins 解析语法的插件
- presets 和 plugins

### babel-polyfill

- 定义
  - 垫片、补丁。
- core-js 和 regenerator
  - core-js 不支持 genreator 语法
- babel 7.4 之后弃用 babel-polyfill，推荐直接使用 core-js 和 regenerator
- 特点
  - 只关心语法，不关心 api。符合 ES5 语法规范
  - 不处理模块化（webpack）
- 问题
  - 污染全局环境 `window.Promise = function(){} Array.prototype.includes=`
    - 独立的 web 系统没有问题。如果做一个库例如 lodash 会有问题。
- 配置按需引入
  - .babelrc 中配置按需引入

### babel-runtime

- 安装
  - @babel/plugin-transform-runtime
  - @babel/runtime
- 特点
  - 重新定义方法，不会污染环境
- 注意点
  - 如果开发一个库，必须使用 babel-runtime
