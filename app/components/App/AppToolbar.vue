<script setup lang="ts">
defineProps<{
  to: string
  title: string
}>()
</script>

<template>
  <v-toolbar
      class="position-sticky" color="black"
  >
    <template #prepend>
      <nuxt-link :to="to" class="d-inline-block mt-1">
        <Icon name="lucide:arrow-left" :size="24" class="ml-3" />
      </nuxt-link>
    </template>
    <v-toolbar-title class="font-weight-bold" v-text="title" />
  </v-toolbar>
</template>

<style scoped lang="scss">
.v-toolbar {
  top: 0;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  z-index: 99;
}
</style>