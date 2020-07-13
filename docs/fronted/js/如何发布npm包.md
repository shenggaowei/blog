# 如何发布一个 npm 包
## 一 背景
在工作时，突然接到经理的一个要求，需要将一个react的高阶组件函数封装成一个npm包。之前从没弄过，当场还是有些懵逼的，但是这毕竟是工作，不能推脱。于是开始了学习、汤坑之旅。最终包发布，线上项目成功使用，虽然导致了一次线上故障，但还是快速地fix掉。吃一堑长一智，记录一下整个发布的过程和遇到的一些问题。
## 二 流程
> npm 包可以将可复用逻辑封装成一个工具库，依赖 npm 的强大生态，可以在项目中引入，让代码变得更加简洁，提高效率。

1. 在 npm 官网注册一个账号。
2. 在本地登录 npm 账号。
3. 编写 npm 包内容。
4. 发布包。

## 三 开发过程
### 1 注册npm账号。
附录网站： https://www.npmjs.com/
### 2 在本地登录npm账号。
```shell
npm login
```
输入在npm官网注册的账号密码即可。
### 3 编写npm包
#### 3.1 执行以下命令，创建一个npm模块
```shell
mkdir npmDir
cd npmDir
npm init -y
```
#### 3.2 安装webpack
```shell
npm install webpack webpack-ci -D
```
在本地开发时，通常考虑更多的是代码的可读性，以便于在逻辑出错时，可debug其源码找到问题。然而发至线上时，则考虑更多的是包的体积，越小即代表着更快的载入。
同时，一个强大的包应该支持多种方式导入，例如es module的import,commonjs的require以及amd的古老方式。
为做到以上两点，选择了webpack作为构建工具。虽然用webpack个人感觉稍微有点重，但是它可扩展性强，日后利用loader以及plugin可以实现更多的编译以及优化需求。
#### 3.3 梳理项目目录
![](media/15909176345966/15909328330064.jpg)
src下的index.js对应着包的内容。
最外层index.js为所暴露的出口文件。
dist目录存放webpack打包后的文件。
#### 3.4 编写对应内容
##### 3.4.1 webpack.config.js
 ```js
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        'add': './src/index.js',
        'add.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'add',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}
 ```
1. mode: 支持开发版代码不压缩，线上版本压缩。此处将mode设置为'none'，默认全不压缩，然后自己用插件来配置压缩代码文件。
2. entry: 两个入口，add为在开发时导入，add.min文件为在线上时导入。
3. output:
    * filename: 设置占位符。默认为entry入口文件名字
    * library: 库的返回值赋值给变量或者属性 add。例如script引入方式，则可以全局使用add函数。此属性和library配合使用
    * libraryTarget: 变量暴露的方式。设置为umd即可支持es module、cmd以及script引入脚本的方式使用。
    * libraryExport: 配置要导出的模块中那些子模块需要被导出。只有output.libraryTarget被设置成commonjs或者commonjs2的时候才有效。我的导出方式是export default，因此我将其直接导出。如果不填此项，则默认引入的是module对象。调用方式会是 .default形式。

1. optimization: 利用TerserPlugin插件进行压缩代码,默认只压缩.min结尾的输出文件。

#### 3.4.2 模块主要内容 src/index.js
```js
  const add = (...rest) => {
    console.log(rest)
    alert('哈哈')
  }

  export default add
```
简单的一个测试函数
#### 3.4.3 main入口文件index.js
```js
  if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/add.min.js');
  } else {
    module.exports = require('./dist/add.js')
  }
```
根据环境变量自动引入相关版本。
#### 3.4.4 构建命令。package.json
```json
  "scripts": {
    "test": "npm test",
    "build": "webpack",
    "prepublish": "webpack"
  },
```
发布包时可以手动执行build命令后后发布，也可通过prepublish钩子自动编译然后发布。
### 4 发布包
修改 package.json 中的name字段，即包在npm中的名字。小提示，想好名字之后，最好到npm官网上搜索一下这个包有没有被别人注册，有的话就要换一个了。
修改版本号，可手动修改，也可通过npm  version命令进行更换。个人习惯于后面。
```shell
# 修改版本号
npm version major | minorr | patch
# 发布包到npm
npm publish
```
然后在npm官网上搜索一下，便可以找到你发布的包了。开心。

## 四 遇到的问题
###4.1 在服务端渲染(ssr)的项目中引入该包时，会报错误 ”window is not defined“
本以为是包中代码逻辑错误，把项目中所有引入到window的地方全都用typeof兼容了一遍，本想完事大吉，结果还是报这个错误。上网搜索各种帖子无效之后，我感觉是webpack编译打包后出了问题，于是报着试一试的心态去看编译后的未压缩版本代码，果然发现了问题。
![](media/15909176345966/15909384148354.jpg)
如图所示，打包后的文件为一个自运行匿名函数，函数第一个实参竟然是window。
于是去webpack官网查看相关文档，看其是否能配置。果然找到了
![-w728](media/15909176345966/15909386807183.jpg)
修改globalObject属性，将第一个参数设置为this，解决问题。




> 附录
> gihub: https://github.com/ShengGaoW/shenggao-test-npm
