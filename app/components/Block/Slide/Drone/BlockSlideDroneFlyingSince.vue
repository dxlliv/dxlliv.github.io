<template>
  <BlockHeroCard>
    <BlockHeroTitle
        :title="$t('block.dronesFlyingSince.title')"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.dronesFlyingSince.description.line1')}}<br/>
        {{$t('block.dronesFlyingSince.description.line2')}}<br/>
        {{$t('block.dronesFlyingSince.description.line3')}}
      </p>
    </BlockHeroDescription>
  </BlockHeroCard>
</template>