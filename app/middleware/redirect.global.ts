export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const currentHost = window.location.hostname

        // Condizione: dominio giusto + home + nessuna navigazione interna
        if (
            currentHost === 'dxshooting.click' &&
            to.path === '/' &&
            (!from || !from.name) // primo ingresso nell'app
        ) {
            return navigateTo('/storycase/riprese-video-drone-per-airbnb')
        }
    }
})
