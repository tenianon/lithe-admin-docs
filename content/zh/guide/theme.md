# 主题定制

Lithe Admin 提供了强大而灵活的主题系统，支持亮色/暗色模式切换和深度定制。

## 主题架构

主题系统采用三层架构：

1. **基础主题** - 定义亮色/暗色模式的基础样式
2. **通用覆盖** - 跨模式共享的样式覆盖
3. **组件覆盖** - 特定上下文的组件样式

## 主题模式

### 切换主题模式

支持三种主题模式：

- **light** - 亮色模式
- **dark** - 暗色模式
- **auto** - 跟随系统

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 切换到暗色模式
preferences.colorMode = 'dark'

// 切换到亮色模式
preferences.colorMode = 'light'

// 跟随系统
preferences.colorMode = 'auto'
```

### 在组件中使用

```vue
<script setup lang="ts">
import { toRefsPreferencesStore } from '@/stores/preferences'

const { colorMode } = toRefsPreferencesStore()
</script>

<template>
  <div>当前模式: {{ colorMode }}</div>
</template>
```

## 主题色定制

### 修改主题色

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 设置主题色（支持任何有效的颜色值）
preferences.themeColor = '#8e51ff' // 默认紫色
preferences.themeColor = '#1890ff' // 蓝色
preferences.themeColor = '#52c41a' // 绿色
```

### 主题色应用

主题色会自动应用到：

- 主要按钮和链接
- 菜单选中状态
- 进度条和加载动画
- 图表配色方案

## 主题配置文件

### 亮色主题

位置：`src/theme/light.ts`

```typescript
export const lightTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#8e51ff',
    primaryColorHover: '#a06fff',
    // 更多颜色配置...
  },
  // 组件特定覆盖...
}
```

### 暗色主题

位置：`src/theme/dark.ts`

```typescript
export const darkTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#8e51ff',
    primaryColorHover: '#a06fff',
    // 更多颜色配置...
  },
  // 组件特定覆盖...
}
```

### 通用覆盖

位置：`src/theme/common.ts`

定义跨模式共享的样式，如圆角、间距等：

```typescript
export const commonThemeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '8px',
    // 更多通用配置...
  },
}
```

## 使用主题

### useTheme 组合式函数

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, themeOverrides } = useTheme()
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <!-- 你的组件 -->
  </n-config-provider>
</template>
```

### 组件级主题覆盖

使用 `useComponentThemeOverrides` 为特定上下文定制主题：

```typescript
import { useComponentThemeOverrides } from '@/composables/useComponentThemeOverrides'

const { scrollbarThemeOverrides } = useComponentThemeOverrides()

// 在不同布局中使用不同的滚动条样式
```

## 视觉效果

### 噪点效果

添加微妙的噪点纹理，增强视觉层次：

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 启用噪点效果
preferences.noise.show = true

// 调整不透明度（0-100）
preferences.noise.opacity = 20
```

### 水印

为页面添加水印保护：

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 启用水印
preferences.watermark.show = true

// 配置水印
preferences.watermark.content = 'Lithe Admin'
preferences.watermark.fontColor = 'rgba(0, 0, 0, 0.15)'
preferences.watermark.fontSize = 16
```

水印支持的配置项：

| 属性        | 类型      | 默认值               | 说明         |
| ----------- | --------- | -------------------- | ------------ |
| `show`      | `boolean` | `false`              | 是否显示水印 |
| `content`   | `string`  | `'Lithe Admin'`      | 水印内容     |
| `fontColor` | `string`  | `'rgba(0,0,0,0.15)'` | 字体颜色     |
| `fontSize`  | `number`  | `16`                 | 字体大小     |
| `width`     | `number`  | `384`                | 水印宽度     |
| `height`    | `number`  | `384`                | 水印高度     |
| `xOffset`   | `number`  | `12`                 | 水平偏移     |
| `yOffset`   | `number`  | `60`                 | 垂直偏移     |
| `rotate`    | `number`  | `-15`                | 旋转角度     |

## 颜色工具

### 使用 Chroma.js

项目内置 `chroma-js` 用于颜色处理：

```typescript
import { twColors } from '@/utils/chromaHelper'

// 获取 TailwindCSS 颜色值
const blue500 = twColors('blue', 500)

// 颜色操作
import chroma from 'chroma-js'

const color = chroma('#8e51ff')
const lighter = color.brighten(1).hex()
const darker = color.darken(1).hex()
```

## TailwindCSS 集成

### 使用 TailwindCSS 类

```vue
<template>
  <div class="rounded-lg bg-primary-500 p-4 text-white">主题色背景</div>
</template>
```

### 动态主题色

TailwindCSS 配置支持动态主题色：

```typescript
// tailwind.config.ts 中配置
theme: {
  extend: {
    colors: {
      primary: {
        // 基于主题色生成色阶
      }
    }
  }
}
```

## 最佳实践

1. **使用主题变量** - 避免硬编码颜色值，使用主题系统提供的颜色
2. **保持一致性** - 在亮色和暗色模式中保持相同的视觉层次
3. **测试两种模式** - 确保在两种模式下都有良好的可读性
4. **适度定制** - 过度定制可能导致维护困难

## 示例：自定义主题

```typescript
// 创建自定义主题配置
import type { GlobalThemeOverrides } from 'naive-ui'

export const customTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1890ff',
    primaryColorHover: '#40a9ff',
    primaryColorPressed: '#096dd9',
    borderRadius: '4px',
  },
  Button: {
    borderRadiusMedium: '4px',
    fontSizeMedium: '14px',
  },
  Card: {
    borderRadius: '8px',
  },
}

// 在应用中使用
import { useTheme } from '@/composables/useTheme'

const { themeOverrides } = useTheme()
Object.assign(themeOverrides.value, customTheme)
```
