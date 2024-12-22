<script setup lang="ts">
import {GitHubIcon} from "vue3-simple-icons";
</script>

<template>
  <BlockHeroCard>

    <BlockHeroTitle
        title="No-Label Development"
    />

    <BlockHeroDescription>
      <p>
        Hire an expert consultant<br />
        for your next awesome project.<br />
        I focus on Vue.js from 2018
      </p>
    </BlockHeroDescription>

    <BlockHeroActions>

      <BlockHeroButton to="/experience">
        About me
      </BlockHeroButton>

      <BlockHeroButton
          href="https://github.com/sponsors/dxlliv" target="_blank"
          size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
      >
        <GitHubIcon width="19px" style="margin-top: -1px;" />
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>