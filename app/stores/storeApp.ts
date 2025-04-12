import mitt from "mitt";

export const useAppStore = defineStore('app', () => {
    const emitter = mitt()
    const splash = ref(true)

    return {
        emitter,
        splash,
    }
})