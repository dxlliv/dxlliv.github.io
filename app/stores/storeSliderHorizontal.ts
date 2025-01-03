export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const appStore = useAppStore()
    const instance = ref()

    const swiper = computed(() => {
        return instance.value.swiper
    })

    function initialize() {
        instance.value = document.querySelector('.dx-slider-horizontal')

        const swiperConfig = {
            spaceBetween: 24,
            slidesPerView: 1,
            breakpoints: {
                560: {
                    slidesPerView: 1.5,
                },
                760: {
                    slidesPerView: 2.5,
                },
                1200: {
                    slidesPerView: 3.5,
                },
                1600: {
                    slidesPerView: 4.5,
                },
            },
            pagination: {
                lockClass: 'dx-slider-horizontal__lock',
            },
            on: {
                init() {
                    // ...
                },
                slideChange() {
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
        if (!instance.value) {
            return
        }

        instance.value.swiper.slideTo(index)
    }

    function slideNext() {
        if (!instance.value) {
            return
        }

        instance.value.swiper.slideNext()
    }

    function slideReset() {
        instance.value.swiper.slideReset()
    }

    return {
        instance,
        swiper,
        initialize,
        update,
        slideTo,
        slideNext,
        slideReset,
        lock,
        unlock,
    }
})

