<template>
  <Section height="90vh">
    <BlockLeft
        class="dxlliv-block--website-property"
        :title="$t('pages.home.about.title')"
        avatar="https://avatars.githubusercontent.com/u/57679387?v=4"
        intersect-scroll
    >
      <template v-slot:description>

        <p v-html="$t('pages.home.about.description.p1')" />
        <p v-html="$t('pages.home.about.description.p2')" class="mt-3" />

      </template>
      <template v-slot:actions>

        <v-btn
            size="large" to="/diego-villa" rounded flat color="primary"
            :text="$t('pages.home.about.action')"
        />

        <client-only>
          <v-tooltip content-class="bg-grey-darken-2" location="right" :open-delay="1000">
            <span>hello@dxlliv.dev</span>
            <template v-slot:activator="{ props }">
              <v-btn
                  v-bind="props"
                  flat color="primary" rounded href="mailto:hello@dxlliv.dev"
                  width="44px" height="44px" class="ml-3 px-0" min-width="32px"
              >
                <v-icon icon="mdi-at" size="20px" />
              </v-btn>
            </template>
          </v-tooltip>
        </client-only>

      </template>
    </BlockLeft>
  </Section>
</template>
<script setup lang="ts">
</script>