<template>
  <BlockTemplateGitHub
      author="gridsky"
      title="launcher"
      :slide-next="false"
  >
    {{$t('block.projectGridsky.description.line1')}}<br/>
    {{$t('block.projectGridsky.description.line2')}}

    <template #trigger>
      <BlockHeroBottomSheet activator="parent">
        <BlockHeroBottomText>

          <a href="https://gridsky-app.github.io/launcher/" target="_blank">
            {{$t('block.projectGridsky.action')}}
          </a>

        </BlockHeroBottomText>
      </BlockHeroBottomSheet>
    </template>

  </BlockTemplateGitHub>
</template>