export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const appStore = useAppStore()
    const instance = ref()

    const swiper = computed(() => {
        return instance.value.swiper
    })

    function initialize() {
        instance.value = document.querySelector('.dx-slider-horizontal')

        const swiperConfig = {
            spaceBetween: 0,
            slidesPerView: 1,
            breakpoints: {
                560: {
                    slidesPerView: 1.5,
                },
                800: {
                    slidesPerView: 2.5,
                },
                1300: {
                    slidesPerView: 3.5,
                },
                1600: {
                    slidesPerView: 4.5,
                },
            },
            mousewheel: true,
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

        Object.assign(instance.value, swiperConfig)

        instance.value.initialize()
    }

    function destroy() {
        instance.value.swiper.destroy(true, true)
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

    function slidePrev() {
        if (!instance.value) {
            return
        }

        instance.value.swiper.slidePrev()
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
        destroy,
        update,
        slideTo,
        slidePrev,
        slideNext,
        slideReset,
        lock,
        unlock,
    }
})

