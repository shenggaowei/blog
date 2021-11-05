<template>
  <h1 id="正则表达式" tabindex="-1">
    <a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a>
    正则表达式
  </h1>
  <h2 id="一-定义" tabindex="-1">
    <a class="header-anchor" href="#一-定义" aria-hidden="true">#</a> 一 定义
  </h2>
  <h3 id="_1-概念" tabindex="-1">
    <a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1 概念
  </h3>
  <blockquote>
    <p>描述字符模式的对象</p>
  </blockquote>
  <h3 id="_2-创建方式" tabindex="-1">
    <a class="header-anchor" href="#_2-创建方式" aria-hidden="true">#</a> 2
    创建方式
  </h3>
  <ul>
    <li>字面量形式</li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">var</span> expression <span class="token operator">=</span> <span class="token operator">/</span>pattern<span class="token operator">/</span>flags
<span class="token comment">// pattern 需要匹配的字符串模式</span>
<span class="token comment">// flags 修饰符</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <ul>
    <li>构造函数的形式</li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">var</span> expression <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'[bc]at'</span><span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">)</span>
<span class="token comment">// 两个参数格式都是字符串。</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br />
    </div>
  </div>
  <p>注意</p>
  <ul>
    <li>
      第一个参数是模式字符串，因为字符串和正则表达式都是使用 \
      进行转转义，所以在第一个参数中，如果出现
      \，则需要双重转义。第二个是修饰符。
    </li>
    <li>
      字面量形式的正则已经创建便无法再去改变。可通过构造函数的形式来动态的生成一个正则实例。
    </li>
  </ul>
  <p>正则表达式中的特殊符号</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token comment">//元字符 </span>
<span class="token operator">^</span>
$ <span class="token operator">/</span> \ <span class="token operator">?</span> <span class="token operator">|</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">!</span> <span class="token operator">:</span>

    <span class="token comment">// 匹配 spiderMan</span>
    <span class="token keyword">let</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.piderMan</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 匹配 .spiderMan</span>
<span class="token keyword">let</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.spiderMan</span><span class="token regex-delimiter">/</span></span>
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
  <h3 id="_3-模式规则" tabindex="-1">
    <a class="header-anchor" href="#_3-模式规则" aria-hidden="true">#</a> 3
    模式规则
  </h3>
  <blockquote>
    <p>
      正则表达式的模式规则是由一个字符序列组成的。包括所有的字母和数字在内，绝大多数字符都是按照直接量仅描述待匹配的字符的。但对于一些具有特殊语义的字符，并不会按照字面意义去匹配。例如^
      $，分别用来对应字符串的开始和结束。
    </p>
  </blockquote>
  <ul>
    <li>
      <p>字符</p>
      <ul>
        <li>. 任意字符。除换行符和其他unicode行终止符</li>
        <li>\w 任何 ASCLL 字符组成的单词。[a-zA-Z0-9]</li>
        <li>\W 任何不是 ASCLL 字符组成的单词。 [^a-zA-Z0-9]</li>
        <li>\s 任何空白符</li>
        <li>\S 任何非空白字符</li>
        <li>\d 任何 ASCLL 数字，等价于 [0-9]</li>
        <li>\D 等价于 [^0-9]</li>
        <li>[...] 括号内的任意字符</li>
        <li>[^...] 不在括号内的任意字符</li>
      </ul>
    </li>
    <li>
      <p>重复性</p>
      <blockquote>
        <p>正则表达式中某元素的重复次数</p>
      </blockquote>
      <ul>
        <li>{n,m} 匹配<strong>前一项</strong>至少 n 次，最多 m 次。</li>
        <li>{n,} 匹配前一项至少 n 次</li>
        <li>{n} 匹配前一项 n 次</li>
        <li>? 匹配前一项 0-1 次。即 {0-1}</li>
        <li>+ 匹配前一项 1 次至多次。即 {1,}</li>
        <li>
          * 匹配前一项 0 至多次。即 {0,}
          贪婪性的重复。匹配重复的字符尽可能多的匹配字符,
          而且允许后续的正则表达式继续匹配。
          非贪婪性重复。在待匹配的字符后面跟着一个?，正则便会尽量少的匹配字符。
        </li>
      </ul>
      <p>
        // 贪婪匹配 let reg2 = /\d+/ let str2 = '123abc' let result2 =
        reg2.exec(str2) // 123
      </p>
    </li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>    <span class="token comment">// 贪婪匹配</span>
    <span class="token keyword">let</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">'123abc'</span>
    <span class="token keyword">let</span> result2 <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span> <span class="token comment">// 123 </span>

    <span class="token comment">// 非贪婪匹配</span>
    <span class="token keyword">let</span> reg3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+?</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token string">'123abc'</span>
    <span class="token keyword">let</span> result3 <span class="token operator">=</span> reg3<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span> <span class="token comment">// 1</span>

    <span class="token comment">//特例</span>
    <span class="token keyword">let</span> reg3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+?a</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token string">'123abc'</span>
    <span class="token keyword">let</span> result3 <span class="token operator">=</span> reg3<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span> <span class="token comment">// 123a</span>
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
      ><br />
    </div>
  </div>
  <pre><code>上面特例出现的原因是正则总是会寻找字符串中第一个可能匹配的位置。由于匹配是从字符串的第一个字符开始的。所以不会考虑字符串的子串中更短的匹配。
