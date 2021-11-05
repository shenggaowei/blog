<template>
  <h1 id="如何发布一个-npm-包" tabindex="-1">
    <a class="header-anchor" href="#如何发布一个-npm-包" aria-hidden="true"
      >#</a
    >
    如何发布一个 npm 包
  </h1>
  <h2 id="一-背景" tabindex="-1">
    <a class="header-anchor" href="#一-背景" aria-hidden="true">#</a> 一 背景
  </h2>
  <p>
    在工作时，突然接到经理的一个要求，需要将一个react的高阶组件函数封装成一个npm包。之前从没弄过，当场还是有些懵逼的，但是这毕竟是工作，不能推脱。于是开始了学习、汤坑之旅。最终包发布，线上项目成功使用，虽然导致了一次线上故障，但还是快速地fix掉。吃一堑长一智，记录一下整个发布的过程和遇到的一些问题。f
  </p>
  <h2 id="二-流程" tabindex="-1">
    <a class="header-anchor" href="#二-流程" aria-hidden="true">#</a> 二 流程
  </h2>
  <p>
    npm 包可以将可复用逻辑封装成一个工具库，依赖 npm
    的强大生态，可以在项目中引入，让代码变得更加简洁，提高效率。
  </p>
  <ol>
    <li>在 npm 官网注册一个账号。</li>
    <li>在本地登录 npm 账号。</li>
    <li>编写 npm 包内容。</li>
    <li>发布包。</li>
  </ol>
  <h2 id="三-开发过程" tabindex="-1">
    <a class="header-anchor" href="#三-开发过程" aria-hidden="true">#</a> 三
    开发过程
  </h2>
  <h3 id="_1-注册npm账号。" tabindex="-1">
    <a class="header-anchor" href="#_1-注册npm账号。" aria-hidden="true">#</a> 1
    注册npm账号。
  </h3>
  <p>附录网站： https://www.npmjs.com/</p>
  <h3 id="_2-在本地登录npm账号。" tabindex="-1">
    <a class="header-anchor" href="#_2-在本地登录npm账号。" aria-hidden="true"
      >#</a
    >
    2 在本地登录npm账号。
  </h3>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token function">npm</span> login
</code></pre>
    <div class="line-numbers"><span class="line-number">1</span><br /></div>
  </div>
  <p>输入在npm官网注册的账号密码即可。</p>
  <h3 id="_3-编写npm包" tabindex="-1">
    <a class="header-anchor" href="#_3-编写npm包" aria-hidden="true">#</a> 3
    编写npm包
  </h3>
  <h4 id="_3-1-执行以下命令-创建一个npm模块" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-1-执行以下命令-创建一个npm模块"
      aria-hidden="true"
      >#</a
    >
    3.1 执行以下命令，创建一个npm模块
  </h4>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token function">mkdir</span> npmDir
<span class="token builtin class-name">cd</span> npmDir
<span class="token function">npm</span> init -y
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <h4 id="_3-2-安装webpack" tabindex="-1">
    <a class="header-anchor" href="#_3-2-安装webpack" aria-hidden="true">#</a>
    3.2 安装webpack
  </h4>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-ci -D
