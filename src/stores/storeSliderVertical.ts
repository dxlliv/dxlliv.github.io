import {Mousewheel} from "swiper/modules";
import {useDisplay} from "vuetify";

export const useSliderVerticalStore = defineStore('slider/vertical', () => {
    const display = useDisplay()
    const instance = ref()

    const swiper = computed(() => {
        return instance.value?.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)

    function initialize(page: string, initialSlide: number) {
        instance.value = document.querySelector('.dx-slider-vertical')

        const swiperConfig = {
            initialSlide: initialSlide,
            direction: 'vertical',
            modules: [Mousewheel],
            mousewheelForceToAxis: true,
            mousewheel: {
                enabled: true
            },
            on: {
                slideChange(swiper) {
                    const sliderHorizontalStore = useSliderHorizontalStore()

                    if (display.lgAndUp.value) {
                        switch(swiper.activeIndex) {
                            case 1:
                                sliderHorizontalStore.slideTo(1)
                                break
                            default:
                                sliderHorizontalStore.slideTo(0)
                                break
                        }
                    }
                },
            },
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

