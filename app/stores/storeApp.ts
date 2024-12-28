import mitt from "mitt";

export const useAppStore = defineStore('app', () => {
    const emitter = mitt()

    return {
        emitter
    }
})