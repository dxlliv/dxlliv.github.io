<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  author?: string
  wip?: boolean
}>(), {
  author: 'dxlliv'
})
</script>

<template>
  <BlockHeroCard>

    <v-chip v-if="wip" class="d-inline-block text-overline">work in progress</v-chip>

    <v-row no-gutters style="width: max-content;" class="flex mx-auto">
      <v-col class="flex-grow-0 text-right" align-self="center">

        <Icon name="simple-icons:github" class="mr-5" :size="38" />

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

<style scoped lang="scss">
.v-chip {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.25;
}
</style>