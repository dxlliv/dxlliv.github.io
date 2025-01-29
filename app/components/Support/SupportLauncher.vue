<script setup lang="ts">
const supportList = [
  {
    icon: "simple-icons:github",
    title: "Support via GitHub",
    href: "https://github.com/sponsors/dxlliv",
  },
  {
    icon: "simple-icons:paypal",
    title: "Support via PayPal",
    href: "https://paypal.me/dxlliv",
  },
  {
    icon: "simple-icons:bitcoin",
    title: "Support via Bitcoin",
    prompt: "bc1pfg9u4dawenprmexr5hd67085kypr3xml0apujvrehy94e9klaqvqxxg2kj"
  },
]

function onSupportMethodClick(method: any) {
  if (method.href) {
    window.open(method.href, "_blank")
  }

  if (method.prompt) {
    window.prompt('Destination Address:', method.prompt)
  }
}
</script>

<template>
  <AppDialog :max-width="400">
    <v-card>
      <v-list>
        <v-list-item
            v-for="method of supportList"
            @click="onSupportMethodClick(method)"
        >
          <template #prepend>
            <Icon :name="method.icon" />
          </template>
          {{method.title}}
        </v-list-item>
      </v-list>
    </v-card>
  </AppDialog>
</template>

<style scoped lang="scss">
.iconify {
  margin-left: 12px;
  margin-right: 20px;
}
</style>