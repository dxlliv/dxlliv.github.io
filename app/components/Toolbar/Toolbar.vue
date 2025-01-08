<script setup lang="ts">
import {GitHubIcon, InstagramIcon} from "vue3-simple-icons";

const sliderHorizontalStore = useSliderHorizontalStore()
</script>

<template>
  <div class="dx-toolbar">

    <v-divider/>

    <v-row no-gutters>
      <v-col class="flex-grow-0 hidden-xs" align-self="center">

        <v-breadcrumbs class="px-5 py-0">
          <v-breadcrumbs-item to="/">

            <AppLogo name="toolbar"/>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="px-3 flex-grow-0 hidden-sm-and-down" align-self="center">

        <nuxt-link to="/experience" class="text-overline">
          Design
        </nuxt-link>

      </v-col>
      <v-col class="px-3 flex-grow-0 hidden-sm-and-down" align-self="center">

        <nuxt-link to="/drones" class="text-overline">
          Flying
        </nuxt-link>

      </v-col>
      <v-col class="px-3 flex-grow-0 hidden-md-and-down" align-self="center">

        <nuxt-link to="/archive" class="text-overline">
          Archive
        </nuxt-link>

      </v-col>
      <v-col class="flex-grow-1 ml-3 px-0 text-right overflow-hidden" align-self="center">

        <ToolbarMarquee
          @click="sliderHorizontalStore.slideTo(0)"
        />

      </v-col>
      <v-col class="flex-grow-0 hidden-xs" align-self="center">

        <v-breadcrumbs class="px-6">
          <v-breadcrumbs-item>

            <a href="https://github.com/sponsors/dxlliv" target="_blank">
              <GitHubIcon :size="22" style="margin-top: -1px;" />
            </a>

          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="ml-3">

            <a href="https://instagram.com/dxlliv" target="_blank">
              <InstagramIcon :size="21"/>
            </a>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-divider vertical/>
      <v-col class="flex-grow-0 px-5" align-self="center">

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
  opacity: 0.8;
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

svg {
  vertical-align: middle
}
</style>