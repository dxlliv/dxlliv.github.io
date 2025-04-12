<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <v-row no-gutters>
    <v-col class="flex-grow-0" align-self="center">

      <v-breadcrumbs class="pl-4 pr-3 pl-sm-5 pr-sm-4 py-0">
        <v-breadcrumbs-item to="/">

          <AppLogo name="toolbar" class="cursor-pointer" style="margin-bottom: 2px;"/>

        </v-breadcrumbs-item>
      </v-breadcrumbs>

    </v-col>
    <v-col class="flex-grow-1 px-0 text-right overflow-hidden" align-self="center">

      <ToolbarMarquee/>

    </v-col>
    <v-col class="flex-grow-0" align-self="center">

      <v-breadcrumbs class="px-sm-5 py-0">
        <v-breadcrumbs-item class="ml-2">

          <a :href="appConfig.links.email">
            <Icon name="mdi:at" :size="25"/>
          </a>

        </v-breadcrumbs-item>
      </v-breadcrumbs>

    </v-col>
    <v-divider vertical class="hidden-xs"/>
    <v-col class="hidden-xs flex-grow-0 px-5" align-self="center">

      <ToolbarAvailability>
        <AgentLauncher/>
      </ToolbarAvailability>

    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.v-breadcrumbs-item {
  :deep(a) {
    display: flex;
  }
}
</style>