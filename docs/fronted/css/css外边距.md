# 深入理解CSS外边距折叠（margin collapse）
## 概念
> In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a collapsed margin.

> 在 css 中，两个或多个毗邻的普通流中的盒子（可能是父元素，也可能是兄弟元素）在垂直方向上的外边距会发生叠加，这种形成的外边距称之为**外边距叠加**。

> 关键字：毗邻、两个或多个、普通流、垂直方向

### 毗邻
> 毗邻说明了他们的位置关系，没有被padding、border、clear和line box分隔开。

### 两个或多个
> 两个或多个盒子是指元素之间的相互影响，单个元素不会存在外边距叠加的情况。

### 垂直方向
> 只有垂直方向的外边距会发生外边距叠加。水平方向的外边距不存在叠加的情况。

### 普通流（in flow）
> out of flow 的解释
> An element is called out of flow if it is floated, absolutely positioned, or is the root element.An element is called in-flow if it is not out-of-flow.
> **只要不是float、absolutely positioned和root element时就是in flow。**

## 什么时候发生外边距叠加
 两种情况
 1. 父子外边距叠加。
 2. 兄弟外边距叠加。
w3c 对毗邻的外边距的定义。
> Two margins are adjoining if and only if: - both belong to in-flow block-level boxes that participate in the same block formatting context - no line boxes, no clearance, no padding and no border separate them - both belong to vertically-adjacent box edges, i.e. form one of the following pairs:

符合折叠的情况
>1. top margin of a box and top margin of its first in-flow child
>2. bottom margin of box and top margin of its next in-flow following sibling
>3. bottom margin of a last in-flow child and bottom margin of its parent if the parent has "auto" computed height
>4. top and bottom margins of a box that does not establish a new block formatting context and that has zero computed "min-height", zero or "auto" computed "height", and no in-flow children

从w3c的解释可以看出，为以下几种情况。
1. parent 的 marginTop 和他的在文档流中的 firstChild 的marginTop。
2. box 的 marginBottom 和他在文档流中的下一个 brotherBox 的marginTop。
3. 在文档流中的 lastChild 的 marginBottom 和 parent 的marginBottom。parent的 height 属性为 'auto'。
4. 单独一个 box 的 marginTop 和 marginBottom 的重叠。同时满足以下三个条件。
    1. height 值为 0 或者 auto,或者 minHeight 值为0。
    2. 没有建立 BFC 区域。
    3. 没有**普通流流**的 children。

## 如何避免外边距叠加
只要破坏上面讲到的四个条件中的任何一个即可：`毗邻`、`两个或多个`、`普通流`和`垂直方向`

w3c也对此做了总结
> * Margins between a floated box and any other box do not collapse (not even between a float and its in-flow children).
> * Margins of elements that establish new block formatting contexts (such as floats and elements with "overflow" other than "visible") do not collapse with their in-flow children.
> * Margins of absolutely positioned boxes do not collapse (not even with their in-flow children).
> * Margins of inline-block boxes do not collapse (not even with their in-flow children).
> * The bottom margin of an in-flow block-level element always collapses with the top margin of its next in-flow block-level sibling, unless that sibling has clearance.
> * The top margin of an in-flow block element collapses with its first in-flow block-level child"s top margin if the element has no top border, no top padding, and the child has no clearance.
> * The bottom margin of an in-flow block box with a "height" of "auto" and a "min-height" of zero collapses with its last in-flow block-level child"s bottom margin if the box has no bottom padding and no bottom border and the child"s bottom margin does not collapse with a top margin that has clearance.
> * A box"s own margins collapse if the "min-height" property is zero, and it has neither top or bottom borders nor top or bottom padding, and it has a "height" of either 0 or "auto", and it does not contain a line box, and all of its in-flow children"s margins (if any) collapse.

从w3c的解释可以看出，可以用以下几种方式解决。
1. 浮动元素不会与任何元素发生叠加，包括它的子元素。
2. 创建了 BFC 的元素（ overFlow 不为 visible ）不会和他普通流子元素发生重叠。
3. 绝对定位的元素和其他任何元素不发生外边距叠加，也包括他的子元素。
4. inline-block 元素和其他任何元素之间不发生外边距叠加，也包括它的子元素。
5. 普通流中的块级元素的 margin-bottom 永远和它相邻的下一个块级元素的margin-top 叠加，除非相邻的兄弟元素 clear。
6. 普通流中的块级元素（没有 border-top、没有 padding-top）的 margin-top 和它的第一个普通流中的子元素（没有 clear ）发生margin-top 叠加。
7. 普通流中的块级元素（ height 为 auto、min-height 为0、没有border-bottom、没有 padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或 clear）发生 margin-bottom 叠加。
8. 普通流中的块级元素（ height 为 auto、min-height 为0、没有border-bottom、没有 padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或 clear）发生 margin-bottom叠加。
9. 如果一个元素的 min-height为0、没有 border、没有 padding、高度为0或者 auto、不包含子元素，那么它自身的外边距会发生叠加