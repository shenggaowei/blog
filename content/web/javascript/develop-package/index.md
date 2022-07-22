---
title:  npm 组件库的开发思路
date: 2022-07-21
description:  npm 组件库的开发思路
---


组件库在前端开发中占据着重要的地位。有了组件库，可以避免在开发过程中复制粘贴代码和重复造轮子。同时在后期维护过程中，也可提高开发效率。

## 组件库的构成

通过查看 ant-design, react-components 等热门组件库的开发，构建以及发布流程，结合自己看的一些文章，对组件库的开发有了一些新的认知。

### 设计思路

1. 组件状态受控于 props
2. 组件 children 支持自定义 dom 结构
3. 组件内部的 dom 结构不能写死。？

### 代码规范

1. eslint
2. stylelint
3. prettier
4. commit lint

### 开发阶段

1. 构建工具的选择。

   - 可自定义：webpack、rollup。
   - 开源库：father-build、vite、umijs

2. 打包阶段
   - 输出 cjs/esm/umd 产物
   - 支持按需加载

### 组件测试

纯 js 库可使用 jest 进行测试。react 组件库可使用 @testing-library/react 进行测试。

### 组件维护

1. 使用 git flow 开发规范
2. 规范 commit 历史记录
3. 发布版本生成 changeLog
4. 详细的文档。必要时中英双份。
   1. dumi
   2. storybook
