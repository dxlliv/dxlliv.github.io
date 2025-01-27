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
    if (display.xs.value) {
      sliderHorizontalStore.slideTo(1)
    }
  }, 300)

  // detect swiping

  const { isSwiping, direction } = useSwipe(document.body.querySelector('.v-application'))

  watch(() => isSwiping.value, (value) => {
    if (!value) {
      return
    }

    switch (direction.value) {
      case 'up':
        sliderHorizontalStore.slideNext()
        break;
      case 'down':
        sliderHorizontalStore.slidePrev()
        break;
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
      loop
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