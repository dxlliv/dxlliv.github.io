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
            :to="localeRoute('/design')"
        >
          {{$t('block.menu.design')}}
        </v-list-item>

        <v-list-item
            href="https://dxshooting.click"
        >
          {{$t('block.menu.drones')}}
        </v-list-item>

       <v-list-item
            :to="localeRoute('/')"
        >
          <Icon
              name="ri:home-line"
              class="mr-1"
              style="vertical-align: -3px;"
              :size="18"
          />
          Home
        </v-list-item>

      </BlockHeroList>
    </BlockHeroCard>
  </BlockHeroBottomSheet>
</template>