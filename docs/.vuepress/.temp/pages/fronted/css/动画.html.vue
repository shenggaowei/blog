<template>
  <h1 id="动画和过渡" tabindex="-1">
    <a class="header-anchor" href="#动画和过渡" aria-hidden="true">#</a>
    动画和过渡
  </h1>
  <h2 id="动画" tabindex="-1">
    <a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画
  </h2>
  <h3 id="keyframes-规则" tabindex="-1">
    <a class="header-anchor" href="#keyframes-规则" aria-hidden="true">#</a>
    @keyframes 规则
  </h3>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code><span class="token atrule"><span class="token rule">@keyframes</span> animationname</span> <span class="token punctuation">{</span>
    <span class="token selector">keyframes-selector</span> <span class="token punctuation">{</span>
        css-styles<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br />
    </div>
  </div>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>        <span class="token atrule"><span class="token rule">@keyframes</span> dh</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">25%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">50%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> dh 3s<span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <ol>
    <li>以百分比来规定改变发生的时间。或者用 from(0%) to(100%)语义化代替。</li>
    <li>
      当在 @keyframes
      中创建动画时，必须把它捆绑到某个选择器上，否则不会产生动画效果。
    </li>
  </ol>
  <h3 id="animation" tabindex="-1">
    <a class="header-anchor" href="#animation" aria-hidden="true">#</a>
    animation
  </h3>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code><span class="token property">animation</span><span class="token punctuation">:</span> name duration timing-function delay iteration-count direction<span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers"><span class="line-number">1</span><br /></div>
  </div>
  <ul>
    <li>animation-name ： 规定需要绑定到选择器的 keyframe 名称。</li>
    <li>
      animation-duration ：规定完成动画所花费的时间，以秒或毫秒计（默认是0)。
    </li>
    <li>animation-timing-function：规定动画的速度曲线。默认是 ease。</li>
    <li>animation-delay ： 规定在动画开始之前的延迟。</li>
    <li>
      animation-iteration-count：规定动画应该播放的次数。
      默认是1，无限次则设置为infinite。
    </li>
    <li>
      animation-direction：（normal 默认 |
      alternate）规定是否应该轮流反向播放动画。设置播放次数为多次时，当执行到奇数次时正向运行，当运行到偶数次时逆向进行。正反两个来回。
    </li>
    <li>
      animation-play-state：（running 默认 |
      paused）规定动画正在运行还是暂停。可以在 js 中控制该属性。
    </li>
    <li>animation-fill-mode: none | forwards | backwards | both;</li>
  </ul>
  <h2 id="css-过渡" tabindex="-1">
    <a class="header-anchor" href="#css-过渡" aria-hidden="true">#</a> css 过渡
  </h2>
  <h3 id="概念和用法" tabindex="-1">
    <a class="header-anchor" href="#概念和用法" aria-hidden="true">#</a>
    概念和用法
  </h3>
  <blockquote>
    <p>
      transition: 过度属性的名称 过度所花费的时间 过渡效果的时间曲线
      规定过渡效果何时开始, ...
    </p>
  </blockquote>
  <ol>
    <li>如果时长未规定，则不会有过渡效果，因为默认值是 0。</li>
    <li>效果开始于指定的 CSS 属性改变值时。</li>
    <li>如需向多个样式添加过渡效果，添加多个属性，由逗号隔开。</li>
  </ol>
  <div class="language-css ext-css line-numbers-mode">
    <pre
      v-pre
      class="language-css"
    ><code>        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> transform linear 3s<span class="token punctuation">,</span> width 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>3000deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <h3 id="分开使用" tabindex="-1">
    <a class="header-anchor" href="#分开使用" aria-hidden="true">#</a> 分开使用
  </h3>
  <div class="language-css ext-css line-numbers-mode">
    <pre v-pre class="language-css"><code>    //应用过渡效果的 CSS 属性的名称
    <span class="token property">transition-property</span><span class="token punctuation">:</span>none|all|property<span class="token punctuation">;</span>

    //完成过渡效果需要花费的时间（以秒或毫秒计） 默认为0 不会有效果
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> time<span class="token punctuation">;</span>

    //属性规定过渡效果的速度曲线。 默认为 ease
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span>linear|ease|ease-in|ease-out|ease-in-out|<span class="token function">cubic-bezier</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n<span class="token punctuation">,</span> n<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    //属性规定过渡效果何时开始<span class="token punctuation">(</span>以秒或毫秒计<span class="token punctuation">)</span>。 默认为0
    <span class="token property">transition-delay</span><span class="token punctuation">:</span> time<span class="token punctuation">;</span>
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
</template>
