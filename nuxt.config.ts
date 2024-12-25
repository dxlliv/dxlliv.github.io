const path = require('path');

export default defineNuxtConfig({
  ssr: true,

  srcDir: './src',

  app: {
      head: {
          htmlAttrs: {
              translate: 'no',
              class: 'notranslate'
          },
          title: 'Your No Label Developer',
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
              { name: 'mobile-web-app-capable', content: 'yes' },
              { name: 'mobile-web-app-status-bar-style', content: 'black-translucent' },
              { name: 'theme-color', content: '#000' },
              { hid: 'fragment', name: 'fragment', content: '!' },
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: 'https://dxlliv.github.io/favicon.ico' },
              { rel: 'preload', type: 'font/woff2', href: '/fonts/minimal.woff2', as: 'font' },
          ],
      },
      buildAssetsDir: 'assets/',
      cdnURL: 'https://dxlliv.github.io',
  },

  css: [
      '@mdi/font/css/materialdesignicons.css',
  ],

  components: [
      {
          path: '~/components',
          pathPrefix: false,
      },
  ],

  modules: [
      '@nuxtjs/i18n',
      '@nuxt/fonts',
      '@pinia/nuxt',
  ],

  imports: {
      dirs: ['composables', 'stores','utils']
  },

  build: {
      transpile: ['vuetify'],
  },

  i18n: {
      customRoutes: 'config',
      detectBrowserLanguage: {
          useCookie: true
      },
  },

  vue: {
      compilerOptions: {
          isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
      },
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: 'modern-compiler' // or "modern"
              }
          }
      },
  },

  nitro: {
      output: {
          publicDir: path.join(__dirname, 'docs')
      }
  },

  compatibilityDate: '2024-09-27',
})