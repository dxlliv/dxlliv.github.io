import {Mousewheel} from "swiper/modules";

export const useSliderVerticalStore = defineStore('slider/vertical', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value?.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)

    function initialize(page: string, initialSlide: number) {
        instance.value = document.querySelector('.dx-slider-vertical')

        const swiperConfig = {
            modules: [Mousewheel],
            initialSlide: initialSlide,
            direction: 'vertical',
            mousewheelForceToAxis: true,
            mousewheel: {
                enabled: true
            }
        }

        Object.assign(instance.value, swiperConfig);

        instance.value.initialize()
    }

    function slideToPlannerImage() {
        instance.value.swiper.slideTo(1)
    }

    return {
        instance,
        swiper,
        swiperIsBeginning,
        swiperIsEnd,
        initialize,
        slideToPlannerImage,
    }
})

