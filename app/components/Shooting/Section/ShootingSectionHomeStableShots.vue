<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/dji-mavic.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.stableShots.description')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>