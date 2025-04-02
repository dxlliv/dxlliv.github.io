<script setup lang="ts">
useHead({
  title: 'Design & Development'
})

defineI18nRoute({
  locales: ['en', 'it']
})
</script>

<template>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateImage
        image="/media/studio-mobile.webp"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignConsulting/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignDevelopment/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridskyAnimation/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignExperience />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQPvg5ClEWLL9efbgAkokCXSzspsWJYRsiP7S_ojM-pG4GeABI2WAM1Dp-qhO5SHs5sBOK19c-li9h7-f0rleT_k')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneImmersiveVisuals/>

  </swiper-slide>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
</template>