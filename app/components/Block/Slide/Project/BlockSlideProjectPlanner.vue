<template>
  <BlockTemplateGitHub
      title="planner"
      :slide-next="false"
  >
    <p>
      {{$t('block.projectPlanner.description.line1')}}<br/>
      {{$t('block.projectPlanner.description.line2')}}
    </p>

    <template #trigger>
      <BlockHeroBottomSheet activator="parent">
        <BlockHeroBottomText>

          <a href="https://dxlliv.github.io/planner/" target="_blank">
            {{$t('block.projectPlanner.action')}}
          </a>

        </BlockHeroBottomText>
      </BlockHeroBottomSheet>
    </template>

  </BlockTemplateGitHub>
</template>