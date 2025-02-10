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

  </BlockHeroCard>
</template>