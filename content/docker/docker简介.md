---
title: 1 Docker学习之简介
date: 2022-11-28
description: docker 学习笔记
---
## 1 容器技术的简介

> 容器 container 是一种技术，而 Docker 是一个容器技术的实现，它能够把开发的应用程序自动部署到容器的开源引擎。

容器是一种快速的打包技术，具有以下特点：
- 标准化
- 轻量级
- 易移植

### 1.1 Linux Container

Linux Container 是一种内核轻量级的操作系统虚拟技术。主要由 Namespace 和 Cgroup 量大机制来保证实现

- Namespace 命名空间主要用于资源的隔离
- Cgroup 负责资源管理控制作用，比如进程组使用 cpu/mem 的限制，进程组的优先级控制，进程组的挂起和恢复等等。

### 1.2 容器的标准化

`docker != container`

在2015年，由 Google, Docker、红帽等厂商联合发起了 OCI(Open Container Initiative) 组织，致力于容器技术的标准化。
	
- 容器运行时标准
	- 规定基本操作规范，比如如何下载镜像，创建容器，启动容器等。
- 容器镜像标准
	- 定义镜像的基本格式
	
### 1.3 容器关乎“速度”

- 加速软件开发
- 加速程序编译和构建
- 加速测试
- 加速部署
- 加速更新
- 加速故障修复

## 2 Docker 的安装

### 2.1 Linux 安装和启动

#### 2.1.1 安装

```bash
# get.docker.com 获取 docker 安装脚本
curl -fsSL get.docker.com -o get-docker.sh

# 添加执行权限
chmod 777 get-docker.sh

# 安装
./get-docker.sh

```
#### 2.1.2启动

```bash
# 查看docker的版本信息
sudo docker version

# 启动 docker
sudo service docker start
```

此时执行 docker version 输出如下，显示 client 和 server 的版本和启动情况
```log
➜  ~ sudo docker version
Client: Docker Engine - Community
 Version:           20.10.21
 API version:       1.41
 Go version:        go1.18.7
 Git commit:        baeda1f
 Built:             Tue Oct 25 18:02:21 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.21
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.7
  Git commit:       3056208
  Built:            Tue Oct 25 18:00:04 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.9
  GitCommit:        1c90a442489720eec95342e1789ee8a5e1b9536f
 runc:
  Version:          1.1.4
  GitCommit:        v1.1.4-0-g5fd4c4d
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```