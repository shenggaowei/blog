# Taro 使用总结

## 使用 Taro 的原因

1. 用 react 语法渲染视图层。技术栈统一。前端上手快。
2. 跨端解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。
3. 京东大厂开发维护，整体迭代更新稳定。
4. 有相关配套的 ui 组件库 taro-ui。
5. 常见的库都可在 taro 项目中进行使用。(classnames, ahook,lodash, dayjs,redux, react-redux,redux-saga,qs)。

## 创建项目

```shell
# 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# npm info 查看版本信息
npm info @tarojs/cli

# 初始化项目
taro init myApp
```

## 运行项目

```shell
cd myApp
yarn
yarn run dev:weapp
```

## 项目目录结构

## 如何创建页面

## 生命周期

### 1 微信小程序生命周期(**后期补一张完整的时序图**)

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

> 其中 `componentDidMount` 触发时机是 react 端将页面组件生成完成后触发，此时组件并没有展示在 ui 中。然后 react 将组件交给 Taro 进行处理，生成小程序的页面。因此在 componentDidMount 中有时会无法获取到元素节点属性。保险起见，为准确获取到生成节点的信息，节点相关操作放在 `onReady` 中进行。

## 页面跳转以及传参

## 全局变量

## 开发注意事项
