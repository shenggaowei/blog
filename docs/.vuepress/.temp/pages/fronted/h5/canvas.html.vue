<template>
  <h1 id="canvas-画布" tabindex="-1">
    <a class="header-anchor" href="#canvas-画布" aria-hidden="true">#</a> canvas
    画布
  </h1>
  <h2 id="_1-准备工作" tabindex="-1">
    <a class="header-anchor" href="#_1-准备工作" aria-hidden="true">#</a> 1
    准备工作
  </h2>
  <ol>
    <li>html 中设置画布</li>
    <li>js 中获取画布</li>
    <li>获取画笔</li>
  </ol>
  <div class="language-html ext-html line-numbers-mode">
    <pre
      v-pre
      class="language-html"
    ><code>  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>基础的Canvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas-warp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #aaaaaa<span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              你的浏览器不支持 canvas, 快点换吧
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
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
  <h2 id="_2-画一条线段" tabindex="-1">
    <a class="header-anchor" href="#_2-画一条线段" aria-hidden="true">#</a> 2
    画一条线段
  </h2>
  <p>canvas 是基于状态的绘制。</p>
  <ol>
    <li>设置画笔所描绘线条的状态，例如起始点，颜色和粗细。</li>
    <li>通过 stroke 开始描绘，fill 进行填充。</li>
  </ol>
  <h3 id="_2-1-设置画布的大小" tabindex="-1">
    <a class="header-anchor" href="#_2-1-设置画布的大小" aria-hidden="true"
      >#</a
    >
    2.1 设置画布的大小
  </h3>
  <ol>
    <li>通过 canvas 标签的 width 或者 height 属性进行设置。</li>
    <li>获取画布，通过 context.width 或者 context.height 进行设置。</li>
  </ol>
  <h3 id="_2-2-设置绘制的起始和结束" tabindex="-1">
    <a
      class="header-anchor"
      href="#_2-2-设置绘制的起始和结束"
      aria-hidden="true"
      >#</a
    >
    2.2 设置绘制的起始和结束
  </h3>
  <ol>
    <li>在每次绘制之前，通过 context.beginPath() 来标志下次绘画的开始。</li>
    <li>
      在绘制转态描述完成之后，通过 context.closePath() 来标志当前绘画的结束。
    </li>
  </ol>
  <h4 id="注意点" tabindex="-1">
    <a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点
  </h4>
  <p>
    如果不设置 closePath，多次调用 stroke
    方法去绘制图形时，后面的绘制状态会将前面的覆盖，例如线条颜色和宽度等，都和最后一个状态一致。
  </p>
  <h3 id="_3-线条属性" tabindex="-1">
    <a class="header-anchor" href="#_3-线条属性" aria-hidden="true">#</a> 3
    线条属性
  </h3>
  <h4 id="_3-1-linecap" tabindex="-1">
    <a class="header-anchor" href="#_3-1-linecap" aria-hidden="true">#</a> 3.1
    lineCap
  </h4>
  <ul>
    <li>butt: 默认值，垂直于线段边缘</li>
    <li>round: 以线宽为半径的半圆</li>
    <li>square: 以线宽为长，线宽一半为宽的矩形</li>
  </ul>
  <p>
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/h5/canvas/linejoin.jpg"
      alt="lineJoin"
    />
  </p>
</template>
