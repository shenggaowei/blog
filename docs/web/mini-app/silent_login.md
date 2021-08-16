1. # 背景

首先谈谈在小程序的开发中，如何借助微信的能力标识一个用户?

微信官方提供了两种标识：

1.  `OpenId` 是一个用户对于一个小程序／公众号的标识，开发者可以通过这个标识识别出用户。
2.  `UnionId` 是一个用户对于同主体微信小程序／公众号／APP 的标识，开发者需要在微信开放平台下绑定相同账号的主体。开发者可通过`UnionId`，实现多个小程序、公众号、甚至 APP 之间的数据互通。

同一个用户的这两个 ID 对于同一个小程序来说是永久不变的，就算用户删了小程序，下次用户进入小程序，开发者依旧可以通过后台的记录标识出来。那么如何获取`OpenId`和`UnionId`呢？

早期(2018 年 4 月之前)的小程序设计使用 `wx.getUserInfo` 接口，来获取用户信息。设计这个接口的初衷是希望开发者在真正需要用户信息（如头像、昵称、手机号等）的情况下才去调取这个接口。但很多开发者为了拿到`UnionId`，会在小程序启动时直接调用这个接口，导致用户在使用小程序的时候产生困扰，归结起来有几点：

1.  开发者在小程序首页直接调用 `wx.getUserInfo` 进行授权，弹框获取用户信息，会使得一部分用户点击“拒绝”按钮。
2.  在开发者没有处理用户拒绝弹框的情况下，用户必须授权头像昵称等信息才能继续使用小程序，会导致某些用户放弃使用该小程序。
3.  用户没有很好的方式重新授权，尽管微信官方增加了设置页面，可以让用户选择重新授权，但很多用户并不知道可以这么操作。

微信官方也意识到了这个问题，针对获取用户信息更新了三个能力：

1.  使用组件来获取用户信息。
2.  **若用户满足一定条件，则可以用`wx.login` 获取到的 code 直接换到`unionId`**。
3.  `wx.getUserInfo` 不需要依赖 `wx.login` 就能调用得到数据。

本文主要讲述的是第二点能力，微信官方**鼓励开发者在不骚扰用户的情况下合理获得`unionid`，而仅在必要时才向用户弹窗申请使用昵称头像**，从而衍生出「静默登录」和「用户登录」两种概念。

# 2\. 什么是静默登录？

小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。

很多开发者会把 `wx.login` 和 `wx.getUserInfo` 捆绑调用当成登录使用，其实 `wx.login` 已经可以完成登录，`wx.getUserInfo` 只是获取额外的用户信息。

在 `wx.login` 获取到 `code` 后，会发送到开发者后端，开发者后端通过接口去微信后端换取到 `openid` 和 `sessionKey`（现在会将 `unionid` 也一并返回）后，把自定义登录态 `3rd_session`(本业务命名为`auth-token`) 返回给前端，就已经完成登录行为了。**`wx.login` 行为是静默，不必授权的，用户不会察觉**。

`wx.getUserInfo` 只是为了提供更优质的服务而存在，比如获取用户的手机号注册会员，或者展示头像昵称，判断性别，开发者可通过 `unionId` 和其他公众号上已有的用户画像结合来提供历史数据。**因此开发者不必在用户刚刚进入小程序的时候就强制要求授权**。

## 2.1 静默登录流程时序

官方给出了 `wx.login` 的最佳实践如下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f3432eb3a924b8eab94538818c8bf0d~tplv-k3u1fbpfcp-watermark.image)

静默登录英文简称为`silentLogin`，代码如下所示：

```javascript
 private async silentLogin(): Promise<void> {
    try {
      this.status.silentLogin.ing();

      // 获取临时登录凭证code
      const code = await getWxLoginCode();
      // 将code发送给服务端
      const res = await API.login(code);
      // 保存登录信息，如auth-token
      storage.setSync(constant.STORAGE_SESSION_KEY, res.data);

      this.status.silentLogin.success();
    } catch (error) {
      logger.error('静默登录失败', error);
      this.status.silentLogin.fail(error);
      throw error;
    }
  }
```

总结为以下三步：

