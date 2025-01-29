<script setup lang="ts">
import {useSwipe, useEventListener} from "@vueuse/core";

const sliderHorizontalStore = useSliderHorizontalStore()

onMounted(() => {
  sliderHorizontalStore.initialize()

  // slide to first slide

  setTimeout(() => {
    sliderHorizontalStore.slideTo(1)
  }, 150)

  // handle scrolling on page

  const preventScrollAction = ref(false)

  useEventListener(window, 'wheel', (event) => {
    if (preventScrollAction.value) {
      return
    }

    preventScrollAction.value = true

    if (event.deltaY > 0) {
      sliderHorizontalStore.slideNext()
    } else {
      sliderHorizontalStore.slidePrev()
    }

    setTimeout(() => {
      preventScrollAction.value = false
    }, 500)
  })

  // handle swiping on page

  const preventSwipeAction = ref(false)

  useSwipe(document.body.querySelector('.v-application'), {
    onSwipeStart(event) {
      if (event.target?.closest('.disable-swipe')) {
        return preventSwipeAction.value = true
      }

      preventSwipeAction.value = false
    },
    onSwipeEnd(e: TouchEvent, direction: string) {
      if (preventSwipeAction.value) {
        return
      }

      switch (direction) {
        case 'up':
          sliderHorizontalStore.slideNext()
          break;
        case 'down':
          sliderHorizontalStore.slidePrev()
          break;
      }
    }
  })
})
</script>

<template>
  <swiper-container
      class="dx-slider-horizontal" init="false"
      :slide-to-clicked-slide="$vuetify.display.smAndUp"
      allow-touch-move pagination
      :centered-slides="$vuetify.display.smAndUp"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
swiper-container {
  max-width: 100vw;
  height: 100%;

  > :deep(swiper-slide) {
    display: grid;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    margin-top: 24px;
  }
}
</style>