import {required, maxLength, minLength} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export const useFormStore = defineStore('form', () => {
    const fieldMessage = ref('')

    const href = computed(() => {
        return `mailto:hello@dxlliv.dev?message=${fieldMessage.value}`
    })

    const rules = {
        fieldMessage: {
            required,
            minLength: minLength(20)
        },
    }

    const $v = useVuelidate(rules, {
        fieldMessage,
    }, {
        $lazy: true
    })

    function reset() {
        fieldMessage.value = ""

        $v.value.$reset()
    }

    return {
        rules,
        $v,
        fieldMessage,
        href,
        reset,
    }
})

