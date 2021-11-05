<template>
  <h1 id="webpack-入门基础" tabindex="-1">
    <a class="header-anchor" href="#webpack-入门基础" aria-hidden="true">#</a>
    webpack 入门基础
  </h1>
  <h2 id="webpack-核心概念之-entry" tabindex="-1">
    <a class="header-anchor" href="#webpack-核心概念之-entry" aria-hidden="true"
      >#</a
    >
    <a
      href="https://webpack.docschina.org/concepts/entry-points/"
      target="_blank"
      rel="noopener noreferrer"
      >webpack 核心概念之 entry<OutboundLink
    /></a>
  </h2>
  <ol>
    <li>单页和多页的配置语法</li>
    <li>
      v4 以上不推荐单独将第三库代码打包为一个单独的 vendor
      <ul>
        <li>
          利用<strong>optimization.splitChunks</strong> 选项，将 vendor 和
          app(应用程序) 模块分开，并为其创建一个单独的文件。不要 为 vendor
          或其他不是执行起点创建 entry
        </li>
      </ul>
    </li>
  </ol>
  <h2 id="webpack-核心概念之-output" tabindex="-1">
    <a
      class="header-anchor"
      href="#webpack-核心概念之-output"
      aria-hidden="true"
      >#</a
    >
    <a
      href="https://webpack.docschina.org/concepts/output/"
      target="_blank"
      rel="noopener noreferrer"
      >webpack 核心概念之 output<OutboundLink
    /></a>
  </h2>
  <p>
    output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件
  </p>
  <p>多页应用可利用占位符来打包所有的 chunk</p>
  <h2 id="webpack-核心概念之-loaders" tabindex="-1">
    <a
      class="header-anchor"
      href="#webpack-核心概念之-loaders"
      aria-hidden="true"
      >#</a
    >
    <a
      href="https://webpack.docschina.org/concepts/loaders/#example"
      target="_blank"
      rel="noopener noreferrer"
      >webpack 核心概念之 loaders<OutboundLink
    /></a>
  </h2>
  <p>
    webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack
    开箱可用的自带能力。loader 让 webpack
    能够去处理其他类型的文件，并将它们转换为有效
    模块，以供应用程序使用，以及被添加到依赖图中。
  </p>
  <ol>
    <li>
      loader 支持链式调用。从后向前执行调用。前面的 loader
      将执行结果返回给后面的 loader
    </li>
    <li>loader 可以是同步的，也可以是异步的。</li>
  </ol>
  <h2 id="webpack-核心概念之-plugins" tabindex="-1">
    <a
      class="header-anchor"
      href="#webpack-核心概念之-plugins"
      aria-hidden="true"
      >#</a
    >
    <a
      href="https://webpack.docschina.org/concepts/plugins/"
      target="_blank"
      rel="noopener noreferrer"
      >webpack 核心概念之 plugins<OutboundLink
    /></a>
  </h2>
  <p>
    插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
  </p>
  <p>常用的 plugins</p>
  <p>
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/11/plugins.jpeg"
      alt="plugins"
    />
  </p>
  <h2 id="webpack-核心概念之-mode" tabindex="-1">
    <a class="header-anchor" href="#webpack-核心概念之-mode" aria-hidden="true"
      >#</a
    >
    <a
      href="https://webpack.docschina.org/configuration/mode/#usage"
      target="_blank"
      rel="noopener noreferrer"
      >webpack 核心概念之 mode<OutboundLink
    /></a>
  </h2>
  <p>webpack 会开启相应模式的内置优化</p>
  <p>如果没有设置，mode 默认为 production</p>
  <h2 id="解析-es6-和-react-jsx" tabindex="-1">
    <a class="header-anchor" href="#解析-es6-和-react-jsx" aria-hidden="true"
      >#</a
    >
    解析 es6 和 react jsx
  </h2>
  <h3 id="es6" tabindex="-1">
    <a class="header-anchor" href="#es6" aria-hidden="true">#</a> es6
  </h3>
  <p>默认支持解析 js，但是解析 es6 需要编译器去兼容低版本的浏览器</p>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre v-pre class="language-bash"><code>
<span class="token comment"># babel-loader 转码依赖的 babel-core 和 env</span>
<span class="token function">yarn</span> <span class="token function">add</span> @babel/core @babel/preset-env babel-loader

<span class="token comment"># 公共方法避免重复引入辅助代码。引入 @babel/plugin-transform-runtime 并且使所有辅助代码从这里引用。@babel/plugin-transform-runtime 依赖于 @babel-runtime</span>
<span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-runtime @babel/runtime

</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br />
    </div>
  </div>
  <h3 id="jsx" tabindex="-1">
    <a class="header-anchor" href="#jsx" aria-hidden="true">#</a> jsx
  </h3>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre v-pre class="language-bash"><code>
