# 浏览器实现下载

## a 标签实现下载

> 此属性指示浏览器下载 `url` 而不是导航到它,chrome 会直接下载文件，`download` 属性的值会被作为下载的文件名

- 需要注意的点

1. 此属性仅使用于同源 url。换句话说，仅仅只能下载站内的资源。
2. href 属性可以使用 `blob: url` 和 `data: url` 链接进行下载。
3. 如果 http 响应头中的 `content-disposition` 赋予了文件不同于 `download` 属性的文件名，http 头的属性优先于此属性

- 使用例子

1. html 中直接使用

当前网站为 tgo.infoq.cn

```html
<a style="margin-left: 30px" download href="https://tgo.infoq.cn/js/12.js"
  >点我下载js</a
>
```

2. 创建 a 标签模拟点击

```js
function download(filename, url) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

## `blob: url` 下载

`a` 标签配置 `download` 属性可以实现下载，如果下载的文件不同源，点击 `a` 标签会默认打开新页签进行展示。

但是 `a` 标签下载支持 `blob: url`，所以，前端可以通过 `fetch` 或者 `ajax` 请求该资源文件，获取该文件 `blob` 二进制形式，再用 `URL.createObjectURL` 创建 `blob: url`，让 a 标签进行下载。

当然做这些操作的前提是浏览器请求的文件 `url` 支持跨域。

- 使用例子

1. 通过 fetch

```js
function download(url) {
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.blob())
    .then((data) => {
      const link = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = link;
      a.download = "下载文件";
      a.click();
    });
}
```

2. 通过 ajax

```js
function download(url) {
  const x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = "blob";
  x.onload = function () {
    const link = window.URL.createObjectURL(x.response);
    const a = document.createElement("a");
    a.href = link;
    a.download = true;
    a.click();
  };
  x.send();
}
```

## 前后端配合解决方案

`http` 响应头中设置 `Content-Disposition: attachment; filename='1.jpg'` 会指示浏览器去下载该文件，也不需要配置 `a` 标签的 `download` 属性。

- 实例代码

1. 在服务端

```JavaScript
response.setHeader("Content-Disposition", "attachment; filename=111.jpg");
```

2. 在阿里云 `oss` 中，阿里云 bucket 支持自定义设置相关 `header` 属性。
