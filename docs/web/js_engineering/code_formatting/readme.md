# 代码美化小技巧

在前端开发当中，统一代码风格是非常重要的一环。一是可以让代码更加整洁可读，二是在多人开发当中可以避免因为格式不统一而造成的代码冲突。

对前端格式化的工具和方法，做一个简单的总结

## 1. [Git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%)

git 钩子，即在特定的一些操作发生的时候执行特定的脚本。在 git init 初始化时会在 .git/hook 文件夹下添加默认执行脚本的例子，如果没有修改过都是以 \*\*.sample 结尾。如果要启用可移除脚本的 .sample 后缀，即可在特定操作发生的时候执行该脚本。

![](./assets/git-hooks.png)

例如，pre-commit 钩子在键入提交信息前运行。 它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。 如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用 git commit --no-verify 来绕过这个环节。 你可以利用该钩子，来检查代码风格是否一致（运行类似 lint 的程序）、尾随空白字符是否存在（自带的钩子就是这么做的），或新方法的文档是否适当。

[husky](https://typicode.github.io/husky/#/) 库可以更方便的创建使用 git hook 的功能。它支持所有 git hook 的功能。

## 2. [prettier](https://prettier.io/docs/en/index.html)

prettier 是一个美化化工具。适用于以下规则，例如 max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style… 对于代码质量的校验，例如 no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors… prettier 则无能为力，此时则需要借助 eslint 等其他 lint 工具。

## 3. eslint

eslint

## 3. lint-staged

## 配合使用
