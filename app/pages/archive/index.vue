<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return 'DX Archive';
  },
})

const {data: articles} = await useAsyncData('archive', () => {
  return queryCollection('archive')
      .where('year', '=', 2024)
      .all()
})

defineI18nRoute({
  locales: ['en']
})
</script>

<template>
  <swiper-slide>

    <BlockDXA>
      <BlockDXMenu />
    </BlockDXA>

  </swiper-slide>
  <swiper-slide>

    <BlockMe/>

  </swiper-slide>
  <swiper-slide>

    <BlockMeImage/>

  </swiper-slide>
  <swiper-slide>

    <BlockArchiveBrowseBy
        :year="2024"
    />

  </swiper-slide>
  <swiper-slide v-for="article of articles">
    <BlockArchiveArticle
        :article="article"
        :slide-next="false"
    />
  </swiper-slide>
  <!--
  <swiper-slide>

    <BlockSponsor />

  </swiper-slide>
  -->
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
</template>

<style scoped lang="scss">

</style>