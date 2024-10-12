// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tools',
      meta: [
        { name: 'Tools', content: 'Sites tools' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/tools.ico' }
      ]
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss']
})