<script setup lang="ts">
import {GithubIcon,InstagramIcon} from "vue3-simple-icons";
import {useDisplay} from "vuetify";

defineProps<{
  center: boolean
}>()

const emit = defineEmits(['select'])
const display = useDisplay()

const plannerSmart = computed(() => {
  return false
  return display.mdAndDown.value || display.height.value < 880 || (display.width.value > 1279 && display.width.value < 1475)
})
</script>

<template>
  <v-card
      :class="['dxlliv-planner mx-auto py-1']"
      flat color="transparent"
      width="100%" :max-width="500"
  >

    <v-row class="dxlliv-planner__row-1 mx-n2">
      <v-col class="pa-2">
        <ProjectPlannerImage image="2" />
      </v-col>
      <v-col class="pa-2">
        <ProjectPlannerImage image="5" />
      </v-col>
    </v-row>

    <v-row
        class="dxlliv-planner__row-1 mx-n2"
        v-if="$vuetify.display.smAndDown && $vuetify.display.height > 880"
    >
      <v-col class="pa-2">
        <ProjectPlannerImage image="6x1" />
      </v-col>
      <v-col class="pa-2">
        <ProjectPlannerImage image="6x2" />
      </v-col>
    </v-row>

    <v-row
        class="mx-n2"
        v-if="$vuetify.display.mdAndUp"
    >
      <v-col class="pa-2">
        <ProjectPlannerImage image="6x1" />
      </v-col>
      <v-col class="pa-2">

        <ProjectPlannerInfo :smart="plannerSmart" />
      </v-col>
    </v-row>

    <v-row
        class="mx-n2"
        v-else
    >
      <v-col class="pa-2">
        <ProjectPlannerInfo
            :smart="plannerSmart"
            :compact="$vuetify.display.smAndDown"
        />
      </v-col>
    </v-row>

  </v-card>
</template>

<style scoped lang="scss">
.dxlliv-planner {
  /*
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 64px;
  transform: none;
  transition: transform 0.5s ease-in-out, bottom 0.5s ease-in-out;
  transition-delay: 0.5s;
  will-change: transform, bottom;
   */

  &__row-1 {
    @media (max-height: 799px) {
      //display: none;
    }
  }

  .v-card {
    //margin: 8px;
    border-radius: 20px;
    aspect-ratio: 1;

    @media(max-height: 479px) {
      max-height: 60vh;
    }

    :deep(img) {
      aspect-ratio: 1;
    }
  }
}
</style>
