---
title: Docker学习4之Dockerfile完全指南
date: 2022-12-02
description: docker 学习笔记
---

## 4.1 dockerfile 介绍
## 4.2 如何选择基础镜像

### 4.2.1 基础原则
- 官方镜像优于非官方镜像，如果没有官方镜像，尽量选择开源 dockerfile 镜像。
- 固定版本 tag，而不是每次都使用 latest。
- 尽量选择体积小的镜像。（尽量选择基于 alpine 的镜像版本）

### 4.2.2 构建基于 nginx-alpine 的镜像

```log
➜  2 tree .
.
├── Dockerfile
└── index.html

0 directories, 2 files
```

Dockerfile 文件
```dockerfile
FROM nginx:1.21.0-alpine

ADD index.html /usr/share/nginx/html/.html
```

```bash
# 构建镜像
docker image build -t mynginx-alpine .
```

查看构建后的镜像大小：
```log
➜  2 docker image ls
REPOSITORY       TAG             IMAGE ID       CREATED              SIZE
mynginx          latest          a36f22987cf9   4 seconds ago        133MB
mynginx-alpine   latest          e8083db51942   About a minute ago   22.6MB
nginx            1.21.0          4f380adfc10f   17 months ago        133MB
nginx            1.21.0-alpine   a6eb2a334a9f   18 months ago        22.6MB
```

nginx-alpine 版本构建出的镜像 mynginx-alpine 大小22.6MB，而由 nginx 基础镜像所构建出的 mynginx 大小为133MB。

## 4.3 通过 run 执行指令

`run` 主要用于在 image 里执行指令，比如安装软件，下载文件等。

执行多次 run 的 dockerfile 文件，多次分层。
```dockerfile
FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y wget
RUN wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz
RUN tar zxf ipinfo_2.0.1_linux_amd64.tar.gz
RUN mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo
RUN rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

```bash
# 构建镜像
docker image build -f Dockerfile.bad -t ipinfobad
```

优化后的 dockerfile 文件
```dockerfile
FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

```bash
# 构建镜像
docker image build -f Dockerfile.good -t ipinfogood
```

```log
➜  2.2 docker image ls
REPOSITORY       TAG             IMAGE ID       CREATED          SIZE
ipinfo-good      latest          4ad515daede9   12 seconds ago   129MB
ipinfo-bad       latest          7d8ecbfa4c59   14 minutes ago   143MB
```

查看 Dockerfile-bad 的镜像构建历史
```log
➜  2.2 docker image history 7d8
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
7d8ecbfa4c59   15 minutes ago   /bin/sh -c rm -rf ipinfo_2.0.1_linux_amd64.t…   0B
b0c05d6fe02a   15 minutes ago   /bin/sh -c mv ipinfo_2.0.1_linux_amd64 /usr/…   9.36MB
9846437fdabf   15 minutes ago   /bin/sh -c tar zxf ipinfo_2.0.1_linux_amd64.…   9.36MB
59bce5fc2b92   15 minutes ago   /bin/sh -c wget https://github.com/ipinfo/cl…   4.85MB
56fa8471a4e9   20 minutes ago   /bin/sh -c apt-get install -y wget              7.6MB
f378ddffdce3   20 minutes ago   /bin/sh -c apt-get update                       39.4MB
680e5dfb52c7   5 weeks ago      /bin/sh -c #(nop)  CMD ["bash"]                 0B
<missing>      5 weeks ago      /bin/sh -c #(nop) ADD file:7633003155a105941…   72.8MB
```

查看 Dockerfile-good 的镜像构建历史
```log
➜  2.2 docker image history 4ad
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
4ad515daede9   53 seconds ago   /bin/sh -c apt-get update &&     apt-get ins…   56.4MB
680e5dfb52c7   5 weeks ago      /bin/sh -c #(nop)  CMD ["bash"]                 0B
<missing>      5 weeks ago      /bin/sh -c #(nop) ADD file:7633003155a105941…   72.8MB
```

每一次执行 run ，镜像会执行一次额外的分层，镜像的大小会累加。

## 4.4 文件的复制和目录操作

往镜像里复制文件有两种方式， `copy` 和 `add`

### 4.4.1 复制普通文件

