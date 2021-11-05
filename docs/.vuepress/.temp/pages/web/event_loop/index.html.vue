<template>
  <h1 id="事件循环" tabindex="-1">
    <a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环
  </h1>
  <p><strong>引言</strong></p>
  <p>
    javascript
    是一门单线程的语言，在同一个时间只能做完成一件任务，如果有多个任务，就必须排队，前面一个任务完成，再去执行后面的任务。作为浏览器端的脚本语言，javascript
    的主要功能是用来和用户交互以及操作 dom。假设 javascript
    不是单线程语言，在一个线程里我们给某个 dom
    节点增加内容的时候，另一个线程同时正在删除这个 dom
    节点的内容，则会造成混乱。
  </p>
  <p>
    由于 js 单线程的设计，假设 js
    程序的执行都是同步。如果执行一些耗时较长的程序，例如 ajax
    请求，在请求开始至请求响应的这段时间内，当前的工作线程一直是空闲状态， ajax
    请求后面的 js 代码只能等待请求结束后执行，因此会导致 js 阻塞的问题。
  </p>
  <p>
    javascript 单线程指的是浏览器中负责解释和执行 javascript
    代码的只有一个线程，即为 js
    引擎线程，但是浏览器的渲染进程是提供多个线程的，如下：
  </p>
  <ol>
    <li>js 引擎线程</li>
    <li>事件触发线程</li>
    <li>定时器触发线程</li>
    <li>异步 http 请求线程</li>
    <li>GUI 渲染线程</li>
  </ol>
  <h2 id="一、异步-同步" tabindex="-1">
    <a class="header-anchor" href="#一、异步-同步" aria-hidden="true">#</a>
    一、异步 &amp; 同步
  </h2>
  <p>为解决上述类似上述 js 阻塞的问题，js 引入了同步和异步的概念。</p>
  <h3 id="_1、什么是同步" tabindex="-1">
    <a class="header-anchor" href="#_1、什么是同步" aria-hidden="true">#</a>
    1、什么是同步？
  </h3>
  <p>“同步”就是后一个任务等待前一个任务结束后再去执行。</p>
  <h3 id="_2、什么是异步" tabindex="-1">
    <a class="header-anchor" href="#_2、什么是异步" aria-hidden="true">#</a>
    2、什么是异步？
  </h3>
  <p>
    “异步”与同步不同，每一个异步任务都有一个或多个回调函数。webapi
    会在其相应的时机里将回调函数添加进入消息队列中，不直接执行，然后再去执行后面的任务。直至当前同步任务执行完毕后，再把消息队列中的消息添加进入执行栈进行执行。
  </p>
  <p>异步任务在浏览器中一般是以下：</p>
  <ol>
    <li>网络请求</li>
    <li>计时器</li>
    <li>DOM 监听事件</li>
    <li>...</li>
  </ol>
  <h2 id="二、什么是执行栈-stack-、堆-heap-、事件队列-task-queue" tabindex="-1">
    <a
      class="header-anchor"
      href="#二、什么是执行栈-stack-、堆-heap-、事件队列-task-queue"
      aria-hidden="true"
      >#</a
    >
    二、什么是执行栈(stack)、堆(heap)、事件队列(task queue)？
  </h2>
  <p><img src="@source/web/event_loop/assets/data.jpeg" alt="" /></p>
  <h3 id="_1、执行栈" tabindex="-1">
    <a class="header-anchor" href="#_1、执行栈" aria-hidden="true">#</a>
    1、执行栈
  </h3>
  <blockquote>
    <p>
      “栈”是一种数据结构，是一种线性表。特点为 LIFO，即先进后出 （last in, first
      out）。
    </p>
  </blockquote>
  <p>利用数组的 push 和 shift 可以实现压栈和出栈的操作。</p>
  <p><img src="@source/web/event_loop/assets/stack.png" alt="stack" /></p>
  <p>在代码运行的过程中，函数的调用会形成一个由若干帧组成的栈。</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">foo</span><span class="token punctuation">(</span>x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <p>上面代码最终会在控制台打印 42, 下面梳理一下它的执行顺序。</p>
  <ol>
    <li>console.log 函数作为第一帧压入栈中。</li>
    <li>调用 bar，第二帧被压入栈中。帧中包含着 bar 的变量对象。</li>
    <li>
      bar 调用 foo，foo 做一位第三帧被压入栈中，帧中包含着 foo 的变量对象。
    </li>
    <li>foo 执行完毕然后返回。被弹出栈。</li>
    <li>bar 执行完毕然后返回，被弹出栈。</li>
    <li>log 函数接收到 bar 的返回值。执行完毕后，出栈。此时栈已空。</li>
  </ol>
  <p><img src="@source/web/event_loop/assets/stack_call.png" alt="" /></p>
  <h3 id="_2、堆" tabindex="-1">
    <a class="header-anchor" href="#_2、堆" aria-hidden="true">#</a> 2、堆
  </h3>
  <blockquote>
    <p>
      对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。
    </p>
  </blockquote>
  <h4 id="堆和栈的区别" tabindex="-1">
    <a class="header-anchor" href="#堆和栈的区别" aria-hidden="true">#</a>
    堆和栈的区别
  </h4>
  <p>
    首先，stack
    是有结构的，每个区块按照一定次序存放，可以明确知道每个区块的大小；heap
    是没有结构的，数据可以任意存放。因此， stack 的寻址速度要快于 heap。
  </p>
  <p>
    其次，每个线程分配一个 stack，每个进程分配一个 heap，也就是说，stack
    是线程独占的，heap 是线程共用的。
  </p>
  <p>
    此外，stack 创建的时候，大小是确定的，数据从超过这个大小，就发生 stack
    overflow 错误，而 heap 的大小是不确定的， 需要的话可以不断增加。
  </p>
  <div class="language-java ext-java line-numbers-mode">
    <pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> y<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>

    class1 cls1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">class1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
      ><br />
    </div>
  </div>
  <p>上面代码这三个变量和一个对象实例在内存中的存放方式如下。</p>
  <p><img src="@source/web/event_loop/assets/stack_call2.jpeg" alt="" /></p>
  <p>
    从上图可以看到，i、y 和 cls1 都存放在
    stack，因为它们占用内存空间都是确定的，而且本身也属于局部变量。但是，cls1
    指向的对象实例存放在
    heap，因为它的大小不确定。作为一条规则可以记住，所有的对象都存放在 heap。
  </p>
  <p>接下来的问题是，当 Method1 方法运行结束，会发生什么事？</p>
  <p>
    回答是整个 stack 被清空，i、y 和 cls1
    这三个变量消失，因为它们是局部变量，区块一旦运行结束，就没必要再存在了。而
    heap 之中的那个对象实例继续存在，直到系统的垃圾清理机制（garbage
    collector）将这块内存回收。因此，一般来说，内存泄漏都发生在
    heap，即某些内存空间不再被使用了，却因为种种原因，没有被系统回收。
  </p>
  <h3 id="_3、事件队列和事件循环" tabindex="-1">
    <a class="header-anchor" href="#_3、事件队列和事件循环" aria-hidden="true"
      >#</a
    >
    3、事件队列和事件循环
  </h3>
  <blockquote>
    <p>
      队列是一种数据结构，也是一种特殊的线性表。特点为 FIFO，即先进先出（first
      in, first out）
    </p>
  </blockquote>
  <p>利用数组的 push 和 pop 可实现入队和出队的操作。</p>
  <p><img src="@source/web/event_loop/assets/queue.png" alt="" /></p>
  <p>事件循环和事件队列的维护是由事件触发线程控制的。</p>
  <p>事件触发线程线程同样是由浏览器渲染引擎提供的，它会维护一个事件队列。</p>
  <p>
    js
    引擎遇到上文所列的异步任务后，会交个相应的线程去维护异步任务，等待某个时机，然后由事件触发线程将异步任务对应的回调函数加入到事件队列中，事件队列中的函数等待被执行。
  </p>
  <p>
    js
    引擎在执行过程中，遇到同步任务，会将任务直接压入执行栈中执行，当执行栈为空（即
    js
    引擎线程空闲），<strong>事件触发线程</strong>会从事件队列中取出一个任务（即异步任务的回调函数）放入执行在栈中执行。
  </p>
  <p>
    执行完了之后，执行栈再次为空，事件触发线程会重复上一步的操作，再从事件队列中取出一个消息，这种机制就被称为<strong>事件循环</strong>（Event
    Loop）机制。
  </p>
  <p>
    为了更好地理解 Event Loop，请看下图（转引自 Philip Roberts 的演讲《Help, I'm
    stuck in an event-loop》）。
  </p>
  <p><img src="@source/web/event_loop/assets/eventloop.png" alt="" /></p>
  <p>例子代码：</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"timer 1 over"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"timer 2 over"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// script start</span>
