<template>
  <BlockHeroCard>
    <BlockHeroTitle
        title="It's Diego Villa"
    />

    <BlockHeroDescription>
      <p>
        Shaping the dream. 199X<br/>
        Self-built Developer by passion<br/>
        Drone Pilot by adventure
      </p>
    </BlockHeroDescription>

    <BlockHeroActions>
      <BlockHeroButton>
        Explore
      </BlockHeroButton>
    </BlockHeroActions>

    <BlockHeroBottomSheet>
      <BlockHeroBottomSheetList
        title="What you looking for?"
      >

        <v-list-item to="/drones">
          Immersive Clips
        </v-list-item>

        <v-list-item to="/experience">
          Design & Development
        </v-list-item>

      </BlockHeroBottomSheetList>
    </BlockHeroBottomSheet>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
a {
  margin: 0 8px;
}
</style>