import messages from "./locales"

export default defineI18nConfig(() => {
    return {
        legacy: false,
        warnHtmlMessage: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages,
    }
})