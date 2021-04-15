## 函数节流
限制一个函数在一定时间内只能执行一次。忽略在当前时间段内其他的事件触发。

1. 使用场景
    1. 如鼠标的滚轮事件。
    2. 高频输入的远程搜索输入框。
    3. 表单确定按钮的点击处理事件。
2. 代码举例
    1. setTimeout
    2. 判断本次与**上次执行**的时间间隔。在wait时间段内，则不执行。超过wait则执行。

```js
let canPushToStack = true;
window.addEventListener('scroll',function(){
    canPushToStack = false;
    setTimeout(function(){
        console.log('我滚动了');
        canPushToStack = true;
    },1000)
})
```

```js
function throttle(func, wait) {
  let canStack = true;
  return function (...rest) {
    if (canStack) {
      setTimeout(() => {
        func.apply(this, rest);
        canStack = true
      }, wait);
    }
    canQueue = false
  }
}
```

```js
function throttle(func, wait) {
  let last = 0;
  return function (...rest) {
    let now = +new Date();
    if (now - last > wait) {
      last = +new Date()
      func.apply(this, rest)
    }
  }
}
```

## 函数防抖
> 指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
1. 使用场景
    1. 搜索输入框，用户最后一次输完，再发请求。
    2. 手机号，邮箱验证的输入检测。
    3. 窗口大小resize事件，只需窗口调整完成后，计算窗口大小。防止重复渲染。
2. 代码示例。

```js
window.addEventListener('scroll',function(){
    if(this.timer){
        clearTimeout(this.timer);
    }
    this.timer = setTimeout(function(){
        console.log('我正在执行');
    },1000)
})
```

```js
    function debounce(func, wait) {
      let timer;
      return function (...rest) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, rest)
        }, wait)
      }
    }

```




> 可视化工具对比链接 http://demo.nimius.net/debounce_throttle/