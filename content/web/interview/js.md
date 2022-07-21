---
title:  js 面试题
date: 2022-07-21
description:  js 面试题
---


## 箭头函数和普通函数的区别

- 箭头函数 this 指向在定义的时候继承自外层第一个普通函数的 this，不能通过 call、apply 和 bind 来修改 this 指向。
- 箭头函数没有 arguments 对象，可通过 rest 获取函数的多余参数
- 箭头函数没有没有 prototype，不能使用 new 操作符
