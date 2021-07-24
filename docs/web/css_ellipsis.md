# 文本省略号

## 规定单行文本出现省略号

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        p {
            width: 100px;
            background: red;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    </style>
</head>

<body>

</body>
<p>
    你还快点放假，宽带 缴费卡看是否健康收款方监考老师吉林省快点放假SDK来看
    的是福建省宽带缴费卡拉动的看法健康的实际付款了
</p>

</html>
```

> white-space 规定制定文本的换行和空白字符的处理方式。

* nowrap: 文本在一行内，不会换行。空白字符会被合并成一个。遇到< br />会换行。
* normal: 默认空白会被浏览器所忽略。遇到 < br />会换行。
* pre : 空白会被浏览器保留。遇到 < br />会换行。
* pre-line：空白会被合并。遇到 < br />会换行。

> text-overflow 规定当文本溢出包含元素时发生的事情。

* clip 修建文本，后面的默认不展示。
* ellipsis 默认显示省略号。 ...

## 规定多行文本出现省略号

```css
        p {
            width: 100px;
            background: red;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
```

* -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
* display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
* -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
