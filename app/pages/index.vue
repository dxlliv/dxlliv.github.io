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

    <BlockSlideDroneImmersiveVisuals/>
    <!--
    <BlockSlideClipsArchive/>
    -->

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQPvg5ClEWLL9efbgAkokCXSzspsWJYRsiP7S_ojM-pG4GeABI2WAM1Dp-qhO5SHs5sBOK19c-li9h7-f0rleT_k')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDXS>
      <ShootingDialog />
    </BlockDXS>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectPlanner/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridsky/>

  </swiper-slide>
  <swiper-slide>

    <BlockCopyright/>

  </swiper-slide>
</template>