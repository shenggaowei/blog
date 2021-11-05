<template>
  <h1 id="differences-between-type-aliases-and-interfaces" tabindex="-1">
    <a
      class="header-anchor"
      href="#differences-between-type-aliases-and-interfaces"
      aria-hidden="true"
      >#</a
    >
    Differences Between Type Aliases and interfaces
  </h1>
  <p>
    type 和 interfaces 是非常接近的，在许多场合你可以随意选择他们使用。几乎
    interface 的功能 type 都有，唯一区别是 type
    在定义过后不能再添加属性，interface 总是可以扩展的。
  </p>
  <h2 id="不同点" tabindex="-1">
    <a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点
  </h2>
  <h3
    id="_1-interface-只能定义结构类型-type-可以既可以定义结构类型-也可以定义基本类型。"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#_1-interface-只能定义结构类型-type-可以既可以定义结构类型-也可以定义基本类型。"
      aria-hidden="true"
      >#</a
    >
    1 interface 只能定义结构类型，type
    可以既可以定义结构类型，也可以定义基本类型。
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">interface</span> <span class="token class-name">AnObject1</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">AnObject2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">EvenNumber</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token comment">// 联合类型</span>
<span class="token keyword">type</span> <span class="token class-name">Pet</span> <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat<span class="token punctuation">;</span>

<span class="token comment">// 元组类型</span>
<span class="token keyword">type</span> <span class="token class-name">PetList</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// error 'string' only refers to a type, but is being used as a value here.</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">X</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
      ><br />
    </div>
  </div>
  <h3
    id="_2-interface-可以将多个同类型的声明进行合并。type-不可以。"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#_2-interface-可以将多个同类型的声明进行合并。type-不可以。"
      aria-hidden="true"
      >#</a
    >
    2 interface 可以将多个同类型的声明进行合并。type 不可以。
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">interface</span> <span class="token class-name">Mammal</span> <span class="token punctuation">{</span>
  genus<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Mammal</span> <span class="token punctuation">{</span>
  breed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> animal<span class="token operator">:</span> Mammal <span class="token operator">=</span> <span class="token punctuation">{</span>
  genus<span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span>
  breed<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Reptile</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  genus<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// error: Duplicate identifier 'Reptile'.</span>
<span class="token keyword">type</span> <span class="token class-name">Reptile</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  breed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
      ><br /><span class="line-number">21</span><br />
    </div>
  </div>
  <h3
    id="_3-interface-可以被-class-implements。换句话说-class-可以实现某一个接口"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#_3-interface-可以被-class-implements。换句话说-class-可以实现某一个接口"
      aria-hidden="true"
      >#</a
    >
    3 interface 可以被 class implements。换句话说， class 可以实现某一个接口
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Car alert"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <h2 id="相同点" tabindex="-1">
    <a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点
  </h2>
  <h3 id="_1-都可以定义一个对象或者函数。" tabindex="-1">
    <a
      class="header-anchor"
      href="#_1-都可以定义一个对象或者函数。"
      aria-hidden="true"
      >#</a
    >
    1 都可以定义一个对象或者函数。
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

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
      ><br />
    </div>
  </div>
  <h3 id="_2-都可以被扩展。" tabindex="-1">
    <a class="header-anchor" href="#_2-都可以被扩展。" aria-hidden="true">#</a>
    2 都可以被扩展。
  </h3>
  <div class="language-typescript ext-ts line-numbers-mode">
    <pre
      v-pre
      class="language-typescript"
    ><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  fly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Animal2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Bird2</span> <span class="token operator">=</span> Animal2 <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  fly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
  <h2 id="interface-和-type-究竟应该如何选择呢" tabindex="-1">
    <a
      class="header-anchor"
      href="#interface-和-type-究竟应该如何选择呢"
      aria-hidden="true"
      >#</a
    >
    interface 和 type 究竟应该如何选择呢？
  </h2>
</template>