</code></pre>
  <ul>
    <li>
      <p>选择、分组和引用。</p>
      <ul>
        <li>选择符号 |</li>
      </ul>
      <p>
        // 贪婪匹配 let reg2 = /\d+/ let str2 = '123abc' let result2 =
        reg2.exec(str2) // 123
      </p>
    </li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">green|red</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'apple green'</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// green</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">

    从左到右匹配，直到发现了匹配项。如果符号左边的匹配项被匹配，则会自动忽略右边的匹配项。及时它右边的也会匹配。

    - 分组 ()
        * 作用
            1. 把单独的项组合成一个字表达式。以便可以用重复性字符或选择符来进行处理。
            2. 在完整的模式中引用子模式。当一个正则表达式成功地和目标字符串相匹配时，可以从目标串中抽出和圆括号中相匹配的部分。
            3. 允许在同一正则表达式的后部引用前面的子表达式。在执行过程中用 "\n" 来实现，n 代表圆括号的子表达式在正则表达式中的位置，同理，在执行过后，可通过 $n 来表示。就是参与计算的左括号的位置。

            </span><span class="token template-punctuation string">`</span></span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>
    js
    <span class="token comment">// 匹配 spider || spiderMan</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(spider)?Man</span><span class="token regex-delimiter">/</span></span>
    <span class="token comment">// 可获取圆括号中子表达式的子串</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\w+)\s(\w+)</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'spider Man'</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token comment">// 获取执行中的引用</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\w+)\s(\w+)\s\1</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'spider Man spider'</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token comment">// 获取执行过后引用</span>
    <span class="token keyword">let</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\w+)\s(\w+)</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'spider Man spider'</span>
    <span class="token keyword">let</span> replaceStr <span class="token operator">=</span> str2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg2<span class="token punctuation">,</span> <span class="token string">'$2 $1'</span><span class="token punctuation">)</span>
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
      ><br /><span class="line-number">25</span><br /><span class="line-number"
        >26</span
      ><br /><span class="line-number">27</span><br /><span class="line-number"
        >28</span
      ><br /><span class="line-number">29</span><br /><span class="line-number"
        >30</span
      ><br /><span class="line-number">31</span><br />
    </div>
  </div>
  <pre><code>        如果不想让组表达式产生引用。可以用 (?:) 来进行分组。
</code></pre>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>                <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:\w+)\s(\w+)\s\1</span><span class="token regex-delimiter">/</span></span>
                <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'spider Man Man'</span>
                <span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br />
    </div>
  </div>
  <pre><code>总结：| () (?:) \n  
</code></pre>
  <h3 id="_4-修饰符" tabindex="-1">
    <a class="header-anchor" href="#_4-修饰符" aria-hidden="true">#</a> 4 修饰符
  </h3>
  <blockquote>
    <p>对匹配的规则进行说明</p>
  </blockquote>
  <ul>
    <li>i (case-insensitive) 不区分大小写模式</li>
    <li>g (global) 模式应用于所有字符串，而非在发现第一个匹配时立即停止。</li>
    <li>
      m (multiline)
      多行模式。到达文本的末尾时会继续查找下一行中是否存在和模式匹配的串。
    </li>
  </ul>
  <h3 id="_5-正则实例的属性和方法" tabindex="-1">
    <a class="header-anchor" href="#_5-正则实例的属性和方法" aria-hidden="true"
      >#</a
    >
    5 正则实例的属性和方法
  </h3>
  <h4 id="_1-正则实例的属性" tabindex="-1">
    <a class="header-anchor" href="#_1-正则实例的属性" aria-hidden="true">#</a>
    1 正则实例的属性
  </h4>
  <ul>
    <li>source 只读 字符串 正则表达式的文本</li>
    <li>global 只读 布尔值 是否带有标志 g</li>
    <li>ignoreCase 只读 布尔值 是否带有标志 i</li>
    <li>multiline 只读 布尔值 是否带有标志 m</li>
    <li>
      lastIndex 可读写 整数 如果带有 g
      修饰符。表示开始搜索下一匹配项的字符位置，从 0 算起。
    </li>
  </ul>
  <h4 id="_2-正则实例的方法" tabindex="-1">
    <a class="header-anchor" href="#_2-正则实例的方法" aria-hidden="true">#</a>
    2 正则实例的方法
  </h4>
  <ul>
    <li>
      exec()
      <ul>
        <li>作用 在一个字符串中进行匹配检索。</li>
        <li>参数 引用字符串</li>
        <li>返回 包含第一个匹配项信息的数组。没有匹配项返回 null。</li>
        <li>
          特点
          <ul>
            <li>
              不设置 g 修饰符。多次匹配始终返回第一个匹配项。设置 g
              修饰符。下一次调用会在字符串中继续查找匹配项。
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>    <span class="token keyword">let</span> text2 <span class="token operator">=</span> <span class="token string">'cat, bat, sat, fat'</span>
    <span class="token keyword">let</span> pattern2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
    <span class="token keyword">let</span> result1 <span class="token operator">=</span> pattern2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span>
    <span class="token keyword">let</span> result2 <span class="token operator">=</span> pattern2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pattern2<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span>
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
  <p><img src="media/15753818851537/15755211639478.png" alt="-w477" /></p>
  <ul>
    <li>
      test()
      <ul>
        <li>作用 检测字符串是否与模式匹配</li>
        <li>参数 引用字符串</li>
        <li>返回 布尔值</li>
      </ul>
    </li>
  </ul>
  <h3 id="_6-可用于模式匹配的字符串方法" tabindex="-1">
    <a
      class="header-anchor"
      href="#_6-可用于模式匹配的字符串方法"
      aria-hidden="true"
      >#</a
    >
    6 可用于模式匹配的字符串方法
  </h3>
  <ul>
    <li>
      search()
      <ul>
        <li>作用 返回第一个与之匹配的子串的起始位置</li>
        <li>参数 正则表达式</li>
        <li>返回 第一个子串所匹配的起始位置。找不到返回 -1</li>
        <li>
          特性
          <ul>
            <li>
              如果参数不是正则表达式，会默认同 RegExp 将它转换成正则表达式
            </li>
          </ul>
        </li>
        <li>
          缺点
          <ul>
            <li>不支持全局检索。它会忽略正则表达式参数中的修饰符 g。</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre v-pre class="language-javascript"><code>
    <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">man</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'spider man'</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span> <span class="token comment">// 7</span>

</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <ul>
    <li>
      replace(reg, str)
      <ul>
        <li>作用 执行字符串的检索和替换操作</li>
        <li>参数 第一个是正则表达式，第二个是要进行替换的字符串</li>
        <li>
          返回
          返回一个新字符串。其中，与源串中模式匹配的子串，将会被第二个参数替换
        </li>
        <li>
          特性
          <ul>
            <li>
              可以设置修饰符 g。
              <ul>
                <li>设置g。所有与模式匹配的子串都将会被替换</li>
                <li>不设置g。只替换所匹配的第一个子串</li>
              </ul>
            </li>
            <li>
              如果第一个参数不是正则表达式，责会直接搜索这个字符串，不会调用构造函数强转
            </li>
            <li>
              第二个参数中如果出现了 $n
              字符，将会用指定的子表达式相匹配的文本来替换这两个字符
            </li>
            <li>第二个参数可以是一个函数，该函数能动态地计算替换字符串</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      match(reg)
      <ul>
        <li>作用 检索返回一个字符串匹配正则表达式的结果</li>
        <li>参数 正则表达式</li>
        <li>
          返回
          <ul>
            <li>未使用g，返回第一个完整匹配及其相关匹配组。格式为数组</li>
            <li>使用g,返回与完整表达式匹配的所有结果，但不会返回捕获组。</li>
          </ul>
        </li>
        <li>
          特性
          <ul>
            <li>
              如果参数不是正则表达式，则会隐士的调用构造函数创建一个正则对象
            </li>
            <li>如果不设置 g 标志，返回值与 exec 方法一致。</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      split(spa, limit)
      <ul>
        <li>作用 用指定的分隔符将字符串分割成一个字符串数组</li>
        <li>
          参数
          <ul>
            <li>spa 分隔符。可以为字符串或者正则</li>
            <li>limit 一个整数，限定返回的分割片段数量</li>
          </ul>
        </li>
        <li>返回 源字符串以分隔符出现位置分隔而成的一个 Array</li>
      </ul>
    </li>
  </ul>
</template>
