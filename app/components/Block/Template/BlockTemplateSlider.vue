<script setup lang="ts">
const {slideNextThen, initialSlide} = defineProps<{
  slideNextThen?: boolean
  initialSlide?: number
}>()

const appStore = useAppStore()

const storeSliderHorizontal = useSliderHorizontalStore()
const swiperElement = useTemplateRef<HTMLElement>('swiper');

onMounted(() => {
  appStore.emitter.on('horizontal-slide-change', () => {
    swiperElement.value.swiper.slideTo(initialSlide)
  })
})

function onSlideClick() {
  if (swiperElement.value.swiper.isEnd && slideNextThen) {
    onSwiperReachEnd()
  }

  swiperElement.value.swiper.slideNext()
}

function onSwiperReachEnd() {
  storeSliderHorizontal.slideNext()
}
</script>

<template>
  <BlockHeroCard>
    <template #default="{ isIntersected }">
      <swiper-container
          ref="swiper"
          direction="vertical"
          :slides-per-view="1"
          :space-between="0"
          :initial-slide="initialSlide"
      >

        <slot
            :isIntersected="isIntersected"
            :onSlideClick="onSlideClick"
        />

      </swiper-container>
    </template>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>