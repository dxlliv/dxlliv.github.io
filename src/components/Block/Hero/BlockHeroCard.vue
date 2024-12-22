<script setup lang="ts">
const sliderHorizontalStore = useSliderHorizontalStore()

function onCardClick() {
  // prevent swiper auto-slide bug with contained v-bottom-sheet (?)
  sliderHorizontalStore.lock()

  setTimeout(() => {
    sliderHorizontalStore.unlock()
  }, 500)
}
</script>

<template>
  <v-card
      class="dx-block-hero__card"
      rounded flat :ripple="false"
      @click="onCardClick"
  >
    <slot />
  </v-card>
</template>

<style scoped lang="scss">
.dx-block-hero__card {
  display: grid;
  align-content: center;
  text-align: center;
  aspect-ratio: 1;
}
</style>