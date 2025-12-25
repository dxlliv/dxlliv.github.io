<script setup lang="ts">
defineProps<{
  to: string
  title: string
}>()
</script>

<template>
  <v-app-bar
      class="bg-transparent text-left"
  >
    <template #prepend>
      <nuxt-link :to="to" class="d-inline-block">
        <Icon name="lucide:arrow-left" :size="24" class="ml-3" />
      </nuxt-link>
    </template>
    <v-toolbar-title class="font-weight-bold">
      {{ title }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-toolbar {
  top: 0;
  z-index: 99;

  .font-weight-bold {
    font-size: 23px;
  }

  .d-inline-block{
    height: 24px;
  }
}
</style>