<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return 'DX Archive';
  },
})
</script>

<template>
  <swiper-slide>

    <BlockDXA>
      <BlockDXMenu />
    </BlockDXA>

  </swiper-slide>
  <swiper-slide>

    <BlockMeImage/>

  </swiper-slide>
  <swiper-slide>

    <BlockMe/>

  </swiper-slide>
  <swiper-slide>

    <BlockArchiveBrowseBy :year="2024" />

  </swiper-slide>
  <swiper-slide>

    <BlockSponsor />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQOOaniPVlAtRyatncg0x-Xo0SOc6KbjpAc__-FJgFQLO0IWXzo0GUS_FzpHTlKXNqKgxGQAEZXh6QUjKV77vsoz')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDXA>
      <BlockDXMenu />
    </BlockDXA>

  </swiper-slide>
</template>

<style scoped lang="scss">

</style>