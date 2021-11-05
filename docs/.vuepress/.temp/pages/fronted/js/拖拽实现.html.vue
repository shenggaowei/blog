<template>
  <h1 id="js原生实现拖拽" tabindex="-1">
    <a class="header-anchor" href="#js原生实现拖拽" aria-hidden="true">#</a>
    js原生实现拖拽
  </h1>
  <h2 id="思路" tabindex="-1">
    <a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路：
  </h2>
  <ol>
    <li>元素需要脱离文档流。设置为 position : absolute</li>
    <li>鼠标点击时，获取点击的位置距离元素的左边和顶边的偏移量。</li>
    <li>
      鼠标移动，是在父元素中移动,一般是 html，即
      document.documentElement。<strong>注意不是在元素中移动</strong>。
      <ol>
        <li>
          获取 鼠标点击位置的客户端坐标值(clientX,clientY)，根据偏移量计算出元素
          style 属性的 left 和 top 值。
        </li>
        <li>鼠标放开清除移动事件。</li>
      </ol>
    </li>
    <li>
      边界的处理。
      <ol>
        <li>
          上边界，左边界。判断 offsetTop 或者 offsetLeft 值 &lt;=
          0。相应地改变元素的位置。
        </li>
        <li>
          下边界，右边界。
          <ol>
            <li>
              下边界。 offsetTop &gt;= 元素可移动的区域 height -
              元素自身的高度。
            </li>
            <li>
              右边界。 offsetLeft &gt;= 元素可移动的区域 width -
              元素自身的宽度。
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <h2 id="注意点" tabindex="-1">
    <a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点
  </h2>
  <ol>
    <li>
      获取窗口的宽高用 document.documentElement.clientWidth || clientHeight。用
      html 元素的 offsetHeight 和 offsetWidth 偏移量的话，会是 0，查看 dom
      节点会发现其未被撑开。
    </li>
  </ol>
  <h2 id="代码实现" tabindex="-1">
    <a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现
  </h2>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>    <span class="token keyword">class</span> <span class="token class-name">Drag</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ele <span class="token operator">=</span> ele<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">.</span>onmousedown <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onmousedown</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">onmousedown</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
            document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onmousemove</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>onmouseup <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onmouseup</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// mousemove 事件只有在元素内部移动时才会触发</span>
        <span class="token punctuation">}</span>

        <span class="token function">onmousemove</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token punctuation">{</span>
                offsetWidth<span class="token punctuation">,</span>
                offsetHeight
            <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token punctuation">{</span>
                clientX<span class="token punctuation">,</span>
                clientY
            <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token keyword">let</span> curX <span class="token operator">=</span> clientX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span>
                curY <span class="token operator">=</span> clientY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>curX <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curX <span class="token operator">></span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> offsetWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curX <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> offsetWidth<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>curY <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curY <span class="token operator">></span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> offsetHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curY <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> offsetHeight<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> curX <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> curY <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token function">onmouseup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
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
      ><br /><span class="line-number">47</span><br /><span class="line-number"
        >48</span
      ><br /><span class="line-number">49</span><br />
    </div>
  </div>
</template>
