<template>
  <h1 id="usecallback-和-usememo" tabindex="-1">
    <a class="header-anchor" href="#usecallback-和-usememo" aria-hidden="true"
      >#</a
    >
    useCallback 和 useMemo
  </h1>
  <h2 id="_1-背景" tabindex="-1">
    <a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1 背景
  </h2>
  <p>
    在用 taro 写小程序，偶然间遇到了个问题。用 useCallback 生成了一个 memoized
    函数，但是在重复渲染的时候，<a
      href="https://en.wikipedia.org/wiki/Memoization"
      target="_blank"
      rel="noopener noreferrer"
      >memoized<OutboundLink
    /></a>
    函数执行后内部所依赖的变量仍旧是旧的。
  </p>
  <p>
    原因已经找到，因为没有传递第二个依赖项数组。翻阅了 react 文档和一些
    blog。对这两个 hook 做个学习记录。
  </p>
  <h2 id="_2-解释" tabindex="-1">
    <a class="header-anchor" href="#_2-解释" aria-hidden="true">#</a> 2 解释
  </h2>
  <div class="language-tsx ext-tsx line-numbers-mode">
    <pre
      v-pre
      class="language-tsx"
    ><code><span class="token keyword">function</span> useCallback<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> deps<span class="token operator">:</span> DependencyList<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useMemo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token function-variable function">factory</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span><span class="token punctuation">,</span> deps<span class="token operator">:</span> DependencyList <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br />
    </div>
  </div>
  <p>
    从 react 官方文档对两个函数的定义可以知道，useCallback 中 T 为一个函数，而在
    useMemo 中，<strong
      >由于传入<code>useMemo</code> 的函数会在渲染期间执行</strong
    >
    ，所以 T 为执行结果。
  </p>
  <p>useCallback(fn, deps) 相当于 useMemo(() =&gt; fn, deps)。</p>
  <h2 id="_3-作用" tabindex="-1">
    <a class="header-anchor" href="#_3-作用" aria-hidden="true">#</a> 3 作用
  </h2>
  <h2 id="_4-使用场合" tabindex="-1">
    <a class="header-anchor" href="#_4-使用场合" aria-hidden="true">#</a> 4
    使用场合
  </h2>
</template>
