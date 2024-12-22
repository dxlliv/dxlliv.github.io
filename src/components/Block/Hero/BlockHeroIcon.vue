<script setup lang="ts">
defineProps<{
  icon?: string
  avatar?: string
}>()
</script>

<template>
  <v-icon
      v-if="icon && $vuetify.display.smAndUp"
      :icon="icon" :size="$vuetify.display.smAndDown ? 100 : 200"
      class="dx-block-hero__icon v-icon--big mt-n3 mt-lg-0 mb-8 mb-lg-0"
  />

  <v-avatar v-else-if="avatar" size="240px" class="mb-6 no-pointer-events">
    <v-img :src="avatar" alt="" />
  </v-avatar>
</template>

<style scoped lang="scss">
.dx-block-hero__icon {
  opacity: 0.1;

  @media(max-width: 699px), (max-height: 699px) {
    font-size: 150px !important;
    height: 160px !important;
    width: 160px !important;
  }

  @media(max-height: 599px) and (max-width: 1279px) {
    display: none;
  }
}
</style>