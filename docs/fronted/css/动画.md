# 动画和过渡

## 动画

### @keyframes 规则

```css
@keyframes animationname {
    keyframes-selector {
        css-styles;
    }
}
```

```css
@keyframes dh {
  0% {
    background: red;
    left: 100px;
  }

  25% {
    background: yellow;
    left: 350px;
    top: 50px;
  }

  50% {
    background: blue;
    left: 400px;
  }

  100% {
    background: green;
    left: 600px;
  }
}

.box {
  width: 200px;
  height: 100px;
  background: orange;
  position: absolute;
  animation: dh 3s;
}
```

1. 以百分比来规定改变发生的时间。或者用 from(0%) to(100%)语义化代替。
2. 当在 @keyframes 中创建动画时，必须把它捆绑到某个选择器上，否则不会产生动画效果。

### animation

```css
animation: name duration timing-function delay iteration-count direction;
```

- animation-name ： 规定需要绑定到选择器的 keyframe 名称。
- animation-duration ：规定完成动画所花费的时间，以秒或毫秒计（默认是 0)。
- animation-timing-function：规定动画的速度曲线。默认是 ease。
- animation-delay ： 规定在动画开始之前的延迟。
- animation-iteration-count：规定动画应该播放的次数。 默认是 1，无限次则设置为 infinite。
- animation-direction：（normal 默认 | alternate）规定是否应该轮流反向播放动画。设置播放次数为多次时，当执行到奇数次时正向运行，当运行到偶数次时逆向进行。正反两个来回。
- animation-play-state：（running 默认 | paused）规定动画正在运行还是暂停。可以在 js 中控制该属性。
- animation-fill-mode: none | forwards | backwards | both;

## css 过渡

### 概念和用法

> transition: 过度属性的名称 过度所花费的时间 过渡效果的时间曲线 规定过渡效果何时开始, ...

1. 如果时长未规定，则不会有过渡效果，因为默认值是 0。
2. 效果开始于指定的 CSS 属性改变值时。
3. 如需向多个样式添加过渡效果，添加多个属性，由逗号隔开。

```css
.box {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background: orange;
  transition: transform linear 3s, width 2s;
}

.box:hover {
  width: 300px;
  transform: rotateZ(3000deg);
}
```

### 分开使用

```css
//应用过渡效果的 CSS 属性的名称
transition-property: none|all|property;

//完成过渡效果需要花费的时间（以秒或毫秒计） 默认为0 不会有效果
transition-duration: time;

//属性规定过渡效果的速度曲线。 默认为 ease
transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(
  n,
  n,
  n,
  n
);

//属性规定过渡效果何时开始(以秒或毫秒计)。 默认为0
transition-delay: time;
```
