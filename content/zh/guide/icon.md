---
outline: [2, 5]
---

# 图标

Lithe Admin 使用的是 [Iconify](https://iconify.design/) 的开源图标集，有超过 200,000 个图标可供选择。

## 使用方式

### 动态图标

使用 `Icon` 组件，通过 `icon` 属性使用图标，写法 `图标集前缀:图标名`，例如 `ph:check`，详情参考 [Iconify for Vue](https://iconify.design/docs/icon-components/vue/)。

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
使用动态图标时，在页面加载的时候**图标**出现**短暂闪烁**是**乐观**的情况。
:::

### 静态图标

通过 `class` 类名使用静态图标，写法 `icon-[图标集前缀--图标名]` 或 `iconify 图标集前缀--图标名`，例如 `icon-[ph--sun]` 或 `iconify ph--sun`，详情参考 [Iconify for Tailwind CSS 4](https://iconify.design/docs/usage/css/tailwind/tailwind4/)。

```vue
<template>
  <span class="icon-[ph--sun]" />
  <span class="iconify ph--sun" />
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
安装**全部图标集**大约需要 **500MB** 的图标数据，虽然在**构建项目**的时候是图标是**按需生成**的，但不建议安装**全部图标集**。
:::

#### 配置 `prefixes`

使用 `iconify` 类名时，需要在 `src/assets/main.css` 中为插件配置 `prefixes` 属性。多个图标集前缀使用逗号分隔，例如 `prefixes: ph, ep, ant-design;`。

```css [src/assets/main.css]
@plugin '@iconify/tailwind4' {
  /* 多个图标集前缀用逗号分隔 */
  /* prefixes: ph, ep, ant-design; */
  prefixes: ph;
  scale: 1.2;
}
```

使用静态图标时，建议使用 `iconify 图标集前缀--图标名` 的写法。`iconify` 类名提供了图标的通用样式，在构建时可以减少大量重复的 CSS 样式。下面示例展示了这两种写法生成的 CSS 样式对比。

::: code-group

```css {iconify ph--sun}
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

.ph--sun {
  --svg: url('data:image/svg+xml');
}
```

```css {icon-[ph--sun]}
.icon-\[ph--sun\] {
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

> 静态图标通过 CSS 样式的 `svg` 图标数据渲染，基于 `@iconify/tailwind4` Tailwind CSS 插件，在 Tailwind CSS 扫描 `class` 类名时，会将命中的**图标类名**生成为对应的 CSS 样式。
>
> 与**动态图标**的区别是，在加载页面的时候**不会出现图标闪烁**的问题。
