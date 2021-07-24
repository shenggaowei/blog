# 客户端请求

## JSONP

```js
function JSONP(options) {
    let formatParams = data => {
        let arr = []
        for (let key in data) {
            let arg = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            arr.push(arg)
        }
        return arr.join('&');
    }

    let {
        api,
        data,
        callbackKeyName = 'callback',
        callbackFnName = 'jsonp_' + new Date(),
        success,
        error,
        timeout,
        connect = '?'
    } = options;
    let oHead = document.getElementsByTagName('head')[0];
    let oS = document.createElement('script');
    data[callbackKeyName] = callbackFnName;
    let url = api + connect + formatParams(data);
    oS.src = url;
    oHead.appendChild(oS);

    window[callbackFnName] = function(data) {
        clearTimeout(oS.timer);
        success(data);
        oHead.removeChild(oS);
        window[callbackFnName] = null;
    }

    window['error'] = function(data) {
        error(data);
    }

    oS.timer = setTimeout(function(params) {
        window[callbackKeyName] = null;
        error({
            message: '超时了'
        })
        oHead.removeChild(oS);
    }, timeout || 8000)
}
```

注意点：

1. 实为 get 请求，参数需要编码。回调函数的关键字和函数名称也需要加入到参数中。
2. jsonp 下载文件是在 appendChild 之后发生的。与 src 的设置顺序无关。
3. 超时目前只能通过设置 setTimeout 来实现。

## AJAX

```js
function Ajax(params) {
    let {
        methods = 'GET', data = {}, onSucess = () => 0, onError = () => 0, url = '', timeout, dataType
    } = params;

    if (methods === 'GET') {
        url = url + "?" + parsedGetParams(data);
        data = null;
    }

    let xhr

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = ActiveXObject('Microsoft.XMLHTTP');
    }

    let xhr = new XMLHttpRequest();

    let timer = setTimeout(function() {
        onError('超时了');
        xhr.abort();
    }, timeout || 3000)

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                clearTimeout(timer);
                let res = dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
                onSucess(res);
            }
        }
    }

    xhr.open(methods, url, true);

    if (methods === 'POST') {
        //设置表单提交时的内容类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    xhr.send(data);
}
```

![屏幕快照 2019-09-15 下午10.35.13](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/07/16/ping-mu-kuai-zhao-20190915-xia-wu103513.png)

## fetch

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

```js
fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json',
    },
}).then(res => res.json()).then(res => {
    console.log(res)
});
```

## fetch 和 ajax 的区别

1. fetch 是基于 promise 实现的，也可以结合 async/await。
2. fetch 请求默认是不带 cookie 的，需要设置 fetch（URL，{credentials:’include’})。Credentials 有三种参数：same-origin，include，*。
3. 服务器返回400 500 状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject。
4. 所有版本的 IE 均不支持原生 Fetch。
5. fetch是widow的一个方法；
