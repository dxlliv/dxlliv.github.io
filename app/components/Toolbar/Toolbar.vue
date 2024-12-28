<script setup lang="ts">
import {GitHubIcon, InstagramIcon} from "vue3-simple-icons";

const sliderHorizontalStore = useSliderHorizontalStore()
</script>

<template>
  <div class="dx-toolbar">

    <v-divider/>

    <v-row no-gutters>
      <v-col class="flex-grow-0 hidden-xs" align-self="center">

        <v-breadcrumbs class="px-5">
          <v-breadcrumbs-item to="/">

            <AppLogo name="toolbar"/>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="flex-grow-1 px-0 text-right overflow-hidden" align-self="center">

        <ToolbarMarquee
          @click="sliderHorizontalStore.slideTo(0)"
          class="mt-n1"
        />

      </v-col>
      <v-col class="flex-grow-0 hidden-xs" align-self="center">

        <v-breadcrumbs class="px-5 mt-n1">
          <v-breadcrumbs-item href="https://github.com/sponsors/dxlliv" target="_blank">

            <GitHubIcon :size="21" style="margin-top: -1px;"/>

          </v-breadcrumbs-item>
          <v-breadcrumbs-item href="https://instagram.com/dxlliv" target="_blank" class="ml-3">

            <InstagramIcon :size="20"/>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-divider vertical/>
      <v-col class="flex-grow-0 px-5 py-4" align-self="center">

        <ToolbarAvailability class="mt-n1">
          <ContactDialog v-if="$vuetify.display.smAndUp"/>
          <ContactBottomSheet v-else/>
        </ToolbarAvailability>

      </v-col>
    </v-row>

  </div>
</template>

<style scoped lang="scss">
.dx-toolbar {
  height: var(--dx-toolbar-height);
  opacity: 0.6;
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