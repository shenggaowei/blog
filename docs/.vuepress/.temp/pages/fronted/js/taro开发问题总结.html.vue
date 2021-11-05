<template>
  <h2 id="taro-开发问题" tabindex="-1">
    <a class="header-anchor" href="#taro-开发问题" aria-hidden="true">#</a> taro
    开发问题
  </h2>
  <ol>
    <li>
      播放音频时 ios 无声音，开发阶段以及 android 可以。 原因：ios
      开启了静音状态。 解决方法: 在 app.ts 文件中设置静音状态下开启外放声音。
      <div class="language-javascript ext-js line-numbers-mode">
        <pre
          v-pre
          class="language-javascript"
        ><code>Taro<span class="token punctuation">.</span><span class="token function">setInnerAudioOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  obeyMuteSwitch<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
        <div class="line-numbers">
          <span class="line-number">1</span><br /><span class="line-number"
            >2</span
          ><br /><span class="line-number">3</span><br />
        </div>
      </div>
    </li>
    <li>
      在 componentDidUpdate 中无法获取真实 dom 节点。
      解决方法：Taro.nextTick()在下一个时间片内进行真实 dom 节点的获取。
    </li>
  </ol>
</template>
