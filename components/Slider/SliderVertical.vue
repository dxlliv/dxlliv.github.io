<script setup lang="ts">
const storeSliderMainColumn = useSliderVerticalStore()

const props = withDefaults(defineProps<{
  initialSlide?: number
  pageName: string
}>(), {
  initialSlide: 0
})

onMounted(() => {
  storeSliderMainColumn.initialize(props.pageName, props.initialSlide)
})
</script>

<template>
  <swiper-container
      init="false"
      class="dxlliv-slider-vertical fill-height"
  >
    <slot />
  </swiper-container>
</template>