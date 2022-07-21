---
title: ssh 客户端
date: 2022-07-19
description: ssh 学习笔记
---

# ssh 客户端

## 1. 简介

OpenSSH 的客户端是二进制程序 ssh。在 linux/unix中的位置是 `/usr/local/bin/ssh`，在 windows 的位置是 `\Program Files\OpenSSH\bin\ssh.exe`。

linux 系统安装 ssh。

```shell
# ubuntu 和 debian
$ sudo apt install openssh-client

# centos 和 fedora
$ sudo dnf install openssh-clients 
```

安装以后，可以使用 -v 参数输出版本号，查看一下是否安装成功。
```shell
$ ssh -v
```

## 2. 基本用法

ssh 最常见的用途是登录服务器，这要求服务器安装并正在运行 SSH 服务器软件。

ssh 登录服务器的命令如下。
```shell
$ ssh hostname
```
上面命令中，`hostname`是主机名，它可以是域名，也可能是 IP 地址或局域网内部的主机名。在不指定用户名的情况下，将使用客户端的当前用户名，作为远程服务器的登录用户名。如果要指定用户名，可以采用下面的语法。
```shell
$ ssh user@hostname
```
上面的命令中，用户名和主机名写在一起了，之间使用`@`分隔。
用户名也可以使用`ssl`的`-l`参数指定，这样的话，用户名和主机名就不用写在一起了。
```shell
$ ssh -l username host
```
ssh 默认连接服务器的22端口，`-p`参数可以指定其他端口。
```shell
$ ssh -p 8821 foo.com
```
上面命令连接服务器`foo.com`的8821端口

## 3. 连接流程

ssh 连接远程服务器后，首先有一个验证过程，验证远程服务器是否为陌生地址。

如果是第一次连接某一台服务器，命令行会显示一段文字，表示不认识这台机器，提示用户确认是否需要连接。
```shell
The authenticity of host 'foo.com (192.168.121.111)' can't be established.
ECDSA key fingerprint is SHA256:Vybt22mVXuNuB5unE++yowF7lgA/9/2bLSiO3qmYWBY.
Are you sure you want to continue connecting (yes/no)?
```
上面这段文字告诉用户，`foo.com`这台服务器的指纹是陌生的，让用户选择是否要继续链接（输入 yes 或 no）

“服务器指纹”，指的是 SSH 服务器公钥的哈希值。每台 SSH 服务器都有唯一对密钥，用于跟客户端通信，其中公钥的哈希值就可以用来识别服务器。

下面的命令可以查看某个公钥的指纹。
```shell
$ ssh-keygen -l -f ~/.ssh/id_rsa.pub
256 da:24:43:0b:2e:c1:3f:a1:84:13:92:01:52:b4:84:ff   (ECDSA)
```
上面的例子中，`ssh-keygen -l -f`命令会输出公钥`~/.ssh/id_rsa.pub`的指纹。

ssh 会将本机连接过的所有服务器公钥的指纹，都存储在本地`~/.ssh/known_hosts`文件中。每次连接服务器时，通过该文件判断是否为陌生主机（陌生公钥）。

在上面这段文字后面，输入 `yes`，就可以将当前服务器的指纹也存储在本机`~/.ssh/known_hosts`文件中。并显示下面的提示。以后再连接的时候，就不会再出现警告了。
```shell
Warning: Permanently added 'foo.com (192.168.121.111)' (RSA) to the list of known hosts
```

然后，客户端就会跟服务器建立连接。接着，ssh 就会要求用户输入所要登录账户的密码。用户输入并验证密码正确以后，就能登录远程服务器的 Shell 了。

## 4. 服务器密钥变更