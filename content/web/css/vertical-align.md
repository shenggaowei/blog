# vertical-align

> 用来指定行内元素或表格元素的垂直对齐方式

### 相对父元素的值

- **baseline**
  - 使元素的基线与父元素的基线对齐。HTML 规范没有详细说明部分可替换元素的基线，如 textarea，这意味着这些元素使用此值的表现因浏览器而异。
- **middle**
  - 使元素的中部与父元素的基线加上父元素 x-height（译注：x 高度）的一半对齐。
- **sub**
  - 使元素的基线与父元素的下标基线对齐。
- **super**
  - 使元素的基线与父元素的上标基线对齐。
- **text-top**
  - 使元素的顶部与父元素的字体顶部对齐。
- **text-bottom**
  - 使元素的底部与父元素的字体底部对齐。

### 相对行的值

- **top**

  - 使元素极其后代元素的顶部与整行的顶部对齐。

- **bottom**

  - 使元素及其后代元素的底部与整行的底部对齐。

  没有基线的元素，使用外边距的下边缘替代。

### baseLine

#### 1、baseLine 的含义

![屏幕快照 2019-08-31 下午3.11.20](https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588055-b7ea8ea2-1cf6-4707-9168-43f55900ac5a.png)

#### 2、baseLine 的确定规则

    1. inline-table 的 baseline 是他的table的第一行的 baseline
    2. 父元素 [line box] 的 baseline 是最后一个 line box 的 baseline。
    3. inline-block 元素的 baseline 确定规则
        1. inline-block 元素，如果内部有 line box，则 inline-block 元素的 baseline 就是最后一个作为内容存在的元素 [inline box] 的 baseline，而这个元素的 baseline 的确定就要根据它自身来定了。
        2. inline-block 元素，如果内部没有 line box 或他的 overflow 属性是 visible 以外的值,那么 baseline 将是这个 inline-block 元素的 margin 边界。

#### 3、inline-block 的例子

- 子元素为行内块，里面无行内框。

```html
<style type="text/css">
  .ctn-block {
    background-color: #bbb;
    height: 500px;
    text-align: center;
  }

  .ctn-block .child {
    display: inline-block;
    width: 100px;
    height: 200px;
    background: orange;
  }
</style>

<body>
  <div class="ctn-block">
    x
    <div class="child"></div>
  </div>
</body>
```

![屏幕快照 2019-08-31 下午5.04.28](https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588471-e860ff7b-3e9b-4c8b-ad24-dad99d821609.png)

原因：

- 依照规则 2。父元素的基线是最后一个行内框的基线。
- 最后一个行内框为一个行内块。先判断该行内块 overflow 属性不是 visiable 以外的值，然后确定其内部没有行内框，得出该元素的基线是底部 margin 齐平。
- 父元素的基线就是黄色块的底部 margin。

- 子元素为行内块，里面有行内框。

```html
<style type="text/css">
  .ctn-block {
    background-color: #bbb;
    height: 500px;
    text-align: center;
  }

  .ctn-block .child {
    display: inline-block;
    width: 100px;
    height: 200px;
    background: orange;
  }
</style>

<body>
  <div class="ctn-block">
    x
    <div class="child">x</div>
  </div>
</body>
```

![屏幕快照 2019-08-31 下午5.15.10](https://cdn.nlark.com/yuque/0/2019/png/200613/1577288588999-32abbc2c-f2c9-4578-92c7-f70d6d5c95b2.png)

原因：

    - 依照规则2。父元素的基线是最后一个行内框的基线。最后一个行内框为一个行内块。
    - 先判断得出该行内块 overflow 属性不是 visiable，然后确定其有一个作为内容存在的元素，所以当前行内框的baseline就是最后一个作为内容存在的元素的baseline，也就是内容 x 的baseline,默认是 x 的底部。
    - 所以当前父元素的基线是内容区 x 的底部。

- 子元素有行内块，且其 overflow 属性为 hidden。

  则子元素的基线是底部 margin。所以相应的父元素的基线是底部 margin。

#### inline-block 元素下方有空隙。

- 垂直空隙

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
      }

      ul {
        background-color: bisque;
      }

      .box {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: aliceblue;
      }
    </style>
  </head>

  <body>
    <ul>
      <li class="box"></li>
      <li class="box"></li>
      <li class="box"></li>
      <span>x</span>
    </ul>
  </body>
</html>
```

![屏幕快照 2019-08-31 下午5.53.01](https://cdn.nlark.com/yuque/0/2019/png/200613/1577288589382-a2209353-b6bd-442b-ad24-53510822752e.png)

出现的原因:li 为行内块，且其 vertical-align 属性默认为 baseline, 也就是字母 x 的底边，而相对于 s、y 等一些较高的字母，其底部会长一下，所以 baseline 的下方会给字母的一部分留出空间，因此会产生间隙。解决方法，就是\*\*改变 line box 的 baseline 位置，比如设置 li 的 vertical-align 为 middle。如下所示。

![屏幕快照 2019-08-31 下午5.58.34](https://cdn.nlark.com/yuque/0/2019/png/200613/1577288589417-818ecd5e-3db1-4d4f-b3e6-47bcb418a2fd.png)

- 左右间隙

  出现原因:li 元素的水平空隙是因为换行引起的，这个换行会变成一个空白，这个空白会被解析为 DOM 中的文本节点。
  解决办法：

      1. li 前后兄弟元素连起来书写。
      2. 用注释来代替空白，注释节点默认在渲染的时候是不渲染的。
