# 前端本地缓存之 PWA

## PWA 简介

PWA，全称 Progressive Web App , (渐进式增强 WEB 应用) 简称 PWA ，是提升 WebApp 的体验的一种新方法，能给用户原生应用的体验。PWA 设想本质上是 Web App ，借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。<br />那么既然提到了“web app”，那么它到底具备什么功能敢用这个名词？其实说起来，PWA 并不是一个 api，而是集结了 N 个新兴 html5 api 技术的组合体，其中主要 api 包含：<br />

#### 1、App Manifest

Manifest 本质是一个 JSON 格式的文件，你可以把它理解为一个指定了 Web App 桌面图标、名称、开屏图标、运行模式等一系列资源的一个清单，通过 html 层<link rel="manifest" href="/manifest.json">引用。其目的是将 Web 应用程序安装到设备的主屏幕，为用户提供更快的访问和更丰富的体验。<br />

#### 2、Push & Notification

Push API 和 Notification API 其实是两个独立的技术（功能实现，需要借助后文中的 service worker），完全可以分开使用；不过 Push API 和 Notification API 相结合是一个常见的模式。其中 Push 主要链路为：浏览器发起订阅至服务端，服务端存储相关信息，如有消息推送，则向浏览器 push service 发起请求，浏览器 push service 将信息传递给浏览器。Notification 则比较简 jie 直接，显示使用 Notification.requestPermission()询问授权，之后调用 registration.showNotification()进行显示。<br />

#### 3、Service Worker

以上几项更偏向使浏览器访问 app 化，而实际开发过程中，serveice worker 更多是用在解决本地离线缓存问题，这也是我们本篇文章主题。当然了 service worker 也是个很大的 api 生态，除了对上文中的 push、Notification 功能进行支持外，还具备有其它几个功能：比如 cache 和 background sync（即：缓存和后台同步），我们今天主要讲的是 cache 部分，Push / Notification / background sync 部分我们另行发文介绍。

## Service Worker

#### 简介

浏览器中的 javaScript 都是运行在一个单一主线程上的，在同一时间内只能做一件事情。随着 Web 业务不断复杂，我们逐渐在 js 中加了很多耗资源、耗时间的复杂运算过程，这些过程导致的性能问题在 WebApp 的复杂化过程中更加凸显出来。

W3C 组织早早的洞察到了这些问题可能会造成的影响，这个时候有个叫 Web Worker 的 API 问世，这个 API 的唯一目的就是解放主线程，Web Worker 是脱离在主线程之外的，负责复杂耗时的业务处理，并在处理完成后通过 postMessage 方法通知主线程，而主线程通过 onMessage 方法得到 Web Worker 的结果反馈。

表面看，JavaScript 单线程问题得到了解决，然而 Web Worker 是临时会话存在的，业务及处理结果并不能被持久存下来，基于这样的痛点推出了最初版本的 Service Worker。

W3C 组织在 2014 年 5 月就提出过 Service Worker 这样的一个 HTML5 API ，主要用来做持久的离线缓存。Sevice Worker 不仅能做到页面秒开的效果，而且当浏览器在弱网或者无网的时候，依然能做出很好的响应。使 web 站点拥有像原生 app 那样的离线缓存功能，丰富了用户的使用体验。

当然在 Service Worker 之前也有在 HTML5 上做离线缓存的 API 叫 AppCache, 但是 AppCache 存在很多不能忍受的缺点。W3C 决定 AppCache 仍然保留在 HTML 5.0 Recommendation 中，在 HTML 后续版本中移除。

#### 工作流程

![](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/serviceworker/sw_process.jpg)

#### 特性

- 不能直接操作 DOM
- 用到的时候可以直接唤醒，不用的时候自动睡眠
- 离线内容开发者可控。可编程拦截代理请求和返回，缓存文件。缓存的文件可以被网页线程取到（包括网络离线状态）
- 一旦被 install，持久存在，除非被手动 unregister
- 必须在 HTTPS 环境下才能工作。（调试可使用本地 127.0.0.1 或 localhost）
- 异步实现，内部大都是通过 Promise 实现