copy 和 add 都可以把本地的一个文件复制到镜像里，如果目标目录不存在，则会自动创建。

```dockerfile
FROM python:3.9.5-alpine3.13
COPY hello.py /app/
```

比如把本地的 hello.py 复制到 /app 目录下。 /app这个folder不存在，则会自动创建。

### 4.4.2 复制压缩文件

`ADD` 比 COPY 高级一点的地方就是，如果复制的是一个gzip等压缩文件时，ADD会帮助我们自动去解压缩文件。

```shell
# 压缩本地 hello.py 文件
tar zcvf hello.tar.gz hello.py
```

```dockerfile
FROM python:3.9.5-alpine3.13
ADD hello.tar.gz /app/
```


### 4.4.3 如何选择

如果只是单纯的文件或者文件夹复制，可以用 `copy`，如果复制压缩文件至镜像里面，可以用 `add`

需要注意一点，复制到镜像的文件的 rwx 权限，也会进行复制。

###  4.4.4 workdir

wokdir 指令相当于切换当前目录，在镜像里面执行 `cd` 操作

## 4.5 构建参数和环境变量

`arg` 和 `env` 都可以用来设置变量，但是两者有很多的不同

```dockerfile
FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

### 4.5.1 ENV

```dockerfile
FROM ubuntu:20.04
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

ENV 定义的变量不仅作用于镜像的构建期间，还可作为环境变量用于容器中。

### 4.5.2 ARG

```dockerfile
FROM ubuntu:20.04
ARG VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

ARG 定义的变量仅作用于镜像的构建期间。还可以通过传递参数在构建过程中覆盖 dockerfile 中的变量定义。

```shell
docker image build -f Dockerfile.arg -t ipinfo:1.0.1 --build-arg VERSION=2.0.0
```

## 4.6 容器启动命令 cmd

CMD 可以用来设置容器启动时默认回执行的命令。

- 容器启动时默认执行的命令
- 如果 docker container run 启动时指定了其他命令，则 CMD 命令会被忽略
- 如果定义了多个 CMD，只有最后一个会被执行

```shell
# 删除已经退出的容器
docker system prune -f

# 删除没有用到的镜像
docker image prune -a

# 构建 ipinfo 容器，添加 rm 选线，在容器退出后会自动删除容器
docker containr run --rm -it ipinfo ipinfo

# 启动容器后执行 ipinfo
docker container run -it ipinfo ipinfo
```

```dockerfile
FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
CMD ["ipinfo"]
```

ubuntu 镜像中默认会执行 /bin/bash。如果 dockerfile 中 cmd 为 []，则在生成容器的时候会报错。

## 4.7 容器启动命令 entrypoint

Entrypoint 可以设置容器启动时要执行的命令，但是和 cmd 还是有区别

- CMD 设置的命令，可以在 docker container run 时传入其它命令，覆盖掉 CMD 的命令，但是 ENTRYPOINT 所设置的命令是一定会被执行的。
- ENTRYPOINT 和 CMD 可以联合使用，ENTRYPOINT 设置执行的命令，CMD 设置执行的参数。

### 4.7.1 cmd 和 entrypoint 的实践
cmd 的 dockerfile

```dockerfile
FROM ubuntu:20.04
CMD ["echo", "hello docker"]
```

entrypoint 的 dockerfile

```dockerfile
FROM ubuntu:20.04
ENTRYPOINT ["echo", "hello docker"]
```

```bash
# 构建镜像
docker image build -f ./Dockerfile.cmd -t image-cmd .

docker image build -f ./Dockerfile.entry -t image-entry .
```

```bash
# 生成容器并执行 

# 执行 cmd。输出 hello docker
docker container run --rm -it image-cmd

# 执行 cmd。输出 hello world
docker container run --rm -it image-cmd echo "hello world"

# 执行 entry。输出 hello docker
docker container run --rm -it image-entry 

# 执行 entry。输出 hello docker echo hello world
# 命令行后的 echo "hello world" 整体被当做了参数传递给了 entrypoint
docker container run --rm -it image-entry echo "hello world"
```

### 4.7.2 shell 格式和 exec 格式
#### shell 格式

```shell
CMD echo "hello docker"

ENTRYPOINT echo "hello docker"
```
#### exec 格式

```shell
ENTRYPOINT ["echo", "hello docker"]

