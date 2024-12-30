<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/geprc-cl25.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.actionShots.description')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>