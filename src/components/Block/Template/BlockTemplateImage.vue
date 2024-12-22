<script setup lang="ts">
import {useDisplay} from "vuetify";

defineProps<{
  image: string
}>()

const sliderHorizontalStore = useSliderHorizontalStore()
const display = useDisplay()

function onImageClick() {
  if (display.smAndDown.value) {
    sliderHorizontalStore.slideNext()
  }
}
</script>

<template>
  <BlockHeroCard
      @click="onImageClick"
  >
    <v-img :src="image" />
  </BlockHeroCard>
</template>