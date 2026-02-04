---
outline: deep
---

# 菜单和路由

## 菜单配置

在 `src/router/record.ts` 中，使用 `MenuMixedOptions` 类型来进行菜单配置，该类型合并了 `NMenu` 菜单组件的 [menu-props-options](https://www.naiveui.com/zh-CN/dark/components/menu#Menu-Props) 属性数据类型和 vue router 路由的 `RouteRecordRaw` 类型，这样可以一份数据同时配置完整的 `NMenu` 菜单功能和 vue router 的路由配置。

```ts [.vitepress/config.ts]
import type { MenuMixedOptions } from "./helper";

export const routeRecordRaw: MenuMixedOptions[] = [
  {
    path: "dashboard", // 路由路径
    name: "dashboard", // 路由名称
    icon: "icon-[mage--dashboard-chart]", // 菜单图标
    label: "仪表板", // 菜单名称
    key: "dashboard", // 菜单唯一 key，没有则取 name | path
    meta: {
      title: "仪表板", // tab 标题，没有则取外层 label
      icon: "icon-[mage--dashboard-chart]", // tab 图标，没有则取外层 icon
      componentName: "Dashboard", // 组件名称（用于 KeepAlive 缓存）
      pinned: true, // tab 是否固定
      showTab: true, // tab 是否显示
      keepAlive: true, // tab 是否缓存该路由组件
      enableMultiTab: true, // tab 是否允许重复
      renderTabTitle: (params) => {}, // tab 标题渲染，与 enableMultiTab 配合使用
    },
    component: "dashboard/index", // 组件路径（可省略 .vue 后缀）
    disabled: false, // 是否禁用菜单
    show: true, // 是否显示菜单
    children: MenuMixedOptions[], // 子菜单
    // ...
  },
  {
    type: "group", // 菜单 group 组
    key: "group-1", // 唯一 key
    label: "分组", // group 标题
    children: MenuMixedOptions[], // group 组子菜单
  },
  {
    type: "divider", // 菜单 divider 分割线
    key: "divider-1", // 唯一 key
  },
];
```

上面的配置例子中，`meta` 的类型在 `src/types/vue-router.d.ts` 里定义 `RouteMeta` 类型接口的增强。

```ts [src/types/vue-router.d.ts]
import type { VNodeChild } from 'vue'
import type { RouteParamsGeneric } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string | (() => VNodeChild)
    icon?: string | (() => VNodeChild)
    componentName?: string
    pinned?: boolean
    showTab?: boolean
    enableMultiTab?: boolean
    keepAlive?: boolean
    renderTabTitle?: (params: RouteParamsGeneric) => string
  }
}
```

## 路由配置

在 `src/router/index.ts` 中进行路由配置。

```ts
import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/sign-in', // 登录页
    name: 'signIn',
    component: () => import('@/views/sign-in/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 错误地址页
    name: 'errorPage',
    component: () => import('@/views/error-page/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
})

export default router
```

## 路由守卫
