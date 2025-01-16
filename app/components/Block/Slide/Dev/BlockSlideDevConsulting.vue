<script setup lang="ts">
const appConfig = useAppConfig()
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
        Let's begin
      </BlockHeroButton>

      <BlockHeroButton
          :href="appConfig.links.email"
          class="px-0 ml-3"
      >
        <Icon name="mdi:at" :size="20" />
        <ContactDialog />
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>