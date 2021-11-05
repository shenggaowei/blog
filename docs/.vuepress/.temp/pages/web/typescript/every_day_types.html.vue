<template>
  <h3 id="return-type-annotations" tabindex="-1">
    <a class="header-anchor" href="#return-type-annotations" aria-hidden="true"
      >#</a
    >
    return type annotations
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">function</span> getFavoriteNumber<span class="token operator">:</span> <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">26</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <p>
    一般情况下不需要明确解释函数的返回类型，因为 ts
    根据函数表达式自动推断类型。一些代码库的文档会明确返回类型以用于文档编制，防止意外变化，或者仅仅是个人的爱好。
  </p>
  <h3 id="type-assertions" tabindex="-1">
    <a class="header-anchor" href="#type-assertions" aria-hidden="true">#</a>
    Type Assertions
  </h3>
</template>
