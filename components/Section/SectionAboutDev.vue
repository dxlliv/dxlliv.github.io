<template>
  <Section class="dxlliv-section--about-dev" height="90vh">
    <BlockLeft
        :title="$t('pages.about.dev.title')"
        icon="mdi-factory"
        intersect-scroll
    >
      <template v-slot:description>

        <p v-html="$t('pages.about.dev.description.p1')"/>
        <p v-html="$t('pages.about.dev.description.p2')" class="pt-4" />

      </template>
      <template v-slot:actions>

        <v-btn
            rounded flat color="primary" size="large"
            :text="$t('pages.about.dev.action')"
            href="mailto:hello@dxlliv.dev"
        />

      </template>
    </BlockLeft>
  </Section>
</template>