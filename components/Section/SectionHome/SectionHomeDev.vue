<script setup lang="ts">
import {InstagramIcon, LinkedinIcon} from "vue3-simple-icons";
</script>

<template>
  <Section height="100%">
    <BlockHeroLeft
        :title="$t('pages.home.dev.title')"
        icon="mdi-shimmer"
    >
      <template v-slot:description>

        <p v-html="$t('pages.home.dev.description.p1')" />
        <p v-html="$t('pages.home.dev.description.p2')" />

      </template>
      <template v-slot:actions>

        <v-btn
            rounded flat color="primary" size="large"
        >
          {{$t('pages.home.dev.action')}}
          <ContactDialog />
        </v-btn>

        <v-btn
            href="https://linkedin.com/in/dxlliv" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <LinkedinIcon width="16px" />
        </v-btn>

        <v-btn
            href="https://instagram.com/dxlliv"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <InstagramIcon width="16px" />
        </v-btn>

      </template>
    </BlockHeroLeft>
  </Section>
</template>