#### 兼容情况

![](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/84653/1558946743338-c404e29c-31ed-4dd7-b61b-bfa30fd516d5.png#align=left&display=inline&height=916&originHeight=916&originWidth=2528&size=0&status=done&width=2528)

备注：令前端人欣慰的是苹果和微软方面都已经支持了 Service Worker，Service Worker 持久离线缓存，几乎可以在任何的现代浏览器中被实现。

<a name="qtOW9"></a>

### 使用方法

#### 1 注册

使用 ServiceWorkerContainer.register() 方法首次注册 service worker。为不影响页面的性能，一般在页面的 onLoad 事件中进行注册。

如果注册成功，service worker 文件就会被下载到客户端并尝试安装或激活（见下文），这将作用于整个域内用户可访问的 URL，或者其特定子集。

#### 2 下载、安装和激活

![](https://intranetproxy.alipay.com/skylark/lark/0/2019/jpeg/84653/1559283998946-fb496075-5607-48d1-97c9-4ce94a4b080c.jpeg#align=left&display=inline&height=232&originHeight=232&originWidth=772&size=0&status=done&width=772)

官方文档提到, ServiceWorker 生命周期的目的是：实现离线优先. 在不打断现有 ServiceWorker 的情况下，准备好一个新的 ServiceWorker，ServiceWorker 注册的 scope 下的页面，同一时间只由一个 ServiceWorker 控制，确保站点下只有一个版本在运行。另外，ServiceWorker 每 24 小时会被自动下载一次，以避免不良脚本长时间生效。其主要生命周期状态如下：

--
**下载解析 ( parsed )**
在注册 Service Worker 后，浏览器首先从指定路径下载并解析 ServiceWorker 脚本。
这里需要注意的是，出于安全考量，ServiceWorker 脚本只能由 HTTPS 承载；当然，为了方便调试，使用 localhost/127.0.0.1 域名可以本地进行调试。

--
**安装中 ( installing )**
Service Worker 注册成功后，会转入 installing 状态。此时，install 事件会被触发，比较典型的做法是在 install 事件的处理函数中提前加载相关静态文件进缓存。

--
**安装后 ( installed )**
Service Worker 安装成功后，会转入 waiting 状态，此时，ServiceWorker 已准备好，在等待接管页面，从而可以控制页面。

Service Worker 在满足下面条件之一时，可以转入 activating 状态。

- 没有活跃的 Service Worker 在运行
- JS 调用 self.skipWaiting() 跳过 waiting 状态
- 用户关闭页面，释放了当前处于 active 状态的 worker。一定时间之后, 系统释放了当前处于 active 状态的 worker（一般为 24h）

--
**激活中 ( activating )**
在 activating 状态中，activate 事件会触发，比较典型的做法是在 activate 事件的处理函数中清理无用的缓存。

此处需要注意，ServiceWorker 若想获得对页面的控制权，达到激活 activated 的状态，该页面必须是在注册成功后打开的。由于 ServiceWorker 注册是发生在 onload 事件中，所以理论上需要刷新页面才能达到效果。

在实际应用上通过调用 self.clients.claim() 让 ServiceWorker 直接获得对页面的控制权。达到激活的状态。

--
**激活后 ( activated )**
Service Worker 激活成功, 会转入 active 状态, 此时的 worker 已在控制页面的行为, 可以处理一些功能事件, 比如 fetch, push, message。

--
**废弃 ( redundant )**
Service Worker 在满足下面条件之一时, 会转入 redundant 状态：

- 激活失败
- 安装失败
- 被新的 Service Worker 取代

## 技术实现

#### 1、前置情况

Service Worker 出于安全性和其实现原理，在使用的时候有一定的前提条件，如果进行缓存选型，则需要充分考虑以下几项：

1. 本身基于 Web Worker API，运行需要浏览器支持 Web Worker 、Service Worker；
2. Service Worker 只能在两种情况下运行：HTTPS 环境 或者  localhost/127.0.0.1；
3. 回调机制依赖  [Promise](https://developer.mozilla.org/zh-CN/docs/Web/javaScript/Reference/Global_Objects/Promise)；
4. 请求机制依赖 [HTML5 fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)；
5. 缓存机制依赖  [HTML5 Cache API](https://developer.mozilla.org/zh-CN/docs/Web/API/Cache)；

#### 2、Service 注册

上文我们提过，Service Worker 本质是一个“线程”，我们要使用其功能，首先是需要在主线程进行 Service Worker 注册，也就是启动一个子进程，后续的 Service Worker 安装/激活等等业务都由该子进程完成。

```javascript
// 注册 Service Worker
window.addEventListener("load", function (event) {
  if ("serviceWorker" in window.navigator) {
    navigator.serviceWorker
      .register("sw.js", {
        scope: "/",
      })
      .then(function (registration) {
        if (registration) {
          console.log(
            "serviceWorker register with scope: ",
            registration.scope
          );
        } else {
          console.log("serviceWorker 注册失败");
        }
      });
  }
});
```

scope 参数是选填的，可以被用来指定你想让 service worker 控制的内容的子目录。

如果不指定 scope , scope 默认为当前 ServiceWorker 脚本所在的父级作用域下。**不能越域**

![](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/serviceworker/scope.jpg)

#### 3、Service 注销

```javascript
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration('/sw.js', {
        scope: '/'
    }).then(function(registration) {
            if (registration && registration.unregister) {
                registration.unregister().then(function(isUnRegistered) {
                    if (isUnRegistered) {
                        console.log('[SW]: ServiceWorker注销成功');
                    } else {
                        console.log('[SW]: ServiceWorker注销失败');
                    }
                });
            }
        ).catch(function(error) {
            console.log('[SW]: ServiceWorker注销失败 : ' + error);
        });
    }
```

#### 4、Service Worker 脚本

通过 register 方法，注册 Service Worker 脚本后，就可以通过监听 Service Worker 提供的生命周期方法来实现我们自己的业务逻辑了。如下的代码实现了一个简单的功能：监听 Service Worker 的 install 事件、activate 事件和 fetch 事件。结合上面的生命周期部分，我们可以完整实现本地缓存与相关匹配机制，从而完成页面性能优化。

```javascript
// 生命周期事件监听  #sw.js
const VERSION = "V2";
const CACHE_NAME = "CACHE_" + VERSION;

const cacheUrls = [
  "/",
  "/api/data",
  "/css/index.css",
  "/js/index.js",
  "/js/request.js",
];

// 监听 service worker 的 install 事件，注册成功后被触发
self.addEventListener("install", function (event) {
  console.log("[SW]: 安装 service worker");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(cacheUrls);
      })
      .then(self.skipWaiting)
  );
});
```

如上代码是 install 事件监听器，在事件函数中使用了 event.waitUntil() 方法——这会确保 Service Worker 会在 waitUntil() 里面的代码执行完毕后完成安装。

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/84653/1559118889833-62d072a4-5e15-4381-892f-be87d4ea9caf.png#align=left&display=inline&height=308&name=image.png&originHeight=308&originWidth=519&size=41540&status=done&width=519)

![cache-w700](https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/serviceworker/caches.jpg)

我们可以直接使用 caches，这是 window 上的一个对象，对应“Cache Storage”对象，主要是为缓存库相关操作支持。在 waitUntil() 内，，我们使用了 caches.open() 方法来创建了一个变量为 CACHE_NAME 的缓存，将会是我们的站点资源缓存的版本。它返回了一个创建缓存的 promise，当它 resolved 的时候，会传入该版本缓存库对象，我们接着会调用.addAll()（也可以用 add()），这个方法的参数是一个由一组相对于 origin 的 URL 组成的数组，这些 URL 就是你想缓存的资源的列表。

addAll() 方法接受一个 URL 数组，检索它们，并将生成的 response 对象添加到给定的缓存中。 在检索期间创建的 request 对象成为存储的 response 操作的 key。这个过程中请求是自动的，但是一旦数组中的资源存在请求失败，那么 worker 将直接 redundant 处理，使本次请求失败，所以保险起见，更建议使用 add()方法，该方法属于“手动式”，对于请求失败情况可以自定义处理，不至于因个别资源问题导致缓存过程失败。

add()方法接受一个 URL 作为参数，请求参数指定的 URL，并将返回的 response 对象添加到给定的 cache 中。

```javascript
caches.open(CACHE_NAME).then(cache => {
            cacheUrls.forEach(item => {
                cache.add(item).catch(error => {
                    console.log("缓存添加失败")
                });
            })
```

<br />如果 promise 被 rejected，安装就会失败，这个 worker 不会做任何事情。在下次注册发生的时候，会进行再次尝试。

当安装成功完成之后，Service Worker 就会激活。在第一次你的 Service Worker 注册／激活时，这并不会有什么不同。但是当 Service Worker 更新的时候 ，就不太一样了。

```javascript
//activate事件监听，install完成后，进入wating，需要满足特定条件，activate事件被触发
self.addEventListener("activate", function (event) {
  event.waitUntil(
    Promise.all(
      caches.keys().then((cacheList) => {
        cacheList.forEach((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            caches.delete(cacheName);
          }
        });
      }),
      self.clients.clam()
    )
  );
});
```

如上代码是 activate 事件监听器，同样在事件函数中使用了 ExtendableEvent.waitUntil() 方法——这会确保 Service Worker 在 waitUntil() 里面的代码执行完毕之后完成激活。

该事件被触发调用(并且无 cache 的情况下)，意味着，资源已经缓存进浏览器了，这个自定义设定缓存是 Service Worker 功能核心之一。剩下的就是编写一套匹配机制，以确定哪些资源直接读取这些缓存，哪些不处理。

这就用到了“fetch”事件，严格来说这个过程是 Service Worker 功能核心之二：匹配处理。我们通常做法是给 Service Worker 添加一个 fetch 的事件监听器，接着调用 event 上的 respondWith() 方法来劫持浏览器 HTTP 请求，然后你可以用特定逻辑处理相关相应。

```javascript
//网络请求监听，activate成功完成后，此时worker可以控制页面行为，有请求发送，则事件被触发
self.addEventListener('fetch', function(event) {
    console.log(`[SW]:「判断是否在缓存序列中」：${event.request.url}`);
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // 检测是否已经缓存过
            if (response) {
                // 确定缓存过，读取资源
                return response;
            }

            const fetchRequest = event.request；

            //.url,{mode: 'cors'} 无缓存，进行 fetch 请求
            return fetch(fetchRequest).then(
                function(response) {
                    // 检测请求是否有效
                    if (!response || response.status !== 200) { // || response.type !== 'basic'
                        console.log(`[SW]:「请求不完全成功，直接response」：${event.request.url}`);
                        return response;
                    }

                    const responseToCache = response.clone();
                    // fetch 成功，存入缓存库。
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                }
            ).catch(error => {
                console.log(error)
            });
        })
    );
});
```

该事件监听中，我们使用了 respondWith()，所有的业务逻辑函数都作为该方法参数。具体来讲，这个 event.respondWith() 方法旨在包裹代码，这些代码为来自受控页面的 request 生成自定义的 response。这些代码通过返回一个 Response 、 network error 或者 Fetch 的方式 resolve。

而后面的“caches”，可以理解为缓存库大对象，是包含本地本域名下所有缓存库集合。

cache.match() 方法, 返回一个 Promise，解析为传入 request 对象 Cache 对象中的第一个匹配请求相关联的 Response 。如果没有找到匹配，Promise 解析为 undefined。

--
结合 install 监听函数处我们可以看到，该过程中我们设定缓存了文件资源，而 fetch 事件函数这，同样有缓存资源的动作，那么二者会不会有什么关系？答案是二者存储并无冲突，属于策略选择，我们可以在 install 的时候进行静态资源缓存，也可以通过 fetch 事件处理回调来代理页面请求从而实现动态资源缓存。至于二者关系与区别：

on install 的优点是第二次访问即可离线，缺点是需要将需要缓存的 URL 在编译时插入到脚本中，增加代码量和降低可维护性。

on fetch 的优点是无需更改编译过程，也不会产生额外的流量，缺点是需要多一次访问才能离线可用。

#### 5、Service 更新

使用 Service Worker 作为缓存系统的一个核心优势之一，就是它的细粒度可控性；但这意味着我们需要自己处理缓存的版本管理问题。cacheStorage 为此提供了简单的 API，方便我们遍历所有的 cache、找出过期的 cache 并删除：

1. 方法一。如果 /sw.js 内容有更新，当访问网站页面时浏览器获取了新的文件，逐字节比对 /sw.js 文件发现不同时它会认为有更新启动 更新算法，于是会安装新的文件并触发 install 事件。但是此时已经处于激活状态的旧的 Service Worker 还在运行，新的 Service Worker 完成安装后会进入 waiting 状态。直到所有已打开的页面都关闭，旧的 Service Worker 自动停止，新的 Service Worker 才会在接下来重新打开的页面里生效。
2. 方法二。可以在 install 事件中执行 self.skipWaiting() 方法，跳过 waiting 状态，然后会直接进入 activate 阶段。接着在 activate 事件发生时，通过执行 self.clients.claim() 方法，强制更新客户端上的 Service Worker。

## HTTP 缓存与 Service Worker 缓存

我们先要明确“Service Worker”真正的缓存处理部分，是基于“事件”触发的，这个事件就是浏览器页面主线程中的“fetch 请求”事件，Service Worker 则是拦截 fetch 请求，进行本地缓存库比对，之后根据情况确定是直接 return 请求还是将请求发出。

Web 服务器在发送数据时可以在 response 的 header 对象中添加  Expires 或者 Cache-Control  来通知浏览器，它可以使用资源的当前副本，直到指定的“过期时间”，期间无需再次发送请求。反过来，浏览器可以缓存此资源，并且只有在有效期满后才会再次检查新版本。<br />
<br />那么，我们根据两种原理可以得出，Service Worker 并不会影响 http 缓存。当 http 缓存，也就是“memory cache / disk cache”过期前，浏览器发出请求，经过浏览器层比对直接读取 http 缓存资源，该过程中，请求并没有真正发出。因而 Service Worker 的 fetch 事件监听也将不会被触发，结果是请求正常呈现，二者互不干扰。需要指出的是：实际上浏览器请求过程中，http 缓存效率比 Service Worker 缓存要快得多。<br />

<br />接着说，Service Worker 通过监听 fetch 事件进行比对处理，那么我们原理篇中讲过的“[304 缓存](https://yuque.antfin-inc.com/ykvip_fed/fe_tech_share/oyzbnz#bPAcF)”可就与 Service Worker“撞车”了。因为 304 是在没有 http 缓存，或者 http 缓存过期的情况下，本身 response-header 中又有 Etag 字段，浏览器再次发送请求，服务端接到请求比对 Etag，进而判断是返回 200/新资源，还是 304/空响应体，这个过程请求是肯定会发出的，发出请求也就会触发 fetch 事件，如果返回 304 则意味着 response 为空，那么 fetch 事件函数中将 response 存储到环境及返回到浏览器呈现都出错。<br />

```javascript
//为了防止返回304，请求时加时间戳；存储时照常使用event.request
fetch(event.request.url + '?d=' + +new Date()) //fetch
    .then(res => {
        if (res.ok) {
            cache.put(event.request, res.clone());
            return res
        }
    })
    .catch() //离线(offline)
})
```

<br />这算起来是一个严重的“事故”，那么我们如何避免？如上代码所示，我们为了防止返回 304，请求时加时间戳；存储时照常使用 event.request，这种情况下，至少有 Service Worker 发出的 fetch 不会有返回 304 的情况出现。<br />
<br />
<br />
<br />资料参考：<br />[https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)<br />[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)
