# 1.如何在M1芯片Mac上安装IDEA Java开发环境

## 本机现状

- 机器 MacBook Air 16GB
- 目前没有任何残留*Java*环境

## 安装步骤

### 1. 安装JDK

[Download Zulu Builds of OpenJDK](https://www.azul.com/downloads/zulu-community/?os=macos&architecture=arm-64-bit&package=jdk)

选择你需要的jdk版本dmg文件下载就行。

然后下一步下一步。。。看一下版本测试下是否安装成功

```
java -version 

openjdk version "15.0.2" 2021-01-19
OpenJDK Runtime Environment Zulu15.29+15-CA (build 15.0.2+7)
OpenJDK 64-Bit Server VM Zulu15.29+15-CA (build 15.0.2+7, mixed mode)
```

### 2. 安装IDEA

[IDEA 下载页面](https://www.jetbrains.com/idea/download/#section=mac)

选择 **Apple Silicon** 就可以了

下载完dmg文件之后 就安装下一步下一步。

然后其实就成功了。。。

打开IDEA之后会帮你自动载入关联到Zulu的JDK

