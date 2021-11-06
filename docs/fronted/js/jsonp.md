# JSONP

```js
function JSONP(options) {
  let formatParams = (data) => {
    let arr = [];
    for (let key in data) {
      let arg = encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      arr.push(arg);
    }
    return arr.join("&");
  };

  let {
    api,
    data,
    callbackKeyName = "callback",
    callbackFnName = "jsonp_" + new Date(),
    success,
    error,
    timeout,
    connect = "?",
  } = options;
  let oHead = document.getElementsByTagName("head")[0];
  let oS = document.createElement("script");
  data[callbackKeyName] = callbackFnName;
  let url = api + connect + formatParams(data);
  oS.src = url;
  oHead.appendChild(oS);

  window[callbackFnName] = function (data) {
    clearTimeout(oS.timer);
    success(data);
    oHead.removeChild(oS);
    window[callbackFnName] = null;
  };

  window["error"] = function (data) {
    error(data);
  };

  oS.timer = setTimeout(function (params) {
    window[callbackKeyName] = null;
    error({
      message: "超时了",
    });
    oHead.removeChild(oS);
  }, timeout || 8000);
}
```

注意点：

1. 实为 get 请求，参数需要编码。回调函数的关键字和函数名称也需要加入到参数中。
2. jsonp 下载文件是在 appendChild 之后发生的。与 src 的设置顺序无关。
3. 超时目前只能通过设置 setTimeout 来实现。
