export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
                { name: 'theme-color', content: '#fefefe' },
                {
                    hid: 'fragment',
                    name: 'fragment',
                    content: '!'
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
        buildAssetsDir: 'assets/',
    },
    css: [
        "@fontsource/quicksand",
        "@fontsource/quicksand/400.css",
        '@mdi/font/css/materialdesignicons.css',
        '~/assets/styles/index.scss',
    ],
    modules: [
        '@nuxtjs/i18n'
    ],
    imports: {
        dirs: ['stores','utils']
    },
    build: {
        transpile: ['vuetify'],
    },
    i18n: {
        customRoutes: 'config',
        detectBrowserLanguage: {
            useCookie: true
        },
    }
})
