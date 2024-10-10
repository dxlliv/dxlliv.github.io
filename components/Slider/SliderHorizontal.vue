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
  <swiper-container
      class="dx-slider-horizontal"
      space-between="28"
      init="false"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

swiper-container {
  height: 100%;
}
</style>