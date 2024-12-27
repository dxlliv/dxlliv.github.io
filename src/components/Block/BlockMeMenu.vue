<script setup lang="ts">

</script>

<template>
  <BlockHeroBottomSheet>
    <template #default="{ close }">

      <BlockHeroBottomSheetList
          title="What you looking for"
      >

        <v-list-item @click.stop to="/drones">
          Immersive Shoots
        </v-list-item>

        <v-list-item @click.stop to="/experience">
          Design & Development
        </v-list-item>

      </BlockHeroBottomSheetList>

    </template>
  </BlockHeroBottomSheet>
</template>

<style scoped lang="scss">

</style>