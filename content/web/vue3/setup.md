---
title:  vue3 setup
date: 2022-07-21
description:  provide
---


## setup 基础

- 参数

  - context.expose
    - 暴露出方法，外部通过 ref 进行调用。类似于 react 的 useImperativeHandle
  - context.attrs 和 context.slots
    - 是有状态的对象，他们总是会随组件本身的更新而更新。避免对他们进行解构，并始终以 attrs.x 或 slots.x 的方式引用 property。
    - 都是非响应式的
    - 要想获得他们更改后的副作用，应该在 onBeforeUpdate 生命周期钩子中执行此操作

- ref
  - 创建了一个响应式值的引用
  - ref 解包
    - ref 解包仅发生在被响应式 Object 嵌套的时候，当从 Array 或原生集合类型如 Map 访问 ref 时，不会进行解包
    - 在模板中访问 setup 返回的值时，会自动浅层次解包内部值
    - 只有访问嵌套的 ref 时需要在模板中添加 .value
    - tips: 如果不想访问实际的对象实例，可将其用 reactive 包裹

- readonly
  - 防止更改响应式对象

- toRefs
  - props 使用 es6 解构语法会失去其响应式

- reactive
  - 创建一个响应式的变量对象

- toRef
  - 创建一个响应式的变量，并且可以设置默认值

- 生命周期钩子
  - on + 生命周期名称:
    - onMounted、onUpdated
  - 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。

- watch
  - 惰性的。第一次定义不会触发

- watchEffect
  - 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。类似于 react useEffect
  - 清除副作用
    - 传入回调函数

  ```js
  watchEffect((onInvalidate) => {
    onInvalidate();
  });
  ```

- computed
  - 计算属性。缓存 data 或 props 数值的计算结果


## setup 中 this 问题

setup 中的 this 不是当前实例的引用。因为 setup 是在解析其他组件选项之前被调用的。

## 模板引用

模板中的 ref 键对应 setup 中渲染上下文的 ref，则 vnode 的相应元素或组件实例被分配给该 ref 的值。这是在虚拟 DOM 挂载/打补丁过程中执行的，因此模板引用只会在初始渲染之后获得赋值。

监听模板引用，应该在 watchEffect 中调用, 设置 flush: 'post' 选项。即在 dom 更新后运行副作用。类似于 react useEffect。