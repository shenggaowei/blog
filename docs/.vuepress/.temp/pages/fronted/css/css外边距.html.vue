<template>
  <h1 id="深入理解css外边距折叠-margin-collapse" tabindex="-1">
    <a
      class="header-anchor"
      href="#深入理解css外边距折叠-margin-collapse"
      aria-hidden="true"
      >#</a
    >
    深入理解CSS外边距折叠（margin collapse）
  </h1>
  <h2 id="概念" tabindex="-1">
    <a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念
  </h2>
  <blockquote>
    <p>
      In CSS, the adjoining margins of two or more boxes (which might or might
      not be siblings) can combine to form a single margin. Margins that combine
      this way are said to collapse, and the resulting combined margin is called
      a collapsed margin.
    </p>
  </blockquote>
  <blockquote>
    <p>
      在 css
      中，两个或多个毗邻的普通流中的盒子（可能是父元素，也可能是兄弟元素）在垂直方向上的外边距会发生叠加，这种形成的外边距称之为<strong>外边距叠加</strong>。
    </p>
  </blockquote>
  <blockquote>
    <p>关键字：毗邻、两个或多个、普通流、垂直方向</p>
  </blockquote>
  <h3 id="毗邻" tabindex="-1">
    <a class="header-anchor" href="#毗邻" aria-hidden="true">#</a> 毗邻
  </h3>
  <blockquote>
    <p>
      毗邻说明了他们的位置关系，没有被padding、border、clear和line box分隔开。
    </p>
  </blockquote>
  <h3 id="两个或多个" tabindex="-1">
    <a class="header-anchor" href="#两个或多个" aria-hidden="true">#</a>
    两个或多个
  </h3>
  <blockquote>
    <p>
      两个或多个盒子是指元素之间的相互影响，单个元素不会存在外边距叠加的情况。
    </p>
  </blockquote>
  <h3 id="垂直方向" tabindex="-1">
    <a class="header-anchor" href="#垂直方向" aria-hidden="true">#</a> 垂直方向
  </h3>
  <blockquote>
    <p>
      只有垂直方向的外边距会发生外边距叠加。水平方向的外边距不存在叠加的情况。
    </p>
  </blockquote>
  <h3 id="普通流-in-flow" tabindex="-1">
    <a class="header-anchor" href="#普通流-in-flow" aria-hidden="true">#</a>
    普通流（in flow）
  </h3>
  <blockquote>
    <p>
      out of flow 的解释 An element is called out of flow if it is floated,
      absolutely positioned, or is the root element. An element is called
      in-flow if it is not out-of-flow.
      <strong
        >只要不是float、absolutely positioned和root element时就是in
        flow。</strong
      >
    </p>
  </blockquote>
  <h2 id="什么时候发生外边距叠加" tabindex="-1">
    <a class="header-anchor" href="#什么时候发生外边距叠加" aria-hidden="true"
      >#</a
    >
    什么时候发生外边距叠加
  </h2>
  <p>两种情况</p>
  <ol>
    <li>父子外边距叠加。</li>
    <li>兄弟外边距叠加。 w3c 对毗邻的外边距的定义。</li>
  </ol>
  <blockquote>
    <p>
      Two margins are adjoining if and only if: - both belong to in-flow
      block-level boxes that participate in the same block formatting context -
      no line boxes, no clearance, no padding and no border separate them - both
      belong to vertically-adjacent box edges, i.e. form one of the following
      pairs:
    </p>
  </blockquote>
  <p>符合折叠的情况</p>
  <blockquote>
    <ol>
      <li>top margin of a box and top margin of its first in-flow child</li>
      <li>
        bottom margin of box and top margin of its next in-flow following
        sibling
      </li>
      <li>
        bottom margin of a last in-flow child and bottom margin of its parent if
        the parent has &quot;auto&quot; computed height
      </li>
      <li>
        top and bottom margins of a box that does not establish a new block
        formatting context and that has zero computed &quot;min-height&quot;,
        zero or &quot;auto&quot; computed &quot;height&quot;, and no in-flow
        children
      </li>
    </ol>
  </blockquote>
  <p>从w3c的解释可以看出，为以下几种情况。</p>
  <ol>
    <li>parent 的 marginTop 和他的在文档流中的 firstChild 的marginTop。</li>
    <li>box 的 marginBottom 和他在文档流中的下一个 brotherBox 的marginTop。</li>
    <li>
      在文档流中的 lastChild 的 marginBottom 和 parent 的marginBottom。parent的
      height 属性为 'auto'。
    </li>
    <li>
      单独一个 box 的 marginTop 和 marginBottom 的重叠。同时满足以下三个条件。
      <ol>
        <li>height 值为 0 或者 auto,或者 minHeight 值为0。</li>
        <li>没有建立 BFC 区域。</li>
        <li>没有<strong>普通流流</strong>的 children。</li>
      </ol>
    </li>
  </ol>
  <h2 id="如何避免外边距叠加" tabindex="-1">
    <a class="header-anchor" href="#如何避免外边距叠加" aria-hidden="true">#</a>
    如何避免外边距叠加
  </h2>
  <p>
    只要破坏上面讲到的四个条件中的任何一个即可： <code>毗邻</code> 、
    <code>两个或多个</code> 、 <code>普通流</code> 和 <code>垂直方向</code>
  </p>
  <p>w3c也对此做了总结</p>
  <blockquote>
    <ul>
      <li>
        Margins between a floated box and any other box do not collapse (not
        even between a float and its in-flow children).
      </li>
      <li>
        Margins of elements that establish new block formatting contexts (such
        as floats and elements with &quot;overflow&quot; other than
        &quot;visible&quot;) do not collapse with their in-flow children.
      </li>
      <li>
        Margins of absolutely positioned boxes do not collapse (not even with
        their in-flow children).
      </li>
      <li>
        Margins of inline-block boxes do not collapse (not even with their
        in-flow children).
      </li>
      <li>
        The bottom margin of an in-flow block-level element always collapses
        with the top margin of its next in-flow block-level sibling, unless that
        sibling has clearance.
      </li>
      <li>
        The top margin of an in-flow block element collapses with its first
        in-flow block-level child&quot;s top margin if the element has no top
        border, no top padding, and the child has no clearance.
      </li>
      <li>
        The bottom margin of an in-flow block box with a &quot;height&quot; of
        &quot;auto&quot; and a &quot;min-height&quot; of zero collapses with its
        last in-flow block-level child&quot;s bottom margin if the box has no
        bottom padding and no bottom border and the child&quot;s bottom margin
        does not collapse with a top margin that has clearance.
      </li>
      <li>
        A box&quot;s own margins collapse if the &quot;min-height&quot; property
        is zero, and it has neither top or bottom borders nor top or bottom
        padding, and it has a &quot;height&quot; of either 0 or
        &quot;auto&quot;, and it does not contain a line box, and all of its
        in-flow children&quot;s margins (if any) collapse.
      </li>
    </ul>
  </blockquote>
  <p>从w3c的解释可以看出，可以用以下几种方式解决。</p>
  <ol>
    <li>浮动元素不会与任何元素发生叠加，包括它的子元素。</li>
    <li>
      创建了 BFC 的元素（ overFlow 不为 visible ）不会和他普通流子元素发生重叠。
    </li>
    <li>绝对定位的元素和其他任何元素不发生外边距叠加，也包括他的子元素。</li>
    <li>
      inline-block 元素和其他任何元素之间不发生外边距叠加，也包括它的子元素。
    </li>
    <li>
      普通流中的块级元素的 margin-bottom
      永远和它相邻的下一个块级元素的margin-top 叠加，除非相邻的兄弟元素 clear。
    </li>
    <li>
      普通流中的块级元素（没有 border-top、没有 padding-top）的 margin-top
      和它的第一个普通流中的子元素（没有 clear ）发生margin-top 叠加。
    </li>
    <li>
      普通流中的块级元素（ height 为 auto、min-height
      为0、没有border-bottom、没有
      padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或
      clear）发生 margin-bottom 叠加。
    </li>
    <li>
      普通流中的块级元素（ height 为 auto、min-height
      为0、没有border-bottom、没有
      padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或
      clear）发生 margin-bottom叠加。
    </li>
    <li>
      如果一个元素的 min-height为0、没有 border、没有 padding、高度为0或者
      auto、不包含子元素，那么它自身的外边距会发生叠加
    </li>
  </ol>
</template>
