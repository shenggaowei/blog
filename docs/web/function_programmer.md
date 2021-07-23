# 函数式编程

“面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩... 以及整个丛林”。

## 函数是一等公民

### 概念

一等公民 == 普通公民，**把函数当做普通的对象对待**，所以可以把函数存在数组里，当做参数传递，赋值给变量...

### 为何钟爱一等公民？

* 删除不必要的函数包装。此时在代码维护时，对函数的改动量相对较小。

```js
// 还凑活
httpGet("/post/2", (json) => renderPost(json));
// 难受
httpGet("/post/2", (json, err) => renderPost(json, err));
// 舒服还装逼
httpGet("/post/2", renderPost); // renderPost 将会在 httpGet 中调用，想要多少参数都行
```

* 对于通用代码，给函数的参数命名时，不局限在特定的业务数据中。避免在单一项目中，重复造轮子的现象发生。

```js
// 只针对当前的博客
const validArticles = articles =>
    articles.filter(article => article !== null && article !== undefined),

    // 对未来的项目更友好
    const compact = xs => xs.filter(x => x !== null && x !== undefined);
```

* **?** 函数式编程中。尽量不使用 this。

## 纯函数的好处

### 纯函数概念

> 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

**Array.prototype.slice vs Array.prototype.splice**

1. slice 返回 [start,end)长度的数组。由于函数的执行不改变原数组，所以对同一数组，执行相同的输入，必然会获得相同的输出。

2. splice 从指定数组位置开始，截取数组指定长度的子项，返回由子项构成的新数组。然而原数组却会被改变。所以，对同一个数组使用 splice 方法，每一次的返回值都不尽相同。

### 副作用概念

> 副作用是在计算结果的过程中，系统状态的一种变化，或者与外部环境进行可观察的交互。

函数内部的初始变量理论上只能从形参中获取。与外部环境的变量发生了交互，被称为副作用。

函数式编程的哲学就是假定副作用是造成不正当行为的主要原因。

副作用让一个函数变得不纯是有道理的：从定义上来说，纯函数必须要能够根据相同的输入返回相同的输出；如果函数需要跟外部事物打交道，那么就无法保证这一点了。

副作用可能包含：

* 函数的入参被修改
* 内部含有可变的数据 math.random ...
* 获取用户的输入
* 访问系统状态
* 发送一个 http 请求
* 更改文件系统
* 数据库中插入一条记录
* 打印 / log

### 纯函数的好处

* 可缓存性 (Cacheable)

因为输入和输出是一对一的对应关系。所以可以依据输入来做缓存，典型的方式是 memoize 技术。

```js
function memoize(f) {
    let cache = {};
    return function(param) {
        let key = JSON.stringify(param);
        cache[key] = cache[key] || f(param);
        return cache[key];
    };
}

function getTotal(n) {
    return n * 3;
}

let func = memoize(getTotal);
console.log(func(1));
console.log(func(2));
console.log(func(3));
console.log(func(2));

// 返回一个发送 http 请求的函数。也是纯函数。
let pureHttpCall = memoize(function(url, params) {
    return function() {
        return $.getJSON(url, params);
    };
});
```

* 可移植性 / 自文档化

纯函数仅从签名（形参）就可以获取到足够多的信息。不纯的函数不会知道内部对这些依赖会有什么影响。

在 js 的设定中，可移植性意味着可以把函数序列化并通过 socket 发送。也可以意味着代码能够在 web workers 中运行。

命令式编程中“典型”的方法和过程都深深地根植于他们所在的环境之中，通过状态、依赖和有效作用达成。纯函数则与此相反，它与环境无关，只要我们愿意，可以在任何地方运行他。

* 可测试性

jest || quickcheck

* 合理性

引用透明性：如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么我们就说这段代码是引用透明的。

等式推导：“一对一替换”，相当于手动执行代码，将函数的实参套入所调用函数表达式或者函数声明的执行代码中。
等式推导带来的分析代码的能力对**重构和理解代码**非常重要。

* 并行代码

因为纯函数无副作用，且不需要访问共享的内存，而却根据其定义，纯函数也不会因副作用而进入竞争状态。

**?** 并行代码在服务端 js 环境以及使用了 web worker 的浏览器那里是非常容易实现的，因为它们使用了线程（thread）。不过出于对非纯函数复杂度的考虑，当前主流观点还是避免使用这种并行。
