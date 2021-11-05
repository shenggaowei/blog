<template>
  <h1 id="float" tabindex="-1">
    <a class="header-anchor" href="#float" aria-hidden="true">#</a> float
  </h1>
  <h2 id="概念" tabindex="-1">
    <a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念
  </h2>
  <p>定义</p>
  <blockquote>
    <p>
      取值：left | right | none 初始值： none 适用于：所有元素 计算值：指定的值
      继承性：否 动画性：否
    </p>
  </blockquote>
  <h2 id="浮动的元素" tabindex="-1">
    <a class="header-anchor" href="#浮动的元素" aria-hidden="true">#</a>
    浮动的元素
  </h2>
  <ol>
    <li>
      浮动的元素脱离了文档流，但对布局仍然有影响。
      <ul>
        <li>原因是因为其他内容将围绕着他流动。</li>
      </ul>
    </li>
    <li>浮动元素四周的外边距不折叠。</li>
    <li>
      浮动的非置换元素，要为元素设定宽度。否则，根据css规范，元素的宽度趋近于
      0。
    </li>
    <li>
      float:none 彻底禁止元素浮动。使用场景如下：
      <ol>
        <li>元素默认为 none。初始化元素的默认状态。</li>
        <li>在内联样式中强制修改元素的浮动属性。</li>
      </ol>
    </li>
  </ol>
  <h2 id="浮动详解" tabindex="-1">
    <a class="header-anchor" href="#浮动详解" aria-hidden="true">#</a> 浮动详解
  </h2>
  <ol>
    <li>浮动元素的坐（或右）外边界不能超过容纳块的左（或右）内边界。</li>
    <li>
      文档中浮动的元素，后面的将靠近前面的外边界。不会发生重叠。
      <ol>
        <li>
          ?
          除非后一个元素的顶边在前一个元素的底边以下。那么后浮动的元素将会将直达父元素的内边界。
        </li>
      </ol>
    </li>
    <li>属性为 left 和 right 的元素不会发生重叠。</li>
    <li>
      浮动元素的顶边不能超过父元素的内顶边高。？如果浮动元素位于两个折叠的外边距之间，在两个元素之间放置时，将视其有个块级元素。
    </li>
    <li>浮动元素的顶边不能比任何一个浮动元素或者块级元素的顶边高。</li>
    <li>
      ？浮动元素的顶边不能高于文档源码中出现在浮动元素之前的元素生成的框体所在的行框的顶边。
    </li>
    <li>浮动元素不能超出容纳元素的边界。</li>
  </ol>
</template>
