<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        title="Commissions open"
    />

    <BlockHeroDescription>
      What are you looking for?<br/>
      Playing the game since 2008<br/>
      so feel free to reach out
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          Let's chat
          <AgentLauncher/>
        </BlockHeroButton>

        <BlockHeroButton
            :href="appConfig.links.email"
            class="px-0 ml-3"
        >
          <Icon name="mdi:at" :size="20"/>
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>