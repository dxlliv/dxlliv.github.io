<script setup lang="ts">
const legalLinks = [
  {
    slug: 'terms',
  },
  {
    slug: 'privacy',
  },
  {
    slug: 'cookie',
    class: 'hidden-sm-and-down'
  },
]

onMounted(() => {
  addEventListener("hashchange", () => {
    // dummy legal dialog handler, clear page hash after some time
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 1000)
  })
})
</script>

<template>
  <footer class="dxlliv-footer grid align-content-center text-center">

    <v-container>
      <div data-nosnippet class="text-overline text-grey-lighten-1">
        <div class="dxlliv-copyright">
          <a href="https://dxlliv.dev">dxlliv</a> – Your No Label Developer
          <span class="hidden-sm-and-down">
            – {{$t('common.vat')}}04421300981
          </span>
        </div>

        <div class="dxlliv-footer__legal">
          <a
              v-for="page of legalLinks"
              :class="['text-grey mx-1', page.class]"
              :href="`#${page.slug}`"
              v-text="$t(`legal.${page.slug}`)"
          />
        </div>
      </div>
    </v-container>

  </footer>
</template>

<style scoped lang="scss">
.dxlliv-footer {
  height: 10vh;

  @media(max-height: 800px) {
    padding: 28px 0;
  }

  .text-overline {
    line-height: 14px;

    @media(max-width: 370px) {
      font-size: 3.2vw !important;
    }
  }

  &__legal {
    @media(max-height: 600px) {
      display: none;
    }
  }
}
</style>