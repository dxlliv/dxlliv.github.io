<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return 'DX Archive';
  },
})

const currentYear = new Date().getFullYear()

const { data: articlesGroup } = await useAsyncData('archive', async () => {
  const allArticles = await queryCollection('archive')
      .where('published', '=',true)
      .order('year', 'DESC')
      .order('created_at', 'DESC')
      .all()

  const filtered = allArticles.filter(a => a.year <= currentYear && a.year >= 2024)

  const grouped = filtered.reduce((acc, article) => {
    (acc[article.year] ||= []).push(article)
    return acc
  }, {} as Record<number, typeof allArticles>)

  return Object.entries(grouped)
      .map(([year, items]) => ({ year: Number(year), items }))
      .sort((a, b) => b.year - a.year)
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
  <template v-for="group of articlesGroup">

    <swiper-slide>
      <BlockArchiveBrowseBy
          :year="group.year"
      />
    </swiper-slide>

    <swiper-slide v-for="article of group.items">
      <BlockArchiveArticle
          :article="article"
          :slide-next="false"
      />
    </swiper-slide>

  </template>
  <!--
  <swiper-slide>

    <BlockTemplateImage
        image="/media/studio-mobile.webp"
    />

  </swiper-slide>
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