export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const appStore = useAppStore()
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
                480: {
                    slidesPerView: 1.5,
                },
                800: {
                    slidesPerView: 2.5,
                },
                1200: {
                    slidesPerView: 3.5,
                },
                1600: {
                    slidesPerView: 4.5,
                },
            },
            on: {
                init() {
                    // ...
                },
                slideChange() {
                    swiperIsBeginning.value = instance.value.swiper.isBeginning
                    swiperIsEnd.value = instance.value.swiper.isEnd

                    appStore.emitter.emit('horizontal-slide-change')
                }
            },
        }

        Object.assign(instance.value, swiperConfig);

        instance.value.initialize()
    }

    function lock() {
        instance.value.swiper.disable()
    }

    function unlock() {
        instance.value.swiper.enable()
    }

    function update() {
        instance.value.swiper.update()
    }

    function slideTo(index: number) {
        instance.value.swiper.slideTo(index)
    }

    function slideNext() {
        instance.value.swiper.slideNext()
    }

    function slideReset() {
        instance.value.swiper.slideReset()
    }

    return {
        instance,
        swiper,
        swiperIsBeginning,
        swiperIsEnd,
        initialize,
        update,
        slideTo,
        slideNext,
        slideReset,
        lock,
        unlock,
    }
})

