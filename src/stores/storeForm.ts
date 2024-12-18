import {required, maxLength, minLength} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export const useFormStore = defineStore('form', () => {
    const fieldName = ref('')
    const fieldMessage = ref('')

    const href = computed(() => {
        return `mailto:hello@dxlliv.dev?subject=Hi, I'm ${fieldName.value}&message=${fieldMessage.value}`
    })

    const rules = {
        fieldName: {
            required,
            maxLength: maxLength(30)
        },
        fieldMessage: {
            required,
            minLength: minLength(20)
        },
    }

    const $v = useVuelidate(rules, {
        fieldName,
        fieldMessage,
    }, {
        $lazy: true
    })

    function reset() {
        fieldName.value = fieldMessage.value = ""

        $v.value.$reset()
    }

    return {
        rules,
        $v,
        fieldName,
        fieldMessage,
        href,
        reset,
    }
})

