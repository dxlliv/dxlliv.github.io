<script setup lang="ts">
defineProps<{
  title: string
  dark?: boolean
}>()
</script>

<template>
  <h6
      :class="[
          'dx-block-hero__title text-h6 mt-sm-3 mt-md-n1 mb-n2',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
      v-text="title"
  />
</template>

<style scoped lang="scss">

</style>