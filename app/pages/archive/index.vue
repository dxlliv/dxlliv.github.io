<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return 'DX Archive';
  },
})
</script>

<template>
  <swiper-slide>

    <BlockDXA/>

  </swiper-slide>
  <swiper-slide>

    <BlockArchiveBrowseBy />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQOOaniPVlAtRyatncg0x-Xo0SOc6KbjpAc__-FJgFQLO0IWXzo0GUS_FzpHTlKXNqKgxGQAEZXh6QUjKV77vsoz')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSponsor />

  </swiper-slide>
</template>

<style scoped lang="scss">

</style>