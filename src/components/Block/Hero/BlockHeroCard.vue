<script setup lang="ts">
const props = defineProps<{
  slideNext?: boolean
}>()

const sliderHorizontalStore = useSliderHorizontalStore()
const isIntersected = ref(false)

function onCardClick() {
  if (props.slideNext) {
    sliderHorizontalStore.slideNext()
  }

  // prevent swiper auto-slide bug with contained v-bottom-sheet (?)
  sliderHorizontalStore.lock()

  setTimeout(() => {
    sliderHorizontalStore.unlock()
  }, 500)
}

function onIntersect(isIntersecting: boolean) {
  isIntersected.value = isIntersecting
}

</script>

<template>
  <v-card
      class="dx-block-hero__card"
      rounded flat :ripple="false"
      v-intersect="onIntersect"
      @click="onCardClick"
  >

    <slot
        :is-intersected="isIntersected"
    />

  </v-card>
</template>

<style scoped lang="scss">
.dx-block-hero__card {
  position: relative;
  display: grid;
  align-content: center;
  text-align: center;
  aspect-ratio: 1;
}
</style>