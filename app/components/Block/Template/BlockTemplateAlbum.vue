<script setup lang="ts">
defineProps<{
  album: string[]
  slideNextThen?: boolean
}>()
</script>

<template>
  <BlockTemplateSlider
      color="grey-darken-4"
      :slide-next-then="slideNextThen"
      @click.prevent
  >
    <template #default="{ isIntersected, onSlideClick }">

      <slot name="prepend"/>

      <swiper-slide
          v-for="item in album"
          :key="item"
          @click="onSlideClick"
      >
        <BlockTemplateImageInner
            v-if="!item.includes('.mp4')"
            :image="item"
        />
        <BlockTemplateVideoInner
            v-else-if="isIntersected"
            :video="item"
        />
      </swiper-slide>

      <slot name="append"/>

    </template>
  </BlockTemplateSlider>
</template>