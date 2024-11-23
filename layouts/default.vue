<script setup lang="ts">
const sliderHorizontalStore = useSliderHorizontalStore()
const sliderVerticalStore = useSliderVerticalStore()
const projectPlannerStore = useProjectPlannerStore()

function onPlannerImageSelect(value: string) {
  sliderVerticalStore.swiper.slideTo(sliderVerticalStore.swiper.slides.length === 5 ? 1 : 2, sliderHorizontalStore.swiper.activeIndex === 1 ? 0 : 500)
  sliderHorizontalStore.swiper.slideTo(0)

  projectPlannerStore.imageSrc = ''

  setTimeout(() => {
    projectPlannerStore.imageSrc = value + `?date=${+new Date()}`
  }, 250)
}

</script>

<template>
  <SliderHorizontal>

    <swiper-slide>
      <SliderHorizontalSlideCard>

        <SliderVertical :name="$route.name">
          <slot/>
        </SliderVertical>

      </SliderHorizontalSlideCard>
    </swiper-slide>

    <swiper-slide>
      <SliderHorizontalSlideRow>
        <SliderHorizontalSlideRowColumn margin :cols="12" :md="6" class="d-flex align-center">

          <ProjectPlanner
              :center="projectPlannerStore.imageSelectorCenter"
              @select="onPlannerImageSelect"
          />

        </SliderHorizontalSlideRowColumn>
        <v-col :cols="12" :md="6" class="text-center hidden-sm-and-down" align-self="center">

          <v-row class="fill-height">
            <v-col class="fill-height">

              <v-row no-gutters class="fill-height">
                <v-col align-self="center" class="text-center">

                  <AppCopyright/>

                </v-col>
              </v-row>

            </v-col>
          </v-row>

        </v-col>
      </SliderHorizontalSlideRow>
    </swiper-slide>

  </SliderHorizontal>
</template>

<style scoped lang="scss">

</style>