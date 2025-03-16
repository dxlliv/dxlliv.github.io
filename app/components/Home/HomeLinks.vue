<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <ul class="dx-home__links mt-9">
    <li>
      <v-chip
          :href="appConfig.links.instagram"
          target="_blank"
      >
        <Icon name="simple-icons:instagram" :size="12" />
      </v-chip>
    </li>
    <li>
      <v-chip
          :href="appConfig.links.gridsky"
          target="_blank"
      >
        <Icon name="lucide:grid-3x3" :size="13" />
      </v-chip>
    </li>
    <li>
      <v-chip @click.prevent>
        <Icon name="lucide:coins" />
        <SupportLauncher />
      </v-chip>
    </li>
    <li>
      <v-chip class="text-overline" @click.stop>
        {{$t('home.link.contacts')}}

        <AgentLauncher />
      </v-chip>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul.dx-home__links {
  li {
    display: inline-block;
    margin: 0 4px;
  }
}
</style>