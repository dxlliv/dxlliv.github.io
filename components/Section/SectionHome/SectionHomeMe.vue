<script setup lang="ts">
import {GithubIcon, XIcon} from "vue3-simple-icons"
</script>

<template>
  <Section height="100%">
    <BlockHeroLeft
        :title="$t('pages.home.me.title')"
        icon="mdi-pencil-ruler-outline"
    >
      <template v-slot:description>

        <p v-html="$t('pages.home.me.description.p1')" />
        <p v-html="$t('pages.home.me.description.p2')" />

      </template>
      <template v-slot:actions>

        <v-btn
            to="/about"
            rounded flat color="primary" size="large"
            :text="$t('pages.home.me.action')"
        />

        <v-btn
            href="https://github.com/dxlliv" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <GithubIcon width="19px" style="margin-top: -1px;" />
        </v-btn>

        <v-btn
            href="https://x.com/dxlliv" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <XIcon width="17px" />
        </v-btn>

      </template>
    </BlockHeroLeft>
  </Section>
</template>