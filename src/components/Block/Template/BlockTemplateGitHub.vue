<script setup lang="ts">
import {GitHubIcon} from "vue3-simple-icons";

withDefaults(defineProps<{
  title: string
  author?: string
}>(), {
  author: 'dxlliv'
})
</script>

<template>
  <BlockHeroCard>

    <v-row no-gutters style="width: max-content;" class="flex mx-auto">
      <v-col class="flex-grow-0 text-right" align-self="center">

        <GitHubIcon :size="38" class="mr-5"/>

      </v-col>
      <v-col class="flex-grow-0 text-left" align-self="center">

        <div class="mt-n2">
          <div style="font-size: 17px;" class="text-grey-darken-1" v-text="author"/>
          <div style="font-size: 20px;" class="font-weight-bold mt-n2" v-text="title"/>
        </div>

      </v-col>
    </v-row>

    <div class="text-center text-grey-darken-2 mt-8">
      <slot/>
    </div>


    <slot name="trigger"/>

  </BlockHeroCard>
</template>