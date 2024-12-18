<script setup lang="ts">
const plannerStore = usePlannerStore()

useHead({
  title: 'Your No Label Developer'
})

onMounted(() => {
  plannerStore.imageActive = '6x1'
})
</script>

<template>
  <swiper-slide>
    <SectionIntro />
  </swiper-slide>

  <swiper-slide>
    <SectionImage
        class="fill-height"
        :src="plannerMediaPath(plannerStore.imageActive)"
    />
  </swiper-slide>

  <swiper-slide>
    <SectionHomeMe/>
  </swiper-slide>

  <swiper-slide>
    <SectionHomeDev/>
  </swiper-slide>

  <!--
  <swiper-slide>
    <SectionHomeFpv/>
  </swiper-slide>
  -->

</template>