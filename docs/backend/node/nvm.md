# nvm 管理 node 与 npm
> nvm 应运而生，nvm 是 Mac 下的 node 管理工具，有点类似管理 Ruby 的 rvm，如果需要管理 Windows 下的 node，官方推荐使用 nvmw 或 nvm-windows。不过，nvm-windows 并不是 nvm 的简单移植，他们也没有任何关系。但下面介绍的所有命令，都可以在 nvm-windows 中运行。

## n 模块和 nvm 的区别
node 版本管理工具还有一个是 TJ大神的 n 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 /usr/local/lib/node_modules，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。
## 安装
### windows 安装
首先最重要的是：一定要卸载已安装的 NodeJS，否则会发生冲突。然后下载 nvm-windows 最新安装包，直接安装即可。
### OS X/Linux 安装
* 可以用 X-Code 的命令行工具 xcode-select --install
* 远程下载 install.sh 脚本并执行。
 
 ```shell
 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
 ```
* dsd

### 安装多版本的 node
安装 10.16.3 版本
```shell
nvm install 10.16.3
```
安装 10.16系列的最高版本
```shell
nvm install 10.16
```
列出远程服务器上所有的可用版本：
```shell
nvm ls-remote
```
### 在不同版本切换
切换到 10.16.3
```shell
nvm use 10.16.3
```
切换到最新版
```shell
nvm use node
```
用 nvm 给不同的版本号设置别名:
```shell
给 10.16.3 设置别名为 awesome-version
nvm alias awesome-version 10.16.3

使用该别别名的 node
nvm use awesome-version

取消别名
nvm unalias awesome-version

另外，你还可以设置 default 这个特殊别名：
nvm alias default node
```
### 列出已安装实例
```shell
nvm ls
绿色箭头是当前正在使用的版本，下面列出的还有设置过的别名
```
![](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/07/14/15946560553919.jpg)


### 在项目中使用不同版本的 Node
我们可以通过创建项目目录中的 .nvmrc 文件来指定要使用的 Node 版本。之后在项目目录中执行 nvm use 即可。.nvmrc 文件内容只需要遵守上文提到的语义化版本规则即可。另外还有个工具叫做 avn，可以自动化这个过程。
### 在多环境中，npm该如何使用呢？
每个版本的 Node 都会自带一个不同版本的 npm，可以用 npm -v 来查看 npm 的版本。全局安装的 npm 包并不会在不同的 Node 环境中共享，因为这会引起兼容问题。它们被放在了不同版本的目录下，例如 ~/.nvm/versions/node/<version>/lib/node_modules</version> 这样的目录。这刚好也省去我们在 Linux 中使用 sudo 的功夫了。因为这是用户的主文件夹，并不会引起权限问题。

但问题来了，我们安装过的 npm 包，都要重新再装一次？幸运的是，我们有个办法来解决我们的问题，运行下面这个命令，可以从特定版本导入到我们将要安装的新版本 Node：
```shell
nvm install v5.0.0 --reinstall-packages-from=4.2
```
