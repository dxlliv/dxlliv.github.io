<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <BlockHeroBottomSheet
      activator="parent"
      fullscreen :close-on-content-click="false"
  >
    <BlockHeroCard :slide-next="false">
      <BlockHeroList>

        <v-list-item
            :to="localeRoute('/drones')"
        >
          {{$t('block.menu.drones')}}
        </v-list-item>

        <v-list-item
            :to="localeRoute('/design')"
        >
          {{$t('block.menu.design')}}
        </v-list-item>

        <v-list-item
            :to="localeRoute('/')"
        >
          <Icon
              name="line-md:grid-3-filled"
              class="mr-1"
              style="vertical-align: -3px;"
          />
          Home Screen
        </v-list-item>

      </BlockHeroList>
    </BlockHeroCard>
  </BlockHeroBottomSheet>
</template>