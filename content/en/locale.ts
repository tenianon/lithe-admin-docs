import type { LocaleConfig } from 'vitepress'

export const localeConfig: LocaleConfig[string] = {
  lang: 'en',
  label: 'English',
  themeConfig: {
    lastUpdatedText: 'Last Updated',
    editLinkText: 'Edit on GitHub',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      { text: 'Demo', link: 'https://lithe-admin.vercel.app', target: '_blank' },
    ],
    sidebar: {},
    outline: {
      label: 'Page Outline',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
}
