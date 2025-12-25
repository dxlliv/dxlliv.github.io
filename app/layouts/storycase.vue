<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  document.documentElement.classList.remove('dx-no-overflow')
})

onBeforeUnmount(() => {
  document.documentElement.classList.add('dx-no-overflow')
})

watch(() => route.fullPath, () =>  {
  document
      .querySelector('.dx-storycase-layout')
      .scrollTo({ top: 0, left: 0, behavior: 'smooth' })
})
</script>

<template>
  <v-layout>

    <v-main class="ma-0 pa-0 text-center text-md-left">

      <!--
      <component
          v-if="$vuetify.display.smAndDown"
          v-for="(block, blockIndex) in storycase.columns[0]"
          :key="blockIndex"
          :is="componentsMap[block.type]"
          v-bind="block"
      />
      -->

      <StorycaseHeader class="text-left" />

      <div class="dx-layer-decoration-left"/>
      <div class="dx-layer-decoration-right"/>

      <div class="dx-storycase-layout">
        <div class="dx-storycase-layout__xxx" />

        <slot />

        <v-divider />
        <div class="dx-storycase-layout__xxx" />
      </div>

    </v-main>

  </v-layout>
</template>

<style lang="scss">
:root {
  --dx-storycase-width: 1280px;

  @media(max-width: 1279px) {
    --dx-storycase-width: calc(100vw) !important;
  }
}
</style>

<style scoped lang="scss">
header {
  position: relative;
  z-index: 10;
}

:deep(video) {
  background: #333;
}

.v-main {
  @media(min-width: 1280px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.dx-storycase-layout {
  @media(min-width: 1280px) {
    width: 1280px !important;
    margin: 0 auto !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 36px;
    max-height: calc(100dvh - 48px - 48px - 236px);
    aspect-ratio: 16/9;
    overflow-y: auto;
  }

  :deep(.dx-storycase-configurator) {
    margin: 0 !important;
  }

  :deep(.dx-storycase-related) {
    margin: 0 !important;
  }

  :deep(.dx-storycase-block-video) {
    margin: 0 !important;
  }

  &__xxx {
    position: relative;
    height: 64px;
    background-color: black;
    z-index: -1;

    @media(max-width: 767px) {
      display: none;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><line x1='0' y1='0' x2='40' y2='40' stroke='%23555' stroke-width='2'/><line x1='0' y1='40' x2='40' y2='0' stroke='%23555' stroke-width='1'/></svg>");
      background-repeat: repeat;
      background-size: 13px 13px;
      background-position: 0 7px;
      content: '';
      opacity: 0.5;
    }

    @media(max-width: 1279px) {
      display: none;
    }
  }
}

/*


.dx-layer-decoration-right {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 60px;
  right: 50%;
  transform: translateX(((1280px / 2)) + 60px);
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  background-color: black;
  z-index: -1;

  @media(max-width: 767px) {
    display: none;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><line x1='0' y1='0' x2='40' y2='40' stroke='%23555' stroke-width='2'/><line x1='0' y1='40' x2='40' y2='0' stroke='%23555' stroke-width='1'/></svg>");
    background-repeat: repeat;
    background-size: 13px 13px;
    background-position: 0 7px;
    content: '';
    opacity: 0.5;
  }

  @media(max-width: 1279px) {
    display: none;
  }
}
 */

/*
.dx-layer-decoration-right {
  position: fixed;
  top: 0;
  bottom: 0;
  left: calc(var(--dx-storycase-width) + var(--dx-storycase-margin-left));
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  background-color: black;
  z-index: -1;

  @media(max-width: 767px) {
    display: none;
  }
}
 */

:deep(.v-divider) {
  border-color: #181818;
  opacity: 1;
}

:deep(.v-container) {
  position: relative;
  padding: 0;
  width: 100%;
  max-width: 100%;

  @media(min-width: 1280px) {
    padding: 0;
    max-width: var(--dx-storycase-width) !important;
  }
}

/*
:deep(.v-container) {
  position: relative;
  padding-left: 64px !important;
  max-width: 100vw;
  width: 84vw;
}
 */

:deep(.text-h1) {
  @media(max-width: 1279px) {
    font-size: 56px !important;
  }
  @media(max-width: 639px) {
    font-size: 48px !important;
  }
}

:deep(.text-h2) {
  margin-bottom: 12px;
  color: white;
  opacity: 0.5;
}

:deep(.text-h5) {
  @media(max-width: 1279px) {
    font-size: 1.3rem !important;
  }
}
</style>