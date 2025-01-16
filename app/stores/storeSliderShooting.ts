import {Mousewheel, Pagination} from "swiper/modules";

export const useSliderShootingStore = defineStore('slider/shooting', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value?.swiper
    })

    function initialize(page: string, initialSlide: number) {
        instance.value = document.querySelector('.dx-slider-vertical')

        const swiperConfig = {
            modules: [Mousewheel, Pagination],
            initialSlide: initialSlide,
            direction: 'vertical',
            pagination: true,
            mousewheelForceToAxis: true,
            mousewheel: {
                enabled: true
            }
        }

        Object.assign(instance.value, swiperConfig);

        instance.value.initialize()
    }

    function slideTo(index: number) {
        instance.value.swiper.slideTo(index, 1000)
    }

    return {
        instance,
        swiper,
        slideTo,
        initialize,
    }
})

