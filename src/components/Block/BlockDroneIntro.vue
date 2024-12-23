<template>
  <BlockHeroCard>
    <BlockHeroTitle
        title="Unforgettable clips"
    />

    <BlockHeroDescription>
      <p>
        Different kinds of drones,<br />
        offering both classic / immersive<br />
        cine-like memorable shots
      </p>
    </BlockHeroDescription>

    <BlockHeroActions>

      <BlockHeroButton
          href="mailto:hello@dxlliv.dev"
          class="px-0" @click.stop
      >
        <v-icon icon="mdi-at" :size="19" style="margin-top: -1px;" />
        <ContactDialog />
      </BlockHeroButton>

      <BlockHeroButton
          href="https://instagram.com/dxshooting" target="_blank"
          class="px-0 ml-3" @click.stop
      >
        <InstagramIcon width="16px" />
      </BlockHeroButton>

      <BlockHeroButton
          href="https://youtube.com/@dxshooting" target="_blank"
          class="px-0 ml-3" @click.stop
      >
        <YouTubeIcon width="18px" />
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>
<script setup lang="ts">
import {InstagramIcon, YouTubeIcon} from "vue3-simple-icons";
</script>