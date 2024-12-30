<script setup lang="ts">
const emit = defineEmits(['close', 'intersect'])

function onIntroTitleIntersect(isIntersecting: boolean) {
  if (isIntersecting) {
    emit('intersect')
  }
}
</script>

<template>
  <div class="dx-section-intro">
    <v-row no-gutters>

      <v-col class="flex-grow-0">

        <ShootingNav />

      </v-col>

      <v-col class="flex-grow-1" style="margin-left: 72px;">

        <div class="dx-section-intro__inner">

          <AppLogo
              name="shooting"
              :subtitle="$vuetify.display.sm && $vuetify.display.height > 600 || $vuetify.display.height > 700 || $vuetify.display.xs && $vuetify.display.height > 500"
          />

          <ShootingSectionIntroTitle
              v-intersect="onIntroTitleIntersect"
              @close="emit('close')"
          />

        </div>

      </v-col>

    </v-row>
  </div>
</template>

<style scoped lang="scss">
.dx-section-intro {
  height: 100%;
  overflow: hidden;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &__inner {
    padding: 64px;

    @media(max-width: 959px) {
      padding: 64px 36px;
    }

    @media(max-height: 399px) {
      .dx-logo {
        display: none;
      }
    }
  }
}
</style>