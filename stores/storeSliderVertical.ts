import {Mousewheel} from "swiper/modules";

export const useSliderVerticalStore = defineStore('slider/vertical', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value?.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)

    function initialize(page: string, initialSlide: number) {
        instance.value = document.querySelector('.dxlliv-slider-vertical')

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

        /*
        instance.value.addEventListener('slidechange', function (swiper) {
            if (page === 'index') {
                if (window.innerWidth > 1279 && instance.value.swiper && instance.value.swiper.previousIndex === 0 && instance.value.swiper.activeIndex === 1) {
                    instance.value.swiper.slideTo(2, 500)
                }
            }
        });
        */

        instance.value.initialize()
    }

    return {
        instance,
        swiper,
        swiperIsBeginning,
        swiperIsEnd,
        initialize,
    }
})

