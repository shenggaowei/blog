# bfc

## 1 概念

> BLOCK FORMATTING CONTEXT(块级格式化上下文)
> BFC 是 web 页面的可视化 css 渲染的一部分，是布局过程中生成的块级盒子区域，也是浮动元素与其他元素的交互限定区域。
> 如果一个元素触发 BFC 元素，则 BFC 中的元素布局不受外部影响，可以把 BFC 当做一个箱子，箱子外面的元素不和箱子内的元素产生作用。

## 2 如何生成 BFC

1. 设置 overflow 不为 visible
2. 设置浮动 float 不为 none
3. 设置 position 不为 relative 和 static
4. display 属性值为 table-cell 、 table-caption、inline-block 的其中一个

## 3 BFC 的特点

1. 内部的 box 会在垂直方向上，一个接一个的放置
2. Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的 margin 会发生重叠
3. 每个元素的左边缘(margin-left),与包含块的左边(contain box left)相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非该元素自己形成一个 BFC
4. BFC 的区域不会与 float box 重叠
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
6. 计算 BFC 的高度时，浮动元素也参与计算

## 4 BFC 的应用

1. 特点 6 清除浮动
2. 特点 4 两栏布局(左边固定宽度，右边自适应)
3. 特点 5 外包一层 BFC 解决 margin 重叠问题
