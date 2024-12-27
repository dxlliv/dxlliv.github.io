<script setup lang="ts">
useHead({
  title: 'Your No Label Developer'
})
</script>

<template>
  <swiper-slide>

    <BlockDX/>

  </swiper-slide>
  <swiper-slide>

    <BlockMe/>

  </swiper-slide>
  <swiper-slide>

    <BlockMeImage/>

  </swiper-slide>
  <swiper-slide>

    <BlockClipsArchive/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQPuHRHpSYdHWJKzjUoc9NaFsf61MW7asc9OEYvwvgqq13E-XiQ2UYlDD_gODTG7A9XxxDk3MCx1LDtnSpnTjXez')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockProjectPlanner/>

  </swiper-slide>
  <swiper-slide>

    <BlockProjectGridsky/>

  </swiper-slide>
  <swiper-slide>

    <BlockCopyright/>

  </swiper-slide>
</template>