1.  小程序端调用 [`wx.login()`](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fminiprogram%2Fdev%2Fapi%2Fopen-api%2Flogin%2Fwx.login.html "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html") 获取 **临时登录凭证`code`** ，并回传到开发者服务器。
2.  服务器端调用 [`auth.code2Session`](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fminiprogram%2Fdev%2Fapi-backend%2Fopen-api%2Flogin%2Fauth.code2Session.html "https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html") 接口，换取 **用户唯一标识 `OpenID`** 和 **会话密钥 `session_key`**。
3.  开发者服务器可以根据用户标识来生成**自定义登录态(例如：`auth-token`)**，用于后续业务逻辑中前后端交互时**识别用户身份**。

## 2.2 开发者后台校验与解密开放数据

静默登录成功后，微信服务器端会下发一个`session_key`给服务端，而这个会在需要获取微信开放数据的时候会用到。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f3daf4b9cab4ec7b78fe301bd006ca1~tplv-k3u1fbpfcp-watermark.image)

为了确保开放接口返回用户数据的安全性，微信会对明文数据进行签名。开发者可以根据业务需要对数据包进行签名校验，确保数据的完整性。

1.  小程序通过调用接口（如 `wx.getUserInfo`）获取数据时，如果用户已经授权，接口会同时返回以下几个字段。如用户未授权，会先弹出用户弹窗，用户点击同意授权，接口会同时返回以下几个字段。相反如果用户拒绝授权，将调用失败。

|      属性       |                                                                                                                    类型                                                                                                                    |                                     说明                                      |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|   `userInfo`    | [UserInfo](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fminiprogram%2Fdev%2Fapi%2Fopen-api%2Fuser-info%2FUserInfo.html "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html") |                   用户信息对象，不包含 `openid` 等敏感信息                    |
|    `rawData`    |                                                                                                                   string                                                                                                                   |                 不包括敏感信息的原始数据字符串，用于计算签名                  |
|   `signature`   |                                                                                                                   string                                                                                                                   |        使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息         |
| `encryptedData` |                                                                                                                   string                                                                                                                   |                   包括敏感数据在内的完整用户信息的加密数据                    |
|      `iv`       |                                                                                                                   string                                                                                                                   |                              加密算法的初始向量                               |
|    `cloudID`    |                                                                                                                   string                                                                                                                   | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 |

2.  开发者将 `signature`、`rawData` 发送到开发者服务器进行校验。服务器利用用户对应的 `session_key` 使用相同的算法计算出签名 `signature2` ，比对 `signature` 与 `signature2` 即可校验数据的完整性。开发者服务器告诉前端开发者数据可信，即可安全使用用户信息数据。
3.  如果开发者想要获取敏感数据（如 openid,unionID），则将`encryptedData`和`iv`发送到开发者服务器，由服务器使用`session_key`（对称解密密钥）进行**对称解密**，获取敏感数据进行存储并返回给前端开发者。

**注意：** 因为需要用户主动触发才能发起获取手机号接口，所以该功能不由 API 来调用(即上述提到的`wx.getUserInfo`是无法获取手机号的)，需用 `button` 组件的点击来触发。获得`encryptedData`和`iv`，同样发送给开发者服务器，由服务器使用`session_key`（对称解密密钥）进行**对称解密**，获得对应的手机号。

需要关注的是，2021 年 2 月 23 日，微信团队发布了[《小程序登录、用户信息相关接口调整说明》](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fcommunity%2Fdevelop%2Fdoc%2F000cacfa20ce88df04cb468bc52801%3Fsource%3Dindexnew "https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?source=indexnew")，进行了如下调整：

1.  2021 年 2 月 23 日起，通过`wx.login`接口获取的登录凭证可直接换取`unionID`。
2.  2021 年 4 月 13 日后发布新版本的小程序，无法通过`wx.getUserInfo`接口获取用户个人信息（头像、昵称、性别与地区），将直接获取匿名数据。`getUserInfo`接口获取加密后的`openID`与`unionID`数据的能力不做调整。
3.  新增`getUserProfile`接口（基础库 2.10.4 版本开始支持），可获取用户头像、昵称、性别及地区信息，开发者每次通过该接口获取用户个人信息均需用户确认。

即开发者通过组件调用`wx.getUserInfo`将不再弹出弹窗，直接返回匿名的用户个人信息。如果要获取用户头像、昵称、性别及地区信息，需要**改造**成`wx.getUserProfile`接口。

## 2.3 session_key 的有效期

开发者如果遇到因为 `session_key` 不正确而校验签名失败或解密失败，请关注下面几个与 `session_key` 有关的注意事项。

