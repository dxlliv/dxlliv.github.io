<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <v-breadcrumbs class="d-block text-center">
    <v-breadcrumbs-item>

      <a :href="appConfig.links.instagram" target="_blank">
        <Icon name="simple-icons:instagram" :size="22"/>
      </a>

    </v-breadcrumbs-item>
    <v-breadcrumbs-item>

      <a :href="appConfig.links.email">
        <Icon name="mdi:at" :size="25"/>
      </a>

    </v-breadcrumbs-item>
    <v-breadcrumbs-item>

      <a class="cursor-pointer">
        <Icon name="lucide:messages-square" :size="24" style="vertical-align: -3px;"/>
        <AgentLauncher />
      </a>

    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<style scoped lang="scss">
.v-breadcrumbs-item {
  margin-left: 4px;
  margin-right: 4px;
}
</style>