ENTRYPOINT ["echo", "hello docker"]
```

在使用环境变量的时候， exec 格式不能像 shell 格式那样直接使用变量。

```dockerfile
FROM ubuntu:20.04
ENV NAME=docker
CMD echo "hello $NAME"
```
以下 dockerfile 不会被正确的构建成镜像。

```dockerfile
FROM ubuntu:20.04
ENV NAME=docker
CMD ["echo", "hello $NAME"]
```

需要以 shell 脚本的方式去执行

```dockerfile
FROM ubuntu:20.04
ENV NAME=docker
CMD ["sh", "-c", "echo hello $NAME"]
```

## 4.8 构建一个 python flask 镜像

app.py 文件

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "hello. world!哈哈"
```

dockerfile 

```dockerfile
FROM python:3.9.5-slim

# 注意不要写成 /src，否则 docker 会将 src 当成一个文件
COPY app.py src/app.py

# 安装 flask
RUN pip install flask

# 进入到 src 目录
WORKDIR /src

# 设置环境变量, 在镜像的构建阶段和容器的运行阶段都可以访问到
ENV FLASK=app.py

# 容器暴露 5000 端口
EXPOSE 5000

# 执行 flask run -h 0.0.0.0 
CMD ["flask", "run", "-h", "0.0.0.0"]
```

```shell
# 构建镜像
docker image build -t flask-demo:1.0.0 .

# 生成容器，将容器内部的5000端口和本机的5000端口绑定
docker container run --rm -d -p 5000:5000 flask-deml:1.0.0 
```

## 4.9 dockerfile 技巧-合理使用缓存

当 dockerfile 中的某一层修改后，后面的步骤不会使用缓存。会重新构建。

```dockerfile
FROM python:3.9.5-slim

COPY app.py src/app.py

RUN pip install flask

WORKDIR /src

ENV FLASK=app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

第二次构建镜像 

```log
➜  2.8 docker image build -t flas-demo2 .
Sending build context to Docker daemon  11.17MB
Step 1/7 : FROM python:3.9.5-slim
 ---> c71955050276
Step 2/7 : COPY app.py src/app.py
 ---> Using cache
 ---> 3f173e919f11
Step 3/7 : RUN pip install flask
 ---> Using cache
 ---> 0868ce28df6c
Step 4/7 : WORKDIR /src
 ---> Using cache
 ---> 914b40ab01ad
Step 5/7 : ENV FLASK=app.py
 ---> Using cache
 ---> d9795e20228a
Step 6/7 : EXPOSE 5000
 ---> Using cache
 ---> bbd1be19798c
Step 7/7 : CMD ["flask", "run", "-h", "0.0.0.0"]
 ---> Using cache
 ---> 5358334120f6
Successfully built 5358334120f6
Successfully tagged flas-demo2:latest
```

如上所示，任何文件（包括 dockerfile 文件）都不做改动，二次构建的时候，docker 会使用缓存来加快构建速度。

修改 app.py 

```python

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
-    return "hello. world!"
+    return "hello. docker!" 
```

重新构建

```log
➜  2.8 docker image build -t flask-demo3 .
Sending build context to Docker daemon  11.17MB
Step 1/7 : FROM python:3.9.5-slim
 ---> c71955050276
Step 2/7 : COPY app.py src/app.py
 ---> 6791239d1a42
Step 3/7 : RUN pip install flask
 ---> Running in 877ce4403593
Collecting flask
  Downloading Flask-2.2.2-py3-none-any.whl (101 kB)
Collecting Werkzeug>=2.2.2
  Downloading Werkzeug-2.2.2-py3-none-any.whl (232 kB)
Collecting importlib-metadata>=3.6.0
  Downloading importlib_metadata-5.1.0-py3-none-any.whl (21 kB)
Collecting click>=8.0
  Downloading click-8.1.3-py3-none-any.whl (96 kB)
Collecting itsdangerous>=2.0
  Downloading itsdangerous-2.1.2-py3-none-any.whl (15 kB)
Collecting Jinja2>=3.0
  Downloading Jinja2-3.1.2-py3-none-any.whl (133 kB)
