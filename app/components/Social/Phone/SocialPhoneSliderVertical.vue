<script setup lang="ts">
const props = withDefaults(defineProps<{
  initialSlide?: number
  threads: any[]
}>(), {
  initialSlide: 0,
  threads: []
})

const instance = ref()
const activeIndex = ref(0)

onMounted(() => {
  instance.value = document.querySelector('.dx-social-slider-vertical')

  const swiperConfig = {
    direction: 'vertical',
    allowTouchMove: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    /*
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
    pagination: {
        lockClass: 'dx-slider-horizontal__lock',
        clickable: true,
    },
     */
    on: {
      init() {
        // ...
      },
      slideChange(swiper) {
        activeIndex.value = Number(swiper.realIndex)
      },
      slideChangeTransitionEnd(swiper) {
      }
    },
  }

  Object.assign(instance.value, swiperConfig)

  instance.value.initialize()
})
</script>

<template>
  <swiper-container
      init="false"
      class="dx-social-slider-vertical"
  >
    <swiper-slide
        v-for="(thread, threadIndex) of threads"
    >
      <v-lazy>
        <SocialPost
            v-if="threadIndex === activeIndex"
            :thread="thread"
        />
      </v-lazy>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="scss">
.dx-social-slider-vertical {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 56px;

  :deep(swiper-slide) {
    height: 100%;

    .v-lazy {
      height: 100%;

      :deep(img, video) {
        height: 100%;
      }
    }
  }
}
</style>