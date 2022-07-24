import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vue 3D Mockup',
  description: '📱 A 3D phone mockup component to showcase your apps',
  base: '/vue-three-d-mockup/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Github', link: 'https://github.com/anatolykopyl/vue-three-d-mockup' }
    ],
    footer: {
      message: 'Released under the GPL-3.0 license.',
    }
  }
})
