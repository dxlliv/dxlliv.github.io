<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/geprc-cl25.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.actionShots.description.p1')" />
        <p v-html="$t('shooting.section.actionShots.description.p2')" />

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>