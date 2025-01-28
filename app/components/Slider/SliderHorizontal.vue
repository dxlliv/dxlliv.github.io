<script setup lang="ts">
import {useDisplay} from "vuetify";
import {useSwipe} from "@vueuse/core";

const display = useDisplay()
const sliderHorizontalStore = useSliderHorizontalStore()
const route = useRoute()

onMounted(() => {
  sliderHorizontalStore.initialize()

  // slide to first slide

  setTimeout(() => {
    sliderHorizontalStore.slideTo(sliderHorizontalStore.storedInitialSlide ?? 1)
  }, 150)

  // detect swiping

  const preventSwipeAction = ref(false)

  const { isSwiping, direction } = useSwipe(document.body.querySelector('.v-application'), {
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

onBeforeUnmount(() => {
  sliderHorizontalStore.destroy()
})
</script>

<template>
  <swiper-container
      class="dx-slider-horizontal" init="false"
      :slide-to-clicked-slide="$vuetify.display.smAndUp"
      allow-touch-move mousewheel pagination
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