<script setup lang="ts">
defineProps<{
  album: string[]
  slideNextThen?: boolean
}>()
</script>

<template>
  <BlockTemplateSlider
    :slide-next-then="slideNextThen"
  >
    <template #default="{ onSlideClick }">

      <slot name="prepend" />

      <swiper-slide v-for="image in album" :key="image" @click="onSlideClick">
        <v-img cover :src="image"/>
      </swiper-slide>

      <slot name="append" />

    </template>
  </BlockTemplateSlider>
</template>