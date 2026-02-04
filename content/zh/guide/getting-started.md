---
outline: deep
---

# 快速开始

## 环境要求 {#environmental-requirements}

::: info Node

Lithe Admin 使用 [Vite](https://cn.vitejs.dev) 作为开发和生产环境的构建工具，[Node.js](https://nodejs.org/zh-cn) 需要 `20.19+` 或者 `22.12+` 的版本。

:::

## 创建项目 {#create-project}

使用 `create-lithe` cli 命令创建项目，目前提供了两个模板。

| 模版             | 源码地址                                                    | 预览地址                                                                          | 说明             |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------- |
| Lithe Admin      | [Github](https://github.com/tenianon/lithe-admin)           | [预览](https://lithe-admin.havenovelgod.com)                                      | 默认模板         |
| Lithe Admin Lite | [Github](https://github.com/tenianon/lithe-admin/tree/lite) | [预览(Preview 链接)](https://github.com/tenianon/lithe-admin/deployments/Preview) | 精简模板（推荐） |

::: code-group

```sh [pnpm]
$ pnpm create lithe@latest
```

```sh [npm]
$ npm create lithe@latest
```

```sh [yarn]
$ yarn create lithe@latest
```

```sh [bun]
$ bun create lithe@latest
```

:::

将需要回答几个简单的问题：

```ansi
[90m┌[39m  [1m[94m请输入项目名称[0m
[90m│[39m  [2mmy-lithe-admin[0m
[90m│[39m
[32m◇[39m  [1m[94m请选择模版[0m
[90m│[39m  [2m○ 默认 - Lithe Admin[0m[0m
[90m│[39m  [95m● 精简 - Lithe Admin Lite[0m[2m（不含路由页面，仅有基本的页面结构）[0m
[90m│[39m
[32m◇[39m  [92m下载完成 [1s][0m
[90m│[39m
[90m└[39m  后续步骤

   [93mcd my-lithe-admin[0m
   [93mpnpm install[0m
   [93mpnpm run dev[0m
```

::: tip 提示

下载模版过程中，可能因网络原因出现失败提示，`create-lithe` 会进行自动重试。<br/>如果多次失败，可以在 [仓库](https://github.com/tenianon/lithe-admin) 中进行代码拉取。

:::

## 安装依赖 {#install-dependencies}

使用 `pnpm`、`npm`、`yarn` 或 `bun` 安装项目依赖。

::: code-group

```shell [pnpm]
pnpm install
```

```shell [npm]
npm install
```

```shell [yarn]
yarn install
```

```shell [bun]
bun install
```

:::

如果你使用了代理，可以在命令后面添加临时的代理地址 `--proxy http://代理地址:端口`，这或许会加快项目依赖的安装。

::: code-group

```shell [pnpm]
pnpm install --proxy http://127.0.0.1:8888
```

```shell [npm]
npm install --proxy http://127.0.0.1:8888
```

```shell [yarn]
yarn install --proxy http://127.0.0.1:8888
```

```shell [bun]
bun install --proxy http://127.0.0.1:8888
```

:::

## 启动项目 {#start-project}

::: code-group

```shell [pnpm]
pnpm dev
```

```shell [npm]
npm dev
```

```shell [yarn]
yarn dev
```

```shell [bun]
bun dev
```

:::

之后就可以在终端中的**Local**地址上访问项目了。
