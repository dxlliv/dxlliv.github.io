<script setup lang="ts">
defineProps<{
  title: string
  dark?: boolean
}>()
</script>

<template>
  <h6
      :class="[
          'dx-block__title text-h6 mt-sm-3 mb-n2',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
      v-text="title"
  />
</template>

<style scoped lang="scss">
body.ios .dx-block__title {
  font-size: 20px !important;
  letter-spacing: -1px !important;

  @media(max-width: 479px) {
    font-size: 18px !important;
  }
}

.dx-block__title {
  @media(max-width: 479px) {
    font-size: 18px !important;
    letter-spacing: -1px !important;
  }
}
</style>