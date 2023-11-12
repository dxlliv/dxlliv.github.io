<script setup lang="ts">
import {GithubIcon, XIcon} from "vue3-simple-icons"
</script>

<template>
  <Section height="100vh">
    <BlockLeft
        class="dxlliv-block--website-property"
        :title="$t('pages.about.me.title')"
        icon="mdi-pencil-ruler-outline"
        intersect-scroll
    >
      <template v-slot:description>

        <p v-html="$t('pages.about.me.description.p1')" />
        <p v-html="$t('pages.about.me.description.p2')" class="pt-4" />

      </template>
      <template v-slot:actions>

        <v-btn
            size="large" href="https://linkedin.com/in/dxlliv"
            target="_blank" rounded flat color="primary"
            :text="$t('pages.about.me.action')"
        />

        <v-btn
            href="https://github.com/dxlliv" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <GithubIcon width="20px" />
        </v-btn>

        <v-btn
            href="https://x.com/dxlliv" target="_blank" ref="nofollow"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <XIcon width="20px" />
        </v-btn>

      </template>
    </BlockLeft>
  </Section>
</template>