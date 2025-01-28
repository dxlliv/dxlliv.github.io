<template>
  <BlockHeroBottomSheet fullscreen activator="parent">
    <BlockHeroCard>
      <BlockHeroList>

        <v-list-item to="/drones">
          Immersive Shots
        </v-list-item>

        <v-list-item to="/design">
          Design & Development
        </v-list-item>

        <v-list-item to="/">
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