<template>
  <h1 id="数组去重" tabindex="-1">
    <a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重
  </h1>
  <h3 id="一-双层循环匹配" tabindex="-1">
    <a class="header-anchor" href="#一-双层循环匹配" aria-hidden="true">#</a> 一
    双层循环匹配
  </h3>
  <h4 id="_1-选择排序" tabindex="-1">
    <a class="header-anchor" href="#_1-选择排序" aria-hidden="true">#</a> 1.
    选择排序
  </h4>
  <ol>
    <li>思想： 将标志位的每一项与后面的项进行对比，一致则删除，j--。</li>
  </ol>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> flag <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">===</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        j<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">13</span><br />
    </div>
  </div>
  <h3 id="二-新建数组-保持数组数据的唯一性" tabindex="-1">
    <a
      class="header-anchor"
      href="#二-新建数组-保持数组数据的唯一性"
      aria-hidden="true"
      >#</a
    >
    二 新建数组，保持数组数据的唯一性
  </h3>
  <p>主要技术方法：</p>
  <ol>
    <li>
      indexOf || includes || find || findIndex || some || filter(判断数组
      length) 判断数组值是否重复
    </li>
    <li>push</li>
  </ol>
  <h4 id="_1-判断数组中是否存在唯一的项。" tabindex="-1">
    <a
      class="header-anchor"
      href="#_1-判断数组中是否存在唯一的项。"
      aria-hidden="true"
      >#</a
    >
    1 判断数组中是否存在唯一的项。
  </h4>
  <ol>
    <li>思想：indexof 判断是否在数组中存在，不存在则 push。</li>
  </ol>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat2</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> notExist <span class="token operator">=</span> newArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>notExist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">11</span><br />
    </div>
  </div>
  <h4 id="_2-reduce-实现循环" tabindex="-1">
    <a class="header-anchor" href="#_2-reduce-实现循环" aria-hidden="true">#</a>
    2 reduce 实现循环
  </h4>
  <ol>
    <li>思想：归并思想。</li>
  </ol>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat4</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token operator">?</span> pre <span class="token operator">:</span> pre<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
  <h4 id="_3-利用对象-key-的不可重复性" tabindex="-1">
    <a
      class="header-anchor"
      href="#_3-利用对象-key-的不可重复性"
      aria-hidden="true"
      >#</a
    >
    3 利用对象 key 的不可重复性
  </h4>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat5</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>
    arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      pre<span class="token punctuation">[</span>next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <h4 id="_4-对排序之后的数组进行前后值的对比。" tabindex="-1">
    <a
      class="header-anchor"
      href="#_4-对排序之后的数组进行前后值的对比。"
      aria-hidden="true"
      >#</a
    >
    4 对排序之后的数组进行前后值的对比。
  </h4>
  <ol>
    <li>
      <p>思想</p>
      <ol>
        <li>
          将数组进行排序，遍历数组，将当前项和下一项进行对比，一样则将下一项删除掉。最后
          return 数组。
        </li>
      </ol>
    </li>
  </ol>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat7</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sortArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sortArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> sortArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> next <span class="token operator">=</span> sortArr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">===</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sortArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sortArr<span class="token punctuation">;</span>
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
  <h3 id="三-利用下标进行判断" tabindex="-1">
    <a class="header-anchor" href="#三-利用下标进行判断" aria-hidden="true"
      >#</a
    >
    三 利用下标进行判断
  </h3>
  <p>主要思想</p>
  <ol>
    <li>
      <p>遍历数组，将当前子项的下标和其第一次出现时的下标进行对比。</p>
      <ol>
        <li>如果一致，则是第一次出现。返回该项</li>
        <li>如果不一致，证明前面已经存在该项，该项是重复的值。</li>
      </ol>
    </li>
  </ol>
  <p>主要技术</p>
  <ol>
    <li>filter indexOf || findIndex</li>
    <li>for indexOf || findIndex push</li>
  </ol>
  <h5 id="_1-filter-indexof" tabindex="-1">
    <a class="header-anchor" href="#_1-filter-indexof" aria-hidden="true">#</a>
    1 filter + indexOf
  </h5>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat3</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> index <span class="token operator">===</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <h3 id="四-es6-新增-api-set" tabindex="-1">
    <a class="header-anchor" href="#四-es6-新增-api-set" aria-hidden="true"
      >#</a
    >
    四 es6 新增 api Set
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">avoidRepeat6</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
</template>
