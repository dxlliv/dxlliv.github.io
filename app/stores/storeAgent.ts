export const useAgentStore = defineStore('agent', () => {
    const agent: Ref<any | ChatManager> = ref(null)
    const text = ref('')

    function initialize(listElement: any, agentBaseURL: string) {
        if (!agent.value) {
            agent.value = new ChatManager(listElement, agentBaseURL)
        }
    }

    return {
        agent,
        text,
        initialize
    }
})