<span class="token comment">// script end</span>
<span class="token comment">// timer 2 over</span>
<span class="token comment">// timer 1 over</span>
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
      ><br />
    </div>
  </div>
  <p>模拟 js 引擎对其执行过程：</p>
  <p><strong>第一轮事件循环：</strong></p>
  <ol>
    <li>console.log 为同步任务，入栈，打印“script start”。出栈。</li>
    <li>
      setTimeout 为异步任务，入栈，交给定时器触发线程处理（在 1
      秒后加入将回调加入事件队列）。出栈。
    </li>
    <li>
      setTimeout 为异步任务，入栈，交给定时器触发线程处理（在 4ms
      之内将回调加入事件队列）。出栈。
    </li>
    <li>console.log 为同步任务，入栈，打印&quot;script end&quot;。出栈。</li>
  </ol>
  <p>
    此时，执行栈为空，js 引擎线程空闲。便从事件队列中读取任务，此时队列如下：
  </p>
  <p><img src="@source/web/event_loop/assets/call_queue.png" alt="" /></p>
  <p><strong>第二轮事件循环</strong></p>
  <ol>
    <li>
      js 引擎线程从事件对列中读取 cb2 加入执行栈并执行，打印”time 2
      over“。出栈。
    </li>
  </ol>
  <p><strong>第三轮事件循环</strong></p>
  <ol start="6">
    <li>
      js 引擎从事件队列中读取 cb1 加入执行栈中并执行，打印”time 1 over“ 。出栈。
    </li>
  </ol>
  <p>注意点：</p>
  <p>
    上面，timer 2 的延时为 0ms，HTML5 标准规定 setTimeout 第二个参数不得小于
    4（不同浏览器最小值会不一样），不足会自动增加，所以 &quot;timer 2 over&quot;
    还是会在 &quot;script end&quot; 之后。
  </p>
  <p>
    就算延时为 0ms, 只是 time 2
    的回调函数会立即加入事件队列而已，回调的执行还是得等到执行栈为空时执行。
  </p>
  <h2 id="四、宏任务-微任务" tabindex="-1">
    <a class="header-anchor" href="#四、宏任务-微任务" aria-hidden="true">#</a>
    四、宏任务 &amp; 微任务
  </h2>
  <p>在 ES6 新增 Promise 处理异步后，js 执行引擎的处理过程又发生了新的变化。</p>
  <p>看代码：</p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"timer over"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"promise1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"promise2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// script start</span>
