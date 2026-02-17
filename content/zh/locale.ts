import type { LocaleConfig } from 'vitepress'

export const localeConfig: LocaleConfig[string] = {
  lang: 'zh',
  label: '简体中文',
  themeConfig: {
    lastUpdatedText: '最后编辑时间',
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '指南', link: '/guide/getting-started', activeMatch: '^/guide/' },
      { text: '指南-旧版', link: '/guide-old/getting-started', activeMatch: '^/guide-old/' },
      { text: '演示地址', link: 'https://lithe-admin.havenovelgod.com', target: '_blank' },
      { text: '赞助', link: '/sponsor' },
    ],
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '指南',
            items: [
              { text: 'Lithe Admin 介绍', link: 'introduction' },
              { text: '快速开始', link: 'getting-started' },
            ],
          },
          {
            text: '配置',
            items: [{ text: '菜单路由', link: 'menu-route' }],
          },
        ],
      },
      '/guide-old/': {
        base: '/guide-old/',
        items: [
          {
            text: '指南',
            items: [
              { text: 'Lithe Admin 介绍', link: 'lithe-admin-introduce' },
              { text: '快速开始', link: 'getting-started' },
              { text: '项目结构', link: 'directory-structure' },
            ],
          },
          {
            text: '配置',
            items: [
              { text: '菜单路由', link: 'menu-route' },
              { text: '主题', link: 'theme' },
            ],
          },
        ],
      },
    },
    outline: {
      label: '页面目录',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
}
