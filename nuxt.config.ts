
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/app.css','~/assets/fonts/icons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },



  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl'
      },
      title: 'Seller Dashboard',
      meta: [
        { name: 'description', content: 'Seller Dashboard' }
      ],
      bodyAttrs: {
        class: 'font-fa'
      },
    }
    
    
  },

})
