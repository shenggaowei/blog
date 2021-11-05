<template>
  <h1 id="bfc" tabindex="-1">
    <a class="header-anchor" href="#bfc" aria-hidden="true">#</a> bfc
  </h1>
  <h2 id="_1-概念" tabindex="-1">
    <a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1 概念
  </h2>
  <blockquote>
    <p>
      BLOCK FORMATTING CONTEXT(块级格式化上下文)
      BFC是web页面的可视化css渲染的一部分，是布局过程中生成的块级盒子区域，也是浮动元素与其他元素的交互限定区域。
      如果一个元素触发BFC元素，则BFC中的元素布局不受外部影响，可以把BFC当做一个箱子，箱子外面的元素不和箱子内的元素产生作用。
    </p>
  </blockquote>
  <h2 id="_2-如何生成bfc" tabindex="-1">
    <a class="header-anchor" href="#_2-如何生成bfc" aria-hidden="true">#</a> 2
    如何生成BFC
  </h2>
  <ol>
    <li>设置overflow不为visible</li>
    <li>设置浮动 float不为none</li>
    <li>设置position不为relative和static</li>
    <li>
      display 属性值为 table-cell 、 table-caption、inline-block的其中一个
    </li>
  </ol>
  <h2 id="_3-bfc的特点" tabindex="-1">
    <a class="header-anchor" href="#_3-bfc的特点" aria-hidden="true">#</a> 3
    BFC的特点
  </h2>
  <ol>
    <li>内部的box会在垂直方向上，一个接一个的放置</li>
    <li>Box垂直方向的距离由margin决定。属于同一个BFC的margin会发生重叠</li>
    <li>
      每个元素的左边缘(margin-left),与包含块的左边(contain box
      left)相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非该元素自己形成一个BFC
    </li>
    <li>BFC的区域不会与float box重叠</li>
    <li>
      BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
    </li>
    <li>计算BFC的高度时，浮动元素也参与计算</li>
  </ol>
  <h2 id="_4-bfc的应用" tabindex="-1">
    <a class="header-anchor" href="#_4-bfc的应用" aria-hidden="true">#</a> 4
    BFC的应用
  </h2>
  <ol>
    <li>特点6 清除浮动</li>
    <li>特点4 两栏布局(左边固定宽度，右边自适应)</li>
    <li>特点5 外包一层BFC 解决margin重叠问题</li>
  </ol>
</template>
