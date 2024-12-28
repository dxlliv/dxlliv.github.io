export const useProjectPlannerStore = defineStore('project/planner', () => {
    const imageSelectorCenter = ref(false)
    const imageSrc = ref('')

    return {
        imageSrc,
        imageSelectorCenter,
    }
})
