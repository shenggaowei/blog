# Animated 动画

Animated 旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用start/stop方法来控制动画按顺序执行。

先举一个简单的例子，显隐动画。

``` jsx
import React, { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

export default () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    }, []);
    return <View style={styles.container}>
        <Animated.View
            style={[
                styles.fadingContainer,
                {
                    opacity: fadeAnim
                }
            ]}
        >
            <Text style={styles.fadingText}>我出现了</Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
});
```

动画的优化

``` jsx
import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

export default () => {
    const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
        }).start();
    }, []);

    return <View style={styles.container}>
        <Animated.View style={
            [
                {
                    opacity: animation,
                    transform: [{
                        rotateZ: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '720deg']
                        })
                    }]
                }]}>
            <Animated.Text style={{
                fontSize: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 24]
                })
            }}>
                😄😄升高😄😄
            </Animated.Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
```

``` jsx
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

export default () => {
    const animationArray = Array.from({ length: 3 }).map(() => new Animated.Value(0));
    const animations = useRef(animationArray).current;
    useEffect(() => {
        Animated.sequence(
            [
                // 向右移动
                ...animations.map(anim => {
                    return Animated.timing(anim, {
                        toValue: 1,
                        duration: 600,
                        easing: Easing.linear,
                        useNativeDriver: true
                    })
                }),
                // 延迟600毫秒
                Animated.delay(600),
                // 向左移动，返回原始状态
                ...animations.map(anim => {
                    return Animated.timing(anim, {
                        toValue: 0,
                        duration: 600,
                        easing: Easing.linear,
                        useNativeDriver: true
                    })
                }).reverse()
            ]
        ).start();
    })

    return (
        <View style={styles.box}>
            {
                animations.map((anim, index) => {
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
                                        ],
                                        opacity: anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 0.5]
                                        })
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

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: 100,
        height: 50,
        borderRadius: 15,
        marginBottom: 5
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
```

## 1 动画的使用

使用规则

1. 页面中需要动画的目标元素使用基本的 Animated 组件。如 Animated.View 组件或者自定义的动画组件。
2. 使用 Animated.value 初始化一个或者多个动画值。
3. 将步骤 2 的动画值绑定到目标动画的属性上。
4. 通过动画函数设定动画参数。
5. 通过 start 函数开启动画。

### 动画组件

animated. Value可以定义一个动画值。如果需要实现类似元素的坐标变化等需求，可使用 animated. ValueXY 进行初始化。

### 1.1 自定义动画组件

> 特殊处理后的组件，动画值绑定到属性上。

除了直接使用 rn 自带的 animated. View 等原生高阶组件，还可以将自定义的组件封装成动画组件。通过createAnimatedComponent() 用来处理组件，使其可以用于动画。

使用动画组件的优点：

1. 避免react重新渲染和重新调和的开销。
2. 还能在组件卸载时做一些清理工作，使得这些组件在使用时是安全的。

## 2 常用的动画函数

### 1 interpolate

> 插值函数，允许输入范围映射到不同的输出范围。

f(x)为定义在区间 [a, b]上的函数。为[a, b]上n个互不相同的点， G为给定的某一函数类。若G上有函数 g(x)满足：g(xk) = f(xk), k = 1, 2, 3, 4, 5。则称g(x)为f(x)关于节点在 G上的插值函数。

``` js
 // 例子
 style = {
     {
         opacity: this.state.fadeAnim,
         transform: [{
             translateY: this.state.fadeAnim.interpolate({
                 inputRange: [0, 1],
                 outputRange: [0, 150]
             }),
         }],
     }
 }
```

interpolate 为强大的插值运算函数，当动画数值被 setValue(0.5) 时，对于以上代码的输出 [0, 150], 会被映射到75。当然支持多区段映射。

interpolate 一般使用场景为一个 animated.value 被应用到多个动画上。只要在属性里面设置好映射的值，就可以用一个动画变量来控制他们了。

interpolate 所支持的功能

1. 支持自定义多区间段落，常用来定义静止区间。
2. 支持映射到字符串。（角度的变化，例如: '90deg'）
3. 支持渐变函数

### 2 loop

> 无限循环一个指定的动画，从头到尾周而复始。如果此循环的子动画设置了useNativeDriver: true则不会阻塞 JS 线程的执行。

#### 如果不用 loop, 该如何实现一个 loop 函数呢？

思路：当一次动画完成之后，在回调函数中再次执行动画函数。

``` js
  function loop() {
      const animatedValue = new Animated.Value(5);
      Animated.timing(animatedValue, {
          toValue: 10,
          easing: Easing.linear,
          duration: 1000,
          useNativeDriver: true
      }).start((finished) => {
          finished && loop();
      });
  }
```

### 3 stagger

stagger 函数会在指定的延迟时间后执行动画，但是也有可能会同时执行动画。
笔者测试，当时间设置为800ms时，前两个动画会同时进行。当设置为2000ms时，会按照延迟时间一个一个的进行。

``` jsx
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

### 3 组合动画

``` jsx
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

> 使用组合函数以复杂的方式进行组合

1. Animated.delay()在给定延迟后开始动画。
2. Animated.parallel()同时启动多个动画。
3. Animated.sequence()按顺序启动动画，等待每一个动画完成后再开始下一个动画。
4. Animated.stagger()按照给定的延时间隔，顺序并行的启动动画。

## 3 手势跟随动画

通过 animated.event 进行手势的跟随，panresponder 手势识别系统

``` jsx
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

## 3 优化动画性能

### 1 启用原生动画驱动

在动画开始之前将所有动画的内容发送到原生代码，从而使用原生代码在ui线程上执行动画，不阻塞。

注意点：

1. 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。
2. 只适用于一些和布局无关的属性，像 transform 和 opacity。不支持作用于 position 的坐标属性。应用会报错提示。所以，位移运动应该尽量通过 transform 来实现，因为它可以通过启用原声动画驱动来提高动画性能。

## 问题

### 1 如何阻止动画的执行？

通过在动画值上调用 start 方法，可以开启一个动画。同理，通过在动画值上调用 stop 方法，可停止当前这个动画。
