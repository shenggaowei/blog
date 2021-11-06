# compose 和 curry

## 函数合并 compose

如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做“函数的合并”。

合成也是函数必须是纯的一个原因。因为一个不纯的函数，怎么跟其他函数合成？怎么保证各种合成以后，有副作用的干扰，它会达到预期的行为？

前面说过，函数就像数据的管道（pipe）。那么，函数合成就是将这些管道连了起来，让数据一口气从多个管道中穿过。

```js
function compose(...funcs) {
  return function (data) {
    return funcs.reduce((pre, next) => {
      return next(pre);
    }, data);
  };
}

let obj = { a: 1 };

function transform1(params) {
  params.b = 2;
  return params;
}

function transform2(params) {
  params.c = 3;
  return params;
}

function transform3(params) {
  params.d = 4;
  return params;
}

function transform4(params) {
  params.e = 5;
  return params;
}

function transform5(params) {
  params.e = JSON.stringify(params.e);
  return params;
}

let func1 = compose(transform4, compose(transform1, transform2, transform3));
let func2 = compose(
  transform1,
  compose(transform2, compose(transform3, compose(transform4, transform5)))
);
let result1 = func2(obj);

console.log(result1); // {a: 1, b: 2, c: 3, d: 4, e: "5"}
```

## 不可或缺的 curry

> 它用于创建已经设置好了的一个或多个参数的函数。函数柯里化的基本方法和函数绑定是一样的:使用一个闭包返回一个函数。返回的函数还可以设置一些传入的参数。

```js
/**
 * 科里化函数 curry
 * @param {科里化执行函数} fn
 */
function curry(fn) {
  let arg1 = Array.prototype.slice.call(arguments, 1);
  return function () {
    let arg2 = Array.prototype.slice.call(arguments);
    let finalArgs = arg1.concat(arg2);
    return fn.apply(null, finalArgs);
  };
}

function add(num1, num2) {
  return num1 + num2;
}

let curriedFunc = curry(add, 1);
let result = curriedFunc(3); // 4

/**
 *
 * @param {所要执行的函数} fn
 * @param {fn 执行作用域} context
 */
function bind(fn, context) {
  let arg1 = Array.prototype.slice.call(arguments, 2);
  return function () {
    let arg2 = Array.prototype.slice.call(arguments);
    let finalArgs = arg1.concat(arg2);
    return fn.apply(context, finalArgs);
  };
}
```

JavaScript 中的柯里化函数和绑定函数提供了强大的动态函数创建功能。使用 bind()还是 curry() 要根据是否需要 object 对象响应来决定。它们都能用于创建复杂的算法和功能，当然两者都不应滥用， 因为每个函数都会带来额外的开销。
