# ts 常见飘红解决

## 类型“string”的参数不能赋给类型“Alignment”的参数。

````ts
    type Alignment = 'left' | 'right' | 'center'
    function printText(s: string, alignment: Alignment) {

    }
    const ret = { s: '1', alignment: 'left' }
    printText(ret.s, ret.alignment)

    ```

    以上代码会提示一个问题，'类型“string”的参数不能赋给类型“Alignment”的参数'。
    原因：因为代码会在 ret 的创建和 printText 的调用之间进行评估，会给 ret.alignment 分配一个新的字符串，类似于 'GUESS', ts 认为这段代码有问题
    解决方法有三个



```ts
    // change 1;
    const ret = { s: '1', alignment: 'left' as 'left' }
    // change 2;
    printText(ret.s, ret.alignment as 'left')
    // change 3
    const ret = { s: '1', alignment: 'left' } as const
    ```

    change1 意味着我打算让 ret.alignment总是拥有子面量类型 "left", 之后防止编译器可能会分配 'GUESS'等类型给 ret.alignment 字段。
    change2 意味着因为其他原因我知道 ret.alignment 会有值 'left'
    change3 使用 `const` 关键字把整个对象转成类型变量。 `const` 后缀确保所有属性都被赋值为字面量类型，而不是常用的基本类型，如 string 或者 number 类型
````
