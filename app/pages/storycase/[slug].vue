<script setup lang="ts">
const route = useRoute()
const storycase = ref()
const storycaseFirstVideo = ref()
const storycaseVideos = ref()

async function loadStorycase() {
  storycase.value = await queryCollection('storycase')
      .path(route.path)
      .first()

  storycaseFirstVideo.value = extractFirstVideoFromStorycase(storycase.value)
  storycaseVideos.value = extractMediaFromStorycase(storycase.value)
}

await loadStorycase()

watch(() => route.path, () => {
  loadStorycase()
}, { immediate: true })

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - DX Shooting` : "DX Shooting";
  }
})

useSeoMeta({
  title: storycase.value.title
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    name: storycase.value.title,
    dateModified: storycase.value.dateModified,
    datePublished: storycase.value.datePublished,
    mainEntity: {
      '@type': 'VideoObject',
      name: storycase.value.title,
      description: storycase.value.description,
      uploadDate: storycase.value.datePublished,
      thumbnailUrl: routeRawMedia(storycaseFirstVideo.value) + '.webp',
      contentUrl: routeRawMedia(storycaseFirstVideo.value) + '.mp4',
    }
  }
])
</script>

<template>
  <swiper-slide>

    <BlockDXA>
      <BlockDXMenu />
    </BlockDXA>

  </swiper-slide>
  <swiper-slide v-for="video of storycaseVideos">

    <BlockHeroCard>
      <StorycaseVideo
        :src="video.src"
        aspect-ratio="1"
      />
    </BlockHeroCard>

  </swiper-slide>
  <!--
  <StorycasePage
      :storycase="storycase"
  />
  -->
</template>

<style scoped lang="scss">
swiper-slide {
  position: relative;
}
</style>