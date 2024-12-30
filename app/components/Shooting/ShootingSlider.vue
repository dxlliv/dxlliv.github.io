<script setup lang="ts">
const sliderShootingStore = useSliderShootingStore()

const props = withDefaults(defineProps<{
  initialSlide?: number
  pageName: string
}>(), {
  initialSlide: 0
})

onMounted(() => {
  sliderShootingStore.initialize(props.pageName, props.initialSlide)
})
</script>

<template>
  <swiper-container
      init="false"
      class="dx-slider-vertical fill-height"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">

</style>