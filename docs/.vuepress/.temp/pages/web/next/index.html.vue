<template>
  <h1 id="nextjs-打包静态文件在-github-pages-上-404" tabindex="-1">
    <a
      class="header-anchor"
      href="#nextjs-打包静态文件在-github-pages-上-404"
      aria-hidden="true"
      >#</a
    >
    nextJs 打包静态文件在 github pages 上 404
  </h1>
  <p>
    使用 nextJs 打包生成静态文件，并部署到 github page
    后。在浏览器上访问网站，发现服务器下的 _next 目录无法访问, 404。
  </p>
  <p>看 ci 也并没有报错，静态文件都有生成，问题扑朔迷离。</p>
  <p>然后通过 google，在 next 的 github 的仓库的 issue 中发现了同样的问题。</p>
  <p>
    经过排查，原因是这样，Github Pages 默认是基于 Jekyll 构建，Jekyll
    是一个将纯文本转换为静态网站的工具，它构建的网站下各种目录都是特定的以下划线开头命名的文件夹，例如
    _layouts、_posts ，它会忽略掉其它的以下划线开头的文件夹和文件。
  </p>
  <p>
    解决方案，在服务器的根目录下添加 .nojekyll 文件，内容为空即可。.nojekyll
    就是告诉 Github Pages 不要忽略掉下划线开头的文件和文件夹。可以写在 ci
    里面，在 build 完成后，在静态文件的目录中生成这个文件。
  </p>
  <div class="language-yaml ext-yml line-numbers-mode">
    <pre
      v-pre
      class="language-yaml"
    ><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build and export static
  <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    npm install
    npm run-script build
    npm run-script export</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add .nojekyll
  <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    cd build
    touch .nojekyll</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br />
    </div>
  </div>
</template>
