import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const dxlliv = {
    dark: false,
    colors: {
        background: '#000000',
        onSurface: '#FFFFFF',
        primary: '#EAEAEA',
    },
}

export default defineNuxtPlugin({
    async setup(nuxtApp) {
        nuxtApp.vueApp.use(
            createVuetify({
                ssr: true,
                components,
                directives,
                icons: {
                    defaultSet: "mdi",
                    aliases,
                    sets: {
                        mdi,
                    },
                },
                theme: {
                    defaultTheme: 'dxlliv',
                    themes: {
                        dxlliv,
                    },
                },
            }),
        )
    }
})