1.  `wx.login` 调用时，用户的 `session_key` 可能会被更新而致使旧 `session_key` 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 `wx.login`，并非每次调用都导致 `session_key` 刷新）。开发者应该在明确需要重新登录时才调用 `wx.login`，及时通过 `auth.code2Session` 接口更新服务器存储的 `session_key`。
2.  微信不会把 `session_key` 的有效期告知开发者。我们会根据用户使用小程序的行为对 `session_key` 进行续期。用户越频繁使用小程序，`session_key` 有效期越长。
3.  开发者在 `session_key` 失效时，可以通过重新执行登录流程获取有效的 `session_key`。使用接口`wx.checkSession`可以校验 `session_key` 是否有效，从而避免小程序反复执行登录流程。
4.  当开发者在实现自定义登录态时，可以考虑以 `session_key` 有效期作为自身登录态有效期，也可以实现自定义的时效性策略。

# 3 「登录」架构

![用户登录架构](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3f249b50de847bbb06d66161f7cbc16~tplv-k3u1fbpfcp-watermark.image)

「登录」方案架构如上图所示，将所有登录相关功能抽象到 **「service 层」**（本项目将其命名为`session`），供 **「业务层」** 调用。本文主要讲述灰色内容，其它模块将在下一篇文章《小程序用户登录设计》中阐述。

## 3.1 `libs` - 提供登录相关的类方法供「业务层」调用

1.  封装`session`类，提供类方法供「业务层」调用。主要有以下几种方法：

|       方法名       |                     功能                     |                        使用场景                        |
| :----------------: | :------------------------------------------: | :----------------------------------------------------: |
|   `silentLogin`    |                 发起静默登录                 |                           \-                           |
|      `login`       |      登录，`silentLogin` 方法的一层封装      |              用于小程序启动时发起静默登录              |
|   `refreshLogin`   |   刷新登录态，`silentLogin` 方法的一层封装   |              用于登录态过期时发起静默登录              |
| `ensureSessionKey` | 验证 `sessionKey` 是否过期，过期则刷新登录态 | 绑定微信授权手机号时验证是否过期，过期则得重新弹窗授权 |

2.  装饰器：

    - **`fuse-line`**： 熔断机制，如果短时间内多次调用，则停止响应一段时间，类似于 TCP 慢启动。用于解决`refreshLogin`、`login`等方法的并发处理问题。
    - **`single-queue`**： 单队列模式，同一时间，只允许一个正在过程中的网络请求。请求被锁定之后，同样的请求都会被推入队列，等待进行中的请求返回后，消费同一个结果。用于解决`refreshLogin`、`login`等方法的并发处理问题。

# 4\. 静默登录的调用时机

## 4.1 小程序启动时调用

由于大部分情况都需要依赖登录态，在小程序启动的时候（`app.onLaunch()`）调用静默登录是最常见的手段。这里我们封装一个`login`函数如下所示，首先调用`wx.checkSession`判断`session_key`是否过期，如果`session_key`未过期且本地存在`auth_token`自定义登录态，表示当前的静默登录态仍然有效，无需进行其它操作。否则，表示静默登录态失效或者新用户从未发起过静默登录，那么发起静默登录流程。

```javascript
public async login(): Promise<void> {
    // 调用wx.checkSession判断session_key是否过期
    const hasSession = await checkSession();

    // 本地已有可用登录态且session_key未过期，resolve。
    if (this.getAuthToken() && hasSession) return Promise.resolve();

    // 否则，发起静默登录
    await this.silentLogin();
}
```

但是由于原生的小程序启动流程中， App，Page，Component 的生命周期钩子函数，都不支持**异步阻塞**。所以很有可能出现小程序页面加载完成后，静默登录过程还没有执行完毕的情况，这会导致后续一些依赖登录态的操作（比如请求发起）**出错**。

## 4.2 接口请求发起时调用

保险起见，如果某些接口需要携带自定义登录态进行鉴权，则需要在请求发起时进行拦截，校验登录态，并刷新登录。刷新登录代码如下所示：

```javascript
 public async refreshLogin(): Promise<void> {
    try {
      // 清除 Session
      this.clearSession();
      // 发起静默登录
      await this.silentLogin();
    } catch (error) {
      throw error;
    }
  }
```

