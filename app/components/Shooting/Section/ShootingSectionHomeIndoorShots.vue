<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/geprc-ds20.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.indoorShots.description')"/>

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>