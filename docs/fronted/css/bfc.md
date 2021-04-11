# bfc

##  1 概念

> BLOCK FORMATTING CONTEXT(块级格式化上下文)
> BFC是web页面的可视化css渲染的一部分，是布局过程中生成的块级盒子区域，也是浮动元素与其他元素的交互限定区域。
> 如果一个元素触发BFC元素，则BFC中的元素布局不受外部影响，可以把BFC当做一个箱子，箱子外面的元素不和箱子内的元素产生作用。

## 2 如何生成BFC

  1. 设置overflow不为visible
  2. 设置浮动 float不为none
  3. 设置position不为relative和static
  4. display 属性值为 table-cell 、 table-caption、inline-block的其中一个

## 3 BFC的特点

1. 内部的box会在垂直方向上，一个接一个的放置
2. Box垂直方向的距离由margin决定。属于同一个BFC的margin会发生重叠
3. 每个元素的左边缘(margin-left),与包含块的左边(contain box left)相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非该元素自己形成一个BFC
4. BFC的区域不会与float box重叠
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
6. 计算BFC的高度时，浮动元素也参与计算

## 4 BFC的应用

1. 特点6 清除浮动
2. 特点4 两栏布局(左边固定宽度，右边自适应)
3. 特点5 外包一层BFC 解决margin重叠问题
