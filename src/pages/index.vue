<script setup lang="ts">
useHead({
  title: 'Your No Label Developer'
})
</script>

<template>
  <swiper-slide v-if="$vuetify.display.mdAndUp">

    <BlockDX/>

  </swiper-slide>
  <swiper-slide>

    <BlockMe/>

  </swiper-slide>
  <swiper-slide>

    <BlockMeImage
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockPlanner/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        video="/media/dxvfpv.mp4"
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockGridsky/>

  </swiper-slide>
  <swiper-slide>

    <BlockCopyright/>

  </swiper-slide>
</template>