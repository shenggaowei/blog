### return type annotations

```ts
function getFavoriteNumber: number() {
    return 26
}
```

一般情况下不需要明确解释函数的返回类型，因为 ts 根据函数表达式自动推断类型。一些代码库的文档会明确返回类型以用于文档编制，防止意外变化，或者仅仅是个人的爱好。

### Type Assertions
