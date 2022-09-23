---
title: koa2使用
date: 2022-06-21
description: koa2
---

# koa 

## 项目搭建

- 使用 [koa](https://koajs.com/) 框架
- 使用 `ts`
    -  `tsconfig.json` 文件的配置
    - 生成 `map` 文件，可 `debug` 到 `ts` 源码
    - 配置 `alias` 目录映射。使用 `@` 绝对路径替换 `src` 文件引用相对路径
        - `ts compiler` 仅支持将 `ts` 编译为 `js`，不编译 `js` 语法。配置 `alias` 映射后，虽然在 `vscode` 中支持跳转并且不飘红报错。但是编译不通过，搜到的解决方法如下：
            1. 使用 [tsconfig-paths](https://github.com/dividab/tsconfig-paths) 编译
            2. 使用 `webpack` 或者 `rollup` 等构建工具
- 使用 `esm` 编写
- 配置 [nodemon](https://github.com/remy/nodemon) 实时编译(代码改动后，不用手动重新起 server)
- 使用 [routing controller](https://github.com/typestack/routing-controllers/blob/develop/docs/lang/chinese/README.md)  `decorates` 语法配置 router
    - 可配置 `body-parser` 处理 `post` 请求体
- 使用 [typedi](https://docs.typestack.community/typedi/v/develop/02-basic-usage-guide/05-inject-decorator) 处理依赖注入，防止类实例的频繁创建和循环引用
- 使用 `mySql` 数据库，安装在阿里云服务器上
- 使用 [sequelize](https://github.com/sequelize/sequelize) 作为 `orm` 层操作数据库
- 中间件
    - 错误处理
    - 返回体处理
    - 登录态的校验
- 缓存
    - redis。todo
- 接入阿里云短信验证

## 部署配置
- pm2 后台启动进程
- nginx 代理服务端口
- https 证书配置
    - 阿里云注册免费一年的 ca 证书
- 数据脱敏
    - 将关键数据存放到了服务器上。todo
- 接入 circle-ci。todo
- ssh 登陆远程服务器。todo
- 使用 docker 和 docker-compose 进行容器化部署。todo