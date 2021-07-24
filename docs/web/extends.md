# ES5继承

## 1 构造函数继承

```js
function Person() {
    this.name = '升高';
    this.arr = [1, 2, 3, 4];
}

Person.prototype.sayName = function() {
    console.log('Person.prototype', this.name);
}

function Child() {
    Person.call(this);
    this.age = 1;
}

let child1 = new Child();
let child2 = new Child();

console.log('child1.name', child1.name);
child1.sayName();
// 缺点 无法继承父类构造函数的原型对象的属性和方法
```

## 2 原型链继承

```js
function Person() {
    this.name = '升高';
    this.arr = [1, 2, 3, 4];
}

Person.prototype.sayName = function() {
    console.log('Person.prototype', this.name);
}

function Child() {
    this.age = 1;
}

Child.prototype = new Person();

let child1 = new Child();
let child2 = new Child();

child1.name = '升高啊';
console.log('child1.name', child1.name); // Child的prototype属性中获取
console.log('child2.name', child2.name); // //实例中的属性会覆盖掉原型中的属性。不会改变原型中的属性。

child1.arr.push(5);
console.log('child1.arr', child1.arr); //arr指针指向堆中的一处内存。通过指针修改内存，所有实例访问arr时，arr都会被取到更新后的值。
console.log('child2.arr', child2.arr);
child1.sayName();
```

## 3 组合继承

```js
function Person() {
    this.name = '升高';
    this.arr = [1, 2, 3, 4];
}

Person.prototype.sayName = function() {
    console.log('Person.prototype', this.name);
}

/**
 *继承父类的实例属性
 */
function Child() {
    Person.call(this);
    this.age = 1;
}

Child.prototype = new Person(); // 内部__proto__可访问到Person.prototype

let child1 = new Child();
let child2 = new Child();

console.log('child1.name', child1.name); //现在child实例中去找。找到了，不去找原型
child1.sayName(); //实例属性找不到,从prototype对象中找。找不到通过__proto__去原型中去找

console.log(Object.getPrototypeOf(child1).constructor); //Person
/**  缺点
 * 1 父类构造函数调用了两次
 * 2 子类的构造函数属性显示不正确 
 */
```

## 4 组合继承优化

```js
function Person() {
    this.name = '升高';
    this.arr = [1, 2, 3, 4];
}

Person.prototype.sayName = function() {
    console.log('Person.prototype', this.name);
}

function Child() {
    Person.call(this);
    this.age = 1;
}

//Object.create默认创建一个{},并将空对象的__proto__设置为所传的第一个参数。第二个参数为设置其数据属性或者访问器属性
//Child.prototype = Object.create(Person.prototype);
Child.prototype = Person.prototype;
Child.prototype.constructor = Child; //添加构造器属性

let child1 = new Child();
let child2 = new Child();

child1.sayName();

child1.arr.push(5);
console.log('child1.arr', child1.arr);
console.log('child2.arr', child2.arr);

console.log(child1.constructor, Object.getPrototypeOf(child1).constructor);

/** 优点
 * 1 解决了调用两次父类实例的问题
 * 2 解决了不能判断实例的构造函数是子类还是父类的问题
 */

/** es5和es6继承的区别
 * 1 es5先构建子类的this,然后将父类属性添加到当前this当中。
 * 2 es6先构建父类的this,然后将子类的属性添加到当前this当中。
 * 
 * */
```
