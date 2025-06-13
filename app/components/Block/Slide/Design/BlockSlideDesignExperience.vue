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

        <BlockHeroButton
            :href="appConfig.links.email"
            class="px-0"
        >
          <Icon name="mdi:at" :size="20"/>
        </BlockHeroButton>

        <BlockHeroButton
            :href="appConfig.links.githubSponsors" target="_blank"
            class="px-0 ml-3"
        >
          <Icon name="simple-icons:github" :size="20"/>
          <ContactLauncher/>
        </BlockHeroButton>

        <BlockHeroButton
            :href="appConfig.links.discord"
            class="px-0 ml-3"
        >
          <Icon name="simple-icons:discord" :size="23"/>
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>