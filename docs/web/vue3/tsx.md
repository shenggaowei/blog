# 如何在 vue3 中使用 tsx

在 vue3 版本中也可以使用 tsx 语法了，和 react 极度相似，为了快速体验，那么应该如何配置呢？

1. 创建一个 vue3 版本的项目。
2. 如果使用 babel 进行编译，则用 [@vue/babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx#installation) 插件。
3. 如果是用 vitejs 初始化的项目，则使用 [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx#readme) 进行配置。

示例代码

```tsx
import {FunctionalComponent as FC,  defineComponent } from 'vue'

const Hello: FC<{ title: string }> = (props) => {
  return <div>{props.title}</div>
}

const Show1 = defineComponent({
  setup() {
    return () => <Hello title='哈哈' />
  }
})
```

...未完待续