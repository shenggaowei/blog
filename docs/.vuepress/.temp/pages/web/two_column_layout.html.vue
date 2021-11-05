<template>
  <h1 id="两栏布局" tabindex="-1">
    <a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局
  </h1>
  <blockquote>
    <p>常用的后台布局方式。左侧固定，右侧宽度自适应屏幕。</p>
  </blockquote>
  <h2 id="实现方式" tabindex="-1">
    <a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式
  </h2>
  <ol>
    <li>BFC。运用 BFC 不和 float 块重叠的特点</li>
    <li>position 布局。right 块 absolute,让 left 为right的宽度</li>
    <li>自适应布局。right 不设置宽度。用 margin 撑开左边边距。</li>
    <li>flex 布局。right 设置 flex=1.left 设置 flex-shrink:0;</li>
    <li>
      运用 css 函数 calc。自动计算右侧的宽度。设置 right 的 width:calc(100% -
      left.width)。
    </li>
  </ol>
  <h2 id="代码实现" tabindex="-1">
    <a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现
  </h2>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br />
    </div>
  </div>
  <ul>
    <li>BFC</li>
  </ul>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>  <span class="token selector">.float-box</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.aside</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br />
    </div>
  </div>
  <ul>
    <li>postion 布局</li>
  </ul>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>  <span class="token selector">.float-box</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.aside</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br />
    </div>
  </div>
  <ul>
    <li>自适应布局</li>
  </ul>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>      <span class="token selector">.float-box</span> <span class="token punctuation">{</span>
          <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.aside</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
          <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.main</span> <span class="token punctuation">{</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br />
    </div>
  </div>
  <ul>
    <li>flex 布局</li>
  </ul>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>  <span class="token selector">.float-box</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.aside</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
      <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
      <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
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
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br /><span class="line-number">19</span><br />
    </div>
  </div>
  <ul>
    <li>cacl 计算</li>
  </ul>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>  <span class="token selector">.float-box</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.aside</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.main</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span>
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
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br />
    </div>
  </div>
</template>
