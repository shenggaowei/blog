---
title: 5 Docker学习之存储
date: 2022-12-02
description: docker 学习笔记
---

## 5.1 Docker 存储简介

默认情况下，在运行中的容器里创建的文件，被保存在一个可写的容器层：

- 如果容器被删除了，则数据也没有了
- 这个可写的容器层是和特定的容器绑定的，也就是这些数据无法方便的和其他容器共享

Docker 提供两种方式做数据持久化

-Data Volume，由 Docker 管理，（/var/lib/docker/volumes/ Linux），持久化数据最好的方式
- Bind Mount，由用户指定存储的数据具体 mount 在系统的什么位置

## 5.2 数据持久化之 Data Volume

### 5.2.1 使用 volume 在宿主机中存储文件

在容器内部执行一个 my-pron 定时器脚本，每分钟向 test.txt 文件中写入当前的时间

my-pron 执行文件
```shell
*/1 * * * * date >> /app/test.txt
```

 下载 supercronic-linux-amd64 文件，然后通过 scp 传到服务器中，并 copy 进入到镜像中。
 
 注：如果服务器网络好，可直接在 dockerfile 写指令在镜像中下载。
 
```bash
curl -fsSLO https://github.com/aptible/supercronic/releases/download/v0.1.12/supercronic-linux-amd64

scp ~/Downloads/supercronic-linux-amd64 root@8.131.101.166:~/docker/2/2.13

dockerfile 文件内容

```dockerfile
FROM alpine:latest
RUN apk update
RUN apk --no-cache add curl
ENV SUPERCRONIC=supercronic-linux-amd64 \
    SUPERCRONIC_SHA1SUM=048b95b48b708983effb2e5c935a1ef8483d9e3e
COPY supercronic-linux-amd64 /supercronic-linux-amd64
RUN echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
    && chmod +x "$SUPERCRONIC" \
    && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
    && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic
COPY my-cron /app/my-cron
WORKDIR /app

VOLUME ["/app"]

# RUN cron job
CMD ["/usr/local/bin/supercronic", "/app/my-cron"]
```

此时 Docker 会自动创建一个随机名字的 volume，去存储我们在 Dockerfile 定义的volume `VOLUME ["/app"]`。可以在 Dockerfile 中定义多个 volume。

构建镜像
```log
➜  2.13 docker image build -t my-cron .

➜  2.13 docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
my-cron      latest    4f9c9b62c665   7 minutes ago   41.5MB
alpine       latest    49176f190c7e   9 days ago      7.05MB

```

启动容器，查看 volume
```log
➜  2.13 docker container run -d 4f9

➜  2.13 docker volume ls
DRIVER    VOLUME NAME
local     68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777
```

使用 inspect 查看 volume 的详细信息
 
```log
➜  2.13 docker volume inspect 68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777
[
    {
        "CreatedAt": "2022-12-02T19:52:59+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777/_data",
        "Name": "68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777",
        "Options": null,
        "Scope": "local"
    }
]
```

在这个 Volume 的 mountpoint 可以发现容器创建的文件

```log
➜  2.13 ls /var/lib/docker/volumes/68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777/_data
my-cron  test.txt

➜  2.13 more /var/lib/docker/volumes/68d8adc5b4cd9e10073f85e8d6c7b69c192ffb77e23b8a36801e00dc35484777/_data/test.txt
Fri Dec  2 11:53:00 UTC 2022
Fri Dec  2 11:54:00 UTC 2022
```

### 5.2.2 给 volume 指定名字
如果不指定 volume 的名字，每次删除容器再次重新启动容器后，会生成一个全新的 volume name 去存储数据，导致数据不会存储在一个文件中。因此，需要给 volume 起一个名字。

删除 dockerfile 中的 `VOLUME` 指令

```dockerfile
FROM alpine:latest
RUN apk update
RUN apk --no-cache add curl
ENV SUPERCRONIC=supercronic-linux-amd64 \
    SUPERCRONIC_SHA1SUM=048b95b48b708983effb2e5c935a1ef8483d9e3e
COPY supercronic-linux-amd64 /supercronic-linux-amd64
RUN echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
    && chmod +x "$SUPERCRONIC" \
    && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
    && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic
COPY my-cron /app/my-cron
WORKDIR /app

# RUN cron job
CMD ["/usr/local/bin/supercronic", "/app/my-cron"]
```

重新构建镜像，在创建容器的时候给 volume 起名字。名字为 cron-data，存储的镜像中的文件夹为 /app

```bash
docker image build -t my-cron .

docker container run -d -v cron-data:/app my-cron
```

```log
➜  2.13 docker volume ls
DRIVER    VOLUME NAME
local     cron-data

➜  2.13 docker volume inspect cron-data
[
    {
        "CreatedAt": "2022-12-02T20:24:00+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/cron-data/_data",
        "Name": "cron-data",
        "Options": null,
        "Scope": "local"
    }
]


➜  2.13 more /var/lib/docker/volumes/cron-data/_data/test.txt
Fri Dec  2 12:24:00 UTC 2022
Fri Dec  2 12:25:00 UTC 2022
```

删除容器，然后再重新启动

```bash
docker system prune -f

docker container run -d -v cron-data:/app my-cron
```

查看 volume 存储状态
```log
➜  2.13 docker volume ls
DRIVER    VOLUME NAME
local     cron-data

