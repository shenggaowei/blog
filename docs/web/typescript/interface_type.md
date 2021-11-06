# Differences Between Type Aliases and interfaces

type 和 interfaces 是非常接近的，在许多场合你可以随意选择他们使用。几乎 interface 的功能 type 都有，唯一区别是 type 在定义过后不能再添加属性，interface 总是可以扩展的。

## 不同点

### 1 interface 只能定义结构类型，type 可以既可以定义结构类型，也可以定义基本类型。

```ts
interface AnObject1 {
  value: string;
}

type AnObject2 = {
  value: string;
};

type EvenNumber = number;

// 联合类型
type Pet = Dog | Cat;

// 元组类型
type PetList = [Dog, Pet];

// error 'string' only refers to a type, but is being used as a value here.
interface X extends string {}
```

### 2 interface 可以将多个同类型的声明进行合并。type 不可以。

```ts
interface Mammal {
  genus: string;
}

interface Mammal {
  breed?: string;
}

const animal: Mammal = {
  genus: "1234",
  breed: "1",
};

type Reptile = {
  genus: string;
};

// error: Duplicate identifier 'Reptile'.
type Reptile = {
  breed?: string;
};
```

### 3 interface 可以被 class implements。换句话说， class 可以实现某一个接口

```ts
interface Alarm {
  alert(): void;
}
class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}
```

## 相同点

### 1 都可以定义一个对象或者函数。

```ts
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}

type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number): void;

```

### 2 都可以被扩展。

```ts
interface Animal {
  name: string;
}
interface Bird extends Animal {
  fly: boolean;
}

type Animal2 = {
  name: string;
};
type Bird2 = Animal2 & {
  fly: boolean;
};
```

## interface 和 type 究竟应该如何选择呢？
