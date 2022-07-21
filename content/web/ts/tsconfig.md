---
title:  tsconfig.json 配置
date: 2022-07-21
description:  tsconfig.json 配置
---


## 1 baseUrl

baseUrl 可以使用相对路径去解析模块，值为一个根路径字符串。

```log
baseUrl
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
```

如果设置 "baseUrl": "./"，则 ts 会把与 tsconfig.json 一级的目录设置为根目录。

使用 baseUrl 可以避免使用 "../../" 或者 "./" 等绝对路径引入模块所带来的不方便。

## 2 paths

paths 属性可以对导入的路径设置别名，下面是一个例子,从 node_modules 中加载 jquery.

```json
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // This mapping is relative to "baseUrl"
    }
  }
}
```

需要注意的是 ts 对模块的寻找是相对于 baseUrl 根路径，如果把上面例子中的 baseUrl 设置为 "./src", 相应的 jquery 应该设置为 "../node_modules/jquery/dist/jquery"

路径，可以设置为数组的形式，对于下面的例子。

```log
projectRoot
├── folder1
│   ├── file1.ts (imports 'folder1/file2' and 'folder2/file3')
│   └── file2.ts
├── generated
│   ├── folder1
│   └── folder2
│       └── file3.ts
└── tsconfig.json
```

它相应的 tsconfig.json 可能会是这样

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["*", "generated/*"]
    }
  }
}
```

1. 通配符 "\*" 意味着模块名字不会发生变化，ts 相应的模块查找关系为 moduleName => baseUrl/moduleName。
2. "generated/\*" 意味着模块的名字有一个附加前缀 "generated"，所以查找关系为 moduleName => baseUrl/generated/moduleName
