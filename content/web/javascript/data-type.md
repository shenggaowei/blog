---
title: JS 数据类型
tags: js
date: 2021-12-22 13:05:00
---

# js 数据类型检测

## typeof

> 只能用来检测基本类型的数值。引用类型会统一返回 object。

- 函数：function
- 数值：number
- 字符串：string
- 布尔值：boolean
- undefined:undefined
- 对象：object
- 正则：function (safari < 5 || chrome < 7)

缺点：

1. 自定义构造函数会统一检测为 Object,无法具体判断构造函数的类型。

## instanceof

> 只能用来检测引用类型，由于 js 规定所有引用类型的值都是 Object 构造函数的实例，所以用 instanceof 检测基本类型的值，始终会返回 false。
> 检测引用类型可以判断出该实例所属的构造函数。

缺点：

1. **?** 变量与构造函数必须在同一个作用域中 如果变量定义在其他的 frame 中，在主框架中是无法进行检测的。需要进一步的尝试，没测出来。

## toString

> Object.prototype.toString.call(value) 检测某个对象到底是原生对象还是开发人员自定义的对象

> 在任何数据类型上调用 toString 方法，会返回 [object NativeConstructorName] 的字符串。每个类在内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名。

> 不能检测非原生构造函数的构造函数名。因此，开发人员定义的任何构造函数都将返回[object Object]

```js
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
```

## constructor

> 判断实例的直接构造函数属性。适用于原生构造函数或者开发人员自定义的构造函数。
