<template>
  <h1 id="函数式编程" tabindex="-1">
    <a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a>
    函数式编程
  </h1>
  <p>
    “面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩...
    以及整个丛林”。
  </p>
  <h2 id="函数是一等公民" tabindex="-1">
    <a class="header-anchor" href="#函数是一等公民" aria-hidden="true">#</a>
    函数是一等公民
  </h2>
  <h3 id="概念" tabindex="-1">
    <a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念
  </h3>
  <p>
    一等公民 ==
    普通公民，<strong>把函数当做普通的对象对待</strong>，所以可以把函数存在数组里，当做参数传递，赋值给变量...
  </p>
  <h3 id="为何钟爱一等公民" tabindex="-1">
    <a class="header-anchor" href="#为何钟爱一等公民" aria-hidden="true">#</a>
    为何钟爱一等公民？
  </h3>
  <ul>
    <li>删除不必要的函数包装。此时在代码维护时，对函数的改动量相对较小。</li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// 还凑活</span>
<span class="token function">httpGet</span><span class="token punctuation">(</span><span class="token string">"/post/2"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">renderPost</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 难受</span>
<span class="token function">httpGet</span><span class="token punctuation">(</span><span class="token string">"/post/2"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">json<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">renderPost</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 舒服还装逼</span>
<span class="token function">httpGet</span><span class="token punctuation">(</span><span class="token string">"/post/2"</span><span class="token punctuation">,</span> renderPost<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// renderPost 将会在 httpGet 中调用，想要多少参数都行</span>
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
  <ul>
    <li>
      对于通用代码，给函数的参数命名时，不局限在特定的业务数据中。避免在单一项目中，重复造轮子的现象发生。
    </li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">// 只针对当前的博客</span>
<span class="token keyword">const</span> <span class="token function-variable function">validArticles</span> <span class="token operator">=</span> <span class="token parameter">articles</span> <span class="token operator">=></span>
    articles<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">article</span> <span class="token operator">=></span> article <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> article <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 对未来的项目更友好</span>
    <span class="token keyword">const</span> <span class="token function-variable function">compact</span> <span class="token operator">=</span> <span class="token parameter">xs</span> <span class="token operator">=></span> xs<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <ul>
    <li><strong>?</strong> 函数式编程中。尽量不使用 this。</li>
  </ul>
  <h2 id="纯函数的好处" tabindex="-1">
    <a class="header-anchor" href="#纯函数的好处" aria-hidden="true">#</a>
    纯函数的好处
  </h2>
  <h3 id="纯函数概念" tabindex="-1">
    <a class="header-anchor" href="#纯函数概念" aria-hidden="true">#</a>
    纯函数概念
  </h3>
  <blockquote>
    <p>
      纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。
    </p>
  </blockquote>
  <p><strong>Array.prototype.slice vs Array.prototype.splice</strong></p>
  <ol>
    <li>
      <p>
        slice 返回
        [start,end)长度的数组。由于函数的执行不改变原数组，所以对同一数组，执行相同的输入，必然会获得相同的输出。
      </p>
    </li>
    <li>
      <p>
        splice
        从指定数组位置开始，截取数组指定长度的子项，返回由子项构成的新数组。然而原数组却会被改变。所以，对同一个数组使用
        splice 方法，每一次的返回值都不尽相同。
      </p>
    </li>
  </ol>
  <h3 id="副作用概念" tabindex="-1">
    <a class="header-anchor" href="#副作用概念" aria-hidden="true">#</a>
    副作用概念
  </h3>
  <blockquote>
    <p>
      副作用是在计算结果的过程中，系统状态的一种变化，或者与外部环境进行可观察的交互。
    </p>
  </blockquote>
  <p>
    函数内部的初始变量理论上只能从形参中获取。与外部环境的变量发生了交互，被称为副作用。
  </p>
  <p>函数式编程的哲学就是假定副作用是造成不正当行为的主要原因。</p>
  <p>
    副作用让一个函数变得不纯是有道理的：从定义上来说，纯函数必须要能够根据相同的输入返回相同的输出；如果函数需要跟外部事物打交道，那么就无法保证这一点了。
  </p>
  <p>副作用可能包含：</p>
  <ul>
    <li>函数的入参被修改</li>
    <li>内部含有可变的数据 math.random ...</li>
    <li>获取用户的输入</li>
    <li>访问系统状态</li>
    <li>发送一个 http 请求</li>
    <li>更改文件系统</li>
    <li>数据库中插入一条记录</li>
    <li>打印 / log</li>
  </ul>
  <h3 id="纯函数的好处-1" tabindex="-1">
    <a class="header-anchor" href="#纯函数的好处-1" aria-hidden="true">#</a>
    纯函数的好处
  </h3>
  <ul>
    <li>可缓存性 (Cacheable)</li>
  </ul>
  <p>
    因为输入和输出是一对一的对应关系。所以可以依据输入来做缓存，典型的方式是
    memoize 技术。
  </p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">f</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> func <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>getTotal<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回一个发送 http 请求的函数。也是纯函数。</span>
<span class="token keyword">let</span> pureHttpCall <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br /><span class="line-number">25</span><br />
    </div>
  </div>
  <ul>
    <li>可移植性 / 自文档化</li>
  </ul>
  <p>
    纯函数仅从签名（形参）就可以获取到足够多的信息。不纯的函数不会知道内部对这些依赖会有什么影响。
  </p>
  <p>
    在 js 的设定中，可移植性意味着可以把函数序列化并通过 socket
    发送。也可以意味着代码能够在 web workers 中运行。
  </p>
  <p>
    命令式编程中“典型”的方法和过程都深深地根植于他们所在的环境之中，通过状态、依赖和有效作用达成。纯函数则与此相反，它与环境无关，只要我们愿意，可以在任何地方运行他。
  </p>
  <ul>
    <li>可测试性</li>
  </ul>
  <p>jest || quickcheck</p>
  <ul>
    <li>合理性</li>
  </ul>
  <p>
    引用透明性：如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么我们就说这段代码是引用透明的。
  </p>
  <p>
    等式推导：“一对一替换”，相当于手动执行代码，将函数的实参套入所调用函数表达式或者函数声明的执行代码中。
    等式推导带来的分析代码的能力对<strong>重构和理解代码</strong>非常重要。
  </p>
  <ul>
    <li>并行代码</li>
  </ul>
  <p>
    因为纯函数无副作用，且不需要访问共享的内存，而却根据其定义，纯函数也不会因副作用而进入竞争状态。
  </p>
  <p>
    <strong>?</strong> 并行代码在服务端 js 环境以及使用了 web worker
    的浏览器那里是非常容易实现的，因为它们使用了线程（thread）。不过出于对非纯函数复杂度的考虑，当前主流观点还是避免使用这种并行。
  </p>
</template>
