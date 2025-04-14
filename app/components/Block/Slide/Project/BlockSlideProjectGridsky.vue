<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <BlockHeroTitle
        title="Gridsky Social"
        badge="Project"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.projectGridsky.description.line1')}}<br/>
        {{$t('block.projectGridsky.description.line2')}}<br/>
        {{$t('block.projectGridsky.description.line3')}}
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <a href="https://minimal.gridsky-social.pages.dev" target="_blank">
          {{$t('block.projectGridsky.action')}}
        </a>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>