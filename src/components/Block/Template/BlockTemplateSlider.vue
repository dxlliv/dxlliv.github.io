<script setup lang="ts">
const {slideNextThen} = defineProps<{
  slideNextThen?: boolean
}>()

const storeSliderHorizontal = useSliderHorizontalStore()
const swiperRef = ref<HTMLSwiperElement | null>(null);

function onSlideClick() {
  if (swiperRef.value.swiper.isEnd && slideNextThen) {
    onSwiperReachEnd()
  }

  swiperRef.value.swiper.slideNext()
}

function onSwiperReachEnd() {
  storeSliderHorizontal.slideNext()
}
</script>

<template>
  <BlockHeroCard>
    <swiper-container
        ref="swiperRef"
        direction="vertical"
        :slides-per-view="1"
        :space-between="0"
    >

      <slot :onSlideClick="onSlideClick" />

    </swiper-container>
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