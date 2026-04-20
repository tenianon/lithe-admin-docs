---
outline: [2, 5]
---

# 图标

Lithe Admin 使用的是 [Iconify](https://iconify.design/) 的开源图标集，有超过 200,000 个图标可供选择。

## 使用方式

### 动态图标

使用 `Icon` 组件，通过 `icon` 属性使用图标，写法 `图标集前缀:图标名`，例如 `ph:check`，更多使用方式参考 [Iconify for Vue](https://iconify.design/docs/icon-components/vue/)

```vue
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="ph:check" />
</template>
```

> `Icon` 组件会将图标渲染为 `SVG` 元素。首次渲染时会通过网络请求获取图标数据，并在本地进行缓存；后续刷新页面时，将优先复用已缓存的图标数据。

::: tip 提示
在弱网环境下，`Icon` 组件可能加载失败；在首次渲染或页面刷新时，出现短暂闪烁是**乐观**的情况。
:::

### 静态图标

通过 `class` 类名使用静态图标，写法 `icon-[图标集前缀--图标名]` 或 `iconify 图标集前缀--图标名`，例如 `icon-[ph--check]` 或 `iconify ph--check`，更多使用方式参考 [Iconify for Tailwind CSS 4](https://iconify.design/docs/usage/css/tailwind/tailwind4/)。

```vue
<template>
  <span class="iconify ph--check" />
  <span class="icon-[ph--check]" />
</template>
```

Lithe Admin 默认使用 [Phosphor Icons](https://icon-sets.iconify.design/ph/?keyword=ph) 作为图标集，并安装了 `@iconify-json/ph` 图标数据包。如需安装其他图标或全部图标集可以使用以下命令。

::: code-group

```sh [pnpm]
# 安装 Element Plus 图标集
$ pnpm add @iconify-json/ep

# 安装 Ant Design 图标集
$ pnpm add @iconify-json/ant-design

# 安装全部图标集
$ pnpm add @iconify/json
```

```sh [npm]
# 安装 Element Plus 图标集
$ npm add @iconify-json/ep

# 安装 Ant Design 图标集
$ npm add @iconify-json/ant-design

# 安装全部图标集
$ npm add @iconify/json
```

```sh [yarn]
# 安装 Element Plus 图标集
$ yarn add @iconify-json/ep

# 安装 Ant Design 图标集
$ yarn add @iconify-json/ant-design

# 安装全部图标集
$ yarn add @iconify/json
```

```sh [bun]
# 安装 Element Plus 图标集
$ bun add @iconify-json/ep

# 安装 Ant Design 图标集
$ bun add @iconify-json/ant-design

# 安装全部图标集
$ bun add @iconify/json
```

:::

::: warning 提示
安装全部图标集大约需要 **500MB** 的图标数据，虽然在**构建项目**的时候是图标是**按需生成**的，但是一般不建议安装全部图标集。
:::

使用静态图标时，建议使用 `iconify 图标集前缀--图标名` 写法，这会在构建的时候会减少很多重复的 `css` 样式，以下例子为两种写法所生成的 `css` 样式对比。

::: code-group

```css {iconify 图标集前缀--图标名}
.iconify {
  width: 1.2em;
  height: 1.2em;
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  background-color: currentColor;
  display: inline-block;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.ph--arrow-clockwise {
  --svg: url('data:image/svg+xml');
}

.ph--x {
  --svg: url('data:image/svg+xml');
}
```

```css {icon-[图标集前缀--图标名]}
.icon-\[ph--arrow-clockwise\] {
  width: 1.2em;
  height: 1.2em;
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  --svg: url('data:image/svg+xml');
  background-color: currentColor;
  display: inline-block;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.icon-\[ph--x\] {
  width: 1.2em;
  height: 1.2em;
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  --svg: url('data:image/svg+xml');
  background-color: currentColor;
  display: inline-block;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
```

:::

#### 使用图标前缀

要使用图标前缀，需要在 `src/assets/main.css` 中配置图标前缀 `prefixes`，多个图标集前缀用逗号分隔，例如 `prefixes: ph, ep, ant-design;`。

```css [src/assets/main.css]
@plugin '@iconify/tailwind4' {
  /* 多个图标集前缀用逗号分隔 */
  /* prefixes: ph, ep, ant-design; */
  prefixes: ph;
  scale: 1.2;
}
```

> 静态图标是通过 `css` 样式的图标数据 `base64` 渲染，基于 `@iconify/tailwind4` Tailwind CSS 插件，在 Tailwind 扫描 `class` 类名时，会将命中的样式生成为对应的 `css` 样式。所以在页面刷新后不会出现图标闪烁的问题。
