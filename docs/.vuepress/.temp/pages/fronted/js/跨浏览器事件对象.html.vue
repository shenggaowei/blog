<template>
  <h1 id="跨浏览器事件对象" tabindex="-1">
    <a class="header-anchor" href="#跨浏览器事件对象" aria-hidden="true">#</a>
    跨浏览器事件对象
  </h1>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">let</span> eventUtil <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//添加事件侦听程序</span>
    <span class="token function-variable function">addHandler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">[</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//移除事件侦听程序</span>
    <span class="token function-variable function">removeHandler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>detachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">[</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//获取事件对象</span>
    <span class="token function-variable function">getEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> event <span class="token operator">?</span> event <span class="token operator">:</span> window<span class="token punctuation">.</span>event
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//获取事件目标对象</span>
    <span class="token function-variable function">getTarget</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//取消事件的默认行为</span>
    <span class="token function-variable function">preventDefault</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>returnValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//阻止事件捕获或者冒泡 ie只有冒泡</span>
    <span class="token function-variable function">stopPropagation</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>cancelBubble<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//获取触发 mouseover 和 mouseout 事件时的相关元素</span>
    <span class="token function-variable function">getRelatedTarget</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>relatedTarget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>relatedTarget
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>fromElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>fromElement
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>toElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>toElement
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 获取触发 mousedown 和 mosueup 鼠标按钮的数值 需兼容ie</span>
    <span class="token function-variable function">getButton</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>implementation<span class="token punctuation">.</span><span class="token function">hasFeature</span><span class="token punctuation">(</span><span class="token string">'MouseEvents'</span><span class="token punctuation">,</span> <span class="token string">'2.0'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>button
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> button <span class="token operator">=</span> event<span class="token punctuation">.</span>button<span class="token punctuation">;</span>
            <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> isLeft <span class="token operator">=</span> left<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele <span class="token operator">===</span> button<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> isMid <span class="token operator">=</span> mid<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele <span class="token operator">===</span> button<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> isRight <span class="token operator">=</span> right<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele <span class="token operator">===</span> button<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">0</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isMid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>，
    <span class="token doc-comment comment">/**
     * 获取触发 mousewheel 事件的 wheelDelta 值,火狐为 detail 值 
     * 条件1：dom 向上为正(n * 120) 向下为负(n * -120)
     * 条件2：opera &lt; 9.5 上为负(n * -120) 下位正(n * 120)
     * 条件3：火狐不支持 mousewheel，支持 DOMMouseScroll事件 向上为负(n * -3) 向下为正(n * 3)
     * 该方法统一兼容为DOM标准 上为(n * 120) 下为(n * -120)
     **/</span>
    <span class="token function-variable function">getWheelDelta</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//ua的检测和获取方法</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>client<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>opera <span class="token operator">&amp;&amp;</span> client<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>opera <span class="token operator">&lt;</span> <span class="token number">9.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>event<span class="token punctuation">.</span>wheelDelta
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> event<span class="token punctuation">.</span>wheelDelta
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span>event<span class="token punctuation">.</span>detail <span class="token operator">*</span> <span class="token number">40</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**获取触发 keyPress 事件的 charCode */</span>
    <span class="token function-variable function">getCharCode</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> event<span class="token punctuation">.</span>charCode <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>charCode
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> event<span class="token punctuation">.</span>keyCode
        <span class="token punctuation">}</span>
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
      ><br /><span class="line-number">49</span><br /><span class="line-number"
        >50</span
      ><br /><span class="line-number">51</span><br /><span class="line-number"
        >52</span
      ><br /><span class="line-number">53</span><br /><span class="line-number"
        >54</span
      ><br /><span class="line-number">55</span><br /><span class="line-number"
        >56</span
      ><br /><span class="line-number">57</span><br /><span class="line-number"
        >58</span
      ><br /><span class="line-number">59</span><br /><span class="line-number"
        >60</span
      ><br /><span class="line-number">61</span><br /><span class="line-number"
        >62</span
      ><br /><span class="line-number">63</span><br /><span class="line-number"
        >64</span
      ><br /><span class="line-number">65</span><br /><span class="line-number"
        >66</span
      ><br /><span class="line-number">67</span><br /><span class="line-number"
        >68</span
      ><br /><span class="line-number">69</span><br /><span class="line-number"
        >70</span
      ><br /><span class="line-number">71</span><br /><span class="line-number"
        >72</span
      ><br /><span class="line-number">73</span><br /><span class="line-number"
        >74</span
      ><br /><span class="line-number">75</span><br /><span class="line-number"
        >76</span
      ><br /><span class="line-number">77</span><br /><span class="line-number"
        >78</span
      ><br /><span class="line-number">79</span><br /><span class="line-number"
        >80</span
      ><br /><span class="line-number">81</span><br /><span class="line-number"
        >82</span
      ><br /><span class="line-number">83</span><br /><span class="line-number"
        >84</span
      ><br /><span class="line-number">85</span><br /><span class="line-number"
        >86</span
      ><br /><span class="line-number">87</span><br /><span class="line-number"
        >88</span
      ><br /><span class="line-number">89</span><br /><span class="line-number"
        >90</span
      ><br /><span class="line-number">91</span><br /><span class="line-number"
        >92</span
      ><br /><span class="line-number">93</span><br /><span class="line-number"
        >94</span
      ><br /><span class="line-number">95</span><br /><span class="line-number"
        >96</span
      ><br /><span class="line-number">97</span><br /><span class="line-number"
        >98</span
      ><br /><span class="line-number">99</span><br /><span class="line-number"
        >100</span
      ><br /><span class="line-number">101</span><br /><span class="line-number"
        >102</span
      ><br /><span class="line-number">103</span><br /><span class="line-number"
        >104</span
      ><br /><span class="line-number">105</span><br /><span class="line-number"
        >106</span
      ><br />
    </div>
  </div>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>监听 scroll 事件， 用户滚动带滚动条的内容时触发
safari 基于Body 跟踪滚动位置， 其他浏览器是基于 html 元素
eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">'CSS1Compat'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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
      ><br /><span class="line-number">9</span><br />
    </div>
  </div>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre v-pre class="language-javascript"><code>获取页面坐标位置
<span class="token constant">IE8</span> 以及更早版本不支持事件对象上面的页面坐标， 可以使用客户端坐标和滚动信息计算出来
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'myDiv'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
eventUtil<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event <span class="token operator">=</span> eventUtil<span class="token punctuation">.</span><span class="token function">getEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        pageX<span class="token punctuation">,</span>
        pageY
    <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageX <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pageX <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX <span class="token operator">+</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageY <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pageY <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY <span class="token operator">+</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pageX<span class="token punctuation">,</span> pageY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      ><br /><span class="line-number">19</span><br />
    </div>
  </div>
</template>
