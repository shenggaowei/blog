# 母牛生产

> 一 母牛从 3-7 岁初每年会生产 1 头小母牛，10 岁后死亡（10 岁仍然存活），假设初始有 1 头刚出生的母牛，请问第 n 年有多少头母牛？（年从第一年开始计数）
> 思路解析
>
> > cowNum(n) = cowNum(n-1)-death(n)+born(n)
> > born(n)为前 2、3、4、5、6 年出生的小牛数，递推可以得出
> > death(n) 前 10 年没死的，第 11 年死一只，其他年份的死亡数是十年前小牛的新出生数。

```js
function born(n) {
  const f = [0, 0, 0, 1, 1, 2, 3, 5];
  if (n <= 7) {
    return f[n];
  }
  return born(n - 2) + born(n - 3) + born(n - 4) + born(n - 5) + born(n - 6);
}

function death(n) {
  if (n === 11) {
    return 1;
  } else if (n <= 10) {
    return 0;
  } else {
    return born(n - 10);
  }
}

function cowNum(n) {
  let f = [0, 1, 1];

  if (n <= 2) {
    return f[n];
  }

  return cowNum(n - 1) + born(n) - death(n);
}
let total = cowNum(50);
console.log(total);
```