整个流程如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/267e82dbce8347029b383c440ce95b80~tplv-k3u1fbpfcp-watermark.image)

- **拦截 request**：
  1.  **判断是否需要鉴权**：请求发起时，拦截请求，判断请求是否需要添加`auth-token`，如若不需要，直接发起请求。如若需要，执行第二步。
  2.  **判断是否需要发起静默登录**：判断 `storage` 中是否存在`auth-token`，如若不存在，发起「刷新登录」。
  3.  **请求头部添加`auth-token`**：添加`auth-token`，发起请求。
- **与服务端通信**：发起请求，服务端处理请求返回结果。
- **拦截 response**: 解析状态码
  1.  **状态码为`AUTH_FAIL`**：服务端返回`code`为“鉴权失败”，触发这种情景的原因有两个，一是接口需要鉴权，但是发起请求时未携带`auth-token`，二是`auth-token`过期。这时将上一次请求携带的`auth-token`与本地存储的`auth-token`比较，如果不一致，表示登录态已经刷新过了，那么就直接重新发起请求。如果一致，**发起刷新登录，拿到新的`auth-token`后重新发起请求，这个动作对用户来说是无感知的**。
  2.  **状态码为`USER_WX_SESSIONKEY_EXPIRE`**：服务器返回`code`为“用户登录态过期”，这是针对用户授权手机号登录失败定制的状态码，如果登录态已过期，表示存储在服务端的`session_key`也是过期的，那么点击授权手机号获取的加密数据发送到服务端进行对称解密，由于`session_key`失效，无法解密出真正的手机号。因此需要重新发起静默登录，等待用户重新点击授权按钮获取新的加密数据，然后发起新的解密请求
  3.  **状态码为其它**：比如`Success`或者其他业务请求错误的情况，不进行拦截，返回 response 让业务代码解析。

## 4.3 wx.checkSession 罢工之谜

基于上述接口请求发起时调用的流程，很多人会有疑问，既然服务端会返回`auth-token`过期的状态码，为啥不在请求发送前进行拦截，使用`wx.checkSession`接口校验登录态是否过期（如下图所示，增加红框内的步骤）？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab44ce40e05b45ad908cbeb20a3796ef~tplv-k3u1fbpfcp-watermark.image)

这是因为，我们通过实验发现，在 `session_key` 已过期的情况下，`wx.checkSession` 有一定的几率返回`true`。即增加`wx.checkSession`步骤并不能百分百保证登录态不会过期，后续仍然需要对不同的状态码进行处理。

社区也有相关的反馈未得到解决：

- [小程序解密手机号,隔一小段时间后,checksession:ok,但是解密失败](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fcommunity%2Fdevelop%2Fdoc%2F000424005b89983f337a622c751000%3FhighLine%3Dwx.checkSession "https://developers.weixin.qq.com/community/develop/doc/000424005b89983f337a622c751000?highLine=wx.checkSession")
- [wx.checkSession 有效，但是解密数据失败](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fcommunity%2Fdevelop%2Fdoc%2F0008e429bd0c886e10699f59c51000%3F_at%3D1602745291452 "https://developers.weixin.qq.com/community/develop/doc/0008e429bd0c886e10699f59c51000?_at=1602745291452")
- [checkSession 判断 session_key 未失效，但是解密手机号失败](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fcommunity%2Fdevelop%2Fdoc%2F000a04ab4546d80d5428ffcee51800%3F_at%3D1602745291452 "https://developers.weixin.qq.com/community/develop/doc/000a04ab4546d80d5428ffcee51800?_at=1602745291452")

所以结论是：`wx.checkSession`可靠性是不达 100% 的。

基于以上，我们需要对 `session_key` 的过期做一些容错处理：

1.  发起需要使用 `session_key` 的请求前，做一次 `wx.checkSession` 操作，如果失败了刷新登录态。
2.  后端使用`session_key`解密开放数据失败之后，返回特定错误码（如：`USER_WX_SESSIONKEY_EXPIRE`），前端刷新登录态。

## 4.4 并发处理

我们知道，当启动小程序时，各种监控、埋点数据上报都需要获取用户的个人信息，这些信息都得「静默登录」后才能获取，因此会同时发起多个`login`请求。另一种情况下，假设一个新用户进入一个业务复杂的页面，同时发起五个不同的业务请求，恰巧这五个请求都需要鉴权，那么五个请求都会被拦截并发起`refreshLogin`请求。显然，这样的并发是不合理的。

