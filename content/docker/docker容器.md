---
title: 2.Docker学习之容器
date: 2022-11-29
description: docker 学习笔记
---

## 1 docker 基本操作

```bash
# 查看 docker 版本
docker version 

# 查看 docker 状态，容器和镜像等信息
docker info

# 查看 docker 的命令
docker 
```

## 2 镜像 vs 容器

### 2.1 image 镜像

- docker image 是一个 `read-only`文件
- 这个文件包含文件系统、源码、库文件、依赖、工具等一些运行 application 所需要的文件
- 可以理解成一个模板
- docker image 具有分层的概念

### 2.2 container 容器

- “一个运行中的 docker image”
- 实际上复制 image 并在 image 上层加上一层 `read-write` 层（称之为 `container layer` 层
- 基于同一个 image 可以创建多个 container

## 3 创建容器

```bash
# 创建 nginx 容器
docker container run nginx

docker run nginx

# 查看容器状态
docker container ls

# 可查看退出和已经运行的容器
docker container ps -a

# 停止运行 docker 
docker container stop ${CONTAINER_ID}

# 删除容器
docker container rm ${CONTAIN_ID}

docker remove ${CONTAINER_ID}
```

###  3.1 docker 技巧

```bash
# 一次性删除多个容器
docker container rm $(docker container ps -aq)

# 强制删除正在运行中的容器
docker containr rm ${CONTAINER_ID} -f
```

### 3.2 容器的 attach 和 detach 模式

```bash
# 在前台创建nginx容器(attach 模式)
docker container run -p 80:80 nginx

# 在后台执行创建 nginx 容器（detach 模式）
docker run -d -p 80:80 nginx
```

尽量使用 detach 模式创建容器

```bash
# 查看容器产生的 logs
docker container logs ${CONTAINER_ID}

# 实时动态的查看容器产生的 logs
docker container logs -f ${CONTAINER_ID}
```

### 3.3 交互式的创建容器

```bask
# 创建容器并进入交互式模式
docker container run -it ubuntu sh

# 在一个已经运行的容器里执行一个额外的 command
docker container run -d nginx
docker exec -it ${CONTAINER_ID} sh
```

## 4 windows 如何运行 docker engine 的

打开 hyperv 软件中可以看出，docker engine 是运行在 linux 的虚拟机中。如果安装了 wsl2，也可使用 wsl2 运行 docker engine。

## 5 容器和虚拟机

容器不是 mini 虚拟机
- 容器其实是进程
- 容器中的进程被限制了对 cpu 内存等资源的访问
- 当进程停止后，容器就退出了

```bash
# 查看 docker 容器进程
docker container top ${CONTAINER_ID}
```
```log
➜  ~ docker container top ada79fd085e1
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                198561              198535              0                   17:17               ?                   00:00:00            nginx: master process nginx -g daemon off;
systemd+            198617              198561              0                   17:17               ?                   00:00:00            nginx: worker process
```

```log
# 查看容器和宿主机之间的进程关系
➜  ~ pstree -halps 198617
systemd,1 noibrs
  └─containerd-shim,198535 -namespace moby -id ada79fd085e1c18c4db55bb259da67e5898a64962057207991b3de880f6b052c -address /run/containerd/containerd.sock
      └─nginx,198561
          └─nginx,198617
```

## 6 docker container run 背后发生了什么

```log
➜  ~ docker container run -d -p 80:80 --name webhost nginx
```
1. 在本地查找是否有 nginx 的镜像，发现没有
2. 去远程的 image registry 查找 nginx 镜像（默认的 registry 是 docker hub)
3. 下载最新版本的 nginx 镜像
4. 基于 nginx 镜像创建一个 nginx 容器，并且准备运行
5. dcoker engine 分配给这个容器一个虚拟 ip 地址
6. 在宿主机上打开 80 端口，把容器的 80 端口转发到宿主机上
7. 启动容器，运行指定的命令（这里是一个 shell 脚本去启动 nginx)