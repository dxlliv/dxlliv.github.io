<script setup lang="ts">
const appConfig = useAppConfig()
const {t} = useI18n()

const skills = t('block.designConsulting.description.line3')
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >

    <BlockHeroTitle
        :title="$t('block.designConsulting.title')"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.designConsulting.description.line1')}}<br/>
        {{$t('block.designConsulting.description.line2')}}
      </p>
      <BlockHeroMarquee :text="skills" color="white"/>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton :href="appConfig.links.whatsapp" target="_blank">
          {{$t('block.designConsulting.action')}}
        </BlockHeroButton>

        <BlockHeroButton
            :href="appConfig.links.email" target="_blank"
            class="px-0 ml-3"
        >
          <Icon name="lucide:at-sign" :size="17"/>
        </BlockHeroButton>


      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>