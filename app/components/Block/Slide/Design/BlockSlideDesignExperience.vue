<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        :title="$t('block.designExperience.title')"
    />

    <BlockHeroDescription>
      {{$t('block.designExperience.description.line1')}}<br/>
      {{$t('block.designExperience.description.line2')}}<br/>
      {{$t('block.designExperience.description.line3')}}
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          {{$t('block.designExperience.action')}}
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