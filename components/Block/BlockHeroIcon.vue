<script setup lang="ts">
defineProps<{
  icon?: string
  avatar?: string
  dark?: boolean
}>()
</script>

<template>
  <v-icon
      v-if="icon"
      :icon="icon" :size="200"
      :class="[
        'dxlliv-block__icon v-icon--big mt-n3 mt-lg-0 mb-8 mb-lg-0',
        {'text-grey': dark},
        {'text-grey-lighten-2': !dark},
      ]"
  />

  <v-avatar v-else-if="avatar" size="240px" class="mb-6 no-pointer-events">
    <v-img :src="avatar" alt="" />
  </v-avatar>
</template>

<style scoped lang="scss">
.dxlliv-block__icon {
  &.text-grey {
    opacity: 0.5;
  }

  @media(max-width: 699px) {
    font-size: 150px !important;
  }

  @media(max-height: 699px) and (max-width: 1279px) {
    display: none;
  }
}
</style>