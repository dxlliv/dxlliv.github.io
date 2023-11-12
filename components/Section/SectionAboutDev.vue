<template>
  <Section class="dxlliv-section--about-dev" height="90vh">
    <BlockLeft
        :title="$t('pages.about.dev.title')"
        icon="mdi-factory"
        intersect-scroll
    >
      <template v-slot:description>

        <p v-html="$t('pages.about.dev.description.p1')"/>

      </template>
      <template v-slot:actions>

        <v-btn
            rounded flat color="primary" size="large"
            :text="$t('common.action.getQuote')"
            href="mailto:hello@dxlliv.dev"
        />

      </template>
    </BlockLeft>
  </Section>
</template>