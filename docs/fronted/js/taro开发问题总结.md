## taro 开发问题

1. 播放音频时 ios 无声音，开发阶段以及 android 可以。
   原因：ios 开启了静音状态。
   解决方法: 在 app.ts 文件中设置静音状态下开启外放声音。
   ```js
   Taro.setInnerAudioOption({
     obeyMuteSwitch: false,
   });
   ```
2. 在 componentDidUpdate 中无法获取真实 dom 节点。
   解决方法：Taro.nextTick()在下一个时间片内进行真实 dom 节点的获取。
