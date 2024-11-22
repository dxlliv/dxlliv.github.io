<script setup lang="ts">
defineProps<{
  href: string
  title: string
  image: string
}>()
</script>

<template>
  <v-card
      rounded :ripple="false"
      color="white"
      flat class="fill-height"
      width="100%"
      height="150px"
      :href="website" target="_blank"
  >
    <v-row no-gutters class="fill-height text-center">
      <v-col align-self="center">

        <v-img
            :src="`/project/${image}`"
            :alt="title"
            width="150px"
            class="mx-auto"
        />

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">

</style>