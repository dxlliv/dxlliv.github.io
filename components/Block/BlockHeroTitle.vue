<script setup lang="ts">
defineProps<{
  title: string
  dark?: boolean
}>()
</script>

<template>
  <h6
      :class="[
          'dxlliv-block__title text-h6 mt-sm-3 mb-n2',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
      v-text="title"
  />
</template>

<style scoped lang="scss">
body.ios .dxlliv-block__title {
  font-size: 22px !important;
  letter-spacing: -1px !important;
}
</style>