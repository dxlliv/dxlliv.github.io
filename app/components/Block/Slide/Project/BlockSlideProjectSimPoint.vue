<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <BlockHeroTitle
        title="Sim Racing Point"
        badge="Project"
        color="grey-darken-2"
    />

    <BlockHeroDescription>
      <p>
        {{$t('block.projectSimPoint.description.line1')}}<br/>
        {{$t('block.projectSimPoint.description.line2')}}<br/>
        {{$t('block.projectSimPoint.description.line3')}}
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <a href="https://simpoint.racing" target="_blank">
          {{$t('block.projectSimPoint.action')}}
        </a>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>
<script setup lang="ts">
</script>