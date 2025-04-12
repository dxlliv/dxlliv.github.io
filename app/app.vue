<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - DX` : "Your No Label Developer";
  }
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