</code></pre>
    <div class="line-numbers"><span class="line-number">1</span><br /></div>
  </div>
  <p>
    在本地开发时，通常考虑更多的是代码的可读性，以便于在逻辑出错时，可debug其源码找到问题。然而发至线上时，则考虑更多的是包的体积，越小即代表着更快的载入。
    同时，一个强大的包应该支持多种方式导入，例如es module的import,
    commonjs的require以及amd的古老方式。
    为做到以上两点，选择了webpack作为构建工具。虽然用webpack个人感觉稍微有点重，但是它可扩展性强，日后利用loader以及plugin可以实现更多的编译以及优化需求。
  </p>
  <h4 id="_3-3-梳理项目目录" tabindex="-1">
    <a class="header-anchor" href="#_3-3-梳理项目目录" aria-hidden="true">#</a>
    3.3 梳理项目目录
  </h4>
  <p>
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/05/31/15909328330064.jpg"
      alt=""
    />
    src下的index.js对应着包的内容。 最外层index.js为所暴露的出口文件。
    dist目录存放webpack打包后的文件。
  </p>
  <h4 id="_3-4-编写对应内容" tabindex="-1">
    <a class="header-anchor" href="#_3-4-编写对应内容" aria-hidden="true">#</a>
    3.4 编写对应内容
  </h4>
  <h5 id="_3-4-1-webpack-config-js" tabindex="-1">
    <a class="header-anchor" href="#_3-4-1-webpack-config-js" aria-hidden="true"
      >#</a
    >
    3.4.1 webpack.config.js
  </h5>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
    entry<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">'add'</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
        <span class="token string">'add.min'</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
        library<span class="token operator">:</span> <span class="token string">'add'</span><span class="token punctuation">,</span>
        libraryTarget<span class="token operator">:</span> <span class="token string">'umd'</span><span class="token punctuation">,</span>
        libraryExport<span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>
        globalObject<span class="token operator">:</span> <span class="token string">'this'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.min\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
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
      ><br /><span class="line-number">13</span><br /><span class="line-number"
        >14</span
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br /><span class="line-number">19</span><br /><span class="line-number"
        >20</span
      ><br /><span class="line-number">21</span><br /><span class="line-number"
        >22</span
      ><br /><span class="line-number">23</span><br />
    </div>
  </div>
  <ol>
    <li>
      <p>
        mode:
        支持开发版代码不压缩，线上版本压缩。此处将mode设置为'none'，默认全不压缩，然后自己用插件来配置压缩代码文件。
      </p>
    </li>
    <li>
      <p>entry: 两个入口，add为在开发时导入，add.min文件为在线上时导入。</p>
    </li>
    <li>
      <p>output:</p>
      <ul>
        <li>filename: 设置占位符。默认为entry入口文件名字</li>
        <li>
          library: 库的返回值赋值给变量或者属性
          add。例如script引入方式，则可以全局使用add函数。此属性和library配合使用
        </li>
        <li>
          libraryTarget: 变量暴露的方式。设置为umd即可支持es
          module、cmd以及script引入脚本的方式使用。
        </li>
        <li>
          libraryExport:
          配置要导出的模块中那些子模块需要被导出。只有output.libraryTarget被设置成commonjs或者commonjs2的时候才有效。我的导出方式是export
          default，因此我将其直接导出。如果不填此项，则默认引入的是module对象。调用方式会是
          .default形式。
        </li>
      </ul>
    </li>
    <li>
      <p>
        optimization:
        利用TerserPlugin插件进行压缩代码,默认只压缩.min结尾的输出文件。
      </p>
    </li>
  </ol>
  <h4 id="_3-4-2-模块主要内容-src-index-js" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-4-2-模块主要内容-src-index-js"
      aria-hidden="true"
      >#</a
    >
    3.4.2 模块主要内容 src/index.js
  </h4>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'哈哈'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> add
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br />
    </div>
  </div>
  <p>简单的一个测试函数</p>
  <h4 id="_3-4-3-main入口文件index-js" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-4-3-main入口文件index-js"
      aria-hidden="true"
      >#</a
    >
    3.4.3 main入口文件index.js
  </h4>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./dist/add.min.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./dist/add.js'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <p>根据环境变量自动引入相关版本。</p>
  <h4 id="_3-4-4-构建命令。package-json" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-4-4-构建命令。package-json"
      aria-hidden="true"
      >#</a
    >
    3.4.4 构建命令。package.json
  </h4>
  <div class="language-json ext-json line-numbers-mode">
    <pre
      v-pre
      class="language-json"
    ><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"npm test"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token property">"prepublish"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <p>
    发布包时可以手动执行build命令后后发布，也可通过prepublish钩子自动编译然后发布。
  </p>
  <h3 id="_4-发布包" tabindex="-1">
    <a class="header-anchor" href="#_4-发布包" aria-hidden="true">#</a> 4 发布包
  </h3>
  <p>
    修改 package.json
    中的name字段，即包在npm中的名字。小提示，想好名字之后，最好到npm官网上搜索一下这个包有没有被别人注册，有的话就要换一个了。
    修改版本号，可手动修改，也可通过npm version命令进行更换。个人习惯于后面。
  </p>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token comment"># 修改版本号</span>
<span class="token function">npm</span> version major <span class="token operator">|</span> minorr <span class="token operator">|</span> patch
<span class="token comment"># 发布包到npm</span>
<span class="token function">npm</span> publish
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <p>然后在npm官网上搜索一下，便可以找到你发布的包了。开心。</p>
  <h2 id="四-遇到的问题" tabindex="-1">
    <a class="header-anchor" href="#四-遇到的问题" aria-hidden="true">#</a> 四
    遇到的问题
  </h2>
  <h3
    id="_4-1-在服务端渲染-ssr-的项目中引入该包时-会报错误-window-is-not-defined"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#_4-1-在服务端渲染-ssr-的项目中引入该包时-会报错误-window-is-not-defined"
      aria-hidden="true"
      >#</a
    >
    4.1 在服务端渲染(ssr)的项目中引入该包时，会报错误 ”window is not defined“
  </h3>
  <p>
    本以为是包中代码逻辑错误，把项目中所有引入到window的地方全都用typeof兼容了一遍，本想完事大吉，结果还是报这个错误。上网搜索各种帖子无效之后，我感觉是webpack编译打包后出了问题，于是报着试一试的心态去看编译后的未压缩版本代码，果然发现了问题。
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/05/31/15909384148354.jpg"
      alt=""
    />
    如图所示，打包后的文件为一个自运行匿名函数，函数第一个实参竟然是window。
    于是去webpack官网查看相关文档，看其是否能配置。果然找到了
  </p>
  <p>
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/05/31/15909386807183.jpg"
      alt="-w728"
    />
  </p>
  <p>修改globalObject属性，将第一个参数设置为this，解决问题。</p>
  <blockquote>
    <p>附录 gihub: https://github.com/ShengGaoW/shenggao-test-npm</p>
  </blockquote>
</template>
