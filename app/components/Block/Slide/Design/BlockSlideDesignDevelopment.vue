<script setup lang="ts">
const appConfig = useAppConfig()
const {t} = useI18n()

const skills = 'HTML – CSS – JavaScript – TypeScript – Vue.js – Nuxt.js – Vuetify – Vite – SSR - SSG – Electron – Capacitor – Ionic -'
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        :title="$t('block.designDevelopment.title')"
    />

    <BlockHeroDescription>
      {{$t('block.designDevelopment.description.line1')}}<br/>
      {{$t('block.designDevelopment.description.line2')}}
      <BlockHeroMarquee :text="skills" color="white"/>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          {{$t('block.designDevelopment.action')}}
          <AgentLauncher/>
        </BlockHeroButton>

        <BlockHeroButton
            :href="appConfig.links.githubSponsors" target="_blank"
            class="px-0 ml-3"
        >
          <Icon name="simple-icons:github" :size="20"/>
          <ContactLauncher/>
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>