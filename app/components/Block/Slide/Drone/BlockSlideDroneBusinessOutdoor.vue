<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <BlockHeroCard>
    <BlockHeroTitle
        :title="$t('block.droneBusinessOutdoor.title')"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.droneBusinessOutdoor.description.line1')}}<br/>
        {{$t('block.droneBusinessOutdoor.description.line2')}}<br/>
        {{$t('block.droneBusinessOutdoor.description.line3')}}
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <BlockHeroButton :href="appConfig.links.portfolio">
          {{$t('block.droneBusinessOutdoor.action')}}
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