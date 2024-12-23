<script setup lang="ts">
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
      class="dx-slider-horizontal"
      space-between="0" init="false"
      allow-touch-move mousewheel
      :centered-slides="$vuetify.display.mdAndUp"
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