<template>
  <h1 id="vertical-align" tabindex="-1">
    <a class="header-anchor" href="#vertical-align" aria-hidden="true">#</a>
    vertical-align
  </h1>
  <blockquote>
    <p>用来指定行内元素或表格元素的垂直对齐方式</p>
  </blockquote>
  <h3 id="相对父元素的值" tabindex="-1">
    <a class="header-anchor" href="#相对父元素的值" aria-hidden="true">#</a>
    相对父元素的值
  </h3>
  <ul>
    <li>
      <strong>baseline</strong>
      <ul>
        <li>
          使元素的基线与父元素的基线对齐。HTML规范没有详细说明部分可替换元素的基线，如textarea，这意味着这些元素使用此值的表现因浏览器而异。
        </li>
      </ul>
    </li>
    <li>
      <strong>middle</strong>
      <ul>
        <li>
          使元素的中部与父元素的基线加上父元素x-height（译注：x高度）的一半对齐。
        </li>
      </ul>
    </li>
    <li>
      <strong>sub</strong>
      <ul>
        <li>使元素的基线与父元素的下标基线对齐。</li>
      </ul>
    </li>
    <li>
      <strong>super</strong>
      <ul>
        <li>使元素的基线与父元素的上标基线对齐。</li>
      </ul>
    </li>
    <li>
      <strong>text-top</strong>
      <ul>
        <li>使元素的顶部与父元素的字体顶部对齐。</li>
      </ul>
    </li>
    <li>
      <strong>text-bottom</strong>
      <ul>
        <li>使元素的底部与父元素的字体底部对齐。</li>
      </ul>
    </li>
  </ul>
  <h3 id="相对行的值" tabindex="-1">
    <a class="header-anchor" href="#相对行的值" aria-hidden="true">#</a>
    相对行的值
  </h3>
  <ul>
    <li>
      <p><strong>top</strong></p>
      <ul>
        <li>使元素极其后代元素的顶部与整行的顶部对齐。</li>
      </ul>
    </li>
    <li>
      <p><strong>bottom</strong></p>
      <ul>
        <li>使元素及其后代元素的底部与整行的底部对齐。</li>
      </ul>
      <p>没有基线的元素，使用外边距的下边缘替代。</p>
    </li>
  </ul>
  <h3 id="baseline" tabindex="-1">
    <a class="header-anchor" href="#baseline" aria-hidden="true">#</a> baseLine
  </h3>
  <h4 id="_1、baseline-的含义" tabindex="-1">
    <a class="header-anchor" href="#_1、baseline-的含义" aria-hidden="true"
      >#</a
    >
    1、baseLine 的含义
  </h4>
  <p>
    <img
      src="https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588055-b7ea8ea2-1cf6-4707-9168-43f55900ac5a.png"
      alt="屏幕快照 2019-08-31 下午3.11.20"
    />
  </p>
  <h4 id="_2、baseline-的确定规则" tabindex="-1">
    <a class="header-anchor" href="#_2、baseline-的确定规则" aria-hidden="true"
      >#</a
    >
    2、baseLine 的确定规则
  </h4>
  <pre><code>1. inline-table 的 baseline 是他的table的第一行的 baseline
2. 父元素 [line box] 的 baseline 是最后一个 line box 的 baseline。
3. inline-block 元素的 baseline 确定规则
    1. inline-block 元素，如果内部有 line box，则 inline-block 元素的 baseline 就是最后一个作为内容存在的元素 [inline box] 的 baseline，而这个元素的 baseline 的确定就要根据它自身来定了。
    2. inline-block 元素，如果内部没有 line box 或他的 overflow 属性是 visible 以外的值,那么 baseline 将是这个 inline-block 元素的 margin 边界。
