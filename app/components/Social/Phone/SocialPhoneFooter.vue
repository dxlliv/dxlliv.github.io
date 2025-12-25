<script setup lang="ts">

</script>

<template>
  <v-footer
      app
      :height="56"
      class="text-center"
      color="transparent"
  >
    <v-row>
      <v-col align-self="center">
        <nuxt-link to="/">
          <Icon name="lucide:home" :size="27" />
        </nuxt-link>
      </v-col>
      <v-col align-self="center">
        <nuxt-link to="/">
          <Icon name="lucide:search" :size="27" />
        </nuxt-link>
      </v-col>
      <v-col align-self="center">
        <nuxt-link to="/">
          <Icon name="lucide:square-plus" :size="28" />
        </nuxt-link>
      </v-col>
      <v-col align-self="center">
        <nuxt-link to="/">
          <Icon name="lucide:square-play" :size="28" />
        </nuxt-link>
      </v-col>
      <v-col align-self="center">
        <nuxt-link to="/">
          <Icon name="lucide:circle-user" :size="27" />
        </nuxt-link>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped lang="scss">
.v-footer {
  a {
    display: block;
  }

  .iconify {
    display: block;
    margin: 0 auto;
  }
}
</style>