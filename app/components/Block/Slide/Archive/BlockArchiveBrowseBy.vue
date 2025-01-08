<template>
  <BlockHeroCard>

    <BlockHeroDescription no-margin>
      <v-card flat class="mt-n4">
        <v-list class="overflow-hidden text-blue-grey text-h2">
          <v-list-item>
            2024
          </v-list-item>
        </v-list>
      </v-card>

    </BlockHeroDescription>

    <BlockHeroBottomSheet fullscreen>
      <BlockHeroCard>
        <BlockHeroTitle
            title="A leap into 2024"
        />
        <BlockHeroDescription>

          I just created this section,<br />
          so let me share a bit about 2024<br />
          before moving on and rox

          <BlockHeroActions>
            <BlockHeroButton
                to="/archive/2024/001-finally-switched-to-elrs"
                @click.stop
            >
              Take a look
            </BlockHeroButton>
          </BlockHeroActions>

        </BlockHeroDescription>
      </BlockHeroCard>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>
<script setup lang="ts">
</script>