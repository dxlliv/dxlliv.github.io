import {messages} from "./src/locales"

export default defineI18nConfig(() => {
    return {
        legacy: false,
        warnHtmlMessage: false,
        locale: 'en',
        messages
    }
})