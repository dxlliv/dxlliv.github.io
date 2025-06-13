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

    <BlockSlideDesignDevelopment/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignConsulting/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridskyAnimation/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignExperience />

  </swiper-slide>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
</template>