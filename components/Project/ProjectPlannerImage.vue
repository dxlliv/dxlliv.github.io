<script setup lang="ts">
defineProps<{
  image: string
}>()

const plannerStore = usePlannerStore()
const sliderHorizontalStore = useSliderHorizontalStore()
const sliderVerticalStore = useSliderVerticalStore()

function onPlannerMediaClick(id: string) {
  sliderVerticalStore.slideToPlannerImage()

  setTimeout(() => {
    sliderHorizontalStore.slideToMainColumn()
  }, 400)

  setTimeout(() => {
    plannerStore.imageActive = id
  }, 800)
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
