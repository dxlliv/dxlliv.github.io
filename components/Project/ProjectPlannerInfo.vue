<script setup lang="ts">
import {GithubIcon} from "vue3-simple-icons";

defineProps<{
  smart?: boolean
  compact?: boolean
}>()
</script>

<template>
  <v-card
      border flat
      href="https://dxlliv.github.io/planner/docs/" target="_blank"
      color="white"
      :class="['dxlliv-planner__info text-left', {'dxlliv-planner__info--compact': compact}]"
  >
    <template v-if="!smart" v-slot:title>
      dxlliv/planner
    </template>

    <template v-if="!smart" v-slot:subtitle>
      <div class="mt-1">
        Plan your profile<br class="hidden-sm" />
        grids like a pro
      </div>
    </template>

    <template v-if="!smart" v-slot:actions>
      <v-row no-gutters>
        <v-col align-self="center">
          <GithubIcon :width="16" />
        </v-col>
        <v-col class="text-right">
          <div class="text-overline">Draft</div>
        </v-col>
      </v-row>
    </template>

    <div
        class="grid text-center align-content-center fill-height"
        v-if="smart"
    >
      <div>
        planner
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.dxlliv-planner__info {
  @media(max-width: 959px) {
    aspect-ratio: inherit !important;
  }

  &--compact {
    height: 100%;
  }

  :deep(.v-card-title) {
    font-weight: bold !important;
    padding: 8px;
  }

  :deep(.v-card-subtitle) {
    padding: 8px;
    margin-top: -12px;
    line-height: 24px;
    font-size: 19px;
  }

  :deep(.v-card-actions) {
    position: absolute;
    bottom: 4px;
    left: 12px;
    right: 12px;

    .v-row {
      width: 100%;
    }

    svg {
      vertical-align: -4px;
    }

    @media(max-width: 959px) {
      left: 16px;
      right: 16px;
      bottom: 8px;
    }

    @media(max-width: 799px) {
      left: 16px;
      right: 16px;
      bottom: 4px;
    }

    @media(max-width: 350px) {
      display: none;
    }
  }

  .dxlliv-logo--planner {
    vertical-align: middle;
    margin-top: 6px;
    margin-right: 3px;
  }
}
</style>