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
      :icon="icon" size="180"
      :class="[
        'dxlliv-block__icon v-icon--big mb-6 mb-md-0',
        {'text-grey': dark},
        {'text-grey-lighten-2': !dark},
      ]"
  />

  <v-avatar v-else-if="avatar" size="180px" class="mb-6 no-pointer-events">
    <v-img :src="avatar" alt="" />
  </v-avatar>
</template>

<style scoped lang="scss">
.dxlliv-block__icon {
  .text-grey {
    opacity: 0.25;
  }

  @media(max-width: 959px) {
    .v-icon--big {
      margin-top: -15px !important;
    }
  }
}
</style>