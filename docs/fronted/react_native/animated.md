# Animated 动画

Animated旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用start/stop方法来控制动画按顺序执行。

### 1 动画的使用
1. 使用基本的 animated 组件，如 animated.View 组件或者自定义的动画组件。（重要，否则自己就算瞪大眼睛看动画配置信息，也不会发现问题）
2. 使用 animated.value 初始化一个或者多个动画值。
3. 将初始动画值绑定到目标动画的属性上。
4. 通过 Animated.timing 等函数设定动画参数。
5. 通过 start 函数开启动画。（重要，否则动画开不了）。


```jsx
import React from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'orange',
    width: 200,
    height: 50
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 50
  }
});

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const properties = ['rotation', 'fontSize', 'fadeInOpacity'];
    Animated.parallel(
      properties.map((property) => {
        return Animated.timing(this.state[property], {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: property !== 'fontSize'
        });
      })
    ).start();
  }

  render() {
    const { fadeInOpacity, rotation, fontSize } = this.state;
    return (
      <View style={styles.box}>
        <Animated.View
          style={
          [
            styles.container,
            {
              opacity: fadeInOpacity,
              transform: [
                {
                  rotateZ: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                  })
                }
              ]
            }
          ]
        }
        >
          <Animated.Text style={
          [
            styles.text,
            {
              fontSize: fontSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 30]
              })
            }
          ]
        }
          >
            我是升高啊
          </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

```
interpolate 为强大的插值运算函数，当动画数值被 setValue(0.5) 时，对于以上代码的输出 ['0deg', '360deg'], 会被映射到 180deg。当然支持，多区段映射。
interpolate 一般使用情况为一个 animated.value 被应用到多个动画上。只要在属性里面设置好映射的值，就可以用一个动画变量来控制他们了。

stagger 函数会在指定的延迟时间后执行动画，但是也有可能会同时执行动画
笔者测试，当时间设置为800ms时，前两个动画会同时进行。当设置为2000ms时，会按照延迟时间一个一个的进行。

```jsx
import React from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: 100,
    height: 50,
    marginBottom: 50,
    transform: [
      {
        translateX: 0
      }
    ]
  },
  list1: {
    backgroundColor: 'orange'
  },
  list2: {
    backgroundColor: 'purple'
  },
  list3: {
    backgroundColor: 'pink'
  }
});

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anims: [1, 2, 3].map(() => new Animated.Value(0))
    };
  }

  componentDidMount() {
    const { anims } = this.state;
    // stagger 会在指定的延迟时间后执行，其中的多个动画可能会同时执行。
    Animated.loop(
      Animated.stagger(800,
        anims.map((anim) => {
          return Animated.timing(anim, {
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver: true
          });
        }).concat(
          anims.map((anim) => {
            return Animated.timing(anim, {
              toValue: 0,
              easing: Easing.linear,
              useNativeDriver: true
            });
          }).reverse()
        )
      )
    ).start();
  }

  render() {
    return (
      <View style={styles.box}>
        {
          this.state.anims.map((anim, index) => {
            return (
              <Animated.View
                style={
                  [
                    styles.list,
                    styles[`list${index + 1}`],
                    {
                      transform: [
                        {
                          translateX: anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 80],
                          })
                        }
                      ]
                    }
                  ]
              }
              />
            );
          })
        }
      </View>
    );
  }
}

```

手势跟随动画

通过 animated.event 进行手势的跟随，panresponder 手势识别系统
```jsx
import React, { Component } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

export default class App extends Component {
  pan = new Animated.ValueXY()

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      console.log('手势开始了呀呀呀');
      // 用户开始点击手势时的事件触发
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value
      });
    },
    // 手势移动 event 执行映射
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ]),
    // 用户手势松开
    onPanResponderRelease: () => {
      console.log('手势结束了');
      this.pan.flattenOffset();
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
          }}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5
  }
});

```

### 2 启用原生动画驱动

在动画开始之前将所有动画的内容发送到原生代码，从而使用原生代码在ui线程上执行动画，不阻塞。

注意点：
1. 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。
2. 只适用于一些和布局无关的属性，像 transform 和 opacity。不支持作用于 position 的坐标属性。应用会报错提示。
   1. 位移运动通过 transform 来实现，不要通过 position，position 无法启动原声动画驱动，动画运行会有些许卡顿。

### 3 自定义动画组件

> 特殊处理后的组件.动画值绑定到属性上。

1. 避免react重新渲染和重新调和的开销。
2. 还能在组件卸载时做一些清理工作，使得这些组件在使用时是安全的。

createAnimatedComponent() 用来处理组件，使其可以用于动画。

### 4 组合动画

> 使用组合函数以复杂的方式进行组合

1. Animated.delay()在给定延迟后开始动画。
2. Animated.parallel()同时启动多个动画。
3. Animated.sequence()按顺序启动动画，等待每一个动画完成后再开始下一个动画。
4. Animated.stagger()按照给定的延时间隔，顺序并行的启动动画。

? 跟踪动态值

### 5 合成动画值
> 使用加减乘除以及取余等运算来把两个动画值合成为一个新的动画值：


### 6 插值

interpolate 
> 允许输入范围映射到不同的输出范围。

> 插值
f(x)为定义在区间 [a,b]上的函数。为[a,b]上n个互不相同的点， G为给定的某一函数类。若G上有函数 g(x)满足：g(xk) = f(xk), k = 1,2,3,4,5。则称g(x)为f(x)关于节点在 G上的插值函数。

每一个属性都可以通过插值来运行。每一个插值都在输入值和输出值之间进行映射。既可以是线性的插值，也可以是渐变函数。默认情况下，它将推断超出给定范围的曲线，但您也可以限制住输出值。

```js
 // 例子
 style={{
    opacity: this.state.fadeAnim, // Binds directly
    transform: [{
      translateY: this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }}
```

1. 支持自定义多区间段落，常用来定义静止区间。
2. 支持映射到字符串。（角度的变化）
3. 支持渐变函数

### 7 跟踪动态值


### 8 处理手势和其他事件

通过animated.event方法实现

使用场景：平移或者滚动，以及其他事件

用法：这是通过结构化映射语法完成的，以便可以从复杂的事件对象中提取值。

例如，在使用水平滚动手势时，为了将 event.nativeEvent.contentOffset.x 映射到 scrollX（Animated.Value),然后调用 scrollX 的 setValue 方法
```js
 onScroll={Animated.event(
   // scrollX = e.nativeEvent.contentOffset.x
   [{ nativeEvent: {
        contentOffset: {
          x: scrollX
        }
      }
    }]
 )}
```
### 9 响应当前的动画值

```js
spring.stopAnimation(callback) 动画结束后调用，方便处理手势动画
spring.addListener(callback) 动画执行过程中持续调用 （谨慎使用，未来可能会有性能问题）
```

### us
