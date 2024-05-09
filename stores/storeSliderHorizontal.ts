export const useSliderHorizontalStore = defineStore('slider/horizontal', () => {
    const instance = ref()

    const swiper = computed(() => {
        return instance.value.swiper
    })

    const swiperIsBeginning = ref(true)
    const swiperIsEnd = ref(false)

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

        instance.value.addEventListener('slidechange', function () {
            swiperIsBeginning.value = instance.value.swiper.isBeginning
            swiperIsEnd.value = instance.value.swiper.isEnd
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
        initialize,
        update,
    }
})

