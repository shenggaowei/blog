# 实现 bind、call 和 apply

## 一 call 实现

```js
Function.prototype.call2 = function () {
  const [context, ...params] = arguments;
  context.fn = this;
  let result = context.fn(...params);
  delete context.fn;
  return result;
};
```

- 思路
  1. 获取执行函数实例 this,并将其绑定到所传的作用域 context 上。
  2. 执行函数。
  3. 删除 context 上的函数。防止误修改原作用域，重要。
  4. return 返回值。

## 二 apply 实现

### 1. 方法一 借助 call

```js
Function.prototype.apply2 = function () {
  const [context, params = []] = arguments;
  return this.call(context, ...params);
};
```

- 思路

  - 获取执行函数实例、context。直接执行。注意 call 和 apply 传参的不同。

### 2. 方法二 原生实现

```js
Function.prototype.apply3 = function () {
  const [context, params = []] = arguments;
  context.fn = this;
  let result = context.fn(...params);
  delete context.fn;
  return result;
};
```

- 思路

  - 与 call 类似。

## bind 函数实现

### 1. 方法一 借助 call

```js
Function.prototype.bind3 = function () {
  const [context, ...params] = arguments;
  const self = this;
  return function () {
    const [...args] = arguments;
    return self.call(context, ...params, ...args);
  };
};
```

- 思路
  - bind 函数返回一个新函数，故需要用函数科里化的思想。
  - 在直接执行函数实例的过程时，需要额外绑定 this，否则 this 指向 window。
    - 箭头函数
    - 提前声明
  - 注意参数，call 是一个一个的进行传递。

### 2. 方法二 借助 apply

```js
Function.prototype.bind4 = function () {
  const [context, ...params] = arguments;
  const self = this;
  return function () {
    return self.apply(context, params);
  };
};
```

- 思路
  - bind 函数返回一个新函数，故需要用函数科里化的思想。
  - 在直接执行函数实例的过程时，需要额外绑定 this，否则 this 指向 window。
    - 箭头函数
    - 提前声明
  - 注意参数，apply 是传递一个数组。**这是用 call 和 apply 实现的唯一不同点。**

### 3. 方法三 自定义实现

```js
Function.prototype.bind2 = function () {
  const [context, ...params] = arguments;
  let func = this;
  context.fn = this;
  return function () {
    let args = Array.prototype.slice.apply(arguments, 1);
    if (this !== window) {
      context = this;
      context.fn = func;
    }
    let result = context.fn(...params, ...args);
    delete context.fn;
    return result;
  };
};
```

- 思路
  - bind 返回一个执行函数，记录当前的执行函数 this 和当前的作用域。以及参数
  - 执行 bind 的返回函数，判断 this。
    - 如果指向 window,则不是构造函数的 new 操作符。直接运行函数。
    - 如果不指向 window，则是 new 操作。this 指向新的实例对象。需要将函数体的作用域指向当前的 this。
  - 拼接参数，执行函数。
  - 删除作用域中的函数
  - 返回执行结果
