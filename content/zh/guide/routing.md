# 路由和菜单

Lithe Admin 采用动态路由系统，支持基于权限的路由注册和菜单生成。

## 路由系统架构

路由系统采用两阶段加载策略：

### 1. 静态路由

静态路由在应用初始化时注册，包括：

- `/sign-in` - 登录页
- `/not-found-page-404` - 404 错误页

这些路由无需认证即可访问。

### 2. 动态路由

动态路由在用户登录后根据权限动态注册，通过 `router.addRoute()` 方法添加到路由表中。

## 路由配置

路由定义位于 `src/router/record.ts`，使用字符串形式的组件路径：

```typescript
export const routeRecordRaw: CustomRouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'dashboard/index',
    meta: {
      title: '仪表盘',
      icon: 'fluent--data-area-32-regular',
      componentName: 'Dashboard',
      showTab: true,
    },
  },
  // 更多路由...
]
```

## 路由元信息

路由支持丰富的元信息配置：

| 属性             | 类型                           | 说明                 |
| ---------------- | ------------------------------ | -------------------- |
| `title`          | `string \| (() => VNodeChild)` | 页面标题             |
| `icon`           | `string \| (() => VNodeChild)` | 菜单图标             |
| `componentName`  | `string`                       | 组件唯一标识符       |
| `showTab`        | `boolean`                      | 是否在标签栏显示     |
| `pinned`         | `boolean`                      | 固定标签（不可关闭） |
| `enableMultiTab` | `boolean`                      | 允许多个实例         |
| `keepAlive`      | `boolean`                      | 缓存组件             |
| `renderTabTitle` | `(params) => string`           | 动态标签标题渲染函数 |

### 示例：固定标签

```typescript
{
  path: '/dashboard',
  name: 'dashboard',
  component: 'dashboard/index',
  meta: {
    title: '仪表盘',
    showTab: true,
    pinned: true, // 标签不可关闭
  },
}
```

### 示例：多标签页

```typescript
{
  path: '/dynamic-route/:id?/:name?',
  name: 'dynamicRoute',
  component: 'dynamic-route/index',
  meta: {
    title: '动态路由',
    enableMultiTab: true, // 允许打开多个实例
    renderTabTitle: (params) => {
      return `动态路由 ${params.id || ''}`
    },
  },
}
```

## 多级菜单

支持多级嵌套菜单结构：

```typescript
{
  path: '/multi-level-menu',
  name: 'multiLevelMenu',
  meta: {
    title: '多级菜单',
    icon: 'fluent--folder-32-regular',
  },
  children: [
    {
      path: 'level-1',
      name: 'multiLevelMenuLevel1',
      meta: {
        title: '菜单 1-1',
      },
      children: [
        {
          path: 'level-2',
          name: 'multiLevelMenuLevel1Level2',
          component: 'multi-level-menu/index',
          meta: {
            title: '菜单 1-1-1',
          },
        },
      ],
    },
  ],
}
```

## 权限控制

路由守卫（`src/router/guard.ts`）实现权限控制逻辑：

```typescript
// 示例：基于 token 的权限过滤
if (token.value?.includes('admin')) {
  // 管理员拥有全部路由权限
  resolve(routeRecordRaw)
} else {
  // 普通用户只能访问部分路由
  const allowedRoutes = ['dashboard', 'dataShow', 'notfoundPage', 'about']
  // 过滤路由...
}
```

## 路由守卫流程

1. 检查是否存在 token
2. 如果无 token，重定向到登录页
3. 如果有 token 但未加载布局路由，解析菜单路由
4. 动态添加路由到路由表
5. 继续导航

## 导航模式

支持两种导航模式，可在偏好设置中切换：

### 侧边栏模式（默认）

- 左侧显示菜单
- 顶部显示面包屑导航
- 适合多级菜单结构

### 水平模式

- 顶部显示菜单
- 适合扁平化菜单结构

切换方式：

```typescript
import { usePreferencesStore } from '@/stores/preferences'

const preferences = usePreferencesStore()
preferences.navigationMode = 'horizontal' // 或 'sidebar'
```

## 页面组件

页面组件位于 `src/views/` 目录，按功能模块组织：

```
views/
├── dashboard/           # 仪表盘
├── data-show/          # 数据展示
│   ├── data-table/     # 数据表格
│   └── data-form/      # 数据表单
├── drag-drop/          # 拖拽功能
├── feedback/           # 反馈组件
├── dynamic-route/      # 动态路由
├── multi-level-menu/   # 多级菜单
├── about/              # 关于页面
└── sign-in/            # 登录页面
```

## 添加新路由

1. 在 `src/views/` 创建页面组件
2. 在 `src/router/record.ts` 添加路由配置
3. 路由会在用户登录后自动注册

```typescript
// 1. 创建页面组件 src/views/my-page/index.vue
// 2. 添加路由配置
{
  path: '/my-page',
  name: 'myPage',
  component: 'my-page/index',
  meta: {
    title: '我的页面',
    icon: 'fluent--document-32-regular',
    componentName: 'MyPage',
    showTab: true,
  },
}
```
