<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register()
</script>

<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppSplash />

    <client-only>
      <AppGuides />
    </client-only>

  </v-app>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>