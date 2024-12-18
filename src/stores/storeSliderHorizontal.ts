import {defineStore} from "pinia";

export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)

    function initialize() {
        instance.value = document.querySelector('.dx-slider-horizontal')

        const swiperConfig = {
            spaceBetween: 24,
            slidesPerView: 1,
            breakpoints: {
                1280: {
                    slidesPerView: 1.5,
                },
            },
            on: {
                init() {
                    // ...
                },
            },
        }

        instance.value.addEventListener('swiperslidechange', () => {
            swiperIsBeginning.value = instance.value.swiper.isBeginning
            swiperIsEnd.value = instance.value.swiper.isEnd
        });

        Object.assign(instance.value, swiperConfig);

        instance.value.initialize()
    }

    function update() {
        swiper.value.update()
    }

    function slideToMainColumn() {
        instance.value.swiper.slideTo(0)
    }

    function slideTo(index) {
        instance.value.swiper.slideTo(index)
    }

    return {
        instance,
        swiper,
        swiperIsBeginning,
        swiperIsEnd,
        initialize,
        update,
        slideToMainColumn,
        slideTo,
    }
})

