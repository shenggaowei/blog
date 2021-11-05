<template>
  <h1 id="mysql-安装" tabindex="-1">
    <a class="header-anchor" href="#mysql-安装" aria-hidden="true">#</a> MySql
    安装
  </h1>
  <h2 id="mac-unix-环境" tabindex="-1">
    <a class="header-anchor" href="#mac-unix-环境" aria-hidden="true">#</a> mac
    unix 环境
  </h2>
  <h3 id="推荐-brew" tabindex="-1">
    <a class="header-anchor" href="#推荐-brew" aria-hidden="true">#</a> 推荐
    brew
  </h3>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      v-pre
      class="language-bash"
    ><code>brew <span class="token function">install</span> mysql

<span class="token comment"># 启动 mysql 服务</span>
mysql.server start

<span class="token comment"># 开起 mysql 的密码</span>
mysql_secure_installation
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br />
    </div>
  </div>
</template>
