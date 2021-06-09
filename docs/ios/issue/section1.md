## issue 

1 打包构建报错 'event2/event-config.h' file not found

问题原因： "Flipper-Folly" pod-spec 升级所致
解决办法： 在 podfile 中覆盖 flipper-folly 版本

``` ruby
use_flipper!({ 'Flipper-Folly' => '2.3.0' })
```
