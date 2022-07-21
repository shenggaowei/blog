---
title:  删除 mac 上顽固图表
date: 2022-07-21
description:  删除 mac 上顽固图表
---


```shell
defaults write com.apple.dock ResetLaunchPad -bool true

killall Dock
```