<span class="token comment">// script end</span>
<span class="token comment">// promise1</span>
<span class="token comment">// promise2</span>
<span class="token comment">// timer over</span>
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
      ><br /><span class="line-number">21</span><br />
    </div>
  </div>
  <p>
    这里又新增了两个新的概念，<strong>macrotask</strong> （宏任务）和
    <strong>microtask</strong>（微任务）。
  </p>
  <p>所有的任务都划分到宏任务和微任务下：</p>
  <ul>
    <li>
      <strong>macrotask</strong>: script
      主代码块、setTimeout、setInterval、requestAnimationFrame、node 中的
      setimmediate 等。
    </li>
    <li>
      <strong>microtask</strong>: Promise.then catch
      finally、MutationObserver、node 中的 process.nextTick 等。
    </li>
  </ul>
  <p>js 引擎首先执行主代码块。</p>
  <p>
    执行栈每次执行的代码就是一个宏任务，包括任务队列（宏任务队列）中的。执行栈中的任务执行完毕后，js
    引擎会从宏任务队列中去添加任务到执行栈中，即同样是事件循环的机制。
  </p>
  <p>
    当在执行宏任务遇到微任务 Promise.then
    时，会创建一个微任务，并加入到微任务队列中的队尾。
  </p>
  <p>
    微任务是在宏任务执行的时候创建的，而在下一个宏任务执行之前，浏览器会对页面重新渲染（task
    &gt;&gt; render &gt;&gt; task（任务队列中读取））。<strong
      >同时，在上一个宏任务执行完成后，页面渲染之前，会执行当前微任务队列中的所有微任务。</strong
    >
  </p>
  <p><img src="@source/web/event_loop/assets/task.png" alt="" /></p>
  <p>所以上述代码的执行过程就可以解释了。</p>
  <p>
    js 引擎执行 promise.then 时，promise1、promise2
    被认为是两个微任务按照代码的先后顺序被加入到微任务队列中，script end
    执行后，栈空。
  </p>
  <p>
    此时当前宏任务（script
    主代码块）执行完毕，并不从当前宏任务队列中读取任务。而是立马清空当前宏任务所产生的微任务队列。将两个微任务依次放入执行栈中执行。执行完毕，打印
    promise1、promise2。栈空。<strong>此时，第一轮事件循环结束。</strong>
  </p>
  <p>紧接着，再去读取宏任务队列中的任务，time over 被打印。栈空。</p>
  <p>因此，宏任务和微任务的执行机制如下：</p>
  <ol>
    <li>执行一个宏任务（栈中没有就从宏任务队列中获取）</li>
    <li>执行过程中遇到微任务，就将它添加到微任务的任务队列中</li>
    <li>宏任务执行完毕，立即执行当前微任务队列中的所有微任务（依次执行）</li>
    <li>当前所有微任务执行完毕后，开始检查渲染，GUI 线程接管渲染</li>
    <li>渲染完毕后，JS 引擎继续开始下一个宏任务，从宏任务队列中获取</li>
  </ol>
  <h3 id="async-await" tabindex="-1">
    <a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async
    &amp; await
  </h3>
  <p>
    因为, async 和 await 本质上还是基于 Promise 的封装，而 Promise
    是属于微任务的一种。所以使用 await 关键字与 Promise.then 效果类似：
  </p>
  <div class="language-javascript ext-js line-numbers-mode">
    <pre
      v-pre
      class="language-javascript"
    ><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
