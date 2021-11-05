<template>
  <h1 id="微信小程序-openid-和-unionid-详解" tabindex="-1">
    <a
      class="header-anchor"
      href="#微信小程序-openid-和-unionid-详解"
      aria-hidden="true"
      >#</a
    >
    微信小程序 openId 和 unionId 详解
  </h1>
  <h2 id="一-官网解释" tabindex="-1">
    <a class="header-anchor" href="#一-官网解释" aria-hidden="true">#</a> 一
    官网解释
  </h2>
  <h3 id="_1-openid" tabindex="-1">
    <a class="header-anchor" href="#_1-openid" aria-hidden="true">#</a> 1.
    OpenID
  </h3>
  <p>
    用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的
    OpenID。
  </p>
  <h3 id="_2-unionid" tabindex="-1">
    <a class="header-anchor" href="#_2-unionid" aria-hidden="true">#</a> 2.
    UnionID
  </h3>
  <p>
    通过获取用户基本信息接口，开发者可通过 OpenID
    来获取用户基本信息，而如果开发者拥有多个公众号，可以通过 UnionID
    机制来在多公众号之间进行用户帐号互通。只要是同一个微信开放平台帐号下的公众号，用户的
    UnionID
    是唯一的。换句话说，同一用户，对同一个微信开放平台帐号下的不同应用，UnionID
    是相同的。
  </p>
  <h2 id="二-理解方式" tabindex="-1">
    <a class="header-anchor" href="#二-理解方式" aria-hidden="true">#</a> 二
    理解方式
  </h2>
  <h3 id="微信号" tabindex="-1">
    <a class="header-anchor" href="#微信号" aria-hidden="true">#</a> 微信号
  </h3>
  <p>
    假设微信号是我们作为微信用户的唯一标识，那么用户 A 的微信号是
    <code>_1232sdasf</code> ，用户 B 的微信号是
    <code>helloBBBBB</code>
    ，那我们在获取用户微信的时候，微信肯定不会返回具体的微信号给我们，对吧？
  </p>
  <p>
    为什么不呢？如果返回微信号，那我们就可以根据微信号来加很多人啦~~~，想想微信号落入了有心机的人手里，是件多麽可怕的事，所以，在用户授权的信息中，是不会涉及到微信号的信息的。
  </p>
  <h3 id="openid" tabindex="-1">
    <a class="header-anchor" href="#openid" aria-hidden="true">#</a> OpenID
  </h3>
  <p>
    申请公众号、小程序的时候，都有一个 APPID，这个是当前账号的标识。另外还有一个
    APPSERECT，用于解密数据使用。
  </p>
  <p>OpenID 就是用户在某一公众平台下的标识。</p>
  <blockquote>
    <p>OpenID = 用户微信号 &amp; 公众平台 APPID（两个数据加密得到的字符串）</p>
  </blockquote>
  <p>举个例子：</p>
  <p>小明微信号是 T1928738ss，公众号 A 是 A 商城，公众号 B 是 B 商城。</p>
  <p>
    此时进入 A 商城，则 A 商城获取到的小明的 openID 是
    33487793847837734，此时进入 B 商城，则 B 商城获取到的小明的 openID 是
    48423948753248900。
  </p>
  <p>
    小明在 A 和 B
    商城之间拥有不同的身份标识，且身份标识是唯一的。也就是说，在一个公众号内，不管进入了多少次，还是一个
    openID。
  </p>
  <p>
    同理，小明在进入小程序 C、小程序 D、公众号 F ...
    这些系统中，其实后台获取到的 OpenID 都是不同的。
  </p>
  <p>
    那么，如果一个商家，既想在公众号上做商城，也想在小程序端做一个商城，同一个微信用户，因为在各个平台的登录的
    OpenID 不一致，商家无法做到用户身份信息或者会员权益信息的同步。
  </p>
  <h3 id="unionid" tabindex="-1">
    <a class="header-anchor" href="#unionid" aria-hidden="true">#</a> UnionID
  </h3>
  <p>
    先引出一个<a
      href="https://link.juejin.cn/?target=https%3A%2F%2Fopen.weixin.qq.com%2F"
      title="https://open.weixin.qq.com/"
      target="_blank"
      rel="noopener noreferrer"
      >开放平台<OutboundLink /></a
    >的概念
  </p>
  <blockquote>
    <p>
      微信开放平台作为第三方移动程序提供接口，使用户可将第三方程序的内容发布给好友或分享至朋友圈，第三方内容借助微信平台获得更广泛的传播。从而形成了一种主流的线上线下微信互动营销方式。
    </p>
  </blockquote>
  <p>结合 UnionID 的解释</p>
  <blockquote>
    <p>
      UnionID
      机制的作用说明：如果开发者拥有多个移动应用、网站应用和公众帐号，可通过获取用户基本信息中的
      unionid
      来区分用户的唯一性，因为同一用户，对同一个微信开放平台下的不同应用（移动应用、网站应用和公众帐号），unionid
      是相同的。
    </p>
  </blockquote>
  <p>
    开放平台的功能有很多，不过我们今天的目标就是要把公众号和小程序连接在同一个开放平台下。
  </p>
  <p>在申请开放平台的时候，也得到这个开放平台的 APPID 和 APPSERECT。</p>
  <blockquote>
    <p>UnionID = 用户微信号 &amp; 开放平台 APPID（两个数据加密得到的字符串）</p>
  </blockquote>
  <p>
    把公众号和小程序连接在同一个开放平台下之后，无论小明从小程序进入，还是从公众号进入，在后台获取信息中就会得到的
    openID 和 UnionID，OpenID 是不同的，UnionID 是相同的，通过 UnionID
    就可以明确知道是小明这一个人。
  </p>
  <h3 id="总结" tabindex="-1">
    <a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结
  </h3>
  <ol>
    <li>OpenID 是 微信号与公众平台 APPID 加密后得到的用户标识。</li>
    <li>
      UnionID 是 微信号与开放平台 APPID
      加密后得到的用户唯一标识，前提是各个公众平台需要先绑定到同一个开放平台，才能从各平台中获取到同一个
      UnionID。
    </li>
  </ol>
</template>
