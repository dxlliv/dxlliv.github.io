<script setup lang="ts">
const storeSliderMainColumn = useSliderVerticalStore()

const props = withDefaults(defineProps<{
  initialSlide?: number
  name: string
}>(), {
  initialSlide: 0
})

onMounted(() => {
  storeSliderMainColumn.initialize(props.name, props.initialSlide)
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