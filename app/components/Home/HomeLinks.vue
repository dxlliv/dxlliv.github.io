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
        <v-tooltip activator="parent" location="bottom" content-class="text-overline">
          Instagram
        </v-tooltip>
      </v-chip>

    </li>
    <li>

      <v-chip
          :href="appConfig.links.gridsky"
          target="_blank"
      >
        <Icon name="lucide:grid-3x3" :size="13" />
        <v-tooltip activator="parent" location="bottom" content-class="text-overline">
          Gridsky
        </v-tooltip>
      </v-chip>

    </li>
    <li>

      <v-chip class="text-overline" @click.stop>
        {{$t('home.link.contact.title')}}

        <AgentLauncher />

        <v-tooltip activator="parent" location="bottom" content-class="text-overline">
          {{$t('home.link.contact.tooltip')}}
        </v-tooltip>
      </v-chip>

    </li>
    <li>

      <v-chip @click.prevent variant="text" color="grey-darken-2">
        <Icon name="line-md:coffee-half-empty-twotone-loop" :size="16" style="margin-top: -2px;" />

        <SupportLauncher />

        <v-tooltip activator="parent" location="bottom" content-class="text-overline">
          {{$t('home.link.support.tooltip')}}
        </v-tooltip>
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