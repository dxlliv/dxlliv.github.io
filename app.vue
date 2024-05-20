<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import {useDisplay} from "vuetify";

register()

onMounted(() => {
  const display = useDisplay()

  if (display.platform.value.ios) {
    document.body.classList.add('ios')
  }
})
</script>

<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppSplash />

    <client-only v-if="$vuetify.display.width > 700 && $vuetify.display.height > 400">
      <AppGuides />
    </client-only>

  </v-app>
</template>