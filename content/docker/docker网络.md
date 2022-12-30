---
title: 6 Docker学习之网络
date: 2022-12-04
description: docker 学习笔记
---
## 6.1 网络基础知识

ip、子网掩码、网关、dns、端口号

### 6.1.2 浏览器中输入网址并回车，这个过程都发生了什么？

[原文：Traffic example, the full picture](https://www.homenethowto.com/advanced-topics/traffic-example-the-full-picture/)

<iframe border=0 frameborder=0 height=600 width="100%" src="https://www.homenethowto.com/advanced-topics/traffic-example-the-full-picture/"></iframe>

## 6.2 网络常用命令
### 6.2.1 IP 地址的查看
widows

```bash
ipconfig
```

linux

```bash
ifconfig
```

或者
```bash
ip addr
```

### 6.2.2 网络连通性测试

#### ping 命令

测试 ip 的可达性

```bash
ping 172.17.14.56
```

#### telnet 命令

测试端口的连通性

```bash
telnet www.baidu.com 80
```


#### traceroute

路径探测跟踪

Linux 下使用 tracepath

```bash
tracepath www.baidu.com
```

windows 下使用 TRACERT.EXE

```bash
TRACERT.EXE www.baidu.com
```

#### curl 命令

[原文：curl 的用法指南](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

<iframe border=0 frameborder=0 height=600 width="100%" src="https://www.ruanyifeng.com/blog/2019/09/curl-reference.html"></iframe>

## 6.3 容器网络涉及到哪些问题

1. 容器为什么能获取到 IP 地址？
2. 为什么宿主机可以 PING 通容器的 IP?
3. 为什么容器之间的 IP 是互通的？
4. 为什么容器能 PIGN 通外网？
5. 容器的端口转发是怎么回事？

## 6.4 容器间通信之 bridge 模式

![docker 容器间通信](./asset/two-container-network.png)

宿主机上通过 ip a 查看本机的 ip 地址，可以看到 linux birdge docker0 ，类似于通信网关。

```log
➜  ~ ip a
257: veth79a98df@if256: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether 02:30:5e:d8:bb:57 brd ff:ff:ff:ff:ff:ff link-netnsid 2
    inet6 fe80::30:5eff:fed8:bb57/64 scope link
       valid_lft forever preferred_lft forever
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:12:b2:fe brd ff:ff:ff:ff:ff:ff
    inet 172.17.14.56/20 brd 172.17.15.255 scope global dynamic eth0
       valid_lft 313898041sec preferred_lft 313898041sec
    inet6 fe80::216:3eff:fe12:b2fe/64 scope link
       valid_lft forever preferred_lft forever
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:64:66:3e:59 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:64ff:fe66:3e59/64 scope link
       valid_lft forever preferred_lft forever
261: veth70fab58@if260: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether ce:88:03:fc:28:2b brd ff:ff:ff:ff:ff:ff link-netnsid 3
    inet6 fe80::cc88:3ff:fefc:282b/64 scope link
       valid_lft forever preferred_lft forever
263: vethcbb1859@if262: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether 42:f8:8e:82:9d:9e brd ff:ff:ff:ff:ff:ff link-netnsid 4
    inet6 fe80::40f8:8eff:fe82:9d9e/64 scope link
       valid_lft forever preferred_lft forever
265: veth5eb5076@if264: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether e2:49:b4:f3:75:91 brd ff:ff:ff:ff:ff:ff link-netnsid 5
    inet6 fe80::e049:b4ff:fef3:7591/64 scope link
       valid_lft forever preferred_lft forever
243: veth7b62eda@if242: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether b2:fc:79:8e:04:70 brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet6 fe80::b0fc:79ff:fe8e:470/64 scope link
       valid_lft forever preferred_lft forever
251: veth849634e@if250: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether b2:2a:1d:34:6c:ec brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::b02a:1dff:fe34:6cec/64 scope link
       valid_lft forever preferred_lft forever
```

```log
➜  ~ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
53eb5d6ddaf4   bridge    bridge    local
2d4832e0ed27   host      host      local
37331b89cace   none      null      local

➜  ~ docker inspect 53e
[
    {
        "Name": "bridge",
        "Id": "53eb5d6ddaf4f4dfe62b1cd9eeed29ae5afd56ff2e0965de039119e993da656c",
        "Created": "2022-11-17T18:44:59.689614891+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "4f6c178ff1095eb6da6dc904ead393675a0eb4327a9c8089b5358a61808e5e02": {
                "Name": "pedantic_hopper",
                "EndpointID": "3663bb2cc73dc943f958b6b686590981518f8649e98a6ef95b268324721e8b55",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            },
            "8656379d9b992481c3848e2c396d831e83967163216ebaafa9f0d6846845cc13": {
                "Name": "web2",
                "EndpointID": "8c6aedf326ba8f3d97b34291223ce47a4898e2089eadae13353492231a180913",
                "MacAddress": "02:42:ac:12:00:07",
                "IPv4Address": "172.18.0.7/16",
                "IPv6Address": ""
            },
            "b8104dcc6333daceb46d2ed9858aa6003614fcea1e3296ebb9318cb710740814": {
                "Name": "box1",
                "EndpointID": "2ee1f5aaac75781ab97b263f88086cd1be262bd60500f2bee4dd5e6f0048f856",
                "MacAddress": "02:42:ac:12:00:05",
                "IPv4Address": "172.18.0.5/16",
                "IPv6Address": ""
            },
            "babaf5083954463e5b9399e9b5afef7a9bd39a6f9d2eff6e7e65fbf003c90ecb": {
                "Name": "box2",
                "EndpointID": "bef728b212887757501d36f0914992daa51b21fb0e648c22b1e752f5439856b8",
                "MacAddress": "02:42:ac:12:00:06",
                "IPv4Address": "172.18.0.6/16",
                "IPv6Address": ""
            },
            "c3300b0d7c876badc9c6b55167fcd3b14ae58833f854513530548c8cec210b63": {
                "Name": "some-mysql",
                "EndpointID": "6d6c2bd64a004b8de26483a32570539a24f8ed7642b6048ee4f1b117f33f8c99",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            },
            "d635088e35408649d0caa3735ffdb43b08bdae7323dd28a42d4d6a376c0ac8a3": {
                "Name": "magical_feynman",
                "EndpointID": "8476120647ba6b3f874c5d10d090dc74188520276246b97779be1cd18f42f4bb",
                "MacAddress": "02:42:ac:12:00:04",
                "IPv4Address": "172.18.0.4/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]

```

查看 docker bridge 信息，可以看到 docker bridge 的 ip 信息 `IPAM`，和链接到 docker0 的 container `Contaienrs`。

> brctl 可以查看 bridge 相关信息。

```bash
sudo apt-get install -y bridge-utils
```

```log
➜  ~ brctl show
bridge name     bridge id               STP enabled     interfaces
docker0         8000.024264663e59       no              veth5eb5076
                                                        veth70fab58
                                                        veth79a98df
                                                        veth7b62eda
                                                        veth849634e
                                                        vethcbb1859
```

interfaces 用于 container 连接 docker0，即上图中的 veth1、veth2...

## 6.5 容器对外通信之 bridge 模式

查看路由，默认的本路路由为 172.17.15.253，而 docker0 的路由为 172.18.0.0/16。

```log
➜  ~ ip route
default via 172.17.15.253 dev eth0 proto dhcp src 172.17.14.56 metric 100
172.17.0.0/20 dev eth0 proto kernel scope link src 172.17.14.56
172.17.15.253 dev eth0 proto dhcp scope link src 172.17.14.56 metric 100
172.18.0.0/16 dev docker0 proto kernel scope link src 172.18.0.1
```

172.18.0.0/17 地址通过 nat 转换成 172.17.15.253

iptables 端口转换规则
```log
➜  ~ sudo iptables --list -t nat
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination
DOCKER     all  --  anywhere             anywhere             ADDRTYPE match dst-type LOCAL

Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DOCKER     all  --  anywhere            !localhost/8          ADDRTYPE match dst-type LOCAL

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination
MASQUERADE  all  --  172.18.0.0/16        anywhere
MASQUERADE  tcp  --  172.18.0.7           172.18.0.7           tcp dpt:http

Chain DOCKER (2 references)
target     prot opt source               destination
RETURN     all  --  anywhere             anywhere
DNAT       tcp  --  anywhere             anywhere             tcp dpt:http to:172.18.0.7:80
```

## 6.6 网络知识补充 NAT

Network Address Translation 

[介绍视频：原地址 https://www.youtube.com/watch?v=FTUV0t6JaDA](https://www.youtube.com/watch?v=FTUV0t6JaDA)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FTUV0t6JaDA" title="NAT Explained - Network Address Translation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 6.7 创建和使用自定义 bridge

创建自定义的 bridge，名为 mybridge
```log
➜  ~ docker network create -d bridge mybridge
fa479799eadefa7d5cf497a8bc941f8ec034bef21b9557800a14372efc53958a

➜  ~ docker network ls
NETWORK ID     NAME       DRIVER    SCOPE
53eb5d6ddaf4   bridge     bridge    local
2d4832e0ed27   host       host      local
fa479799eade   mybridge   bridge    local
37331b89cace   none       null      local
```

生成一个容器 box3，并指定使用 mybridge，而不是默认的 docker0。
```log
➜  ~ docker container run -d --rm --name box3 --network mybridge busybox /bin/sh -c "while true; do sleep 3600; done"
7cae37140efb3fee5a566556e3421a8a5a0b6d4db05acfcba3faaac80971c046
```

查看 mybridge 相关信息
```log
➜  ~ docker network inspect fa4
[
    {
        "Name": "mybridge",
        "Id": "fa479799eadefa7d5cf497a8bc941f8ec034bef21b9557800a14372efc53958a",
        "Created": "2022-12-04T17:49:42.622434731+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.19.0.0/16",
                    "Gateway": "172.19.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "7cae37140efb3fee5a566556e3421a8a5a0b6d4db05acfcba3faaac80971c046": {
                "Name": "box3",
                "EndpointID": "18570a0b3ffafccd422a3284c9ba5ec0d88ec209a7f0b7636ca41a5221dd9d2a",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```

让 box3 再连接默认的 bridge，此时 box3 同时连接了两个 bridge。
```log
➜  ~ docker network connect bridge box3
```

```log
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "5be82c176eb538f77a96f97777c6b6b45363c9308f9b6cb012186e4a7259a35e",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/5be82c176eb5",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "27102c88373e9fa3c715310c08d35e67c636983736b2b415df27f162668cceb3",
            "Gateway": "172.18.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.18.0.8",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:12:00:08",
            "Networks": {
                "bridge": {
                    "IPAMConfig": {},
                    "Links": null,
                    "Aliases": [],
                    "NetworkID": "53eb5d6ddaf4f4dfe62b1cd9eeed29ae5afd56ff2e0965de039119e993da656c",
                    "EndpointID": "27102c88373e9fa3c715310c08d35e67c636983736b2b415df27f162668cceb3",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.8",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:08",
                    "DriverOpts": {}
                },
                "mybridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "7cae37140efb"
                    ],
                    "NetworkID": "fa479799eadefa7d5cf497a8bc941f8ec034bef21b9557800a14372efc53958a",
                    "EndpointID": "18570a0b3ffafccd422a3284c9ba5ec0d88ec209a7f0b7636ca41a5221dd9d2a",
                    "Gateway": "172.19.0.1",
                    "IPAddress": "172.19.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:13:00:02",
                    "DriverOpts": null
                }
            }
        }
```

重新使用 mybridge 创建一个容器 box4 
```shell
➜  ~ docker container run -d --rm --name box4 --network mybridge busybox /bin/sh -c "while true; do sleep 3600; done"
```

```shell
➜  ~ docker container ls
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                               NAMES
a1c3b67cc319   busybox     "/bin/sh -c 'while t…"   2 minutes ago    Up 2 minutes                                        box4
7cae37140efb   busybox     "/bin/sh -c 'while t…"   21 minutes ago   Up 21 minutes                                       box3
b8104dcc6333   busybox     "/bin/sh -c 'while t…"   2 hours ago      Up 2 hours                                          box1
```

box1 用的是 docker 默认的 docker0，box4 和 box3 使用 mybridge

```shell
➜  ~ docker container exec -it box3 ping box4 -c 2
PING box4 (172.19.0.3): 56 data bytes
64 bytes from 172.19.0.3: seq=0 ttl=64 time=0.075 ms
64 bytes from 172.19.0.3: seq=1 ttl=64 time=0.119 ms

--- box4 ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.075/0.097/0.119 ms

➜  ~ docker container exec -it box1 ping box4 -c 2
ping: bad address 'box4'
```

默认的 docker0 birdge 不能通过容器的名字作为 host 来进行访问，自身并没有设置 dns 解析。如果使用自定义的 bridge，则可以通过容器名字来进行访问。

## 6.8 容器的端口转发

将宿主机上的 8080 端口映射到容器 web 的 80 端口上。

```shell
docker contaienr run -d --rm --name web -p 8080:80 nginx
```

格式化容器的信息输出，查看容器的虚拟 ip。

```log
➜  ~ docker container inspect --format '{{.NetworkSettings.IPAddress}}' web
172.18.0.7
```

通过 iptables 可看，新增了一条规则 DNAT，即将宿主机上的 8080 端口映射到容器 web 的 80端口上。

```log
➜  ~ sudo iptables -t nat -nvxL
Chain PREROUTING (policy ACCEPT 3 packets, 108 bytes)
    pkts      bytes target     prot opt in     out     source               destination
   90078  3995660 DOCKER     all  --  *      *       0.0.0.0/0            0.0.0.0/0            ADDRTYPE match dst-type LOCAL

Chain INPUT (policy ACCEPT 3 packets, 108 bytes)
    pkts      bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 12 packets, 824 bytes)
    pkts      bytes target     prot opt in     out     source               destination
       0        0 DOCKER     all  --  *      *       0.0.0.0/0           !127.0.0.0/8          ADDRTYPE match dst-type LOCAL

Chain POSTROUTING (policy ACCEPT 13 packets, 864 bytes)
    pkts      bytes target     prot opt in     out     source               destination
       0        0 MASQUERADE  all  --  *      !br-fa479799eade  172.19.0.0/16        0.0.0.0/0
     295    18262 MASQUERADE  all  --  *      !docker0  172.18.0.0/16        0.0.0.0/0
       0        0 MASQUERADE  tcp  --  *      *       172.18.0.7           172.18.0.7           tcp dpt:80

Chain DOCKER (2 references)
    pkts      bytes target     prot opt in     out     source               destination
       0        0 RETURN     all  --  br-fa479799eade *       0.0.0.0/0            0.0.0.0/0
       0        0 RETURN     all  --  docker0 *       0.0.0.0/0            0.0.0.0/0
       1       40 DNAT       tcp  --  !docker0 *       0.0.0.0/0            0.0.0.0/0            tcp dpt:8080 to:172.18.0.7:80
```

## 6.9 端口转发和 dockerfile

```dockerfile
FROM python:3.9.5-slim


RUN pip install flask

WORKDIR /src

ENV FLASK=app.py

COPY app.py src/app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

dockerfile 中 `EXPOSE` 并不是真正的暴露容器端口，只是一种解释说明，主要用来告诉使用者，镜像会暴露某个端口号，在构建容器的过程中，需要指定 -p 来映射容器端口到主机。

## 6.10 host网络详解

```shell
➜  2 docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
53eb5d6ddaf4   bridge    bridge    local
2d4832e0ed27   host      host      local
37331b89cace   none      null      local
```

```shell
➜  2 docker container run -d --rm --name box1  busybox /bin/sh -c "while true; do sleep 3600; done"
64b15285013f15f378d9d40b56ce4dca21533d086dff2ad7f6545a7f85fe7304

➜  2 docker container run -d --rm --name box2 --network host busybox /bin/sh -c "while true; do sleep 3600; done"
b63eb9b6fbae0e524afc0608c364983bbb8dcc70a94e4ab28ba3f2b62b05b640
```

```log
➜  2 docker container exec -it box1 sh
/ # ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
277: eth0@if278: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:12:00:05 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.5/16 brd 172.18.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ #
```

```log
➜  2 docker container exec -it box2 sh
/ # ip a
257: veth79a98df@if256: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0
    link/ether 02:30:5e:d8:bb:57 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::30:5eff:fed8:bb57/64 scope link
       valid_lft forever preferred_lft forever
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel qlen 1000
    link/ether 00:16:3e:12:b2:fe brd ff:ff:ff:ff:ff:ff
    inet 172.17.14.56/20 brd 172.17.15.255 scope global dynamic eth0
       valid_lft 313890064sec preferred_lft 313890064sec
    inet6 fe80::216:3eff:fe12:b2fe/64 scope link
       valid_lft forever preferred_lft forever
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue
    link/ether 02:42:64:66:3e:59 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:64ff:fe66:3e59/64 scope link
       valid_lft forever preferred_lft forever
278: vethaa651dd@if277: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0
    link/ether a2:7e:cd:d4:e5:c4 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::a07e:cdff:fed4:e5c4/64 scope link
       valid_lft forever preferred_lft forever
243: veth7b62eda@if242: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0
    link/ether b2:fc:79:8e:04:70 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::b0fc:79ff:fe8e:470/64 scope link
       valid_lft forever preferred_lft forever
251: veth849634e@if250: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0
    link/ether b2:2a:1d:34:6c:ec brd ff:ff:ff:ff:ff:ff
    inet6 fe80::b02a:1dff:fe34:6cec/64 scope link
       valid_lft forever preferred_lft forever
```

使用 host，容器会使用宿主机的网络配置。

开启一个使用 host 配置的 nignx 容器：

```shell
➜  2 docker container run -d --name web3 --network host nginx
990d28499d27f7cce8cd2e6e5fbf5869b55017e0de119e2c4ea352a7f0b26c0d

➜  2 docker container ls -a
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS                      PORTS                 NAMES
990d28499d27   nginx       "/docker-entrypoint.…"   9 seconds ago   Up 8 seconds                                      web3
```

容器 web3 中，会直接监听宿主机上的 80 端口。直接使用 host 相对于端口转发，因为省略了 docker0 bridge 的 nat 过程，性能相对会好一些。

### none 网络

```log
➜  2 docker container run -d --rm --name box4 --network none  busybox /bin/sh -c "while true; do sleep 3600; done"
fdad935e93ac5354feebae16f9d084f78e03faf5da25e50368e3cba4dfe147de
➜  2 docker container exec -it box4 sh
/ # ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
```

使用 none 构建后的容器，容器无法访问外部，外部也无法访问容器。是一个没有网络的环境。

一般开发使用不到，使用于容器编排、网络需要自定义的场景。

## 6.11 linux 网络命令空间

Linux 的 Namespace(命名空间) 技术是一种隔离技术，常用的 Namespace 有 user namespace，process namespace，network namespace 等。

在 Docker 容器中，不同的容器通过 Network namespace 进行了隔离，也就是不同的容器有各自的 IP 地址，路由表等，互不影响。

![network namespace](./asset/network-namespace.png)

创建 bridge

```shell
➜  2 sudo brctl addbr mydocker0
➜  2 brctl show
bridge name     bridge id               STP enabled     interfaces
docker0         8000.024264663e59       no              veth1dc2d39
                                                        veth79a98df
                                                        veth7b62eda
                                                        veth849634e
mydocker0               8000.000000000000       no
```

shell 脚本

```shell
#!/bin/bash

bridge=$1
namespace=$2
addr=$3

vethA=veth-$namespace
vethB=eth00-$namespace

# 创建网络命名空间
sudo ip netns add $namespace

# 创建link。两头分别是 vethA 和 vethB
sudo ip link add $vethA type veth peer name $vethB

# 把 vethB 放到 namespce 中
sudo ip link set $vethB netns $namespace

# 给 vethB 配置 ip 地址
sudo ip netns exec $namespace ip addr add $addr dev $vethB

# 将 vethb 启动
sudo ip netns exec $namespace ip link set $vethB up

# vethA 启动
sudo ip link set $vethA up

# 将 vethA 启动
sudo brctl addif $bridge $vethA
```

脚本执行

```shell
➜  2.14 sh add-ns-to-br.sh mydocker0 ns1 172.17.1.1/16
➜  2.14 sh add-ns-to-br.sh mydocker0 ns2 172.17.1.2/16
```

把 mydocker0 这个 bridge up 起来

```shell
sudo ip link set dev mydocker0 up
```

验证：

```shell
➜  2.14 sudo ip netns exec ns1 bash
root@iZ2ze6cshz9sfrcugp10r4Z:~/docker/2/2.14# ip a
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
284: eth00-ns1@if285: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 9e:89:21:f5:23:c6 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.1.1/16 scope global eth00-ns1
       valid_lft forever preferred_lft forever
    inet6 fe80::9c89:21ff:fef5:23c6/64 scope link
       valid_lft forever preferred_lft forever
root@iZ2ze6cshz9sfrcugp10r4Z:~/docker/2/2.14# ping 172.17.1.2 -c 2
PING 172.17.1.2 (172.17.1.2) 56(84) bytes of data.

--- 172.17.1.2 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1014ms
```

todo: 不知道为啥 ping 会丢包

### 对外通信
[对外通信： 原文 https://www.karlrupp.net/en/computer/nat_tutorial](https://www.karlrupp.net/en/computer/nat_tutorial)

<iframe border=0 frameborder=0 height=600 width="100%" src="https://www.karlrupp.net/en/computer/nat_tutorial"></iframe>
