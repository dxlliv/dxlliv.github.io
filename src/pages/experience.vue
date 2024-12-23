<script setup lang="ts">
useHead({
  title: 'Your No Label Developer'
})
</script>

<template>
  <swiper-slide v-if="$vuetify.display.mdAndUp">

    <BlockDX />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateImage
        image="/media/studio.jpg"
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockConsulting/>

  </swiper-slide>
  <swiper-slide>

    <BlockDevelopment/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateImage
        image="/media/gameassist.webp"
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockGameAssist/>

  </swiper-slide>
  <swiper-slide>

    <BlockGridskyAnimation
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