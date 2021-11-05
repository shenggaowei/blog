<template>
  <h1 id="客户端请求" tabindex="-1">
    <a class="header-anchor" href="#客户端请求" aria-hidden="true">#</a>
    客户端请求
  </h1>
  <h2 id="jsonp" tabindex="-1">
    <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token constant">JSONP</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token function-variable function">formatParams</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> arg <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        api<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        callbackKeyName <span class="token operator">=</span> <span class="token string">'callback'</span><span class="token punctuation">,</span>
        callbackFnName <span class="token operator">=</span> <span class="token string">'jsonp_'</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        success<span class="token punctuation">,</span>
        error<span class="token punctuation">,</span>
        timeout<span class="token punctuation">,</span>
        connect <span class="token operator">=</span> <span class="token string">'?'</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
    <span class="token keyword">let</span> oHead <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'head'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> oS <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">[</span>callbackKeyName<span class="token punctuation">]</span> <span class="token operator">=</span> callbackFnName<span class="token punctuation">;</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> api <span class="token operator">+</span> connect <span class="token operator">+</span> <span class="token function">formatParams</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oS<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
    oHead<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oS<span class="token punctuation">)</span><span class="token punctuation">;</span>

    window<span class="token punctuation">[</span>callbackFnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>oS<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">success</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        oHead<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oS<span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">[</span>callbackFnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    window<span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    oS<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">[</span>callbackKeyName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            message<span class="token operator">:</span> <span class="token string">'超时了'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        oHead<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout <span class="token operator">||</span> <span class="token number">8000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br /><span class="line-number">11</span><br /><span class="line-number"
        >12</span
      ><br /><span class="line-number">13</span><br /><span class="line-number"
        >14</span
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br /><span class="line-number">19</span><br /><span class="line-number"
        >20</span
      ><br /><span class="line-number">21</span><br /><span class="line-number"
        >22</span
      ><br /><span class="line-number">23</span><br /><span class="line-number"
        >24</span
      ><br /><span class="line-number">25</span><br /><span class="line-number"
        >26</span
      ><br /><span class="line-number">27</span><br /><span class="line-number"
        >28</span
      ><br /><span class="line-number">29</span><br /><span class="line-number"
        >30</span
      ><br /><span class="line-number">31</span><br /><span class="line-number"
        >32</span
      ><br /><span class="line-number">33</span><br /><span class="line-number"
        >34</span
      ><br /><span class="line-number">35</span><br /><span class="line-number"
        >36</span
      ><br /><span class="line-number">37</span><br /><span class="line-number"
        >38</span
      ><br /><span class="line-number">39</span><br /><span class="line-number"
        >40</span
      ><br /><span class="line-number">41</span><br /><span class="line-number"
        >42</span
      ><br /><span class="line-number">43</span><br /><span class="line-number"
        >44</span
      ><br /><span class="line-number">45</span><br /><span class="line-number"
        >46</span
      ><br />
    </div>
  </div>
  <p>注意点：</p>
  <ol>
    <li>
      实为 get
      请求，参数需要编码。回调函数的关键字和函数名称也需要加入到参数中。
    </li>
    <li>jsonp 下载文件是在 appendChild 之后发生的。与 src 的设置顺序无关。</li>
    <li>超时目前只能通过设置 setTimeout 来实现。</li>
  </ol>
  <h2 id="ajax" tabindex="-1">
    <a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">Ajax</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        methods <span class="token operator">=</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function-variable function">onSucess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function-variable function">onError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">0</span><span class="token punctuation">,</span> url <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> dataType
    <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>methods <span class="token operator">===</span> <span class="token string">'GET'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        url <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">"?"</span> <span class="token operator">+</span> <span class="token function">parsedGetParams</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> xhr

    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        xhr <span class="token operator">=</span> <span class="token function">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">'Microsoft.XMLHTTP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">onError</span><span class="token punctuation">(</span><span class="token string">'超时了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span>

    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;=</span> <span class="token number">300</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> res <span class="token operator">=</span> dataType <span class="token operator">===</span> <span class="token string">'json'</span> <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span> <span class="token operator">:</span> xhr<span class="token punctuation">.</span>responseText
                <span class="token function">onSucess</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>methods<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>methods <span class="token operator">===</span> <span class="token string">'POST'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//设置表单提交时的内容类型</span>
        xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br /><span class="line-number">11</span><br /><span class="line-number"
        >12</span
      ><br /><span class="line-number">13</span><br /><span class="line-number"
        >14</span
      ><br /><span class="line-number">15</span><br /><span class="line-number"
        >16</span
      ><br /><span class="line-number">17</span><br /><span class="line-number"
        >18</span
      ><br /><span class="line-number">19</span><br /><span class="line-number"
        >20</span
      ><br /><span class="line-number">21</span><br /><span class="line-number"
        >22</span
      ><br /><span class="line-number">23</span><br /><span class="line-number"
        >24</span
      ><br /><span class="line-number">25</span><br /><span class="line-number"
        >26</span
      ><br /><span class="line-number">27</span><br /><span class="line-number"
        >28</span
      ><br /><span class="line-number">29</span><br /><span class="line-number"
        >30</span
      ><br /><span class="line-number">31</span><br /><span class="line-number"
        >32</span
      ><br /><span class="line-number">33</span><br /><span class="line-number"
        >34</span
      ><br /><span class="line-number">35</span><br /><span class="line-number"
        >36</span
      ><br /><span class="line-number">37</span><br /><span class="line-number"
        >38</span
      ><br /><span class="line-number">39</span><br /><span class="line-number"
        >40</span
      ><br /><span class="line-number">41</span><br /><span class="line-number"
        >42</span
      ><br /><span class="line-number">43</span><br /><span class="line-number"
        >44</span
      ><br />
    </div>
  </div>
  <p>
    <img
      src="https://shenggao.oss-cn-beijing.aliyuncs.com/blog/2020/07/16/ping-mu-kuai-zhao-20190915-xia-wu103513.png"
      alt="屏幕快照 2019-09-15 下午10.35.13"
    />
  </p>
  <h2 id="fetch" tabindex="-1">
    <a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch
  </h2>
  <p>https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    credentials<span class="token operator">:</span> <span class="token string">'include'</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">'content-type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <div class="line-numbers">
      <span class="line-number">1</span><br /><span class="line-number">2</span
      ><br /><span class="line-number">3</span><br /><span class="line-number"
        >4</span
      ><br /><span class="line-number">5</span><br /><span class="line-number"
        >6</span
      ><br /><span class="line-number">7</span><br /><span class="line-number"
        >8</span
      ><br /><span class="line-number">9</span><br /><span class="line-number"
        >10</span
      ><br />
    </div>
  </div>
  <h2 id="fetch-和-ajax-的区别" tabindex="-1">
    <a class="header-anchor" href="#fetch-和-ajax-的区别" aria-hidden="true"
      >#</a
    >
    fetch 和 ajax 的区别
  </h2>
  <ol>
    <li>fetch 是基于 promise 实现的，也可以结合 async/await。</li>
    <li>
      fetch 请求默认是不带 cookie 的，需要设置
      fetch（URL，{credentials:’include’})。Credentials
      有三种参数：same-origin，include，*。
    </li>
    <li>
      服务器返回400 500
      状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject。
    </li>
    <li>所有版本的 IE 均不支持原生 Fetch。</li>
    <li>fetch是widow的一个方法；</li>
  </ol>
</template>