➜  2.13 more /var/lib/docker/volumes/cron-data/_data/test.txt
Fri Dec  2 12:24:00 UTC 2022
Fri Dec  2 12:25:00 UTC 2022
Fri Dec  2 12:27:00 UTC 2022
Fri Dec  2 12:28:00 UTC 2022
```

可以看到，数据在原文件中继续存储了，从而达到了数据持久化。

## 5.3 Data Volume 练习之 MySql

练习在 linux 机器上使用 mysql 镜像，并且通过 volume 实现数据的持久化。

### 5.3.1 

使用 mysql 5.7 版本

```bash
docker pull mysql:5.7
```

```log
➜  2.13 docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED             SIZE
mysql        5.7       2d44289af685   2 days ago          495MB
```

创建容器并进入容器

```bash
docker container run --name some-mysql -e MYSQL_ROOT_PASSWORD=password -d -v mysql-data:/var/lib/mysql mysql:5.7
```

查看容器
```log
➜  ~ docker container ls
CONTAINER ID   IMAGE       COMMAND                  CREATED             STATUS             PORTS                 NAMES
c3300b0d7c87   mysql:5.7   "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes       3306/tcp, 33060/tcp   some-mysql
```

进入 mysql 容器，并执行 shell

```log
➜  ~ docker container exec -it c33 sh

sh-4.2# mysql -u -p 
```

输入密码 password 后，进入 mysql 管理界面。创建一个名为 demo 的 database。

```mysql
create database demo;
```

exit 退出到宿主机，查看 volume

```log
➜  ~ docker volume ls
DRIVER    VOLUME NAME
local     cron-data
local     mysql-data

➜  ~ docker volume inspect mysql-data
[
    {
        "CreatedAt": "2022-12-02T21:50:28+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/mysql-data/_data",
        "Name": "mysql-data",
        "Options": null,
        "Scope": "local"
    }
]
```

停止并删除 mysql 容器后，用上面创建 mysql 的命令新建一个容器后，mysql 会继续使用 mysql-data 这个 volume 的数据。


## 5.4 数据持久化之 Bind Mount

可以将数据存储到宿主机的指定目录上，-v 属性后跟路径。

```bash
docker container run -d -v $(path):/app my-cron
```

依旧用上面的定时写日期脚本的 dockerfile 以及相关文件构建的镜像，指定当前目录存储数据。

```dockerfile
FROM alpine:latest

RUN apk update

RUN apk --no-cache add curl

ENV SUPERCRONIC=supercronic-linux-amd64 \
    SUPERCRONIC_SHA1SUM=048b95b48b708983effb2e5c935a1ef8483d9e3e

COPY supercronic-linux-amd64 /supercronic-linux-amd64

RUN echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
    && chmod +x "$SUPERCRONIC" \
    && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
    && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic

COPY my-cron /app/my-cron

WORKDIR /app

CMD ["/usr/local/bin/supercronic", "/app/my-cron"]
```

操作过程如下

```log
➜  2.13 docker container run -d -v $(pwd):/app my-cron
4f6c178ff1095eb6da6dc904ead393675a0eb4327a9c8089b5358a61808e5e02

➜  2.13 docker container ls
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                 NAMES
4f6c178ff109   my-cron     "/usr/local/bin/supe…"   7 seconds ago   Up 6 seconds                         pedantic_hopper
c3300b0d7c87   mysql:5.7   "docker-entrypoint.s…"   21 hours ago    Up 21 hours    3306/tcp, 33060/tcp   some-mysql

➜  2.13 docker volume ls
DRIVER    VOLUME NAME

➜  2.13 ls
Dockerfile  my-cron  supercronic-linux-amd64  test.txt

➜  2.13 cat test.txt
Sat Dec  3 10:48:00 UTC 2022
Sat Dec  3 10:49:00 UTC 2022
Sat Dec  3 10:50:00 UTC 2022
Sat Dec  3 10:51:00 UTC 2022
```

ls 多出来一个 test.txt 文件，容器中的 app 目录被映射到了当前文件夹中。

## 5.5 Bind Mount 练习之 Docker 开发环境

通过 bind mount 配置数据存储，即文件共享。可以使用 docker 快速搭建开发环境。

### 5.5.1 使用 docker 搭建 gcc 编译环境，并将本地文件夹作为数据存储映射到容器中的 /root 中

```log
➜  2.13 docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
gcc          9.4       0ed449773594   6 months ago     1.14GB

➜  2.13 docker container run -d -v $(pwd):/root gcc:9.4
b258660969d3808133d5b80000d980ff310847cc5e3f0d020c8f930db03b3394

➜  2.13 docker container ls -a
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS                      PORTS                 NAMES
b258660969d3   gcc:9.4     "bash"                   35 seconds ago   Exited (0) 33 seconds ago                         festive_dijkstra

➜  2.13 docker container run -it -v $(pwd):/root gcc:9.4
root@735e547b47dd:/#
```

### 5.5.2 使用 vscode 快速搭建

插件商店搜索 remote development 并下载，点击 remote container。先选择本地的数据存储文件夹，再选择所使用的镜像，点击确定，即可在本地生成一个相应的容器。同时 vscode 会自动打开。

特别适用于 windows 系统的电脑，在需要使用 linux 的开发环境下。

## 5.6 机器之间共享数据

使用 sshfs 的 driver 实现。

todo: driver 的使用细节