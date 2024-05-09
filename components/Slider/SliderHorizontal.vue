<script setup lang="ts">
const sliderHorizontalStore = useSliderHorizontalStore()
const route = useRoute()

onMounted(() => {
  sliderHorizontalStore.initialize()
})

watch(() => route.name, value => {
  sliderHorizontalStore.update()
})
</script>

<template>
  <swiper-container class="dxlliv-slider-horizontal" init="false">
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
swiper-container {
  height: 100%;
}
</style>