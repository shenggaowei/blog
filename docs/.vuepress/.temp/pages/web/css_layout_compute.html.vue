<template>
  <h1 id="浏览器元素宽高计算" tabindex="-1">
    <a class="header-anchor" href="#浏览器元素宽高计算" aria-hidden="true">#</a>
    浏览器元素宽高计算
  </h1>
  <h2 id="_1-获取窗口大小" tabindex="-1">
    <a class="header-anchor" href="#_1-获取窗口大小" aria-hidden="true">#</a> 1
    获取窗口大小
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// 获取窗口页面的大小</span>
<span class="token keyword">function</span> <span class="token function">getWindowSize</span><span class="token punctuation">(</span><span class="token parameter">window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pageWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pageHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> pageWidth <span class="token operator">!==</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">'CSS1Compat'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pageWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            pageHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pageWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            pageHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        pageWidth<span class="token punctuation">,</span>
        pageHeight
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
      ><br />
    </div>
  </div>
  <h2 id="_2-偏移量-在-dom-对象中" tabindex="-1">
    <a class="header-anchor" href="#_2-偏移量-在-dom-对象中" aria-hidden="true"
      >#</a
    >
    2 偏移量 （在 dom 对象中）
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>offsetHeight<span class="token operator">:</span> height <span class="token operator">+</span> padding <span class="token operator">+</span> border <span class="token operator">+</span> 水平滚动条的高度
offsetWidth<span class="token operator">:</span> width <span class="token operator">+</span> padding <span class="token operator">+</span> border <span class="token operator">+</span> 垂直水平滚动条的宽度

offsetLeft<span class="token operator">:</span> <span class="token function">元素的左外边框至包含元素的左内边框之间的像素距离</span><span class="token punctuation">(</span>包括父元素的边框<span class="token punctuation">)</span>
offsetTop<span class="token operator">:</span> <span class="token function">元素的上外边框至包含元素的上内边框之间的像素距离</span><span class="token punctuation">(</span>包括父元素的边框<span class="token punctuation">)</span>
offsetParent<span class="token operator">:</span> 包含元素（ 其直接父元素） 的引用

<span class="token comment">//依据 offsetparent 获取元素至页面上的偏移量</span>
<span class="token keyword">function</span> <span class="token function">getElementLeft</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        offsetLeft<span class="token punctuation">,</span>
        offsetParent
    <span class="token punctuation">}</span> <span class="token operator">=</span> ele<span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> offsetLeft<span class="token punctuation">;</span>
    <span class="token keyword">let</span> curParent <span class="token operator">=</span> offsetParent
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curParent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left <span class="token operator">+=</span> curParent<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
        curParent <span class="token operator">=</span> curParent<span class="token punctuation">.</span>offsetParent
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> left
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getElementTop</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        offsetTop<span class="token punctuation">,</span>
        offsetParent
    <span class="token punctuation">}</span> <span class="token operator">=</span> ele<span class="token punctuation">;</span>
    <span class="token keyword">let</span> top <span class="token operator">=</span> offsetTop<span class="token punctuation">;</span>
    <span class="token keyword">let</span> curParent <span class="token operator">=</span> offsetParent
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curParent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        top <span class="token operator">+=</span> curParent<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
        curParent <span class="token operator">=</span> curParent<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> top
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
      ><br /><span class="line-number">35</span><br />
    </div>
  </div>
  <h2 id="_3-客户区大小" tabindex="-1">
    <a class="header-anchor" href="#_3-客户区大小" aria-hidden="true">#</a> 3
    客户区大小
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>clientWidth<span class="token operator">:</span> width <span class="token operator">+</span> padding
clientHeight<span class="token operator">:</span> height <span class="token operator">+</span> padding
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br />
    </div>
  </div>
  <p>获取窗口大小：<a href="mweblib://15705144607328">获取窗口大小</a></p>
  <h2 id="_4-滚动大小" tabindex="-1">
    <a class="header-anchor" href="#_4-滚动大小" aria-hidden="true">#</a> 4
    滚动大小
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code> scrolHeight<span class="token operator">:</span> 在没有滚动条的情况下， 元素内容的总高度。 最小为元素的高度。 如果内部有滚动， 则为滚动内容的高度。
 scrollWidth<span class="token operator">:</span> 在没有滚动条的情况下， 元素内容的总宽度。
 scrollLeft<span class="token operator">:</span> 被隐藏的内容区域左侧的像素数。 通过设置这个属性可以改变元素的滚动位置。
 scrollTop<span class="token operator">:</span> 被隐藏在内容区域上方的像素数。 通过设置这个属性可以改变元素的滚动位置。
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <p>scrollWidth 和 scrollHeight 主要用于确定元素内容的实际大小。</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// 获取文档总高度 取 scroll 与 client 的最大值</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
    scrollHeight<span class="token punctuation">,</span>
    clientHeight<span class="token punctuation">,</span>
    scrollWidth<span class="token punctuation">,</span>
    clientWidth
<span class="token punctuation">}</span> <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
<span class="token keyword">var</span> docHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>scrollHeight<span class="token punctuation">,</span> clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> docWidth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>scrollWidth<span class="token punctuation">,</span> clientWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//对于运行在 混杂模式下的 ie。需要用 document.body 来替换 document.documentElement。</span>
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
      ><br /><span class="line-number">11</span><br />
    </div>
  </div>
  <p>
    判断内容滚动到底部思路： 满足公式 box.scrollTop + box.clientHeight &gt;=
    box.scrollHeight;
  </p>
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
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.container</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> oContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        scrollHeight<span class="token punctuation">,</span>
        scrollTop<span class="token punctuation">,</span>
        clientHeight
    <span class="token punctuation">}</span> <span class="token operator">=</span> oContainer<span class="token punctuation">;</span>
    oContainer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span>
            scrollHeight<span class="token punctuation">,</span>
            scrollTop<span class="token punctuation">,</span>
            clientHeight
        <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scrollHeight<span class="token punctuation">,</span> clientHeight<span class="token punctuation">,</span> scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clientHeight <span class="token operator">+</span> scrollTop <span class="token operator">>=</span> scrollHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'到底了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'scrollHeight'</span><span class="token punctuation">,</span> scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clientHeight'</span><span class="token punctuation">,</span> clientHeight<span class="token punctuation">)</span>
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
      ><br /><span class="line-number">51</span><br /><span class="line-number"
        >52</span
      ><br />
    </div>
  </div>
  <h2 id="_5-确定元素大小" tabindex="-1">
    <a class="header-anchor" href="#_5-确定元素大小" aria-hidden="true">#</a> 5
    确定元素大小
  </h2>
</template>