<span class="token comment">// 4</span>
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
      ><br /><span class="line-number">15</span><br />
    </div>
  </div>
  <p>
    async 函数在 await 之前的代码都是同步执行的，<strong
      >可以理解为 await 之前的代码都属于 new Promise 时传入的代码，await
      之后的所有代码都是 Promise.then 中的回调，即在微任务队列中。</strong
    >
  </p>
  <h2 id="五、总结" tabindex="-1">
    <a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结
  </h2>
  <ol>
    <li>
      js 单线程实际上时解释执行 js
      代码的只有一个线程，但是浏览器的渲染是多线程的。
    </li>
    <li>异步和同步的概念与区别，异步任务有哪些。</li>
    <li>栈、堆、队列的特点和使用场景。</li>
    <li>事件队列以及事件循环机制。</li>
    <li>es6 下，宏任务与微任务的执行过程。</li>
  </ol>
  <hr />
  <p>参考：</p>
  <ul>
    <li>
      <a
        href="https://juejin.im/post/6844903711106400264#refetch"
        target="_blank"
        rel="noopener noreferrer"
        >JavaScript 异步与事件循环<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop"
        target="_blank"
        rel="noopener noreferrer"
        >并发模型与事件循环<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="https://juejin.im/post/6844903657264136200"
        target="_blank"
        rel="noopener noreferrer"
        >微任务、宏任务与 Event-Loop<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html"
        target="_blank"
        rel="noopener noreferrer"
        >JavaScript 运行机制详解：再谈 Event Loop<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="https://juejin.im/post/6844903577052250119"
        target="_blank"
        rel="noopener noreferrer"
        >JS 事件循环<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="https://www.cnblogs.com/dong-xu/p/7000139.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        深入理解 JavaScript 事件循环（二）— task and microtask<OutboundLink
      /></a>
    </li>
    <li>
      <a
        href="http://vimeo.com/96425312"
        target="_blank"
        rel="noopener noreferrer"
        >Help, I'm stuck in an event-loop<OutboundLink
      /></a>
    </li>
  </ul>
</template>
