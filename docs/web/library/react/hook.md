# hook

react hook 是 16.8 版本以后新增的功能。

函数组件的问题：

1. 没有组件实例
2. 没有声明周期
3. 没有 state 和 setState，只能接受 props

函数组件的特点：

1. react 提倡函数式编程，view = fn(props)
2. 函数更加灵活，更易拆分，更易测试
3. 函数组件太简单，需要增强能力 -- hooks

class 组件的问题：

1. 大型组件很难拆分和重构，很难测试（class 不易拆分）
2. 相同业务逻辑，分散到各个方法中，逻辑混乱
3. 复用逻辑的复杂，入 mixins、hoc、render props

hooks 调用顺序

useState
render: 初始化 state 的值
re-render: 读取 state 的值

useEffect
render: 添加 effect 函数
re-render: 替换 effect 函数（内部的函数也会重新定义）