Collecting zipp>=0.5
  Downloading zipp-3.11.0-py3-none-any.whl (6.6 kB)
Collecting MarkupSafe>=2.0
  Downloading MarkupSafe-2.1.1-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (25 kB)
Installing collected packages: zipp, MarkupSafe, Werkzeug, Jinja2, itsdangerous, importlib-metadata, click, flask
Successfully installed Jinja2-3.1.2 MarkupSafe-2.1.1 Werkzeug-2.2.2 click-8.1.3 flask-2.2.2 importlib-metadata-5.1.0 itsdangerous-2.1.2 zipp-3.11.0
WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
WARNING: You are using pip version 21.1.3; however, version 22.3.1 is available.
You should consider upgrading via the '/usr/local/bin/python -m pip install --upgrade pip' command.
Removing intermediate container 877ce4403593
 ---> 0b83384d7799
Step 4/7 : WORKDIR /src
 ---> Running in 652ba8c1b93e
Removing intermediate container 652ba8c1b93e
 ---> 4edccdab18c6
Step 5/7 : ENV FLASK=app.py
 ---> Running in efef5ad0c3eb
Removing intermediate container efef5ad0c3eb
 ---> 67c6bfe56a09
Step 6/7 : EXPOSE 5000
 ---> Running in 95136491ea98
Removing intermediate container 95136491ea98
 ---> a9e76c51eb89
Step 7/7 : CMD ["flask", "run", "-h", "0.0.0.0"]
 ---> Running in e3dc1085ed29
Removing intermediate container e3dc1085ed29
 ---> 6b7e77a97221
Successfully built 6b7e77a97221
Successfully tagged flask-demo3:latest
```

可发现 docker 在构建过程中并没有使用缓存。

优化 dockerfile 

```dockerfile
FROM python:3.9.5-slim

RUN pip install flask

WORKDIR /src

COPY app.py src/app.py

ENV FLASK=app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

重新修改 app.py 文件后，二次构建。

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
-	return "hello world!"
+   return "hello. docker!"
```

```log
➜  2.8 docker image build -t flask-demo4 .
Sending build context to Docker daemon  11.17MB
Step 1/7 : FROM python:3.9.5-slim
 ---> c71955050276
Step 2/7 : RUN pip install flask
 ---> Using cache
 ---> 7a3cb75607ca
Step 3/7 : WORKDIR /src
 ---> Using cache
 ---> 17420cee071e
Step 4/7 : ENV FLASK=app.py
 ---> Using cache
 ---> ce7daf43a80d
Step 5/7 : COPY app.py src/app.py
 ---> 56d84e121e49
Step 6/7 : EXPOSE 5000
 ---> Running in f2848b069c60
Removing intermediate container f2848b069c60
 ---> a3930ee6340b
Step 7/7 : CMD ["flask", "run", "-h", "0.0.0.0"]
 ---> Running in 02bd7e957726
Removing intermediate container 02bd7e957726
 ---> 2c4ce3a2a272
Successfully built 2c4ce3a2a272
Successfully tagged flask-demo4:latest
```

可以看出，copy 之前的操作，docker 都使用了缓存。

** 由此得出结论，尽量把经常修改、导致 docker 不能使用 cache 的文件操作往后放, 经常不变的向前放。**

## 4.10 dockerfile 技巧-dockerignore

```log
# . 指定当前目录作为 build context
➜  2.8 docker image build -t flask-demo4 .
Sending build context to Docker daemon  11.17MB
...
```

build context 大小为11.17MB，但是在这个例子中，只需要 app.py，其他文件例如 env 文件夹都不需要。

```log
➜  2.8 tree . -L 1
.
├── app.py
├── Dockerfile
├── env
└── __pycache__

2 directories, 2 files
```

添加 .dockerignore 文件

```.dockerignore
env/
```

重新 build

```log
➜  2.8 docker image build -t flask-demo4 .
Sending build context to Docker daemon  18.43kB
Step 1/7 : FROM python:3.9.5-slim
 ---> c71955050276
```

build context 从11.17MB 减少到了 18.43KB。

使用 dockerignore 一方面可以减少镜像的大小，提高镜像构建速度；另一方面可以做文件的脱敏处理，不需要把所有的文件都添加到镜像当中。

## 4.11 dockerfile 技巧-多阶段构建

### 4.11.1 用 docker 部署一个 c 脚本

```c
#include <stdio.h>

