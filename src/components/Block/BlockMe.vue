<template>
  <BlockHeroCard>
    <BlockHeroTitle
        title="It's Diego Villa"
    />

    <BlockHeroDescription>
      <p>
        Shaping the dream. <span class="text-grey">199X</span><br/>
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

        <v-list-item class="mt-n2" to="/experience">
          Design & Development
        </v-list-item>

      </BlockHeroBottomSheetList>
    </BlockHeroBottomSheet>
  </BlockHeroCard>
</template>