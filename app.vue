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

    <client-only v-if="$vuetify.display.smAndUp">
      <AppGuides />
    </client-only>

  </v-app>
</template>