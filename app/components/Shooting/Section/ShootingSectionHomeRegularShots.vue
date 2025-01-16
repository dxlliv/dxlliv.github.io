<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/dji-mini.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.regularShots.description')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>