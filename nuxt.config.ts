const path = require('path');

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    ssr: true,

    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
                {name: 'mobile-web-app-capable', content: 'yes'},
                {name: 'mobile-web-app-status-bar-style', content: 'black-translucent'},
                {name: 'theme-color', content: '#000'},
                {hid: 'fragment', name: 'fragment', content: '!'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: import.meta.env.NUXT_PUBLIC_CDN + '/favicon.ico'},
                {rel: 'preload', type: 'font/woff2', href: '/fonts/minimal.woff2', as: 'font'},
                { rel: 'canonical', href: 'https://dxlliv.dev'}
            ],
        },
        buildAssetsDir: 'assets/',
        cdnURL: import.meta.env.NUXT_PUBLIC_CDN,
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    modules: [
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@pinia/nuxt',
    ],

    imports: {
        dirs: ['composables', 'models', 'stores', 'utils']
    },

    i18n: {
        locales: ['en', 'it'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        },
        compilation: {
            strictMessage: false,
        },
    },

    build: {
        transpile: ['vuetify'],
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

    devtools: {
        enabled: false,
    },

    compatibilityDate: '2024-12-27',
})