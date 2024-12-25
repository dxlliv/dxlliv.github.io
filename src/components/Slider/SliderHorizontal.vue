<script setup lang="ts">
import {useDisplay} from "vuetify";

const display = useDisplay()
const sliderHorizontalStore = useSliderHorizontalStore()
const route = useRoute()

onMounted(() => {
  sliderHorizontalStore.initialize()
})

watch(() => route.name, () => {
  setTimeout(() => {
    sliderHorizontalStore.update()

    setTimeout(() => {
      sliderHorizontalStore.slideReset()
    }, 500)
  }, 1000)
})
</script>

<template>
  <swiper-container
      class="dx-slider-horizontal" init="false"
      :initial-slide="1" :space-between="0"
      :slide-to-clicked-slide="$vuetify.display.smAndUp"
      allow-touch-move mousewheel pagination
      :centered-slides="$vuetify.display.smAndUp"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
swiper-container {
  width: 100vw;
  height: 100%;

  > :deep(swiper-slide) {
    display: grid;
    align-items: center;
    box-sizing: border-box;
    padding: 24px;
  }
}
</style>