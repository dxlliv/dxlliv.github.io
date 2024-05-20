export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)
    const swiperMobileRounded = ref(false)

    function initialize() {
        instance.value = document.querySelector('.dxlliv-slider-horizontal')

        const swiperConfig = {
            spaceBetween: 24,
            slidesPerView: 1,
            breakpoints: {
                1280: {
                    slidesPerView: 1.50,
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

            swiperMobileRounded.value = !swiperIsBeginning.value
        });

        instance.value.addEventListener('swipertouchstart', () => {
            swiperMobileRounded.value = true
        });

        instance.value.addEventListener('swipertouchend', () => {
            if (swiperIsBeginning.value) {
                swiperMobileRounded.value = false
            }
        });

        Object.assign(instance.value, swiperConfig);

        instance.value.initialize()
    }

    function update() {
        swiper.value.update()
    }

    return {
        instance,
        swiper,
        swiperIsBeginning,
        swiperIsEnd,
        swiperMobileRounded,
        initialize,
        update,
    }
})

