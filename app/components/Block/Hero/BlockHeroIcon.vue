<script setup lang="ts">
defineProps<{
  icon?: string
  avatar?: string
  image?: string
  dark?: boolean
}>()
</script>

<template>
  <v-icon
      v-if="icon"
      :icon="icon" size="180"
      :class="[
        'dx-block__icon v-icon--big mt-n3 mt-lg-0 mb-8 mb-lg-0',
        {'text-grey': dark},
        {'text-grey-lighten-2': !dark},
      ]"
  />

  <v-avatar v-else-if="avatar" size="180px" class="mb-6 no-pointer-events">
    <v-img :src="avatar" alt="" />
  </v-avatar>

  <img
      v-else-if="image" :src="image"
      max-width="80vw" width="400px" class="mx-auto mb-12 no-pointer-events"
  />
</template>

<style scoped lang="scss">
.dx-block__icon {
  &.text-grey {
    opacity: 0.5;
  }

  @media(max-width: 1279px) {
    font-size: 150px !important;
  }

  @media(max-height: 699px) and (max-width: 1279px) {
    display: none;
  }
}

img {
  max-width: 80vw !important;

  @media(max-height: 520px) {
    width: 300px !important;
  }
}
</style>