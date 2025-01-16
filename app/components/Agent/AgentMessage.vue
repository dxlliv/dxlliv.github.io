<script setup lang="ts">
defineProps<{
  author: string
}>()
</script>

<template>
  <v-card
      class="d-inline-block text-subtitle-2 px-4 py-3"
      :color="author === 'me' ? 'grey-lighten-2' : 'grey-lighten-4'" rounded flat max-width="70%"
  >
    <slot />
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  line-height: 22px;
}
</style>