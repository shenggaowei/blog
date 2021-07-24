# 图片在盒子内上下左右居中对齐

### 1. vertical-align middle处理居中

```html
<style>
    .box {
        width: 200px;
        height: 400px;
        background: yellow;
        text-align: center;
    }

    .box .child {
        width: 100px;
        height: 100px;
        background: orange;
        display: inline-block;
        vertical-align: middle;
    }

    .box .flag {
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }
</style>

<body>
    <div class="box">
        <span class="flag"></span>
        <img src="https://images2015.cnblogs.com/blog/315302/201704/315302-20170417105850790-1814593961.png" class="child" />
    </div>
</body>
```

思路解析：
1. span高度设置100%,确定他的基线是底部margin。父元素的基线也是底部margin。
2. span 设置middle。span 的横向中心与父元素的基线+ 0.5x height 对齐。此时页面效果为父元素基线被迫上移，移动到了span的中部 - 0.5x height的位置。
3. 左侧图片基线默认与父元素基线对齐，所以图片的底部与 span中线 - 0.5x height 距离对齐。给左侧图片设置 middle,图片的横向中心线与父元素基线的 + 0.5x height的距离对齐。
4. 此时两个元素的中线都对齐，所以在垂直方向上是对齐的。
具体原理图如下

![IMG_20190831_224023](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/07/13/img20190831224023.jpg)

### 2. flex

```css
<style>.box {
    width: 300px;
    height: 300px;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
}

.child {
    width: 100px;
    height: 100px;
    display: inline-block;
}

</style>
```

### 3. position + transform

```css
<style>.box {
    width: 300px;
    height: 300px;
    background: orange;
    position: relative;
}

.child {
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
```

思路：
1. 父元素设置 相对定位。子元素设置 绝对定位。
2. 子元素的 left 和 top 设置 50%,其百分比是相对于父元素的宽高。此时子元素的左边和上边紧贴着父元素的纵轴和横轴，并不是真正的居中。
3. transform 进行向上和向左品偏移。**注意负值为向上和向左**

### 4. margin + transform

```css
  .box {
      width: 300px;
      height: 300px;
      background: orange;
      overflow: hidden;
  }

  .child {
      display: block;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      margin-top: 50%;
      transform: translateY(-50%);
  }
```

思路：
1. margin-top 设置为百分数时，其高度是相对于容纳块（父元素）的高度而言的。此时子元素的顶部是中心对齐的，但是整体不是。
2. transform 进行自身的宽度和高度的偏移。
