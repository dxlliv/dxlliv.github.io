import messages from "./locales"

export default defineI18nConfig(() => {
    return {
        warnHtmlMessage: false,
        locale: 'en',
        messages,
    }
})