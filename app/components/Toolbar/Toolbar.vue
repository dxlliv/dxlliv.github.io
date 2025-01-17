<script setup lang="ts">
import {GitHubIcon, InstagramIcon} from "vue3-simple-icons";

const sliderHorizontalStore = useSliderHorizontalStore()
</script>

<template>
  <div class="dx-toolbar">

    <v-divider/>

    <v-row no-gutters>
      <v-col class="flex-grow-0" align-self="center">

        <v-breadcrumbs class="pl-4 pr-3 pl-sm-5 pr-sm-4 py-0">
          <v-breadcrumbs-item>

            <AppLogo name="toolbar" class="cursor-pointer"/>

            <ToolbarMenu/>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="flex-grow-1 px-0 text-right overflow-hidden" align-self="center">

        <ToolbarMarquee
            @click="sliderHorizontalStore.slideTo(0)"
        />

      </v-col>
      <v-col class="flex-grow-0" align-self="center">

        <v-breadcrumbs class="px-sm-5">
          <v-breadcrumbs-item class="hidden-xs">

            <a href="https://github.com/sponsors/dxlliv" target="_blank">
              <GitHubIcon :size="23"  style="margin-bottom: 2px;"/>
            </a>

          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="hidden-sm-and-up">

            <Icon
                name="lucide:calendar" :size="25"
                class="cursor-pointer"
            />
            <AgentDialog/>

          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="ml-3">

            <a href="https://instagram.com/dxlliv" target="_blank">
              <InstagramIcon :size="22" style="margin-bottom: 1px;"/>
            </a>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-divider vertical class="hidden-xs"/>
      <v-col class="hidden-xs flex-grow-0 px-5" align-self="center">

        <ToolbarAvailability>
          <AgentDialog/>
        </ToolbarAvailability>

      </v-col>
    </v-row>

  </div>
</template>

<style scoped lang="scss">
.dx-toolbar {
  height: var(--dx-toolbar-height);
  line-height: calc(var(--dx-toolbar-height) - 2px) !important;
  overflow: hidden;

  @media(max-width: 479px) {
    font-size: 16px;
  }
}

:deep(.v-badge__badge) {
  min-width: 12px;
  height: 12px;
  padding: 0;
}

.dx-logo {
  margin-top: -3px;
}

svg {
  vertical-align: middle;
}
</style>