<script setup lang="ts">
import {useSwipe, useEventListener} from "@vueuse/core";

const sliderHorizontalStore = useSliderHorizontalStore()

onMounted(() => {
  sliderHorizontalStore.initialize()

  // slide to first slide

  setTimeout(() => {
    sliderHorizontalStore.slideTo(1)
  }, 1000)

  // handle scrolling on page

  const preventScrollAction = ref(false)

  useEventListener(window, 'wheel', (event) => {
    const targetElement = event.target as HTMLElement;

    if (preventScrollAction.value) {
      return
    }

    if (targetElement.closest('.v-dialog')) {
      return
    }

    preventScrollAction.value = true

    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      if (event.deltaX > 0) {
        sliderHorizontalStore.slideNext()
      } else {
        sliderHorizontalStore.slidePrev()
      }
    } else {
      if (event.deltaY > 0) {
        sliderHorizontalStore.slideNext()
      } else {
        sliderHorizontalStore.slidePrev()
      }
    }

    setTimeout(() => {
      preventScrollAction.value = false
    }, 1300)
  })

  // handle swiping on page

  const preventSwipeAction = ref(false)

  useSwipe(document.body.querySelector('.v-application'), {
    onSwipeStart(event) {
      const targetElement = event.target as HTMLElement;

      if (targetElement?.closest('.disable-swipe')) {
        return preventSwipeAction.value = true
      }

      preventSwipeAction.value = false
    },
    onSwipeEnd(event: Event, direction: string) {
      if (preventSwipeAction.value) {
        return
      }

      const targetElement = event.target as HTMLElement;

      if (targetElement.closest('.v-dialog')) {
        return
      }

      switch (direction) {
        case 'up':
          sliderHorizontalStore.slideNext()
          break
        case 'left':
          if (targetElement.closest('.dx-slider-horizontal')) {
            return
          }
          sliderHorizontalStore.slideNext()
          break
        case 'down':
          sliderHorizontalStore.slidePrev()
          break
        case 'right':
          if (targetElement.closest('.dx-slider-horizontal')) {
            return
          }
          sliderHorizontalStore.slidePrev()
          break
      }
    }
  })
})
</script>

<template>
  <swiper-container
      class="dx-slider-horizontal" init="false"
      slides-per-view="auto" centered-slides
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

  &::part(container) {
    padding: 0 8px;
    max-width: calc(100vw - 14px);
  }

  > :deep(swiper-slide) {
    display: grid;
    align-items: center;
    box-sizing: border-box;
    padding: 96px 16px 24px 16px;
    max-width: calc(100vw - 16px);
    width: 440px;
    max-height: 560px;
    height: 100%;

    @media(max-height: 600px) {
      padding-top: 56px;
    }
  }
}
</style>