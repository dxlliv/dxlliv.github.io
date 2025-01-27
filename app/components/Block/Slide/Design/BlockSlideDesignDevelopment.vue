<script setup lang="ts">
const skills = 'HTML – CSS – JavaScript – TypeScript – Vue.js – Nuxt.js – Vuetify – Vite – SSR - SSG – Electron – Capacitor – Ionic -'
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        title="Your No-Label Dev"
    />

    <BlockHeroDescription>
      An independent developer<br/>
      for websites, web apps & more.
      <AppMarquee :text="skills" color="white"/>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton>
          Say hello
          <AgentLauncher/>
        </BlockHeroButton>

        <BlockHeroButton
            href="https://github.com/sponsors/dxlliv" target="_blank"
            class="px-0 ml-3"
        >
          <Icon name="simple-icons:github" :size="20"/>
          <ContactDialog/>
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>