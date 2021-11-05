<template>
  <h1 id="taro" tabindex="-1">
    <a class="header-anchor" href="#taro" aria-hidden="true">#</a> Taro
  </h1>
  <blockquote>
    <p>👽 Taro['tɑ:roʊ]，泰罗·奥特曼，宇宙警备队总教官，实力最强的奥特曼。</p>
  </blockquote>
  <p>
    Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv
    等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5/react-native
    等应用。
  </p>
  <h2 id="一-taro-优势" tabindex="-1">
    <a class="header-anchor" href="#一-taro-优势" aria-hidden="true">#</a> 一
    Taro 优势
  </h2>
  <ol>
    <li>用 <code>react</code> 渲染视图层, 目前支持到 17 版本</li>
    <li>可以用 ts,项目更加工程化,可扩展配置</li>
    <li>可以使用 <code>sass</code> 或者 <code>less</code> 等前置处理器</li>
    <li>有相关配套的 ui 组件库 <code>taro-ui</code></li>
    <li>
      常用的库都可在 taro 项目中进行使用,比如 classnames, aHook,lodash,
      dayjs,redux, react-redux,redux-saga,qs。
    </li>
    <li>京东大厂开发维护，整体迭代更新稳定</li>
    <li>跨端解决方案</li>
  </ol>
  <h2 id="二-创建运行项目" tabindex="-1">
    <a class="header-anchor" href="#二-创建运行项目" aria-hidden="true">#</a> 二
    创建运行项目
  </h2>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code><span class="token comment"># 使用 yarn 安装 CLI</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @tarojs/cli

<span class="token comment"># npm info 查看版本信息</span>
<span class="token function">npm</span> info @tarojs/cli

<span class="token comment"># 初始化项目</span>
taro init myApp

<span class="token builtin class-name">cd</span> myApp

<span class="token function">yarn</span>

<span class="token function">yarn</span> run dev:weapp

<span class="token comment"># 发布前打包</span>
<span class="token function">yarn</span> run build:weapp
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
      ><br /><span class="line-number">17</span><br />
    </div>
  </div>
  <h2 id="三-目录结构" tabindex="-1">
    <a class="header-anchor" href="#三-目录结构" aria-hidden="true">#</a> 三
    目录结构
  </h2>
  <h3 id="微信小程序和-taro-目录结构对比" tabindex="-1">
    <a
      class="header-anchor"
      href="#微信小程序和-taro-目录结构对比"
      aria-hidden="true"
      >#</a
    >
    微信小程序和 taro 目录结构对比
  </h3>
  <p>
    <img
      src="@source/web/mini_app/taro_use/mini-programmer.jpg"
      alt="微信目录"
      style="zoom: 50%; margin-right: 80px"
    /><img
      src="@source/web/mini_app/taro_use/taro_dir.jpg"
      alt="taro目录"
      style="zoom: 50%"
    />
  </p>
  <div class="language-tree ext-tree line-numbers-mode">
    <pre
      v-pre
      class="language-tree"
    ><code>├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.js index 页面配置
|   |
|   ├── app.js                  项目入口文件
|   ├── app.css                 项目总通用样式
|   └── app.config.js           项目入口配置
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             字节跳动小程序项目配置 project.config.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.config.json
|
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json
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
      ><br /><span class="line-number">23</span><br /><span class="line-number"
        >24</span
      ><br /><span class="line-number">25</span><br /><span class="line-number"
        >26</span
      ><br /><span class="line-number">27</span><br /><span class="line-number"
        >28</span
      ><br />
    </div>
  </div>
  <h2 id="四-工程配置" tabindex="-1">
    <a class="header-anchor" href="#四-工程配置" aria-hidden="true">#</a> 四
    工程配置
  </h2>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  projectName<span class="token operator">:</span> <span class="token string">"mini-programmer"</span><span class="token punctuation">,</span>
  date<span class="token operator">:</span> <span class="token string">"2020-12-3"</span><span class="token punctuation">,</span>
  designWidth<span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span>
  deviceRatio<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token number">640</span><span class="token operator">:</span> <span class="token number">2.34</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token number">750</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token number">828</span><span class="token operator">:</span> <span class="token number">1.81</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token number">375</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  sourceRoot<span class="token operator">:</span> <span class="token string">"src"</span><span class="token punctuation">,</span>
  outputRoot<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">dist</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  babel<span class="token operator">:</span> <span class="token punctuation">{</span>
    sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    presets<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">"env"</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          modules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"transform-decorators-legacy"</span><span class="token punctuation">,</span>
      <span class="token string">"transform-class-properties"</span><span class="token punctuation">,</span>
      <span class="token string">"transform-object-rest-spread"</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          helpers<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          polyfill<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          regenerator<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          moduleName<span class="token operator">:</span> <span class="token string">"babel-runtime"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  defineConstants<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  copy<span class="token operator">:</span> <span class="token punctuation">{</span>
    patterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  framework<span class="token operator">:</span> <span class="token string">"react"</span><span class="token punctuation">,</span>
  mini<span class="token operator">:</span> <span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
      pxtransform<span class="token operator">:</span> <span class="token punctuation">{</span>
        enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        config<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> <span class="token punctuation">{</span>
        enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        config<span class="token operator">:</span> <span class="token punctuation">{</span>
          limit<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 设定转换尺寸上限</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      cssModules<span class="token operator">:</span> <span class="token punctuation">{</span>
        enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 false，如需使用 css modules 功能，则设为 true</span>
        config<span class="token operator">:</span> <span class="token punctuation">{</span>
          namingPattern<span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span> <span class="token comment">// 转换模式，取值为 global/module</span>
          generateScopedName<span class="token operator">:</span> <span class="token string">"[name]__[local]___[hash:base64:5]"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  h5<span class="token operator">:</span> <span class="token punctuation">{</span>
    publicPath<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    staticDirectory<span class="token operator">:</span> <span class="token string">"static"</span><span class="token punctuation">,</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
      autoprefixer<span class="token operator">:</span> <span class="token punctuation">{</span>
        enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        config<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      cssModules<span class="token operator">:</span> <span class="token punctuation">{</span>
        enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 false，如需使用 css modules 功能，则设为 true</span>
        config<span class="token operator">:</span> <span class="token punctuation">{</span>
          namingPattern<span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span> <span class="token comment">// 转换模式，取值为 global/module</span>
          generateScopedName<span class="token operator">:</span> <span class="token string">"[name]__[local]___[hash:base64:5]"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    esnextModules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"taro-ui"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"@/services"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".."</span><span class="token punctuation">,</span> <span class="token string">"src/services"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">"@/utils"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".."</span><span class="token punctuation">,</span> <span class="token string">"src/utils"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">"@/redux"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".."</span><span class="token punctuation">,</span> <span class="token string">"src/redux"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">"@/components"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".."</span><span class="token punctuation">,</span> <span class="token string">"src/components"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">"@/common"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".."</span><span class="token punctuation">,</span> <span class="token string">"src/common"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
      ><br /><span class="line-number">23</span><br /><span class="line-number"
        >24</span
      ><br /><span class="line-number">25</span><br /><span class="line-number"
        >26</span
      ><br /><span class="line-number">27</span><br /><span class="line-number"
        >28</span
      ><br /><span class="line-number">29</span><br /><span class="line-number"
        >30</span
      ><br /><span class="line-number">31</span><br /><span class="line-number"
        >32</span
      ><br /><span class="line-number">33</span><br /><span class="line-number"
        >34</span
      ><br /><span class="line-number">35</span><br /><span class="line-number"
        >36</span
      ><br /><span class="line-number">37</span><br /><span class="line-number"
        >38</span
      ><br /><span class="line-number">39</span><br /><span class="line-number"
        >40</span
      ><br /><span class="line-number">41</span><br /><span class="line-number"
        >42</span
      ><br /><span class="line-number">43</span><br /><span class="line-number"
        >44</span
      ><br /><span class="line-number">45</span><br /><span class="line-number"
        >46</span
      ><br /><span class="line-number">47</span><br /><span class="line-number"
        >48</span
      ><br /><span class="line-number">49</span><br /><span class="line-number"
        >50</span
      ><br /><span class="line-number">51</span><br /><span class="line-number"
        >52</span
      ><br /><span class="line-number">53</span><br /><span class="line-number"
        >54</span
      ><br /><span class="line-number">55</span><br /><span class="line-number"
        >56</span
      ><br /><span class="line-number">57</span><br /><span class="line-number"
        >58</span
      ><br /><span class="line-number">59</span><br /><span class="line-number"
        >60</span
      ><br /><span class="line-number">61</span><br /><span class="line-number"
        >62</span
      ><br /><span class="line-number">63</span><br /><span class="line-number"
        >64</span
      ><br /><span class="line-number">65</span><br /><span class="line-number"
        >66</span
      ><br /><span class="line-number">67</span><br /><span class="line-number"
        >68</span
      ><br /><span class="line-number">69</span><br /><span class="line-number"
        >70</span
      ><br /><span class="line-number">71</span><br /><span class="line-number"
        >72</span
      ><br /><span class="line-number">73</span><br /><span class="line-number"
        >74</span
      ><br /><span class="line-number">75</span><br /><span class="line-number"
        >76</span
      ><br /><span class="line-number">77</span><br /><span class="line-number"
        >78</span
      ><br /><span class="line-number">79</span><br /><span class="line-number"
        >80</span
      ><br /><span class="line-number">81</span><br /><span class="line-number"
        >82</span
      ><br /><span class="line-number">83</span><br /><span class="line-number"
        >84</span
      ><br /><span class="line-number">85</span><br /><span class="line-number"
        >86</span
      ><br /><span class="line-number">87</span><br /><span class="line-number"
        >88</span
      ><br /><span class="line-number">89</span><br /><span class="line-number"
        >90</span
      ><br />
    </div>
  </div>
  <h2 id="五-生命周期" tabindex="-1">
    <a class="header-anchor" href="#五-生命周期" aria-hidden="true">#</a> 五
    生命周期
  </h2>
  <h3 id="_1-微信小程序生命周期" tabindex="-1">
    <a class="header-anchor" href="#_1-微信小程序生命周期" aria-hidden="true"
      >#</a
    >
    1 微信小程序生命周期
  </h3>
  <p>App 生命周期</p>
  <ol>
    <li>
      <p>onLaunch (小程序初始化完成时触发，<code>全局只触发一次</code>)</p>
    </li>
    <li>
      <p>onShow (进入前台显示时触发)</p>
    </li>
    <li>
      <p>onHide (进入后台时触发)</p>
    </li>
  </ol>
  <p>Pages 生命周期</p>
  <ol>
    <li>
      <p>onLoad (页面加载时触发)</p>
      <ol>
        <li>可获取从上级页面所获取的 query 参数</li>
      </ol>
    </li>
    <li>
      <p>onShow (进入前台触发)</p>
    </li>
    <li>
      <p>onReady (页面初次渲染完成，可以与视图进行交互)</p>
      <ol>
        <li>页面首次加载可以获取元素尺寸</li>
      </ol>
    </li>
    <li>
      <p>onHide (进入后台时触发)</p>
    </li>
    <li>
      <p>onUnLoad (页面卸载时触发)</p>
    </li>
  </ol>
  <h3 id="_2-taro-对生命周期的封装" tabindex="-1">
    <a class="header-anchor" href="#_2-taro-对生命周期的封装" aria-hidden="true"
      >#</a
    >
    2 Taro 对生命周期的封装
  </h3>
  <table>
    <thead>
      <tr>
        <th>微信小程序</th>
        <th style="text-align: center">Taro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>onLaunch</td>
        <td style="text-align: center">onLaunch</td>
      </tr>
      <tr>
        <td>onLoad</td>
        <td style="text-align: center">onLoad</td>
      </tr>
      <tr>
        <td>onReady</td>
        <td style="text-align: center">onReady()<br />useReady(() =&gt; {})</td>
      </tr>
      <tr>
        <td>onShow</td>
        <td style="text-align: center">
          componentDidShow()<br />useDidShow(()=&gt;{})
        </td>
      </tr>
      <tr>
        <td>onHide</td>
        <td style="text-align: center">
          componentDidHide()<br />useDidHide(()=&gt;{})
        </td>
      </tr>
      <tr>
        <td></td>
        <td style="text-align: center">
          componentDidMount<br />componentDidUpdate<br />componentWillUnMount<br />useEffect
        </td>
      </tr>
    </tbody>
  </table>
  <h3 id="_3-微信原生小程序的支持度" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-微信原生小程序的支持度"
      aria-hidden="true"
      >#</a
    >
    3 微信原生小程序的支持度
  </h3>
  <ol>
    <li>
      组件支持
      <ol>
        <li>
          Taro 以微信小程序组件库为标准，结合 jsx
          语法规范，定制了一套自己的组件库规范。基于以上原则，在小程序端，可以使用所有的小程序原生组件。
        </li>
      </ol>
    </li>
    <li>
      api
      <ol>
        <li>
          wx.method =&gt; Taro.method。如果 taro.method 调用不兼容，先暂时调用
          wx.method。
        </li>
        <li>部分异步 api 调用可使用 promise</li>
      </ol>
    </li>
    <li>
      插件支持
      <ol>
        <li>官网目前支持小程序插件。暂未实践。</li>
      </ol>
    </li>
  </ol>
  <div class="language-tsx ext-tsx line-numbers-mode">
    <pre
      v-pre
      class="language-tsx"
    ><code><span class="token keyword">import</span> Taro <span class="token keyword">from</span> <span class="token string">"@tarojs/taro"</span><span class="token punctuation">;</span>

Taro<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <h2 id="六-具体开发" tabindex="-1">
    <a class="header-anchor" href="#六-具体开发" aria-hidden="true">#</a> 六
    具体开发
  </h2>
  <h3 id="页面跳转以及传参" tabindex="-1">
    <a class="header-anchor" href="#页面跳转以及传参" aria-hidden="true">#</a>
    页面跳转以及传参
  </h3>
  <p>
    Taro 遵循微信小程序的路由规范, 只需要修改全局配置的 pages 属性，配置为 Taro
    应用中每个页面的路径即可
  </p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <h3 id="开发问题" tabindex="-1">
    <a class="header-anchor" href="#开发问题" aria-hidden="true">#</a> 开发问题
  </h3>
  <h4 id="_1-dom-节点获取的时期" tabindex="-1">
    <a class="header-anchor" href="#_1-dom-节点获取的时期" aria-hidden="true"
      >#</a
    >
    1 dom 节点获取的时期
  </h4>
  <p>节点相关操作在 onReady 生命周期中进行</p>
  <blockquote>
    <p>
      <code>componentDidMount</code> 触发时机是 react
      将页面组件生成完成后触发，此时组件并没有展示在 ui 中。然后 react
      将组件交给 Taro 进行处理，生成小程序的页面。因此在 componentDidMount
      中有时会无法获取到元素节点属性。保险起见，为准确获取到生成节点的信息，节点相关操作放在
      <code>onReady</code> 中进行
    </p>
  </blockquote>
  <h4 id="_2-使用-taroui-的样式问题" tabindex="-1">
    <a
      class="header-anchor"
      href="#_2-使用-taroui-的样式问题"
      aria-hidden="true"
      >#</a
    >
    2 使用 taroUi 的样式问题
  </h4>
  <p>
    taroUi 当前版本默认只支持 750 设计稿，如果项目按照 375 设计稿来做，ui
    整体元素偏小
  </p>
  <h4 id="_3-版本升级问题" tabindex="-1">
    <a class="header-anchor" href="#_3-版本升级问题" aria-hidden="true">#</a> 3
    版本升级问题
  </h4>
  <p>taro cli 和 taro 相关依赖库的版本必须保持一致，现均为 3.3.0</p>
  <h2 id="性能优化" tabindex="-1">
    <a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化
  </h2>
  <h2 id="原理解析" tabindex="-1">
    <a class="header-anchor" href="#原理解析" aria-hidden="true">#</a> 原理解析
  </h2>
</template>
