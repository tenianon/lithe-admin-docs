import type { LocaleConfig } from 'vitepress'

export const localeConfig: LocaleConfig[string] = {
  lang: 'en',
  label: 'English',
  themeConfig: {
    lastUpdatedText: 'Last Updated',
    editLinkText: 'Edit on GitHub',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      { text: 'Guide-Old', link: '/guide-old/getting-started', activeMatch: '^/guide-old/' },
      { text: 'Demo', link: 'https://lithe-admin.havenovelgod.com', target: '_blank' },
      { text: 'Sponsor', link: '/sponsor' },
    ],
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: 'Guide',
            items: [
              { text: 'Lithe Admin Introduction', link: 'introduction' },
              { text: 'Getting Started', link: 'getting-started' },
            ],
          },
          {
            text: 'Configuration',
            items: [{ text: 'Menu Route', link: 'menu-route' }],
          },
        ],
      },
      '/guide-old/': {
        base: '/guide-old/',
        items: [
          {
            text: 'Guide',
            items: [
              { text: 'Lithe Admin Introduction', link: 'lithe-admin-introduce' },
              { text: 'Getting Started', link: 'getting-started' },
              { text: 'Directory Structure', link: 'directory-structure' },
            ],
          },
          {
            text: 'Configuration',
            items: [
              { text: 'Menu Route', link: 'menu-route' },
              { text: 'Theme', link: 'theme' },
            ],
          },
        ],
      },
    },
    outline: {
      label: 'Page Outline',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
}
