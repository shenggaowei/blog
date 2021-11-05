<template>
  <h1 id="实现-bind、call和apply" tabindex="-1">
    <a class="header-anchor" href="#实现-bind、call和apply" aria-hidden="true"
      >#</a
    >
    实现 bind、call和apply
  </h1>
  <h2 id="一-call实现" tabindex="-1">
    <a class="header-anchor" href="#一-call实现" aria-hidden="true">#</a> 一
    call实现
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br />
    </div>
  </div>
  <ul>
    <li>
      思路
      <ol>
        <li>获取执行函数实例this,并将其绑定到所传的作用域context上。</li>
        <li>执行函数。</li>
        <li>删除context上的函数。防止误修改原作用域，重要。</li>
        <li>return返回值。</li>
      </ol>
    </li>
  </ul>
  <h2 id="二-apply实现" tabindex="-1">
    <a class="header-anchor" href="#二-apply实现" aria-hidden="true">#</a> 二
    apply实现
  </h2>
  <h3 id="_1-方法一-借助call" tabindex="-1">
    <a class="header-anchor" href="#_1-方法一-借助call" aria-hidden="true">#</a>
    1. 方法一 借助call
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>   <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <ul>
    <li>
      <p>思路</p>
      <ul>
        <li>
          获取执行函数实例、context。直接执行。注意call和apply传参的不同。
        </li>
      </ul>
    </li>
  </ul>
  <h3 id="_2-方法二-原生实现" tabindex="-1">
    <a class="header-anchor" href="#_2-方法二-原生实现" aria-hidden="true">#</a>
    2. 方法二 原生实现
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>   <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
       context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
       <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
       <span class="token keyword">return</span> result
   <span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br />
    </div>
  </div>
  <ul>
    <li>
      <p>思路</p>
      <ul>
        <li>与call类似。</li>
      </ul>
    </li>
  </ul>
  <h2 id="bind函数实现" tabindex="-1">
    <a class="header-anchor" href="#bind函数实现" aria-hidden="true">#</a>
    bind函数实现
  </h2>
  <h3 id="_1-方法一-借助call-1" tabindex="-1">
    <a class="header-anchor" href="#_1-方法一-借助call-1" aria-hidden="true"
      >#</a
    >
    1. 方法一 借助call
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
      <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <ul>
    <li>
      思路
      <ul>
        <li>bind函数返回一个新函数，故需要用函数科里化的思想。</li>
        <li>
          在直接执行函数实例的过程时，需要额外绑定this，否则this指向window。
          <ul>
            <li>箭头函数</li>
            <li>提前声明</li>
          </ul>
        </li>
        <li>注意参数，call是一个一个的进行传递。</li>
      </ul>
    </li>
  </ul>
  <h3 id="_2-方法二-借助apply" tabindex="-1">
    <a class="header-anchor" href="#_2-方法二-借助apply" aria-hidden="true"
      >#</a
    >
    2. 方法二 借助apply
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind4</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
      <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br />
    </div>
  </div>
  <ul>
    <li>
      思路
      <ul>
        <li>bind函数返回一个新函数，故需要用函数科里化的思想。</li>
        <li>
          在直接执行函数实例的过程时，需要额外绑定this，否则this指向window。
          <ul>
            <li>箭头函数</li>
            <li>提前声明</li>
          </ul>
        </li>
        <li>
          注意参数，apply是传递一个数组。<strong
            >这是用call和apply实现的唯一不同点。</strong
          >
        </li>
      </ul>
    </li>
  </ul>
  <h3 id="_3-方法三-自定义实现" tabindex="-1">
    <a class="header-anchor" href="#_3-方法三-自定义实现" aria-hidden="true"
      >#</a
    >
    3. 方法三 自定义实现
  </h3>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
      <span class="token keyword">let</span> func <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">!==</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
              context<span class="token punctuation">.</span>fn <span class="token operator">=</span> func<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
          <span class="token keyword">return</span> result
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
      ><br /><span class="line-number">15</span><br />
    </div>
  </div>
  <ul>
    <li>
      思路
      <ul>
        <li>
          bind返回一个执行函数，记录当前的执行函数this和当前的作用域。以及参数
        </li>
        <li>
          执行bind的返回函数，判断this。
          <ul>
            <li>如果指向window,则不是构造函数的new操作符。直接运行函数。</li>
            <li>
              如果不指向window，则是new操作。this指向新的实例对象。需要将函数体的作用域指向当前的this。
            </li>
          </ul>
        </li>
        <li>拼接参数，执行函数。</li>
        <li>删除作用域中的函数</li>
        <li>返回执行结果</li>
      </ul>
    </li>
  </ul>
</template>
