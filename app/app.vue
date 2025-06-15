<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dxlliv.dev` : "DXLLIV";
  }
})

useSeoMeta({
  ogImage: '/logo.webp',
  twitterCard: 'summary',
})
</script>

<template>
  <v-app>

    <AppSplash/>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

  </v-app>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>