<template>
  <h1 id="ts-学习笔记" tabindex="-1">
    <a class="header-anchor" href="#ts-学习笔记" aria-hidden="true">#</a> ts
    学习笔记
  </h1>
  <h3 id="接口" tabindex="-1">
    <a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口
  </h3>
  <p><strong>可索引的类型</strong></p>
  <p>
    TypeScript支持两种索引签名：字符串和数字。
    可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
    这是因为当使用
    number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用
    100（一个number）去索引等同于使用&quot;100&quot;（一个string）去索引，因此两者需要保持一致。
  </p>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    breed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!</span>
<span class="token keyword">interface</span> <span class="token class-name">NotOkay</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Animal<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Dog<span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <p>
    因为number类型的索引必须是string类型的子类型，所以number的索引必须是string索引的子类型。而此处animal是父类，dog是子类。animal不是dog的子类。
  </p>
  <p><strong>类类型</strong></p>
  <p>哈哈哈哈</p>
</template>
