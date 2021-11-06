# ts 学习笔记

### 接口

**可索引的类型**

TypeScript 支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。 也就是说用 100（一个 number）去索引等同于使用"100"（一个 string）去索引，因此两者需要保持一致。

```ts
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
```

因为 number 类型的索引必须是 string 类型的子类型，所以 number 的索引必须是 string 索引的子类型。而此处 animal 是父类，dog 是子类。animal 不是 dog 的子类。

**类类型**

哈哈哈哈
