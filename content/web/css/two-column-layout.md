# 两栏布局

> 常用的后台布局方式。左侧固定，右侧宽度自适应屏幕。

## 实现方式

1. BFC。运用 BFC 不和 float 块重叠的特点
2. position 布局。right 块 absolute,让 left 为 right 的宽度
3. 自适应布局。right 不设置宽度。用 margin 撑开左边边距。
4. flex 布局。right 设置 flex=1.left 设置 flex-shrink:0;
5. 运用 css 函数 calc。自动计算右侧的宽度。设置 right 的 width:calc(100% - left.width)。

## 代码实现

```html
<div class="float-box">
  <div class="aside"></div>
  <div class="main"></div>
</div>
```

- BFC

```css
.float-box {
  position: relative;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  height: 200px;
  background: #fcc;
  overflow: hidden;
}
```

- postion 布局

```css
.float-box {
  position: relative;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  height: 200px;
  background: #fcc;
  position: absolute;
  left: 100px;
  right: 0;
}
```

- 自适应布局

```css
.float-box {
  position: relative;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  height: 200px;
  margin-left: 100px;
  background: #fcc;
}
```

- flex 布局

```css
.float-box {
  display: flex;
  justify-content: flex-start;
}

.aside {
  width: 100px;
  height: 150px;
  background: #f66;
  flex-shrink: 0;
}

.main {
  height: 200px;
  background: #fcc;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
}
```

- cacl 计算

```css
.float-box {
  position: relative;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  float: left;
  height: 200px;
  background: #fcc;
  width: calc(100% - 100px);
}
```
