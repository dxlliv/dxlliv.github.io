<script setup lang="ts">
import {useDisplay} from "vuetify";
import {InstagramIcon} from "vue3-simple-icons";

const appConfig = useAppConfig()
const display = useDisplay()

const emit = defineEmits(['close'])

const width = computed(() => {
  if (display.smAndDown.value) {
    return 72
  }

  if (display.mdAndUp.value) {
    return 96
  }

  return 64
})
</script>

<template>
  <v-navigation-drawer
      permanent rail app
      persistent
      :width="width"
      :rail-width="width"
      class="text-center"
  >

    <div class="dx-nav__top">
      <ShootingRec />
    </div>

    <v-list nav>
      <v-list-item class="mb-n1 hidden-md-and-up">
        <a class="cursor-pointer" @click="emit('close')">
          <v-icon icon="mdi-arrow-left" :size="30" color="grey-lighten-1" />
        </a>
      </v-list-item>
      <v-list-item class="mb-n2">
        <a :href="appConfig.links.instagram" target="_blank">
          <InstagramIcon />
        </a>
      </v-list-item>
      <!--
      <v-list-item class="mb-n2">
        <a :href="appConfig.links.youtube" target="_blank">
          <div class="dx-youtube-icon">
            <v-icon icon="mdi-play" />
          </div>
        </a>
      </v-list-item>
      -->
      <v-list-item class="mb-2">
        <a :href="appConfig.links.email">
          <v-icon icon="mdi-at" :size="27" />
        </a>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.dx-nav__top {
  margin-top: 72px;

  @media(max-width: 599px) {
    margin-top: 72px;
  }

  @media(max-height: 549px) {
    margin-top: 47px;
  }
}

.dx-youtube-icon {
  background: black;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin: 0 auto;

  :deep(i) {
    color: white;
    font-size: 19px;
    margin-top: -7px;
  }
}

.v-navigation-drawer {
  :deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column !important;
    justify-content: space-between;
  }

  .v-list {
    margin-bottom: 44px;

    @media(max-height: 549px) {
      margin-bottom: 25px;
    }
  }
}
</style>