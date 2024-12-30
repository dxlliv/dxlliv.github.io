<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/dji-mini.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.regularShots.description.p1')" />
        <p v-html="$t('shooting.section.regularShots.description.p2')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>