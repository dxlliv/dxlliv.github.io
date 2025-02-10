<template>
  <BlockHeroCard>
    <BlockHeroTitle
        :title="$t('block.droneBusinessBNB.title')"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.droneBusinessBNB.description.line1')}}<br/>
        {{$t('block.droneBusinessBNB.description.line2')}}<br/>
        {{$t('block.droneBusinessBNB.description.line3')}}
      </p>
    </BlockHeroDescription>

  </BlockHeroCard>
</template>