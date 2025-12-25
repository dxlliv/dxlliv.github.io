<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <v-row no-gutters>
    <v-col class="flex-grow-0" align-self="center">

      <v-breadcrumbs class="pl-4 pr-3 pl-sm-5 pr-sm-4 py-0">
        <v-breadcrumbs-item to="/">

          <AppLogo name="toolbar" class="cursor-pointer mb-1"/>

        </v-breadcrumbs-item>
      </v-breadcrumbs>

    </v-col>
    <v-col class="flex-grow-1 px-0 text-right overflow-hidden" align-self="center">

      <ToolbarStatus />
      <!--
      <ToolbarMarquee/>
      -->

    </v-col>
    <v-col class="flex-grow-0" align-self="center">
      
      <v-breadcrumbs class="py-0">
        <v-breadcrumbs-item class="mx-n4">

          <v-btn
            :href="appConfig.links.discord"
            :width="68" :height="68"
            variant="plain" :ripple="false"
          >
            <Icon name="simple-icons:discord" :size="23"/>
          </v-btn>

        </v-breadcrumbs-item>
        <v-breadcrumbs-item class="mx-n4">

          <v-btn
            :href="appConfig.links.email"
            :width="68" :height="68"
            variant="plain" :ripple="false"
          >
           <Icon name="mdi:at" :size="23"/>
          </v-btn>

        </v-breadcrumbs-item>
        <v-breadcrumbs-item class="mx-n4">

          <v-btn
            :href="appConfig.links.whatsapp"
            :width="68" :height="68"
            variant="plain" :ripple="false"
          >
           <Icon name="simple-icons:whatsapp" :size="19"/>
          </v-btn>

        </v-breadcrumbs-item>
      </v-breadcrumbs>

    </v-col>
    <!--
    <v-divider vertical class="hidden-xs"/>
    <v-col class="hidden-xs flex-grow-0 px-5" align-self="center">

      <ToolbarAvailability>
        <AgentLauncher/>
      </ToolbarAvailability>

    </v-col>
    -->
  </v-row>
</template>

<style scoped lang="scss">
.v-breadcrumbs-item {
  :deep(a) {
    display: flex;
  }
}
</style>