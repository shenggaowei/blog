<template>
  <h1 id="事件订阅和解绑" tabindex="-1">
    <a class="header-anchor" href="#事件订阅和解绑" aria-hidden="true">#</a>
    事件订阅和解绑
  </h1>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//listen</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fire</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//emit</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__eventCache<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sd <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
sd<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'as'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5487</span> <span class="token operator">+</span> d<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sd<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">'as'</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br /><span class="line-number">13</span><br />
    </div>
  </div>
</template>
