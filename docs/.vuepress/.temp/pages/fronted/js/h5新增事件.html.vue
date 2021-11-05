<template>
  <h1 id="html5事件" tabindex="-1">
    <a class="header-anchor" href="#html5事件" aria-hidden="true">#</a>
    HTML5事件
  </h1>
  <h2 id="_1-contextmenu-事件-鼠标右键" tabindex="-1">
    <a
      class="header-anchor"
      href="#_1-contextmenu-事件-鼠标右键"
      aria-hidden="true"
      >#</a
    >
    1. contextMenu 事件（鼠标右键）
  </h2>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./event.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.mydiv</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.menu</span> <span class="token punctuation">{</span>
            <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mydiv<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>haha <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'mydiv'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> myMenu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'menu'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">,</span> <span class="token string">'contextmenu'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event <span class="token operator">=</span> eventUtil<span class="token punctuation">.</span><span class="token function">getEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
            event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            myMenu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
            myMenu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
            myMenu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">'visible'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            myMenu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
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
      ><br /><span class="line-number">51</span><br />
    </div>
  </div>
  <ol>
    <li>contextmenu 事件表示何时在哪里显示上下文菜单。</li>
    <li>事件会冒泡。</li>
    <li>通常 contextmenu 显示菜单，click 取消菜单。</li>
    <li>
      实现步骤
      <ol>
        <li>指定显示的元素绑定 contextmenu 事件。</li>
        <li>取消默认行为，不显示浏览器的默认上下文菜单。</li>
        <li>根据 event 对象的客户端坐标定义自定义菜单的位置。</li>
        <li>让菜单显示。修改 display 值或者 visibility。</li>
        <li>点击 document,让菜单不显示。</li>
      </ol>
    </li>
  </ol>
  <h2 id="_2-beforeunload事件" tabindex="-1">
    <a class="header-anchor" href="#_2-beforeunload事件" aria-hidden="true"
      >#</a
    >
    2 beforeunload事件
  </h2>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=ß, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./event.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'beforeunload'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event <span class="token operator">=</span> eventUtil<span class="token punctuation">.</span><span class="token function">getEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">'关闭提示'</span><span class="token punctuation">;</span>
            <span class="token comment">//ie 和 firefox 设置 returnValue 的值</span>
            event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> message<span class="token punctuation">;</span>
            <span class="token comment">//Safari 和 google 直接返回</span>
            <span class="token keyword">return</span> message
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
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
      ><br />
    </div>
  </div>
  <p>
    现在浏览器为了优化用户体验，对onbeforeunload 的离开页面提示做出了限制。
    比如最新版的谷歌浏览器，必须要有用户在页面上有点击等操作之后再离开页面才能有提示，如果页面打开后没有用户在页面上点击等操作就离开（关闭）页面就不会有提示。
    另外一般的ide或代码编辑器内嵌浏览器离开（关闭）页面也不会有提示
  </p>
  <h2 id="_3-domcontentloaded-事件" tabindex="-1">
    <a class="header-anchor" href="#_3-domcontentloaded-事件" aria-hidden="true"
      >#</a
    >
    3 DOMContentLoaded 事件
  </h2>
  <blockquote>
    <p>
      在形成完整的 DOM 树之后触发，不理会图像、javascript 文件、css
      文件或者其他资源是否已经下载完毕。支持在页面下载的早期添加事件处理程序，意味着用户可以尽早的与页面进行交互。
      可以给 window 或者 document 添加事件绑定程序。会<strong>冒泡</strong>到
      window, 但实际目标是 document。 不支持该事件的浏览器，可设置一个事件为 0
      毫秒的超时调用，但事件被触发的时间能否同步，还是取决于用户的浏览器和页面中的其他代码，无法保证在所有环境中该超时调用一定会早于
      load 事件触发。
    </p>
  </blockquote>
  <h2 id="_4-readystatechange-事件" tabindex="-1">
    <a class="header-anchor" href="#_4-readystatechange-事件" aria-hidden="true"
      >#</a
    >
    4 readystatechange 事件
  </h2>
  <blockquote>
    <p>
      提供与文档或元素的加载状态有关的信息，但这个事件的行为有时候会很难预料。
    </p>
  </blockquote>
  <h2 id="_5-pageshow-和-pagehide-事件" tabindex="-1">
    <a
      class="header-anchor"
      href="#_5-pageshow-和-pagehide-事件"
      aria-hidden="true"
      >#</a
    >
    5 pageshow 和 pagehide 事件
  </h2>
  <blockquote>
    <p>pageshow 触发时机</p>
  </blockquote>
  <ol>
    <li>首次加载页面,load 事件之后触发</li>
    <li>目标是 document，但必须将其事件处理程序添加到 window 上。</li>
    <li>点击前进或后退，显示来自 back-forward cache 中的页面时。</li>
    <li>检测 event 中的 persisted 属性判断是否来自 bfcache。</li>
  </ol>
  <blockquote>
    <p>pagehide 触发时机</p>
  </blockquote>
  <ol>
    <li>unload 事件触发之前触发。</li>
    <li>目标是 document，事件处理程序需要添加到 window 对象上。</li>
    <li>
      页面卸载时，persisted 会变成 true (除非页面不会被保存在 bfcache 中)。
    </li>
  </ol>
  <h2 id="_6-hashchange-事件" tabindex="-1">
    <a class="header-anchor" href="#_6-hashchange-事件" aria-hidden="true">#</a>
    6 hashchange 事件
  </h2>
  <blockquote>
    <p>当 url 的参数列表发生变化时，包括 hash 值，发生变化时通知开发人员。</p>
  </blockquote>
  <ol>
    <li>必须把事件处理程序添加给 window 对象。</li>
    <li>
      event 对象包括 oldUrl 和 newUrl
      两个值，包括变化前后的完整链接。为了兼容性，最好还是使用 location
      对象确定当前的参数列表。
    </li>
  </ol>
</template>
