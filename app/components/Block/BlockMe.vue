<template>
  <BlockHeroCard
      id="me-block"
      :slide-next="$vuetify.display.xs"
  >
    <template #default="{ slideNext }">

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

      <BlockMeMenu
          v-if="$vuetify.display.smAndUp"
      />

      <BlockHeroActions
          v-else
      >
        <BlockHeroButton>
          Welcome

          <BlockMeMenu
              attach="#me-block"
          />
        </BlockHeroButton>
      </BlockHeroActions>

    </template>
  </BlockHeroCard>
</template>
<script setup lang="ts">
</script>