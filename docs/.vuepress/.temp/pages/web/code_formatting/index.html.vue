<template>
  <h1 id="代码美化小技巧" tabindex="-1">
    <a class="header-anchor" href="#代码美化小技巧" aria-hidden="true">#</a>
    代码美化小技巧
  </h1>
  <p>
    在前端开发当中，统一代码风格是非常重要的一环。一是可以让代码更加整洁可读，二是在多人开发当中可以避免因为格式不统一而造成的代码冲突。
  </p>
  <p>对前端格式化的工具和方法，做一个简单的总结</p>
  <h2 id="_1-git-hooks" tabindex="-1">
    <a class="header-anchor" href="#_1-git-hooks" aria-hidden="true">#</a> 1.
    <a
      href="https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%25"
      target="_blank"
      rel="noopener noreferrer"
      >Git hooks<OutboundLink
    /></a>
  </h2>
  <p>
    git 钩子，即在特定的一些操作发生的时候执行特定的脚本。在 git init
    初始化时会在 .git/hook 文件夹下添加默认执行脚本的例子，如果没有修改过都是以
    **.sample 结尾。如果要启用可移除脚本的 .sample
    后缀，即可在特定操作发生的时候执行该脚本。
  </p>
  <p><img src="@source/web/code_formatting/assets/git-hooks.png" alt="" /></p>
  <p>
    例如，pre-commit 钩子在键入提交信息前运行。
    它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。
    如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用 git commit
    --no-verify 来绕过这个环节。
    你可以利用该钩子，来检查代码风格是否一致（运行类似 lint
    的程序）、尾随空白字符是否存在（自带的钩子就是这么做的），或新方法的文档是否适当。
  </p>
  <p>
    <a
      href="https://typicode.github.io/husky/#/"
      target="_blank"
      rel="noopener noreferrer"
      >husky<OutboundLink
    /></a>
    库可以更方便的创建使用 git hook 的功能。它支持所有 git hook 的功能。
  </p>
  <h2 id="_2-prettier" tabindex="-1">
    <a class="header-anchor" href="#_2-prettier" aria-hidden="true">#</a> 2.
    <a
      href="https://prettier.io/docs/en/index.html"
      target="_blank"
      rel="noopener noreferrer"
      >prettier<OutboundLink
    /></a>
  </h2>
  <p>
    prettier 是一个美化化工具。适用于以下规则，例如 max-len,
    no-mixed-spaces-and-tabs, keyword-spacing, comma-style…
    对于代码质量的校验，例如 no-unused-vars, no-extra-bind, no-implicit-globals,
    prefer-promise-reject-errors… prettier 则无能为力，此时则需要借助 eslint
    等其他 lint 工具。
  </p>
  <h2 id="_3-eslint" tabindex="-1">
    <a class="header-anchor" href="#_3-eslint" aria-hidden="true">#</a> 3.
    eslint
  </h2>
  <p>eslint</p>
  <h2 id="_3-lint-staged" tabindex="-1">
    <a class="header-anchor" href="#_3-lint-staged" aria-hidden="true">#</a> 3.
    lint-staged
  </h2>
  <h2 id="配合使用" tabindex="-1">
    <a class="header-anchor" href="#配合使用" aria-hidden="true">#</a> 配合使用
  </h2>
</template>
