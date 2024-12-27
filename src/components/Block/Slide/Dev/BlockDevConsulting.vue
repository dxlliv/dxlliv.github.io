<script setup lang="ts">
import {GitHubIcon} from "vue3-simple-icons";
</script>

<template>
  <BlockHeroCard>

    <BlockHeroTitle
        title="Digital Consulting"
    />

    <BlockHeroDescription>
      <p>
        Extreme attention to details<br />
        for your next awesome project.<br />
        One of those perfectionists
      </p>
    </BlockHeroDescription>

    <BlockHeroActions @click.stop>

      <BlockHeroButton
          href="https://github.com/sponsors/dxlliv" target="_blank"
      >
        Let's start
      </BlockHeroButton>

      <BlockHeroButton
          href="mailto:hello@dxlliv.dev"
          class="px-0 ml-3"
      >
        <v-icon icon="mdi-at" :size="20" />
        <ContactDialog />
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>