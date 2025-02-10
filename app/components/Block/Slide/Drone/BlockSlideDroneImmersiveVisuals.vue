<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <BlockHeroCard>

    <BlockHeroTitle
        :title="$t('block.dronesImmersiveVisuals.title')"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.dronesImmersiveVisuals.description.line1')}}<br/>
        {{$t('block.dronesImmersiveVisuals.description.line2')}}<br/>
        {{$t('block.dronesImmersiveVisuals.description.line3')}}
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          {{$t('block.dronesImmersiveVisuals.action')}}
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