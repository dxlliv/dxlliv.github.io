<script setup lang="ts">
useHead({
  title: 'Digital X-cellence'
})
</script>

<template>
  <swiper-slide>

    <BlockDX/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignConsulting/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDesignDevelopment/>

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

    <BlockDXS>
      <ShootingDialog />
    </BlockDXS>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridskyAnimation/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGridsky/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectPlanner/>

  </swiper-slide>
  <!--
  <swiper-slide>

    <BlockHeroCard color="#181818">
      <div class="text-h4 text-white">Projects</div>
    </BlockHeroCard>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectGameAssist/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideProjectSimPoint/>

  </swiper-slide>
  <swiper-slide>

    <BlockCopyright/>

  </swiper-slide>
  -->
</template>