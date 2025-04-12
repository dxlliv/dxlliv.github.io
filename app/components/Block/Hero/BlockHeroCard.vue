<script setup lang="ts">
import {useDisplay} from "vuetify";

const props = withDefaults(defineProps<{
  slideNext?: boolean
  slideReset?: boolean
}>(), {
  slideNext: true
})

const display = useDisplay()
const sliderHorizontalStore = useSliderHorizontalStore()

const emit = defineEmits(['intersect'])
const isIntersected = ref(false)

function onCardClick() {
  if (props.slideNext) {
    // only from xs, it slides next if props is provided
    // otherwise it will center the slide automatically
    if (display.xs.value) {
      sliderHorizontalStore.slideNext()
    }
  }

  // prevent swiper auto-slide bug with contained v-bottom-sheet (?)
  sliderHorizontalStore.lock()

  setTimeout(() => {
    sliderHorizontalStore.unlock()
  }, 500)
}

function onIntersect(isIntersecting: boolean) {
  isIntersected.value = isIntersecting

  emit('intersect', isIntersecting)
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
        :slideNext="sliderHorizontalStore.slideNext"
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
  outline: none;
}
</style>