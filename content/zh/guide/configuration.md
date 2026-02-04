# 配置说明

本文档详细介绍 Lithe Admin 的各项配置选项。

## 偏好设置

所有用户偏好设置通过 `PreferencesStore` 管理，并自动持久化到 localStorage。

### 导航配置

#### 导航模式

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 侧边栏模式（默认）
preferences.navigationMode = 'sidebar'

// 水平导航模式
preferences.navigationMode = 'horizontal'
```

#### 侧边栏菜单

```typescript
// 折叠状态
preferences.sidebarMenu.collapsed = false

// 宽度设置
preferences.sidebarMenu.width = 256 // 默认宽度
preferences.sidebarMenu.minWidth = 64 // 最小宽度
preferences.sidebarMenu.maxWidth = 456 // 最大宽度
preferences.sidebarMenu.mobileWidth = 256 // 移动端宽度
```

### UI 元素配置

```typescript
// Logo 显示
preferences.showLogo = true

// 底栏显示
preferences.showFooter = true

// 导航按钮（移动端菜单按钮）
preferences.showNavigationButton = true
```

### 标签栏配置

```typescript
// 显示标签栏
preferences.tabs.show = true

// 显示关闭按钮
preferences.tabs.showTabClose = true

// 标签边框位置
preferences.tabs.tabBorderPosition = 'top' // 'top' | 'bottom'
```

### 面包屑配置

```typescript
// 显示面包屑
preferences.breadcrumb.show = true

// 启用过渡动画
preferences.breadcrumb.enableTransition = true
```

### 过渡动画配置

```typescript
// 顶部加载条
preferences.showTopLoadingBar = true

// 页面切换动画
preferences.navigationTransition.enable = true
preferences.navigationTransition.effect = 'fade'
// 可选值：'slider' | 'scale' | 'fade' | 'fade-left' | 'fade-right'
```

### 主题配置

```typescript
// 主题色
preferences.themeColor = '#8e51ff'

// 主题模式
preferences.colorMode = 'auto' // 'light' | 'dark' | 'auto'
```

### 文本选择

```typescript
// 启用文本选择
preferences.enableTextSelect = true
```

### 水印配置

```typescript
// 启用水印
preferences.watermark.show = true

// 水印内容
preferences.watermark.content = 'Lithe Admin'

// 字体颜色
preferences.watermark.fontColor = 'rgba(0, 0, 0, 0.15)'

// 字体大小
preferences.watermark.fontSize = 16

// 尺寸和位置
preferences.watermark.width = 384
preferences.watermark.height = 384
preferences.watermark.xOffset = 12
preferences.watermark.yOffset = 60

// 旋转角度
preferences.watermark.rotate = -15

// Z-index
preferences.watermark.zIndex = 9999
```

### 噪点效果配置

```typescript
// 启用噪点效果
preferences.noise.show = true

// 不透明度（0-100）
preferences.noise.opacity = 20
```

## 环境变量

创建 `.env` 文件配置环境变量：

```bash
# 应用标题
VITE_APP_TITLE=Lithe Admin

# API 基础 URL
VITE_API_BASE_URL=https://api.example.com

# 是否启用 Mock
VITE_USE_MOCK=false
```

在代码中使用：

```typescript
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const appTitle = import.meta.env.VITE_APP_TITLE
```

## Vite 配置

位置：`vite.config.ts`

### 开发服务器

```typescript
export default defineConfig({
  server: {
    port: 5799,
    host: true,
    open: true,
  },
})
```

### 路径别名

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

### 构建优化

```typescript
export default defineConfig({
  build: {
    // 分包策略
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          'naive-ui': ['naive-ui'],
          vue: ['vue', 'vue-router', 'pinia'],
        },
      },
    },
    // 移除 console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
```

## TypeScript 配置

位置：`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "preserve",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## ESLint 配置

位置：`.eslintrc.cjs`

```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    // 自定义规则
  },
}
```

## Prettier 配置

位置：`.prettierrc.json`

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

## TailwindCSS 配置

位置：`tailwind.config.ts`

```typescript
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // 自定义主题色
        },
      },
    },
  },
  plugins: [],
}
```

## 完整配置示例

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 导航配置
preferences.navigationMode = 'sidebar'
preferences.sidebarMenu.collapsed = false
preferences.sidebarMenu.width = 256

// UI 元素
preferences.showLogo = true
preferences.showFooter = true
preferences.tabs.show = true
preferences.breadcrumb.show = true

// 主题
preferences.themeColor = '#8e51ff'
preferences.colorMode = 'auto'

// 动画
preferences.showTopLoadingBar = true
preferences.navigationTransition.enable = true
preferences.navigationTransition.effect = 'fade'

// 视觉效果
preferences.noise.show = true
preferences.noise.opacity = 20
preferences.watermark.show = false
```

## 重置配置

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 重置所有配置到默认值
preferences.$reset()
```

## 配置持久化

配置自动保存到 localStorage，键名为 `lithe-admin-preferences`。

手动清除：

```typescript
localStorage.removeItem('lithe-admin-preferences')
```
