---
title:  浏览器元素宽高计算
date: 2022-07-21
description:  浏览器元素宽高计算
---


## 1 获取窗口大小

```js
// 获取窗口页面的大小
function getWindowSize(window) {
  let pageWidth = window.innerWidth;
  let pageHeight = window.innerHeight;
  if (typeof pageWidth !== "number") {
    if (document.compatMode === "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
    }
  }
  return {
    pageWidth,
    pageHeight,
  };
}
```

## 2 偏移量 （在 dom 对象中）

```js
offsetHeight: height + padding + border + 水平滚动条的高度
offsetWidth: width + padding + border + 垂直水平滚动条的宽度

offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离(包括父元素的边框)
offsetTop: 元素的上外边框至包含元素的上内边框之间的像素距离(包括父元素的边框)
offsetParent: 包含元素（ 其直接父元素） 的引用

//依据 offsetparent 获取元素至页面上的偏移量
function getElementLeft(ele) {
    let {
        offsetLeft,
        offsetParent
    } = ele;
    let left = offsetLeft;
    let curParent = offsetParent
    while (curParent !== null) {
        left += curParent.offsetLeft;
        curParent = curParent.offsetParent
    }
    return left
}

function getElementTop(ele) {
    let {
        offsetTop,
        offsetParent
    } = ele;
    let top = offsetTop;
    let curParent = offsetParent
    while (curParent !== null) {
        top += curParent.offsetTop;
        curParent = curParent.offsetParent;
    }
    return top
}
```

## 3 客户区大小

```js
clientWidth: width + padding;
clientHeight: height + padding;
```

获取窗口大小：[获取窗口大小](mweblib://15705144607328)

## 4 滚动大小

```js
 scrolHeight: 在没有滚动条的情况下， 元素内容的总高度。 最小为元素的高度。 如果内部有滚动， 则为滚动内容的高度。
 scrollWidth: 在没有滚动条的情况下， 元素内容的总宽度。
 scrollLeft: 被隐藏的内容区域左侧的像素数。 通过设置这个属性可以改变元素的滚动位置。
 scrollTop: 被隐藏在内容区域上方的像素数。 通过设置这个属性可以改变元素的滚动位置。
```

scrollWidth 和 scrollHeight 主要用于确定元素内容的实际大小。

```js
// 获取文档总高度 取 scroll 与 client 的最大值
let { scrollHeight, clientHeight, scrollWidth, clientWidth } =
  document.documentElement;
var docHeight = Math.max(scrollHeight, clientHeight);
var docWidth = Math.max(scrollWidth, clientWidth);

//对于运行在 混杂模式下的 ie。需要用 document.body 来替换 document.documentElement。
```

判断内容滚动到底部思路：
满足公式 box.scrollTop + box.clientHeight >= box.scrollHeight;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .box {
        height: 500px;
        width: 800px;
        background: #ccc;
      }

      .container {
        height: 400px;
        overflow-y: auto;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="box"></div>
    </div>
  </body>
  <script>
    let oBox = document.querySelector(".box");
    let oContainer = document.querySelector(".container");
    let { scrollHeight, scrollTop, clientHeight } = oContainer;
    oContainer.addEventListener("scroll", function () {
      let { scrollHeight, scrollTop, clientHeight } = this;
      console.log(scrollHeight, clientHeight, scrollTop);
      if (clientHeight + scrollTop >= scrollHeight) {
        alert("到底了");
        this.scrollTop = 0;
      }
    });
    console.log("scrollHeight", scrollHeight);
    console.log("clientHeight", clientHeight);
  </script>
</html>
```

## 5 确定元素大小
