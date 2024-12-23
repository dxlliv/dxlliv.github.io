<template>
  <BlockHeroCard>

    <BlockHeroTitle
        title="Attention to detail"
    />

    <BlockHeroDescription>
      <p>
        An independent developer<br />
        for websites and mobile apps<br />
        requiring extreme attention
      </p>
    </BlockHeroDescription>

    <BlockHeroActions>
      <BlockHeroButton
          href="https://github.com/sponsors/dxlliv"
      >
        Say hello
      </BlockHeroButton>

      <BlockHeroButton
          href="mailto:hello@dxlliv.dev"
          class="px-0 ml-3"
      >
        <v-icon icon="mdi-at" :size="20" />
        <ContactDialog />
      </BlockHeroButton>
    </BlockHeroActions>

  </BlockHeroCard>
</template>