<script setup lang="ts">
import {GooglePlayIcon, AppStoreIcon} from "vue3-simple-icons";
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <BlockHeroTitle
        title="GameAssist Apps"
        badge="Demo"
    />

    <BlockHeroDescription>
      <p>
        Providing cheats & maps<br/>
        for Grand Theft Auto players<br/>
        on web, Android and iOS
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet>
      <BlockHeroBottomText>

        <a href="https://gta.codes" target="_blank">
          gta.codes
        </a>

        <BlockHeroButton
            variant="text" class="px-0 ml-2" target="_blank"
            href="https://play.google.com/store/apps/details?id=codes.gta.app"
        >
          <GooglePlayIcon :size="16" color="black"/>
        </BlockHeroButton>
        <BlockHeroButton
            variant="text" class="px-0 ml-n4" target="_blank"
            href="https://apps.apple.com/app/vice-cheats/id6738965421"
        >
          <AppStoreIcon :size="16" color="black"/>
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>