int main(int argc, char *argv[]){
    printf("hello %s\n", argv[argc-1]);
}
```

正常构建镜像，初始用 gcc 镜像。

```dockerfile
FROM gcc:9.4 AS builder

COPY hello.c /src/hello.c

WORKDIR /src

RUN gcc --static -o hello hello.c

ENTRYPOINT ["/src/hello"]

CMD []
```

```bash
# 构建镜像
docker image build -t hello .
```

使用多阶段构建执行脚本

```dockerfile
# 阶段一 安装 gcc 环境，编译 c 文件
FROM gcc:9.4 AS builder

COPY hello.c /src/hello.c

WORKDIR /src

RUN gcc --static -o hello hello.c


# 阶段二 使用 alpine 基础镜像，执行 hello 文件
FROM alpine:3.13.5

COPY --from=builder /src/hello /src/hello

ENTRYPOINT ["/src/hello"]

CMD []
```

```bash
# 构建镜像
docker image build -t hello2 .
```

```log
➜  2.9 docker image ls
REPOSITORY   TAG          IMAGE ID       CREATED         SIZE
hello2       latest       cf3451e9c003   6 minutes ago   6.55MB
hello        latest       fbea31d42df1   9 minutes ago   1.14GB
```

由此可见，使用多阶段构建的镜像大小为6.55MB，正常构建的镜像为1.14GB，镜像体积明显减小。

多阶段构建常用于在代码需要单独的环境编译，但是在执行的过程中却不依赖于此环境的情况下。例如上面的例子，c 文件需要通过 gcc 的环境来进行编译，但是执行二进制文件却不需要 gcc，仅仅一个 alpine 的基础镜像就可。目的是执行，所以多阶段构建可大幅度缩小最终构建后的镜像体积。

## 4.12 dockerfile 技巧-尽量使用非 root 用户

Dockerfile-no-root 文件

```dockerfile
FROM python:3.9.5-slim

RUN pip install flask

COPY app.py /src/app.py

WORKDIR /src
ENV FLASK_APP=app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

Dockerfile-root 文件

```dockerfile
FROM python:3.9.5-slim

# 创建 flask 的用户组和 flask 的用户，并将 src 文件夹的 rwx 权限赋值个 flask 用户组下的 flask 用户
RUN pip install flask && \
    groupadd -r flask && useradd -r -g flask flask && \
    mkdir /src && \
    chown -R flask:flask /src

# 以 flask 用户身份执行下面的指令
USER flask

COPY app.py /src/app.py

WORKDIR /src
ENV FLASK_APP=app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

上面 dockerfile 文件增加了两个操作
1. 通过 groupadd 和 useradd 创建一个 flask 的组和用户
2. 通过 USER 指定后面的命令要以 flask 这个用户的身份运行

```bash
# 构建镜像
docker image build -f ./Dockerfile-no-root -t flask-no-root .

docker image build -f ./Dockerfile-root -t flask-root .
```

```log
➜  2.12 docker image ls
REPOSITORY      TAG          IMAGE ID       CREATED          SIZE
flask-root      latest       e41d7553320b   43 seconds ago   126MB
flask-no-root   latest       c86d6c25d8c4   6 minutes ago    125MB

➜  2.12 docker container run -d --name flask-no-root flask-no-root
d5cebf420ddfa34bf6769edb714faeff8147a0aa4c1347c5612d8661be6e78e2

➜  2.12 docker container run -d --name flask-root flask-root
8a6f4aa9c076f2ee9a764899b8606118f20eb7dee430f36a55be6b4dd0a9a8bc
```

```log
➜  2.12 docker container top 8a6
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
systemd+            253573              253550              0                   15:53               ?                   00:00:00            /usr/local/bin/python /usr/local/bin/flask run -h 0.0.0.0
➜  2.12 docker container top flask-no-root
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                253490              253462              0                   15:53               ?                   00:00:00            /usr/local/bin/python /usr/local/bin/flask run -h 0.0.0.0
```

从 docker top 可看出，flask-root 容器中的用户是 root，而 flask-no-root 容器中的用户是 systemd+，也就是普通用户。