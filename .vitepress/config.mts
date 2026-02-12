import { localeConfig as zhLocale } from '../content/zh/locale'
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import shikiDarkTheme from './theme/shiki/dark/shimmer-theme-dark-neutral-block.json'
import { codeGroupMdPlugin } from './plugins/markdown-it/code-group'
import { codeBlockTitleMdPlugin } from './plugins/markdown-it/code-block-title'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'content',
  title: 'Lithe Admin Docs',
  // description: "A Lithe Admin Docs",
  cleanUrls: true,
  locales: {
    root: {
      ...zhLocale,
      link: '/'
    },
    en: {
      lang: 'en',
      label: 'English',
      link: '/en/',
    },
  },
  rewrites: {
    'zh/:page*': ':page*'
  },
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: shikiDarkTheme as any,
    },
    config(md) {
      md.use(codeGroupMdPlugin)
      md.use(codeBlockTitleMdPlugin)
    },
  },
  vite: {
    server: {
      port: 8799,
      host: true,
    },
    plugins: [tailwindcss()],
  },
})
