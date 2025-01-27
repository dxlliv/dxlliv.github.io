<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <BlockHeroTitle
        title="GameAssist Apps"
        badge="Project"
    />

    <BlockHeroDescription>
      <p>
        Providing cheats & maps<br/>
        for Grand Theft Auto players<br/>
        on web, Android and iOS
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <a href="https://gta.codes" target="_blank">
          gta.codes
        </a>

        <BlockHeroButton
            variant="text" class="px-0 ml-2" target="_blank"
            href="https://play.google.com/store/apps/details?id=codes.gta.app"
        >
          <Icon name="simple-icons:googleplay" :size="16" class="text-black" />
        </BlockHeroButton>
        <BlockHeroButton
            variant="text" class="px-0 ml-n4" target="_blank"
            href="https://apps.apple.com/app/vice-cheats/id6738965421"
        >
          <Icon name="simple-icons:appstore" :size="16" class="text-black" />
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>