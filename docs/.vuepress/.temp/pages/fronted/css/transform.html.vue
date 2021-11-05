<template>
  <h1 id="transform变形" tabindex="-1">
    <a class="header-anchor" href="#transform变形" aria-hidden="true">#</a>
    transform变形
  </h1>
  <blockquote>
    <p>所有变形都是相对元素自己的参照系实施的。</p>
  </blockquote>
  <ol>
    <li>变形函数一次只处理一个，从第一个开始，到最后一个结束。</li>
    <li>
      从头到尾的执行顺序很重要。
      <ol>
        <li>
          先平移再旋转和先旋转再平移是不一样的。<strong
            >因为变形是相对于元素自己的参照系实施的</strong
          >
        </li>
      </ol>
    </li>
    <li>有多个变形函数时，如果有一个值时无效的，整个值都将失效。</li>
    <li>针对同一个元素，同时设置了两次变形函数，是不会叠加的。</li>
  </ol>
  <h3 id="平移函数-translate" tabindex="-1">
    <a class="header-anchor" href="#平移函数-translate" aria-hidden="true">#</a>
    平移函数 translate
  </h3>
  <ul>
    <li>translateX(x) 正值向左 负值向右</li>
    <li>translateY(y) 正值向下 负值向上</li>
    <li>translateZ(z) 正值向前 负值向后</li>
    <li>translate(x, y)</li>
    <li>translate3d(x, y, z)</li>
  </ul>
  <ol>
    <li>translateX 和 translateY 被称为 2D 平移函数。</li>
    <li>
      函数的取值和单位
      <ol>
        <li>值为长度时，元素相对于元素自身的轴进行移动。</li>
        <li>值为百分比时，移动的距离相对元素自身的尺寸计算。</li>
        <li>2d 平移函数如果未设置为其他单位，就是像素。</li>
        <li>translateZ 函数只接受长度值。不允许使用百分值。</li>
      </ol>
    </li>
    <li>
      默认值
      <ol>
        <li>translate 函数不传第二个参数，默认是0。</li>
        <li>
          translate3d 函数参数少于三个，没有默认值，浏览器会将函数视为无效。
        </li>
      </ol>
    </li>
  </ol>
  <h3 id="缩放函数-scale" tabindex="-1">
    <a class="header-anchor" href="#缩放函数-scale" aria-hidden="true">#</a>
    缩放函数 scale
  </h3>
  <ul>
    <li>scaleX(a) 宽度 * a</li>
    <li>scaleY(a) 高度 * a</li>
    <li>scaleZ(a)</li>
    <li>scale(a, a)</li>
    <li>scale3d(a, a, a)</li>
  </ul>
  <ol>
    <li>
      函数参数是无单位的实数。而且始终未整数。<strong>不能使用百分比</strong>
    </li>
    <li>
      scale 接收两个参数，如果只传一个参数，默认指在 x 和 y 缩放同样的比列。
    </li>
    <li>scaleZ 和 scale3d 只有元素有景深的时候才有效果。</li>
    <li>
      scale3d 的三个数必须是有效的。如若不然，无效的 scale3d
      将导致所属的整个变形值无效。
    </li>
  </ol>
  <h3 id="旋转函数-rotate" tabindex="-1">
    <a class="header-anchor" href="#旋转函数-rotate" aria-hidden="true">#</a>
    旋转函数 rotate
  </h3>
  <ul>
    <li>rotate()</li>
    <li>rotateX(11deg) 绕着 x 轴顺时针旋转 11 度</li>
    <li>rotateY() 绕着 y 轴旋转</li>
    <li>rotateZ() 绕着 z 轴旋转</li>
  </ul>
  <ol>
    <li>
      函数的参数都接受一个值，即角度。角度值以一个数字（可正可负）和一个有效的角度单位（deg，grad,rad和turn）表示。如果数字超出了相应单位的常规范围，将化为有效范围的值。
    </li>
  </ol>
  <h3 id="倾斜函数-skew" tabindex="-1">
    <a class="header-anchor" href="#倾斜函数-skew" aria-hidden="true">#</a>
    倾斜函数 skew
  </h3>
  <p>将函数沿着 X 轴和 Y 轴倾斜元素。</p>
  <ul>
    <li>skewX()</li>
    <li>skewY()</li>
    <li>skew()</li>
  </ul>
  <ol>
    <li>函数的参数都接受一个值，即角度。</li>
  </ol>
  <h3 id="视域函数-perspective" tabindex="-1">
    <a class="header-anchor" href="#视域函数-perspective" aria-hidden="true"
      >#</a
    >
    视域函数 perspective
  </h3>
  <ol>
    <li>
      <p>
        值必须是整数。
        值越小，相当于距离物体越近，就像在元素跟前通过鱼眼镜头看一样。
        值越大，看到的越广，就像从远处通过变焦镜头看元素一样。
      </p>
    </li>
    <li>
      <p>perspective 函数必须放到首位。</p>
    </li>
  </ol>
  <h3 id="矩阵函数-matrix" tabindex="-1">
    <a class="header-anchor" href="#矩阵函数-matrix" aria-hidden="true">#</a>
    矩阵函数 matrix
  </h3>
  <h2 id="修改视域" tabindex="-1">
    <a class="header-anchor" href="#修改视域" aria-hidden="true">#</a> 修改视域
  </h2>
  <p>
    perspective 属性与 perspective() 函数之间重要的区别，前者创建的 3d
    空间为所有子元素共有，而后者只针对目标元素有效。而且，为了让 3d
    空间中的变形有视觉效果，要把 perspective（） 函数放在函数列表的开头或前部。
  </p>
  <h2 id="处理背面" tabindex="-1">
    <a class="header-anchor" href="#处理背面" aria-hidden="true">#</a> 处理背面
  </h2>
  <p>
    backface-visibility: visible | hidden 使用场景：翻转效果。当使用 rotate
    函数进行 180 度大翻转时，会看到所翻转元素的背面。设置为 hidden
    可以让元素的背面朝向我们时不渲染背面。
    <strong
      >需要给元素或其父元素添加属性 transform-style: preserve-3d;
      否则看不见效果</strong
    >
  </p>
</template>
