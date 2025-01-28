<script setup lang="ts">
const props = withDefaults(defineProps<{
  slideNextThen?: boolean
  initialSlide?: number
}>(), {
  initialSlide: 0
})

const appStore = useAppStore()

const storeSliderHorizontal = useSliderHorizontalStore()
const swiperElement = useTemplateRef<HTMLElement>('swiper');

onMounted(() => {
  appStore.emitter.on('horizontal-slide-change', () => {
    setTimeout(() => {
      swiperElement.value.swiper.slideTo(initialSlide)
    }, 1000)
  })
})

function onSlideClick() {
  if (swiperElement.value.swiper.isEnd && props.slideNextThen) {
    onSwiperReachEnd()
  }

  swiperElement.value.swiper.slideNext()
}

function onSwiperReachEnd() {
  storeSliderHorizontal.slideNext()
}
</script>

<template>
  <BlockHeroCard :slide-next="!slideNextThen">
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