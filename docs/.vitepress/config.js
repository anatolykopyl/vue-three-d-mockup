import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vue 3D Mockup',
  description: '📱 A 3D phone mockup component to showcase your apps',
  base: '/vue-three-d-mockup/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Screen from assets', link: '/guide/screen-from-assets' },
          { text: 'Video as screen', link: '/guide/video-as-screen' },
          { text: 'Multiple mockups', link: '/guide/multiple-mockups' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'Props', link: '/guide/props' },
        ]
      }
    ],
    footer: {
      message: 'Released under the GPL-3.0 license.',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/anatolykopyl/vue-three-d-mockup'
      }
    ]
  }
})
