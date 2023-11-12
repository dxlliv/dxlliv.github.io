<script setup lang="ts">
defineProps<{
  title: string
  dark?: boolean
}>()
</script>

<template>
  <h6
      :class="[
          'dxlliv-block__title text-h6 mb-n3',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
      v-text="title"
  />
</template>