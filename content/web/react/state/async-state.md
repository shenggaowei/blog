---
title:  setState 为什么是异步的？
date: 2022-07-21
description:  setState 为什么是异步的？
---


### 1 使状态提升更加安全，props 和 state 的保持一致性。

假设 state 是同步更新，然而子组件的 props 不能及时接收到父组件 state 的变化。直到重新 render，才能保持 state 和 props 的同步。

示例：假设 state 的修改是同步的

```jsx
console.log(this.state.value); // 0
this.setState({ value: this.state.value + 1 });
console.log(this.state.value); // 1
this.setState({ value: this.state.value + 1 });
console.log(this.state.value); // 2
```

如果需要进行变量提升，将 state 移到父组件中，进行如下修改

```jsx
-this.setState({ value: this.state.value + 1 });
+this.props.onIncrement(); // Does the same thing in a parent
```

但是，这样子代码不再是以同步的方式执行了，state 和 props 不一致，会在开发中产生许多问题。

```jsx
console.log(this.props.value); // 0
this.props.onIncrement();
console.log(this.props.value); // 0
this.props.onIncrement();
console.log(this.props.value); // 0
```

### 2 启用批量更新，提升页面性能

如果每次调用 setState 都进行一次更新，那么意味着 render 函数会被频繁调用，界面重新渲染，这样同步更新的效率很低；

如果不启用批量更新，列举 Dan 的例子，页面跳转。

从 a 页面跳到 b 页面，为提高用户体验，跳转过程需要加一个转场动画，如果跳转的过程很短，动画一闪而过，直接到 b 页面，这不仅在视觉上令人不爽，而且由于所有的 DOM 回流，在实践中会使页面速度变慢。所以可设置一个页面加载的阈值（例如一秒），超过阈值显示动画，否则让 react 执行一个无缝转换。此时，当用户在“等待”的时候，“旧页面”依然保持着交互，并且 react 限制如果加载时间太长，必须显示一个 spin。所以，批量更新 state，从用户体验和页面性能上来看是一个更好的办法。

setState 在内部设计中并没有同步、异步更新之说，只是批量更新 state 造成了异步 state 情况的产生。
