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

    <client-only>
      <AppGuides />
    </client-only>

  </v-app>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>