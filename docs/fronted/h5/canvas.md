# canvas 画布

## 1 准备工作

1. html 中设置画布
2. js 中获取画布
3. 获取画笔

```html
  <!doctype html>
  <html lang="zh">

  <head>
      <meta charset="UTF-8">
      <title>基础的Canvas</title>
  </head>

  <body>
      <div id="canvas-warp">
          <canvas id="canvas" style="border: 1px solid #aaaaaa; display: block; margin: 50px auto;" width="800" height="600">
              你的浏览器不支持 canvas, 快点换吧
          </canvas>
      </div>
  </body>
  <script>
      let canvas = document.querySelector('#canvas');
      let context = canvas.getContext('2d');
  </script>

  </html>
```

## 2 画一条线段

canvas 是基于状态的绘制。

1. 设置画笔所描绘线条的状态，例如起始点，颜色和粗细。
2. 通过 stroke 开始描绘，fill 进行填充。

### 2.1 设置画布的大小

1. 通过 canvas 标签的 width 或者 height 属性进行设置。
2. 获取画布，通过 context.width 或者 context.height 进行设置。

### 2.2 设置绘制的起始和结束

1. 在每次绘制之前，通过 context.beginPath() 来标志下次绘画的开始。
2. 在绘制转态描述完成之后，通过 context.closePath() 来标志当前绘画的结束。

#### 注意点

如果不设置 closePath，多次调用 stroke 方法去绘制图形时，后面的绘制状态会将前面的覆盖，例如线条颜色和宽度等，都和最后一个状态一致。

### 3 线条属性

#### 3.1 lineCap

* butt: 默认值，垂直于线段边缘
* round: 以线宽为半径的半圆
* square: 以线宽为长，线宽一半为宽的矩形

![lineJoin](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/h5/canvas/linejoin.jpg)
