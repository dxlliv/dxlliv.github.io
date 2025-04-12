<script setup lang="ts">
const appStore = useAppStore()

useSeoMeta({
  description: 'Discover what I can do for you',
  ogImage: '/logo.webp',
  twitterCard: 'summary',
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div>
      <client-only>
        <HomeTime />
      </client-only>
      <AppLogo name="home" text="DXLLIV" class="mt-1" />
    </div>
  </div>
  <div />
  <div>
    <HomeButtons />
    <HomeLinks v-show="!appStore.splash"/>
  </div>
</template>