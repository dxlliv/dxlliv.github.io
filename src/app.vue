<script setup lang="ts">

</script>

<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppSplash />

    <!--
    <client-only>
      <AppGuides />
    </client-only>
    -->

  </v-app>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>