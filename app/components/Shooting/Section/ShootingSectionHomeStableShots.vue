<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/dji-mavic.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.stableShots.description.p1')" />
        <p v-html="$t('shooting.section.stableShots.description.p2')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>