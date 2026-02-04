# 布局配置

Lithe Admin 提供了灵活的布局系统，支持多种导航模式和丰富的配置选项。

## 布局结构

布局由以下几个主要部分组成：

```
┌─────────────────────────────────────┐
│           Header（顶栏）             │
├──────┬──────────────────────────────┤
│      │         Tabs（标签栏）        │
│ Aside├──────────────────────────────┤
│(侧边栏)│                              │
│      │         Main（内容区）        │
│      │                              │
├──────┴──────────────────────────────┤
│          Footer（底栏）              │
└─────────────────────────────────────┘
```

## 导航模式

### 侧边栏模式（默认）

左侧显示菜单，顶部显示面包屑导航。

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()
preferences.navigationMode = 'sidebar'
```

### 水平模式

顶部显示菜单，适合扁平化菜单结构。

```typescript
preferences.navigationMode = 'horizontal'
```

## 侧边栏配置

### 折叠/展开

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 折叠侧边栏
preferences.sidebarMenu.collapsed = true

// 展开侧边栏
preferences.sidebarMenu.collapsed = false
```

### 宽度设置

```typescript
// 侧边栏宽度配置
preferences.sidebarMenu.width = 256 // 默认宽度
preferences.sidebarMenu.minWidth = 64 // 最小宽度（折叠时）
preferences.sidebarMenu.maxWidth = 456 // 最大宽度
preferences.sidebarMenu.mobileWidth = 256 // 移动端宽度
```

## 标签栏配置

### 显示/隐藏标签栏

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 显示标签栏
preferences.tabs.show = true

// 隐藏标签栏
preferences.tabs.show = false
```

### 标签栏选项

```typescript
// 显示关闭按钮
preferences.tabs.showTabClose = true

// 标签边框位置
preferences.tabs.tabBorderPosition = 'top' // 或 'bottom'
```

## 面包屑配置

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 显示面包屑
preferences.breadcrumb.show = true

// 启用过渡动画
preferences.breadcrumb.enableTransition = true
```

## 其他布局选项

### Logo 显示

```typescript
// 显示/隐藏 Logo
preferences.showLogo = true
```

### 底栏显示

```typescript
// 显示/隐藏底栏
preferences.showFooter = true
```

### 导航按钮

```typescript
// 显示/隐藏导航按钮（移动端菜单按钮）
preferences.showNavigationButton = true
```

## 页面过渡动画

### 顶部加载条

```typescript
// 启用顶部加载条
preferences.showTopLoadingBar = true
```

### 页面切换动画

```typescript
// 启用页面切换动画
preferences.navigationTransition.enable = true

// 设置动画效果
preferences.navigationTransition.effect = 'fade'
// 可选值：'slider' | 'scale' | 'fade' | 'fade-left' | 'fade-right'
```

## 移动端适配

布局系统自动适配移动端，提供专门的移动端组件：

- `MobileHeader` - 移动端顶栏
- `MobileLeftAside` - 移动端左侧抽屉（菜单）
- `MobileRightAside` - 移动端右侧抽屉（设置）

移动端会自动：

- 隐藏侧边栏，使用抽屉式菜单
- 调整标签栏样式
- 优化触摸交互

## 完整配置示例

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()

// 配置布局
preferences.navigationMode = 'sidebar'
preferences.sidebarMenu.collapsed = false
preferences.sidebarMenu.width = 256

// 配置 UI 元素
preferences.showLogo = true
preferences.showFooter = true
preferences.tabs.show = true
preferences.tabs.showTabClose = true
preferences.breadcrumb.show = true

// 配置动画
preferences.showTopLoadingBar = true
preferences.navigationTransition.enable = true
preferences.navigationTransition.effect = 'fade'
```

## 布局组件

### 自定义 Header

位置：`src/layout/header/`

包含：

- Logo 组件
- 导航组件（面包屑或水平菜单）
- 操作按钮（主题切换、全屏、用户菜单等）

### 自定义 Aside

位置：`src/layout/aside/`

包含：

- 菜单组件
- 用户面板

### 自定义 Footer

位置：`src/layout/footer/`

可以在此添加版权信息、链接等。

## 响应式断点

布局使用以下响应式断点：

| 断点  | 宽度        | 说明     |
| ----- | ----------- | -------- |
| `xs`  | `< 640px`   | 手机     |
| `sm`  | `>= 640px`  | 平板竖屏 |
| `md`  | `>= 768px`  | 平板横屏 |
| `lg`  | `>= 1024px` | 笔记本   |
| `xl`  | `>= 1280px` | 桌面     |
| `2xl` | `>= 1536px` | 大屏     |

## 最佳实践

1. **移动优先** - 优先考虑移动端体验
2. **保持简洁** - 避免过多的 UI 元素
3. **一致性** - 保持布局在不同页面的一致性
4. **性能优化** - 合理使用过渡动画，避免影响性能
