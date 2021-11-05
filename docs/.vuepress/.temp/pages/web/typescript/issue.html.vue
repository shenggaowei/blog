<template>
  <h1 id="ts-常见飘红解决" tabindex="-1">
    <a class="header-anchor" href="#ts-常见飘红解决" aria-hidden="true">#</a> ts
    常见飘红解决
  </h1>
  <h2 id="_1-类型-string-的参数不能赋给类型-alignment-的参数。" tabindex="-1">
    <a
      class="header-anchor"
      href="#_1-类型-string-的参数不能赋给类型-alignment-的参数。"
      aria-hidden="true"
      >#</a
    >
    1 类型“string”的参数不能赋给类型“Alignment”的参数。
  </h2>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">type</span> <span class="token class-name">Alignment</span> <span class="token operator">=</span> <span class="token string">"left"</span> <span class="token operator">|</span> <span class="token string">"right"</span> <span class="token operator">|</span> <span class="token string">"center"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">printText</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> alignment<span class="token operator">:</span> Alignment<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token punctuation">{</span> s<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> alignment<span class="token operator">:</span> <span class="token string">"left"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printText</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>s<span class="token punctuation">,</span> ret<span class="token punctuation">.</span>alignment<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <pre><code>以上代码会提示一个问题，'类型“string”的参数不能赋给类型“Alignment”的参数'。
原因：因为代码会在 ret 的创建和 printText 的调用之间进行评估，会给 ret.alignment 分配一个新的字符串，类似于 'GUESS', ts 认为这段代码有问题
解决方法有三个
</code></pre>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token comment">// change 1;</span>
<span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token punctuation">{</span> s<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> alignment<span class="token operator">:</span> <span class="token string">"left"</span> <span class="token keyword">as</span> <span class="token string">"left"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// change 2;</span>
<span class="token function">printText</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>s<span class="token punctuation">,</span> ret<span class="token punctuation">.</span>alignment <span class="token keyword">as</span> <span class="token string">"left"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// change 3</span>
<span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token punctuation">{</span> s<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> alignment<span class="token operator">:</span> <span class="token string">"left"</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
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
  <pre><code>change1 意味着我打算让 ret.alignment总是拥有子面量类型 &quot;left&quot;, 之后防止编译器可能会分配 'GUESS'等类型给 ret.alignment 字段。
change2 意味着因为其他原因我知道 ret.alignment 会有值 'left'
change3 使用 `const` 关键字把整个对象转成类型变量。 `const` 后缀确保所有属性都被赋值为字面量类型，而不是常用的基本类型，如 string 或者 number 类型
</code></pre>
</template>
