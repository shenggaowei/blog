<template>
  <h1 id="排序算法" tabindex="-1">
    <a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法
  </h1>
  <h2 id="_1-选择排序" tabindex="-1">
    <a class="header-anchor" href="#_1-选择排序" aria-hidden="true">#</a> 1.
    选择排序
  </h2>
  <p>
    n 个数排序 n-1 次找最小值的过程，即先找 n 个数里面的最小值，再找剩余 n-1
    个数值里面的最小值，再找剩余 n-2 个里面的最小值，。。。。。。
    最后找剩余两个数里面的最小值，剩余一个数就是 n 个数里面的最大值。
  </p>
  <p>
    由此可知， n
    个数的选择排序是一个两重循环的问题：外层循环控制求最小值的次数，n-1
    次求最小值由 n-1 次外循环实现，假设外循环变量为 i, 则 i 的循环范围为 0 ~
    n-2; 内层循环完成求一个最小值的过程，假定当前元素 a[i]
    是最小值假设内循环变量为 j, 让 a[i] 与其后的所有元素 a[j] 逐个比较，j
    的范围即为 i+1 ~ n-1
  </p>
  <p>
    对于以下这样的10个数字的排列，按照上述的排序方法，程序在执行中，元素 a[0]
    依次与后面的 a[1]、。。。。。。a[9]相比较，每次 a[0]
    都比后面的数字大，每次比较都要做交换，而这还仅仅是找一次最小值的过程。如果元素比较多时就会有大量的多与交换存在，影响程序的执行效率。于是程序可以进行改造：
  </p>
  <p>
    每一次找最小值只需要一次交换，即初始位置与最小值元素做交换。在外层循环控制求最小次数的过程中，定义一个变量
    min, 赋初值为当前的初始变量的下标 i,
    在内层循环找最小值的过程中，如果发现当前元素的值比初始变量的值小，则将新的最小值的下标赋予
    min。内层循环一趟结束，找到最小值后，判断 min
    值是否发生了变化，变化了则进行位置交换，否则不需要交换。
  </p>
  <div class="language-c ext-c line-numbers-mode">
    <pre
      v-pre
      class="language-c"
    ><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre>
    <div class="line-numbers"><span class="line-number">1</span><br /></div>
  </div>
  <div class="language-c ext-c line-numbers-mode">
    <pre
      v-pre
      class="language-c"
    ><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">,</span> min<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        min <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                min <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!=</span> i<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            k <span class="token operator">=</span> a<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <h2 id="_2-冒泡排序" tabindex="-1">
    <a class="header-anchor" href="#_2-冒泡排序" aria-hidden="true">#</a> 2.
    冒泡排序
  </h2>
  <p>
    冒泡排序也是通过 n-1
    次找最大值的方式实现排序的，但它找最大值的方式与选择排序不同
  </p>
  <p>
    冒泡排序找最大值的方式是从第一个元素开始与每相邻的两个元素进行比较，如果前面的数据小于后者，则两者交换，如此一直比较到当前序列的最后一个位置。
  </p>
  <p>冒泡排序也是一个双重循环：</p>
  <ol>
    <li>
      外层循环控制找最大值的次数，既然是 n-1 次求最大值的过程，所以用 n-1
      次外循环实现，假设外循环变量为 i，则 i 的循环范围为 0 ~ n-2。
    </li>
    <li>
      内循环完成求一个最大值的过程，内循环是在
      a[0],a[1]...a[n-i-1]的数组元素范围内找到最大值，并放在当前区间的最后元素a[n-i-1]中。假设内循环变量为
      j，则 j 的范围为 0~n-i-2。
    </li>
  </ol>
  <div class="language-c ext-c line-numbers-mode">
    <pre
      v-pre
      class="language-c"
    ><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                temp <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br /><span class="line-number">25</span><br />
    </div>
  </div>
</template>
