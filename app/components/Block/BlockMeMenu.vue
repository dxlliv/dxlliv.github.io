<script setup lang="ts">

</script>

<template>
  <BlockHeroBottomSheet>
    <template #default="{ close }">

      <BlockHeroBottomSheetList
          title="What you looking for"
      >

        <v-list-item @click.stop to="/drones">
          Immersive Shots
        </v-list-item>

        <v-list-item @click.stop to="/experience" class="mt-n1">
          Design & Development
        </v-list-item>

        <v-list-item @click.stop class="mt-n1">
          Let's get in touch
          <AgentDialog />
        </v-list-item>

      </BlockHeroBottomSheetList>

    </template>
  </BlockHeroBottomSheet>
</template>

<style scoped lang="scss">

</style>