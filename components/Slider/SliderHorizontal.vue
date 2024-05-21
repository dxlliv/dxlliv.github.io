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
      :class="['dxlliv-slider-horizontal', {'dxlliv-slider-horizontal--rounded': sliderHorizontalStore.swiperMobileRounded}]"
      init="false"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

swiper-container {
  height: 100%;

  @media (max-width: 699px) {
    height: 100dvh;
  }
}

@media(max-width: 699px) {
  .dxlliv-slider-horizontal {
    :deep(swiper-slide:first-child) {
      transition: border-radius 0.15s ease-in-out;
      transition-delay: 0.2s;
      overflow: hidden;
    }

    &--rounded :deep(swiper-slide:first-child) {
      border-radius: 24px !important;
    }
  }
}
</style>