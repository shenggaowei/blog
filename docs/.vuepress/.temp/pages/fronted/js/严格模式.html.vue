<template>
  <h1 id="浅谈严格模式和混杂模式" tabindex="-1">
    <a class="header-anchor" href="#浅谈严格模式和混杂模式" aria-hidden="true"
      >#</a
    >
    浅谈严格模式和混杂模式
  </h1>
  <h2 id="一-定义" tabindex="-1">
    <a class="header-anchor" href="#一-定义" aria-hidden="true">#</a> 一 定义
  </h2>
  <ul>
    <li>严格模式： 浏览器根据 w3c 标准来解析代码</li>
    <li>
      混杂模式：浏览器根据自己的规范来解析代码。会产生浏览器兼容性的问题。
    </li>
  </ul>
  <h2 id="二-doctype-文档类型" tabindex="-1">
    <a class="header-anchor" href="#二-doctype-文档类型" aria-hidden="true"
      >#</a
    >
    二 doctype 文档类型
  </h2>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>我的测试站点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是我的页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
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
      ><br />
    </div>
  </div>
  <ol>
    <li>作用 声明文档类型，告诉浏览器需要用哪一种规范来解析文档。</li>
  </ol>
  <h2 id="三-严格模式和混杂模式的区别" tabindex="-1">
    <a
      class="header-anchor"
      href="#三-严格模式和混杂模式的区别"
      aria-hidden="true"
      >#</a
    >
    三 严格模式和混杂模式的区别
  </h2>
  <ol>
    <li>
      混杂模式下盒子模型的高宽包括padding和border，而W3C标准中设置一个元素的高宽指的是content的高宽；
    </li>
    <li>混杂模式下可以设置行内元素的高度，而标准模式下不生效；</li>
    <li>
      标准模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度无效；
    </li>
    <li>
      标准模式下使用margin:0
      auto;可以使元素水平居中，但是在混杂模式下会失效；混杂模式下需要设置text-align:center;来进行水平居中；
    </li>
    <li>混杂模式下设置图片padding会失效；</li>
    <li>混杂模式下Table中的字体属性不能继承上层的设置；</li>
    <li>混杂模式下white-space:pre会失效。</li>
  </ol>
</template>
