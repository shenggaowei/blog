# 数组去重

### 一 双层循环匹配

#### 1. 选择排序

   1. 思想： 将标志位的每一项与后面的项进行对比，一致则删除，j--。

```js
function avoidRepeat(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let flag = arr[i];
            let temp = arr[j];
            if (temp === flag) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}
```

### 二 新建数组，保持数组数据的唯一性

主要技术方法：
   1. indexOf || includes || find || findIndex || some || filter(判断数组length) 判断数组值是否重复
   2. push

#### 1 判断数组中是否存在唯一的项。

  1. 思想：indexof判断是否在数组中存在，不存在则push。 

```js
function avoidRepeat2(arr) {
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        let temp = arr[j];
        let notExigst = newArr.indexOf(temp) === -1;
        if (notExigst) {
            newArr.push(temp);
        }
    }
    return newArr
}
```

#### 2 reduce 实现循环

1. 思想：归并思想。

```js
function avoidRepeat4(arr) {
    return arr.reduce((pre, next) => pre.includes(next) ? pre : pre.concat(next), [])
}
```

#### 3 利用对象key的不可重复性

```js
function avoidRepeat5(arr) {
    return Object.keys(arr.reduce((pre, next) => {
        pre[next] = true;
        return pre
    }, {}))
}
```

#### 4 对排序之后的数组进行前后值的对比。

1. 思想

   1. 将数组进行排序，遍历数组，将当前项和下一项进行对比，一样则将下一项删除掉。最后return数组。

```js
function avoidRepeat7(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    for (let i = 0; i < sortArr.length; i++) {
        let cur = sortArr[i];
        let next = sortArr[i + 1];
        if (cur === next) {
            sortArr.splice(i + 1, 1);
            i--;
        }
    }
    return sortArr
}
```

### 三 利用下标进行判断

主要思想
   1. 遍历数组，将当前子项的下标和其第一次出现时的下标进行对比。

      1. 如果一致，则是第一次出现。返回该项
      2. 如果不一致，证明前面已经存在该项，该项是重复的值。

主要技术
   1.  filter indexOf || findIndex 
   2.  for indexOf || findIndex  push

##### 1 filter + indexOf

```js
function avoidRepeat3(arr) {
    return arr.filter((ele, index) => index === arr.indexOf(ele))
}
```

### 四 es6 新增api Set

```js
function avoidRepeat6(arr) {
    return [...new Set(arr)]
}
```
