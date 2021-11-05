<template>
  <h1 id="animated-动画" tabindex="-1">
    <a class="header-anchor" href="#animated-动画" aria-hidden="true">#</a>
    Animated 动画
  </h1>
  <p>
    React-native Animated
    旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用start/stop方法来控制动画执行。
  </p>
  <details class="custom-container details">
    <summary>基础动画。opacity过度</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Animated<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> StyleSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fadeAnim <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>fadeAnim<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            toValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            duration<span class="token operator">:</span> <span class="token number">5000</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Animated.View</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
                styles<span class="token punctuation">.</span>fadingContainer<span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    opacity<span class="token operator">:</span> fadeAnim
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>fadingText<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">我出现了</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    container<span class="token operator">:</span> <span class="token punctuation">{</span>
        flex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">"center"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fadingContainer<span class="token operator">:</span> <span class="token punctuation">{</span>
        paddingVertical<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        paddingHorizontal<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">"powderblue"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fadingText<span class="token operator">:</span> <span class="token punctuation">{</span>
        fontSize<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
        textAlign<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        margin<span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br />
      </div>
    </div>
  </details>
  <details class="custom-container details">
    <summary>interpolate(插值动画)。多个属性同时改变</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Animated<span class="token punctuation">,</span> Easing<span class="token punctuation">,</span> StyleSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> animation <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>animation<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            toValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
            easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        &lt;Animated.View style=</span><span class="token punctuation">{</span>
            <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    opacity<span class="token operator">:</span> animation<span class="token punctuation">,</span>
                    transform<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        rotateZ<span class="token operator">:</span> animation<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                            outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0deg'</span><span class="token punctuation">,</span> <span class="token string">'720deg'</span><span class="token punctuation">]</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Animated.Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                fontSize<span class="token operator">:</span> animation<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                😄😄升高😄😄
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    container<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">'center'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br /><span class="line-number">43</span><br /><span
          class="line-number"
          >44</span
        ><br /><span class="line-number">45</span><br />
      </div>
    </div>
  </details>
  <details class="custom-container details">
    <summary>sequence(顺序执行动画)。目录淡入淡出</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Animated<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Easing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> animationArray <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> animations <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>animationArray<span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Animated<span class="token punctuation">.</span><span class="token function">sequence</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token comment">// 向右移动</span>
                <span class="token operator">...</span>animations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">anim</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>anim<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        toValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        duration<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
                        easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear<span class="token punctuation">,</span>
                        useNativeDriver<span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token comment">// 延迟600毫秒</span>
                Animated<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token comment">// 向左移动，返回原始状态</span>
                <span class="token operator">...</span>animations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">anim</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>anim<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        toValue<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        duration<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
                        easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear<span class="token punctuation">,</span>
                        useNativeDriver<span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>box<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>
                animations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">anim<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
                            style<span class="token operator">=</span><span class="token punctuation">{</span>
                                <span class="token punctuation">[</span>
                                    styles<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
                                    styles<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">list</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">{</span>
                                        transform<span class="token operator">:</span> <span class="token punctuation">[</span>
                                            <span class="token punctuation">{</span>
                                                translateX<span class="token operator">:</span> anim<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                                                    inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                    outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                                            <span class="token punctuation">}</span>
                                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                                        opacity<span class="token operator">:</span> anim<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                                            inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                            outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span>
                                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">}</span>
                        <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    box<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    list<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        borderRadius<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        marginBottom<span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    list1<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">'orange'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    list2<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">'purple'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    list3<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">'pink'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br /><span class="line-number">43</span><br /><span
          class="line-number"
          >44</span
        ><br /><span class="line-number">45</span><br /><span
          class="line-number"
          >46</span
        ><br /><span class="line-number">47</span><br /><span
          class="line-number"
          >48</span
        ><br /><span class="line-number">49</span><br /><span
          class="line-number"
          >50</span
        ><br /><span class="line-number">51</span><br /><span
          class="line-number"
          >52</span
        ><br /><span class="line-number">53</span><br /><span
          class="line-number"
          >54</span
        ><br /><span class="line-number">55</span><br /><span
          class="line-number"
          >56</span
        ><br /><span class="line-number">57</span><br /><span
          class="line-number"
          >58</span
        ><br /><span class="line-number">59</span><br /><span
          class="line-number"
          >60</span
        ><br /><span class="line-number">61</span><br /><span
          class="line-number"
          >62</span
        ><br /><span class="line-number">63</span><br /><span
          class="line-number"
          >64</span
        ><br /><span class="line-number">65</span><br /><span
          class="line-number"
          >66</span
        ><br /><span class="line-number">67</span><br /><span
          class="line-number"
          >68</span
        ><br /><span class="line-number">69</span><br /><span
          class="line-number"
          >70</span
        ><br /><span class="line-number">71</span><br /><span
          class="line-number"
          >72</span
        ><br /><span class="line-number">73</span><br /><span
          class="line-number"
          >74</span
        ><br /><span class="line-number">75</span><br /><span
          class="line-number"
          >76</span
        ><br /><span class="line-number">77</span><br /><span
          class="line-number"
          >78</span
        ><br /><span class="line-number">79</span><br /><span
          class="line-number"
          >80</span
        ><br /><span class="line-number">81</span><br /><span
          class="line-number"
          >82</span
        ><br /><span class="line-number">83</span><br /><span
          class="line-number"
          >84</span
        ><br /><span class="line-number">85</span><br /><span
          class="line-number"
          >86</span
        ><br /><span class="line-number">87</span><br /><span
          class="line-number"
          >88</span
        ><br /><span class="line-number">89</span><br /><span
          class="line-number"
          >90</span
        ><br />
      </div>
    </div>
  </details>
  <details class="custom-container details">
    <summary>loop(循环动画)。无限旋转。</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code><span class="token comment">// loop 循环动画</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Animated<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Easing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fadeAnim <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token keyword">const</span> animationFunc <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>fadeAnim<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        toValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Animated<span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token function">animationFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            useNativeDriver<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        &lt;Animated.View
            style=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
                styles<span class="token punctuation">.</span>fadingContainer<span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    transform<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        rotateZ<span class="token operator">:</span> fadeAnim<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                            outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0deg'</span><span class="token punctuation">,</span> <span class="token string">'360deg'</span><span class="token punctuation">]</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">
        >
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>fadingText<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">😄</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    container<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">"center"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fadingContainer<span class="token operator">:</span> <span class="token punctuation">{</span>
        paddingVertical<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        paddingHorizontal<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">"powderblue"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fadingText<span class="token operator">:</span> <span class="token punctuation">{</span>
        fontSize<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
        textAlign<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        margin<span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br /><span class="line-number">43</span><br /><span
          class="line-number"
          >44</span
        ><br /><span class="line-number">45</span><br /><span
          class="line-number"
          >46</span
        ><br /><span class="line-number">47</span><br /><span
          class="line-number"
          >48</span
        ><br /><span class="line-number">49</span><br /><span
          class="line-number"
          >50</span
        ><br /><span class="line-number">51</span><br /><span
          class="line-number"
          >52</span
        ><br /><span class="line-number">53</span><br /><span
          class="line-number"
          >54</span
        ><br />
      </div>
    </div>
  </details>
  <details class="custom-container details">
    <summary>loop(循环动画)。提示点击动画</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Animated<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Easing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> offset <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token keyword">const</span> startAnimated <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> animationSlider <span class="token operator">=</span> Animated<span class="token punctuation">.</span><span class="token function">sequence</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                toValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                duration<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                delay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                toValue<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                duration<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                delay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Animated<span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span>animationSlider<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">startAnimated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点我点我</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            &lt;Animated.Image
                source=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./assets/hand.png'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
                style=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
                    styles<span class="token punctuation">.</span>image<span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        transform<span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                translateY<span class="token operator">:</span> offset<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                                    inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                    outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
                                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.Image</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>

    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    container<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    image<span class="token operator">:</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    button<span class="token operator">:</span> <span class="token punctuation">{</span>
        padding<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        borderColor<span class="token operator">:</span> <span class="token string">'powderblue'</span><span class="token punctuation">,</span>
        borderRadius<span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br /><span class="line-number">43</span><br /><span
          class="line-number"
          >44</span
        ><br /><span class="line-number">45</span><br /><span
          class="line-number"
          >46</span
        ><br /><span class="line-number">47</span><br /><span
          class="line-number"
          >48</span
        ><br /><span class="line-number">49</span><br /><span
          class="line-number"
          >50</span
        ><br /><span class="line-number">51</span><br /><span
          class="line-number"
          >52</span
        ><br /><span class="line-number">53</span><br /><span
          class="line-number"
          >54</span
        ><br /><span class="line-number">55</span><br /><span
          class="line-number"
          >56</span
        ><br /><span class="line-number">57</span><br /><span
          class="line-number"
          >58</span
        ><br /><span class="line-number">59</span><br /><span
          class="line-number"
          >60</span
        ><br /><span class="line-number">61</span><br /><span
          class="line-number"
          >62</span
        ><br /><span class="line-number">63</span><br /><span
          class="line-number"
          >64</span
        ><br /><span class="line-number">65</span><br /><span
          class="line-number"
          >66</span
        ><br /><span class="line-number">67</span><br /><span
          class="line-number"
          >68</span
        ><br /><span class="line-number">69</span><br /><span
          class="line-number"
          >70</span
        ><br /><span class="line-number">71</span><br /><span
          class="line-number"
          >72</span
        ><br />
      </div>
    </div>
  </details>
  <details class="custom-container details">
    <summary>手势跟踪动画。拖拽</summary>
    <div class="language-jsx ext-jsx line-numbers-mode">
      <pre
        v-pre
        class="language-jsx"
      ><code>  <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Animated<span class="token punctuation">,</span> View<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> PanResponder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pan <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>ValueXY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token keyword">const</span> panResponder <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>
        PanResponder<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function-variable function">onMoveShouldSetPanResponder</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            onPanResponderMove<span class="token operator">:</span> Animated<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> dx<span class="token operator">:</span> pan<span class="token punctuation">.</span>x<span class="token punctuation">,</span> dy<span class="token operator">:</span> pan<span class="token punctuation">.</span>y <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onPanResponderRelease</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                Animated<span class="token punctuation">.</span><span class="token function">spring</span><span class="token punctuation">(</span>pan<span class="token punctuation">,</span> <span class="token punctuation">{</span> toValue<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Animated.View</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                    transform<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> translateX<span class="token operator">:</span> pan<span class="token punctuation">.</span>x <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> translateY<span class="token operator">:</span> pan<span class="token punctuation">.</span>y <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>panResponder<span class="token punctuation">.</span>panHandlers<span class="token punctuation">}</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>box<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Animated.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    container<span class="token operator">:</span> <span class="token punctuation">{</span>
        flex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        alignItems<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        justifyContent<span class="token operator">:</span> <span class="token string">"center"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    box<span class="token operator">:</span> <span class="token punctuation">{</span>
        height<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
        borderRadius<span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre>
      <div class="line-numbers">
        <span class="line-number">1</span><br /><span class="line-number"
          >2</span
        ><br /><span class="line-number">3</span><br /><span class="line-number"
          >4</span
        ><br /><span class="line-number">5</span><br /><span class="line-number"
          >6</span
        ><br /><span class="line-number">7</span><br /><span class="line-number"
          >8</span
        ><br /><span class="line-number">9</span><br /><span class="line-number"
          >10</span
        ><br /><span class="line-number">11</span><br /><span
          class="line-number"
          >12</span
        ><br /><span class="line-number">13</span><br /><span
          class="line-number"
          >14</span
        ><br /><span class="line-number">15</span><br /><span
          class="line-number"
          >16</span
        ><br /><span class="line-number">17</span><br /><span
          class="line-number"
          >18</span
        ><br /><span class="line-number">19</span><br /><span
          class="line-number"
          >20</span
        ><br /><span class="line-number">21</span><br /><span
          class="line-number"
          >22</span
        ><br /><span class="line-number">23</span><br /><span
          class="line-number"
          >24</span
        ><br /><span class="line-number">25</span><br /><span
          class="line-number"
          >26</span
        ><br /><span class="line-number">27</span><br /><span
          class="line-number"
          >28</span
        ><br /><span class="line-number">29</span><br /><span
          class="line-number"
          >30</span
        ><br /><span class="line-number">31</span><br /><span
          class="line-number"
          >32</span
        ><br /><span class="line-number">33</span><br /><span
          class="line-number"
          >34</span
        ><br /><span class="line-number">35</span><br /><span
          class="line-number"
          >36</span
        ><br /><span class="line-number">37</span><br /><span
          class="line-number"
          >38</span
        ><br /><span class="line-number">39</span><br /><span
          class="line-number"
          >40</span
        ><br /><span class="line-number">41</span><br /><span
          class="line-number"
          >42</span
        ><br /><span class="line-number">43</span><br /><span
          class="line-number"
          >44</span
        ><br /><span class="line-number">45</span><br /><span
          class="line-number"
          >46</span
        ><br /><span class="line-number">47</span><br />
      </div>
    </div>
  </details>
  <h2 id="_1-动画的使用" tabindex="-1">
    <a class="header-anchor" href="#_1-动画的使用" aria-hidden="true">#</a> 1
    动画的使用
  </h2>
  <h3 id="使用规则" tabindex="-1">
    <a class="header-anchor" href="#使用规则" aria-hidden="true">#</a> 使用规则
  </h3>
  <ol>
    <li>
      使用基本的 Animated 组件，如 Animated.View Animated.Image Animated.Text
    </li>
    <li>使用 Animated.Value 设定一个或多个初始化值（透明度，位置等等）</li>
    <li>将初始化值绑定到动画目标的属性上（如 style）</li>
    <li>通过 Animated.timing 等函数设定动画参数</li>
    <li>通过 start 函数开启动画</li>
  </ol>
  <h3 id="基本概念" tabindex="-1">
    <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念
  </h3>
  <h4 id="动画值" tabindex="-1">
    <a class="header-anchor" href="#动画值" aria-hidden="true">#</a> 动画值
  </h4>
  <p>
    Animated. Value
    可以定义一个动画值。如果需要实现类似元素的坐标变化等需求，可使用 animated.
    ValueXY 进行初始化。
  </p>
  <h4 id="动画组件" tabindex="-1">
    <a class="header-anchor" href="#动画组件" aria-hidden="true">#</a> 动画组件
  </h4>
  <p>经过特殊处理后的组件，动画值绑定到属性上。rn 自带的有：</p>
  <ul>
    <li>Animated. View</li>
    <li>Animated. Image</li>
    <li>Animated. Text</li>
    <li>Animated. ScrollView</li>
  </ul>
  <p>
    除了直接使用 rn 自带的组件，还可以将自定义的组件封装成动画组件。通过
    Animated.createAnimatedComponent() 用来处理组件，使其可以用于动画。
  </p>
  <div class="custom-container tip">
    <p class="custom-container-title">TIP</p>
    <p>使用动画组件的优点：</p>
    <ol>
      <li>避免react重新渲染和重新调和的开销。</li>
      <li>还能在组件卸载时做一些清理工作，使得这些组件在使用时是安全的。</li>
    </ol>
  </div>
  <h2 id="_2-常用的动画函数" tabindex="-1">
    <a class="header-anchor" href="#_2-常用的动画函数" aria-hidden="true">#</a>
    2 常用的动画函数
  </h2>
  <h3 id="强大的-interpolate" tabindex="-1">
    <a class="header-anchor" href="#强大的-interpolate" aria-hidden="true">#</a>
    强大的 interpolate
  </h3>
  <p>插值函数，允许输入范围映射到不同的输出范围。</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code> <span class="token comment">// 例子</span>
 style <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token punctuation">{</span>
         opacity<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fadeAnim<span class="token punctuation">,</span>
         transform<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
             translateY<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fadeAnim<span class="token punctuation">.</span><span class="token function">interpolate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                 inputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                 outputRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span>
             <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      ><br />
    </div>
  </div>
  <p>
    interpolate 为强大的插值运算函数，当动画数值被 setValue(0.5)
    时，对于以上代码的输出 [0, 150], 会被映射到75。当然支持多区段映射。
  </p>
  <p>
    interpolate 一般使用场景为一个 animated.value
    被应用到多个动画上。只要在属性里面设置好映射的值，就可以用一个动画变量来控制他们了。
  </p>
  <p>interpolate 所支持的功能</p>
  <ol>
    <li>支持自定义多区间段落，常用来定义静止区间。</li>
    <li>支持映射到字符串。（角度的变化，例如: '90deg'）</li>
    <li>支持渐变函数</li>
  </ol>
  <h3 id="无限循环动画-loop" tabindex="-1">
    <a class="header-anchor" href="#无限循环动画-loop" aria-hidden="true">#</a>
    无限循环动画 loop
  </h3>
  <p>无限循环一个指定的动画，从头到尾周而复始。</p>
  <div class="custom-container tip">
    <p class="custom-container-title">TIP</p>
    <p>
      如果此循环的子动画设置了useNativeDriver: true则不会阻塞 JS 线程的执行。
    </p>
  </div>
  <h4 id="如果不用-loop-该如何实现一个-loop-函数呢" tabindex="-1">
    <a
      class="header-anchor"
      href="#如果不用-loop-该如何实现一个-loop-函数呢"
      aria-hidden="true"
      >#</a
    >
    如果不用 loop, 该如何实现一个 loop 函数呢？
  </h4>
  <p>思路：当一次动画完成之后，在回调函数中再次执行动画函数。</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>  <span class="token keyword">function</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> animatedValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>animatedValue<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          toValue<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          easing<span class="token operator">:</span> Easing<span class="token punctuation">.</span>linear<span class="token punctuation">,</span>
          duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
          useNativeDriver<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">finished</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          finished <span class="token operator">&amp;&amp;</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br /><span class="line-number">11</span><br />
    </div>
  </div>
  <h2 id="_3-动画流程控制" tabindex="-1">
    <a class="header-anchor" href="#_3-动画流程控制" aria-hidden="true">#</a> 3
    动画流程控制
  </h2>
  <p>
    <strong>Animated.delay</strong>
    接受一个延迟时间作为参数，在指定的延迟时间过后执行动画。
  </p>
  <p>
    <strong>Animated.sequence</strong>
    接受一系列<strong>动画数组</strong>为参数，并依次执行。
  </p>
  <p>
    <strong>Animated.parallel</strong>
    接受一系列<strong>动画数组</strong>为参数，同时开始执行。
  </p>
  <p>
    <strong>Animated.stagger</strong>
    接受一系列动画数组和一个延迟时间，按照序列，每隔一个延迟时间后执行下一个动画（其实就是插入了
    delay 的 parrllel）。
  </p>
  <h2 id="_4-手势跟随动画" tabindex="-1">
    <a class="header-anchor" href="#_4-手势跟随动画" aria-hidden="true">#</a> 4
    手势跟随动画
  </h2>
  <p>通过 animated.event 进行手势的跟随，panResponder 手势识别系统。</p>
  <h2 id="_5-优化动画性能" tabindex="-1">
    <a class="header-anchor" href="#_5-优化动画性能" aria-hidden="true">#</a> 5
    优化动画性能
  </h2>
  <h3 id="启用原生动画驱动" tabindex="-1">
    <a class="header-anchor" href="#启用原生动画驱动" aria-hidden="true">#</a>
    启用原生动画驱动
  </h3>
  <p>
    在动画开始之前将所有动画的内容发送到原生代码，从而使用原生代码在ui线程上执行动画，不阻塞。
  </p>
  <div class="custom-container warning">
    <p class="custom-container-title">WARNING</p>
    <ol>
      <li>
        只适用于一些和布局无关的属性，像 transform 和 opacity。不支持作用于
        position 的坐标属性。应用会报错提示。所以，位移运动应该尽量通过
        transform 来实现。
      </li>
    </ol>
  </div>
</template>
