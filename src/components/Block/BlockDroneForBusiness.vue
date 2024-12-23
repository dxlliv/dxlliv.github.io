<template>
  <BlockHeroCard>
    <BlockHeroTitle
        title="For every business"
    />

    <BlockHeroDescription>
      <p>
        Have a B&B or rental space?<br />
        Need some stunning aerial views.<br />
        Get in touch. Got you covered
      </p>
    </BlockHeroDescription>

    <BlockHeroActions>

      <BlockHeroButton
          href="mailto:hello@dxlliv.dev"
          class="ml-3"
      >
        Let's connect
        <ContactDialog />
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>
<script setup lang="ts">
import {InstagramIcon, YouTubeIcon} from "vue3-simple-icons";
</script>