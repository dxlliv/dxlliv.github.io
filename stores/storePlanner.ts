export const usePlannerStore = defineStore('planner', () => {
    const imageSelectorCenter = ref(false)
    const imageSrc = ref('')

    return {
        imageSrc,
        imageSelectorCenter,
    }
})

