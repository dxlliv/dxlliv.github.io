<script setup lang="ts">
const plannerStore = usePlannerStore()

useHead({
  title: 'Your No Label Developer'
})

onMounted(() => {
  plannerStore.imageSrc = 'https://raw.githubusercontent.com/dxlliv/instagram/main/public/user/instagram/dxlliv/media/post-6x1.jpg'
  plannerStore.imageSelectorCenter = false
})
</script>

<template>
  <swiper-slide>

    <SectionIntro />

  </swiper-slide>

  <swiper-slide>
    <SectionHomeMe/>
  </swiper-slide>

  <!--

  <swiper-slide>
    <SectionImage
        class="fill-height"
        :src="plannerStore.imageSrc"
    />
  </swiper-slide>

  <swiper-slide>
    <SectionHomeFpv/>
  </swiper-slide>

  <swiper-slide>
    <SectionHomeDev/>
  </swiper-slide>
  -->
</template>