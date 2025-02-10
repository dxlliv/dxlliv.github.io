<template>
  <BlockHeroCard>
    <template #default="{ slideNext }">

      <BlockHeroTitle
          title="It's Diego Villa"
      />

      <BlockHeroDescription>
        <p>
          Shaping the dream. <span class="text-grey">199X</span><br/>
          {{$t('block.me.description.line2')}}<br/>
          {{$t('block.me.description.line3')}}
        </p>
      </BlockHeroDescription>

    </template>
  </BlockHeroCard>
</template>