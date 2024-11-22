<script setup lang="ts">
defineProps<{
  image: string
}>()

const plannerStore = usePlannerStore()
const sliderVerticalStore = useSliderVerticalStore()

function onPlannerMediaClick(id: string) {
  plannerStore.imageActive = id
  sliderVerticalStore.slideToPlannerImage()
}

const imageProp = {
  flat: true,
  color: 'transparent'
}
</script>

<template>
  <v-card
      :image="plannerMediaPath(image)"
      @click="onPlannerMediaClick(image)"
      v-bind="imageProp"
  />
</template>

<style scoped lang="scss">

</style>
