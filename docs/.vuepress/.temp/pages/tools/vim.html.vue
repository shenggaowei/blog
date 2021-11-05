<template>
  <h1 id="vim-常用操作学习" tabindex="-1">
    <a class="header-anchor" href="#vim-常用操作学习" aria-hidden="true">#</a>
    Vim 常用操作学习
  </h1>
  <h2 id="移动" tabindex="-1">
    <a class="header-anchor" href="#移动" aria-hidden="true">#</a> 移动
  </h2>
  <ul>
    <li>
      <p>上(k)下(j)左(h)右(l) 移动。</p>
    </li>
    <li>
      <p>使用计数器指定动作</p>
      <ul>
        <li>2w 向前移动两个单词</li>
        <li>2e 向前移动到第二个单词的末尾</li>
      </ul>
    </li>
    <li>
      <p>0 移动到行首</p>
    </li>
    <li>
      <p>$ 移动到行尾</p>
    </li>
    <li>
      <p>e 移动到单词末尾</p>
    </li>
  </ul>
  <h2 id="文本编辑" tabindex="-1">
    <a class="header-anchor" href="#文本编辑" aria-hidden="true">#</a> 文本编辑
  </h2>
  <ul>
    <li>
      <p>normal 模式下，可以按下 x 键来删除光标所在位置的字符。</p>
    </li>
    <li>
      <p>i 键可以插入字符</p>
    </li>
    <li>
      <p>a 键可以在当前字符后面添加字符。 A 键在文本最后面添加字符。</p>
    </li>
    <li>
      <p>:wq 保存当前编辑的文件。:q! 放弃所有的改动。</p>
    </li>
    <li>
      <p>ce 改变文本直到一个单词的末尾。</p>
    </li>
    <li>
      <p>cw 改变文本直到下一个单词的开头，不包括开头。</p>
    </li>
    <li>
      <p>c$ 删除从当前光标至行尾的字符。</p>
    </li>
    <li>
      <p>使用计数器更改更多</p>
      <ul>
        <li>c3w 从当前字符开始的三个单词，至第四个单词的开头。不包括开头。</li>
        <li>c3e 从当前字符开始的三个单词末尾。</li>
      </ul>
    </li>
    <li>
      <p>R 进入替换模式, 可以替换多个字符。r 替换当前光标所在的字符。</p>
    </li>
    <li>
      <p>
        o 在当前行的下方打开新的一行并进行插入模式。O 在当前行的上方打开新的一行
      </p>
    </li>
  </ul>
  <h2 id="文本删除" tabindex="-1">
    <a class="header-anchor" href="#文本删除" aria-hidden="true">#</a> 文本删除
  </h2>
  <ul>
    <li>d$ 从光标位置删除到行末尾。</li>
    <li>de 从光标位置到单词末尾，包括最后一个字符。（删除完整的一个纯单词）</li>
    <li>
      dw 从光标位置到下一个单词的起始处，不包括下一个单词的第一个字符。（react
      compoennt）光标从 r 开始，会删除 react 加空格。
    </li>
    <li>
      使用计数以删除更多
      <ul>
        <li>d2w 删除两个单词</li>
      </ul>
    </li>
    <li>
      删除整行
      <ul>
        <li>dd 删除当前行</li>
        <li>2dd 删除两行</li>
      </ul>
    </li>
  </ul>
  <h2 id="置入类命令-粘贴" tabindex="-1">
    <a class="header-anchor" href="#置入类命令-粘贴" aria-hidden="true">#</a>
    置入类命令(粘贴)
  </h2>
  <ul>
    <li>
      p 将最后一次删除的内容置入光标在之后。文本删除之后, vim
      会将删除后的字符存到一个寄存器中, 在正常模式下即可进行粘贴。
    </li>
    <li>
      y 在可视模式下选中文本，p 粘贴复制的文本。
      <ul>
        <li>y 可以当作操作符来使用； yw 可以复制一个单词</li>
      </ul>
    </li>
  </ul>
  <h2 id="文件内跳转" tabindex="-1">
    <a class="header-anchor" href="#文件内跳转" aria-hidden="true">#</a>
    文件内跳转
  </h2>
  <ul>
    <li>G 跳到文件最后一行，gg 跳到文件第一行</li>
    <li>输入行号 + G, 行跳转</li>
  </ul>
  <h2 id="搜索类命令" tabindex="-1">
    <a class="header-anchor" href="#搜索类命令" aria-hidden="true">#</a>
    搜索类命令
  </h2>
  <ul>
    <li>
      输入 / 加上一个字符串可以在当前文件中查找该字符串。n 查找下一个，N
      查找上一个。
    </li>
    <li>
      ？ 逆向查找字符串。ctrl-o 回到之前的位置，重复按可以回退更多步。ctrl-i
      会跳转到较新的位置。
    </li>
    <li>
      输入 % 可以查找匹配的括号
      )、]、}。在程序调试时，这个功能用来查找匹配不配对的括号是很有用的
    </li>
  </ul>
  <ul>
    <li>
      /keyweord 可以查找关键字。一些有用的选项如下
      <ul>
        <li>ic ignorecase 查找时忽略大小写</li>
        <li>is incsearch 查找短语时显示部分匹配</li>
        <li>hls hlsearch 高亮显示所有的匹配短语</li>
      </ul>
    </li>
  </ul>
  <ul>
    <li>选项前加上 no 可以关闭选项： :set noic</li>
  </ul>
  <h2 id="替换类" tabindex="-1">
    <a class="header-anchor" href="#替换类" aria-hidden="true">#</a> 替换类
  </h2>
  <ul>
    <li>: s/old/new 当前行替换一个单词</li>
    <li>: s/old/new/g 当前行替换所有单词</li>
    <li>:#, #s/old/new/g 替换两行之间的所有单词</li>
    <li>:%s/old/new/g 匹配文件内的所有字符</li>
    <li>:%s/old/new/gc 替换前询问确认</li>
  </ul>
  <h2 id="撤销类命令" tabindex="-1">
    <a class="header-anchor" href="#撤销类命令" aria-hidden="true">#</a>
    撤销类命令
  </h2>
  <ul>
    <li>u 撤销最后一次执行的（一次）命令</li>
    <li>U 恢复到改行的原始状态。</li>
  </ul>
  <h2 id="在-vim-内执行外部命令" tabindex="-1">
    <a class="header-anchor" href="#在-vim-内执行外部命令" aria-hidden="true"
      >#</a
    >
    在 vim 内执行外部命令
  </h2>
  <ul>
    <li>:!command 用于执行一个外部命令 command</li>
    <li>:w filename 可以将当前正在编辑的文件保存到名为 filename 的文件中</li>
    <li>
      v motion :w filename 可将当前可视模式下选中的内容保存到文件 filename 中
    </li>
    <li>
      :r filename 可将 filename
      文件的内容提取出来并插入到当前文件的光标位置的后面
    </li>
    <li>:r !ls 可以读取 ls 命令的输入并将其放置到当前文件的光标后面</li>
  </ul>
</template>
