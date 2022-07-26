---
title:  nginx 问题记录
date: 2022-07-25
description: nginx 使用问题记录
---

1 服务器重启后，理论上 nginx 处于关闭状态，但是开启 nginx 后报错，现在还未解
```shell
nginx -s reload
nginx: [error] invalid PID number "" in "/run/nginx.pid"
```

执行 `nginx -s reload` 提示 80 端口被占用，通过 `lsonf -i :80` 可找到相应的进程 id，然后 kill 掉。再 `nginx -s relaod` ok。