</code></pre>
  <h4 id="_3、inline-block-的例子" tabindex="-1">
    <a class="header-anchor" href="#_3、inline-block-的例子" aria-hidden="true"
      >#</a
    >
    3、inline-block 的例子
  </h4>
  <ul>
    <li>子元素为行内块，里面无行内框。</li>
  </ul>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">.ctn-block</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
          <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.ctn-block .child</span> <span class="token punctuation">{</span>
          <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ctn-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          x
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
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
      ><br />
    </div>
  </div>
  <p>
    <img
      src="https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588471-e860ff7b-3e9b-4c8b-ad24-dad99d821609.png"
      alt="屏幕快照 2019-08-31 下午5.04.28"
    />
  </p>
  <p>原因：</p>
  <ul>
    <li>
      <p>依照规则2。父元素的基线是最后一个行内框的基线。</p>
    </li>
    <li>
      <p>
        最后一个行内框为一个行内块。先判断该行内块 overflow 属性不是 visiable
        以外的值，然后确定其内部没有行内框，得出该元素的基线是底部 margin 齐平。
      </p>
    </li>
    <li>
      <p>父元素的基线就是黄色块的底部 margin。</p>
    </li>
    <li>
      <p>子元素为行内块，里面有行内框。</p>
    </li>
  </ul>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.ctn-block</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.ctn-block .child</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ctn-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        x
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            x
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
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
  <p>
    <img
      src="https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588999-32abbc2c-f2c9-4578-92c7-f70d6d5c95b2.png"
      alt="屏幕快照 2019-08-31 下午5.15.10"
    />
  </p>
  <p>原因：</p>
  <pre><code>- 依照规则2。父元素的基线是最后一个行内框的基线。最后一个行内框为一个行内块。
- 先判断得出该行内块 overflow 属性不是 visiable，然后确定其有一个作为内容存在的元素，所以当前行内框的baseline就是最后一个作为内容存在的元素的baseline，也就是内容 x 的baseline,默认是 x 的底部。
- 所以当前父元素的基线是内容区 x 的底部。
</code></pre>
  <ul>
    <li>
      <p>子元素有行内块，且其 overflow 属性为 hidden。</p>
      <p>则子元素的基线是底部 margin。所以相应的父元素的基线是底部 margin。</p>
    </li>
  </ul>
  <h4 id="inline-block-元素下方有空隙。" tabindex="-1">
    <a
      class="header-anchor"
      href="#inline-block-元素下方有空隙。"
      aria-hidden="true"
      >#</a
    >
    inline-block 元素下方有空隙。
  </h4>
  <ul>
    <li>垂直空隙</li>
  </ul>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>

            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
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
      ><br /><span class="line-number">37</span><br />
    </div>
  </div>
  <p>
    <img
      src="https://cdn.nlark.com/yuque/0/2019/png/200613/1577288589382-a2209353-b6bd-442b-ad24-53510822752e.png"
      alt="屏幕快照 2019-08-31 下午5.53.01"
    />
  </p>
  <p>
    出现的原因:li 为行内块，且其 vertical-align 属性默认为 baseline, 也就是字母
    x 的底边，而相对于 s、y 等一些较高的字母，其底部会长一下，所以 baseline
    的下方会给字母的一部分留出空间，因此会产生间隙。解决方法，就是**改变 line
    box 的 baseline 位置，比如设置 li 的 vertical-align 为 middle。如下所示。
  </p>
  <p>
    <img
      src="https://cdn.nlark.com/yuque/0/2019/png/200613/1577288589417-818ecd5e-3db1-4d4f-b3e6-47bcb418a2fd.png"
      alt="屏幕快照 2019-08-31 下午5.58.34"
    />
  </p>
  <ul>
    <li>
      <p>左右间隙</p>
      <p>
        出现原因:li
        元素的水平空隙是因为换行引起的，这个换行会变成一个空白，这个空白会被解析为
        DOM 中的文本节点。 解决办法：
      </p>
      <pre><code>1. li 前后兄弟元素连起来书写。
2. 用注释来代替空白，注释节点默认在渲染的时候是不渲染的。
</code></pre>
    </li>
  </ul>
</template>
