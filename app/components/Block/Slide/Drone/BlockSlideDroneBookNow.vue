<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <BlockHeroCard
    :slide-next="false"
  >
    <BlockHeroList>
      <v-list-item :href="appConfig.links.instagram" target="_blank">
        Instagram
      </v-list-item>
      <v-list-item :href="appConfig.links.email">
        Drop an e-mail
      </v-list-item>
      <v-list-item :href="appConfig.links.whatsapp" target="_blank">
        WhatsApp
      </v-list-item>
    </BlockHeroList>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.v-date-picker-controls__month-btn),
:deep(.v-date-picker-controls__mode-btn) {
  pointer-events: none;
}

:deep(.v-date-picker-month__day--hide-adjacent) {
  display: none;
}
</style>