# pm2基础


## 1 进程开启
```shell
# 开启一个进程服务
pm2 start app.js

# Specify an app name
--name <app_name>

# Watch and Restart app when files change
--watch

# Set memory threshold for app reload
--max-memory-restart <200MB>

# Specify log file
--log <log_path>

# Pass extra arguments to the script
-- arg1 arg2 arg3

# Delay between automatic restarts
--restart-delay <delay in ms>

# Prefix logs with time
--time

# Do not auto restart app
--no-autorestart

# Specify cron for forced restart
--cron <cron_pattern>

# Attach to application log
--no-daemon
```

## 2 管理进程
```shell
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```

## 3 列举管理的应用
```shell
pm2 [list|ls|status]
```

## 4 日志查看
```shell
pm2 logs
pm2 logs --lines 200
```

## 5 命令行基础看板
```shell
pm2 monit
```