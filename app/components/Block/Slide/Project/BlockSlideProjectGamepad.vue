<template>
  <BlockTemplateGitHub
      title="gamepad"
      :slide-next="false"
  >
    <p>
      {{$t('block.projectGamepad.description.line1')}}<br/>
      {{$t('block.projectGamepad.description.line2')}}
    </p>

    <template #trigger>
      <BlockHeroBottomSheet activator="parent">
        <BlockHeroBottomText>

          <a href="https://dxlliv.github.io/gamepad.css/" target="_blank">
            {{$t('block.projectGamepad.action')}}
          </a>

          <BlockHeroButton
              variant="text" class="px-0" target="_blank"
              href="https://github.com/dxlliv/gamepad.css"
          >
            <Icon name="simple-icons:github" :size="16" class="text-black" />
          </BlockHeroButton>

        </BlockHeroBottomText>
      </BlockHeroBottomSheet>
    </template>

  </BlockTemplateGitHub>
</template>
<script setup lang="ts">
</script>