# Animated 动画

Animated旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用start/stop方法来控制动画按顺序执行。

用法： 将animated.value的数值映射到动画组件的属性中。


## 注意点
1. 只对非布局的样式有用，像transform和opacity，flexbox和position属性不会。
2. animated.event,它只直接工作与直接的事件并且不会作用域冒泡事件。这意味着PanResponder不会有效果，但是会工作与scrollview的onscroll事件
3. 当动画在运行的时候，它会阻止列表组件的渲染。当用户在滚动滚动条时需要运行一个长并且循环的动画，可以设置 isInteraction: false 在animation的config属性中
4. 当运行rotateY, rotateX以及一些其他的transform属性的时候，需要添加perspective属性。

### 1 动画的使用

start 启动动画。回调函数判断动画是否完成

### 2 启用原生动画驱动

在动画开始之前将所有动画的内容发送到原生代码，从而使用原生代码在ui线程上执行动画，不阻塞。

注意点：
1. 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。

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

例如，在使用水平滚动手势时，为了将event.nativeEvent.contentOffset.x映射到scrollX（Animated.Value)
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