基于此，我们设计了如下方案：

- **单队列模式**：

  1.  **请求锁**：同一时间，只允许一个正在过程中的网络请求。
  2.  **等待队列**：请求被锁定之后，同样的请求都会被推入队列，等待进行中的请求返回后，消费同一个结果。

- **熔断机制**：如果短时间内多次调用，则停止响应一段时间，类似于 TCP 慢启动。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3b5b8dfd9f744f7beae509889497479~tplv-k3u1fbpfcp-watermark.image) ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/154b32a404a14f1f98144cb4a0175472~tplv-k3u1fbpfcp-watermark.image)

如上图所示，首先`refreshLogin`请求入队，队列中只有一个请求，发送该请求，同时保险丝计入次数 1，服务端返回请求结果，消费结果。接着又发起一个`refreshLogin`请求，队列中只有一个请求，发送该请求，同时保险丝计入次数 2。然后又连续发起三个请求，由于上一个请求还没有执行完成，将这三个请求入队，等待上一个请求结果返回，队列中的四个请求消费同一个结果。由于触发自动冷却阈值，保险丝重置。

以上两种方案通过装饰器模式引入，代码如下所示，`refreshLogin`函数其实是`slientLogin`函数的一层封装，用于接口发起时调用。而前面提到的`login`函数也是`slientLogin`函数的一层封装，用户小程序启动时调用。

```typescript
 @singleQueue({ name: 'refreshLogin' })
  @fuseLine({ name: 'refreshLogin' })
  public async refreshLogin(): Promise<void> {
    try {
      // 清除 Session
      this.clearSession();
      await this.silentLogin();
    } catch (error) {
      throw error;
    }
  }
```

到此，很多读者可能对熔断机制还不甚理解，熔断的目的是为一个函数提供保险丝保障，短时间内多次调用，会熔断一段时间，这段时间内拒绝所有请求。如果在自动冷却阈值内，没有请求通过，则重置保险丝。代码如下所示：

```typescript
export default function fuseLine({
  // 一次熔断前重试次数
  tryTimes = 3,

  // 重试间隔，单位 ms
  restoreTime = 5000,

  // 自动冷却阈值，单位 ms
  coolDownThreshold = 1000,

  // 名称
  name = "unnamed",
}: {
  tryTimes?: number;
  restoreTime?: number;
  name?: string;
  coolDownThreshold?: number;
} = {}) {
  // 请求锁
  let fuseLocked = false;

  // 当前重试次数
  let fuseTryTimes = tryTimes;

  // 自动冷却
  let coolDownTimer;

  // 重置保险丝
  const reset = () => {
    fuseLocked = false;
    fuseTryTimes = tryTimes;
    logger.info(`${name}-保险丝重置`);
  };

  const request = async () => {
    if (fuseLocked) throw new Error(`${name}-保险丝已熔断，请稍后重试`);

    // 已达最大重试次数
    if (fuseTryTimes <= 0) {
      fuseLocked = true;

      // 重置保险丝
      setTimeout(() => reset(), restoreTime);

      throw new Error(`${name}-保险丝熔断!!`);
    }

    // 自动冷却系统
    if (coolDownTimer) clearTimeout(coolDownTimer);
    coolDownTimer = setTimeout(() => reset(), coolDownThreshold);

    // 允许当前请求通过保险丝，记录 +1
    fuseTryTimes = fuseTryTimes - 1;
    logger.info(`${name}-通过保险丝(${tryTimes - fuseTryTimes}/${tryTimes})`);
    return Promise.resolve();
  };

  return function (
    _target: Record<string, any>,
    _propertyName: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) {
    const method = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      await request();
      if (method) return method.apply(this, args);
    };
  };
}
```

# 5\. 最后

读到这里，相信你已经了解「静默登录」和「用户登录」的区别。「静默登录」是获取微信登录态的过程，通过获取微信提供的用户身份标识，快速建立小程序内的用户体系。「用户登录」是用户授权个人开放数据成为会员的过程，是指从游客态转换成会员态的，拥有购买等操作权限。

两者并不是一个概念，「用户登录」会在下一篇文章[《小程序用户登录架构设计》](https://juejin.cn/post/6945264484491460638 "https://juejin.cn/post/6945264484491460638")中进行阐述。