<span class="token function">yarn</span> <span class="token function">add</span> react react-dom

<span class="token function">yarn</span> <span class="token function">add</span> @babel/preset-react
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// .babelrc 文件</span>

<span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
            <span class="token string">"@babel/preset-react"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"@babel/plugin-transform-runtime"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br /><span class="line-number">11</span><br /><span class="line-number"
        >12</span
      ><br /><span class="line-number">13</span><br />
    </div>
  </div>
  <h2 id="解析-css、less-和-sass" tabindex="-1">
    <a class="header-anchor" href="#解析-css、less-和-sass" aria-hidden="true"
      >#</a
    >
    解析 css、less 和 sass
  </h2>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre v-pre class="language-bash"><code>
<span class="token comment"># sass 解析依赖于 node-sass 或者 dart-sass</span>
<span class="token comment"># style-loader 用于将样式用 style 标签插入到 head 节点中</span>
<span class="token function">yarn</span> <span class="token function">add</span> style-loader css-loader node-sass sass-loader

</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <h2 id="解析图片和字体" tabindex="-1">
    <a class="header-anchor" href="#解析图片和字体" aria-hidden="true">#</a>
    解析图片和字体
  </h2>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token comment"># file-loader 解析文件。</span>
<span class="token function">yarn</span> <span class="token function">add</span> file-loader

<span class="token comment"># url-loader 可以将文件打包为 base-64 内联引入到文件中</span>
<span class="token function">yarn</span> <span class="token function">add</span> url-loader
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <h2 id="webpack-中的文件监听" tabindex="-1">
    <a class="header-anchor" href="#webpack-中的文件监听" aria-hidden="true"
      >#</a
    >
    webpack 中的文件监听
  </h2>
  <p>两种方式</p>
  <p>1 --watch</p>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token string">"watch"</span><span class="token builtin class-name">:</span> <span class="token string">"webpack --watch"</span>
</code></pre>
    <div class="line-numbers"><span class="line-number">1</span><br /></div>
  </div>
  <p>2 watch:true</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  watch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  watchOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    ignored<span class="token operator">:</span> <span class="token string">"/node_modules"</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听到变化 300 ms 后再去执行</span>
    aggregateTimeout<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token comment">// 1s 询问 1000 次指定的文件有没有变化</span>
    poll<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br />
    </div>
  </div>
  <p>缺陷：每次需要手动刷新浏览器。</p>
  <h2 id="webpack-中的热更新以及原理分析" tabindex="-1">
    <a
      class="header-anchor"
      href="#webpack-中的热更新以及原理分析"
      aria-hidden="true"
      >#</a
    >
    webpack 中的热更新以及原理分析
  </h2>
  <h3 id="实现方式" tabindex="-1">
    <a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式
  </h3>
  <ol>
    <li>
      <p>webpack-dev-server</p>
    </li>
    <li>
      <p>webpack-dev-middleware</p>
    </li>
  </ol>
  <h2 id="文件指纹策略-chunkhash、contenthash-和-hash" tabindex="-1">
    <a
      class="header-anchor"
      href="#文件指纹策略-chunkhash、contenthash-和-hash"
      aria-hidden="true"
      >#</a
    >
    文件指纹策略：chunkHash、contentHash 和 hash
  </h2>
  <p>
    给构建后的文件创建 hash
    值，可以起到版本管理的作用。未改变的文件使用浏览器缓存，优化体验。
  </p>
  <p>使用：</p>
  <p>
    hash: 每一次构建，只要项目文件有修改，整个项目构建的 hash 值就会更改
    chunkHash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash
    值 contenthash: 根据文件内容来定义 hash，文件内容不变，则 contenthash 不变
  </p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// js 添加 chunkhash</span>
output<span class="token operator">:</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    filename<span class="token operator">:</span> <span class="token string">'[name]_[chunkhash:8].js'</span>
<span class="token punctuation">}</span>

<span class="token comment">// css 使用 MiniCssExtractPlugin 提取成单独的 css文件后，添加 contenthash</span>
plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">'[name]_[contenthash:8].css'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 图片则添加 hash(相对于自身的内容变化)</span>
    <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">'[name]_[hash:8].[ext]'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br /><span class="line-number">11</span><br /><span class="line-number"
        >12</span
      ><br /><span class="line-number">13</span><br /><span class="line-number"
        >14</span
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br /><span class="line-number">19</span><br /><span class="line-number"
        >20</span
      ><br /><span class="line-number">21</span><br />
    </div>
  </div>
  <h2 id="html、css-和-javascript-代码压缩" tabindex="-1">
    <a
      class="header-anchor"
      href="#html、css-和-javascript-代码压缩"
      aria-hidden="true"
      >#</a
    >
    html、css 和 javascript 代码压缩
  </h2>
</template>
