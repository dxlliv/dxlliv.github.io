<script setup lang="ts">
useHead({
  title: 'Projects'
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

    <BlockSlideProjectPlanner/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGamepad/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridskyAnimation/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridsky/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectSimPointAlbum/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectSimPoint/>

  </swiper-slide>
  <!--
  <swiper-slide>

    <BlockSlideProjectGameAssist/>

  </swiper-slide>
  -->
  <swiper-slide>

    <BlockSlideProjectMineHub/>

  </swiper-slide>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
  <!--
  <swiper-slide>

    <BlockHeroCard color="#181818">
      <div class="text-h4 text-white">Projects</div>
    </BlockHeroCard>

  </swiper-slide>
  <swiper-slide>

    <BlockCopyright/>

  </swiper-slide>
  -->
</template>