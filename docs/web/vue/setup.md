## provide

## setup 基础

- 参数

  - context.expose
    - 暴露出方法，外部通过 ref 进行调用。类似于 react 的 useImperativeHandle

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

  - 创建一个响应式的变量

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
