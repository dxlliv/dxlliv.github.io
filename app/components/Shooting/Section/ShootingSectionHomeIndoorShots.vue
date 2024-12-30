<template>
  <ShootingSection>
    <BlockHeroContent
        image="/media/equipment/geprc-ds20.webp"
    >
      <template v-slot:description>

        <p v-html="$t('shooting.section.indoorShots.description.p1')"/>
        <p v-html="$t('shooting.section.indoorShots.description.p2')"/>

      </template>
    </BlockHeroContent>
  </ShootingSection>
</template>