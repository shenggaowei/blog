# nginx基础

## 1 常用语法
```shell
# 格式
nginx -s reload

# 帮助
-? -h

# 使用指定的配置文件
-c

# 指定配置命令
-g

# 指定运行目录
-p

# 发送信号
-s

立即停止服务： stop
优雅的停止服务：quip
重载配置文件：reload
重新开始记录日志文件：reopen

# 测试配置文件是否有语法错误
-t
-T

# 打印 nginx 的版本信息、编译信息等
-v -V
```