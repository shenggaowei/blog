<template>
  <h1 id="js数据类型检测" tabindex="-1">
    <a class="header-anchor" href="#js数据类型检测" aria-hidden="true">#</a>
    JS数据类型检测
  </h1>
  <h3 id="typeof-操作符" tabindex="-1">
    <a class="header-anchor" href="#typeof-操作符" aria-hidden="true">#</a>
    typeof 操作符
  </h3>
  <blockquote>
    <p>只能用来检测基本类型的数值。引用类型会统一返回 object。</p>
  </blockquote>
  <ul>
    <li>函数：function</li>
    <li>数值：number</li>
    <li>字符串：string</li>
    <li>布尔值：boolean</li>
    <li>undefined:undefined</li>
    <li>对象：object</li>
    <li>正则：function (safari &lt; 5 || chrome &lt; 7)</li>
  </ul>
  <p>缺点：</p>
  <ol>
    <li>自定义构造函数会统一检测为 Object,无法具体判断构造函数的类型。</li>
  </ol>
  <h3 id="instanceof-操作符" tabindex="-1">
    <a class="header-anchor" href="#instanceof-操作符" aria-hidden="true">#</a>
    instanceof 操作符
  </h3>
  <blockquote>
    <p>
      只能用来检测引用类型，由于 js 规定所有引用类型的值都是 Object
      构造函数的实例，所以用 instanceof 检测基本类型的值，始终会返回 false。
      检测引用类型可以判断出该实例所属的构造函数。
    </p>
  </blockquote>
  <p>缺点：</p>
  <ol>
    <li>
      <strong>?</strong> 变量与构造函数必须在同一个作用域中 如果变量定义在其他的
      frame 中，在主框架中是无法进行检测的。需要进一步的尝试，没测出来。
    </li>
  </ol>
  <h3 id="tostring" tabindex="-1">
    <a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString
  </h3>
  <blockquote>
    <p>
      Object.prototype.toString.call(value)
      检测某个对象到底是原生对象还是开发人员自定义的对象
    </p>
  </blockquote>
  <blockquote>
    <p>
      在任何数据类型上调用 toString 方法，会返回 [object NativeConstructorName]
      的字符串。每个类在内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名。
    </p>
  </blockquote>
  <blockquote>
    <p>
      不能检测非原生构造函数的构造函数名。因此，开发人员定义的任何构造函数都将返回[object
      Object]
    </p>
  </blockquote>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <h3 id="constructor-vim-users-weishenggao-desktop-vim-png" tabindex="-1">
    <a
      class="header-anchor"
      href="#constructor-vim-users-weishenggao-desktop-vim-png"
      aria-hidden="true"
      >#</a
    >
    constructor![vim](/Users/weishenggao/Desktop/vim.png
  </h3>
  <blockquote>
    <p>
      判断实例的直接构造函数属性。适用于原生构造函数或者开发人员自定义的构造函数。
    </p>
  </blockquote>
</template>
