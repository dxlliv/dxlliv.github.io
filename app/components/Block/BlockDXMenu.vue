<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <BlockHeroBottomSheet fullscreen activator="parent">
    <BlockHeroCard>
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
              name="lucide:layout-grid"
              class="mr-1"
              style="vertical-align: -3px;"
          />
          Home Screen
        </v-list-item>

      </BlockHeroList>
    </BlockHeroCard>
  </BlockHeroBottomSheet>
</template>