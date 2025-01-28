<script setup lang="ts">
const appConfig = useAppConfig()
const skills = 'Web Development - Websites - Web Design - Web Applications - UI/UX - Pixel Perfect -'
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        title="Digital Consulting"
    />

    <BlockHeroDescription>
      <p>
        Extreme attention to details<br/>
        for your next awesome project.
      </p>
      <BlockHeroMarquee :text="skills" color="white"/>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          Let's begin
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