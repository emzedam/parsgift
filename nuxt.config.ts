
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/app.css','~/assets/fonts/icons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  runtimeConfig: {
    public: {
      appBaseUrl: 'https://api.suringift.com'
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl'
      },
      title: 'پارسی گیفت',
      meta: [
        { name: 'description', content: 'پارسی گیفت' }
      ],
      bodyAttrs: {
        class: 'font-fa'
      },
    }
  },

})
