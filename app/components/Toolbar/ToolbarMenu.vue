<script setup lang="ts">
const buttonProps = {
  flat: true,
  active: false,
  icon: true,
  width: 64,
  height: 64,
}

const menu = ref(false)

function onMenuClose() {
  menu.value = false
}
</script>

<template>
  <v-menu
      activator="parent"
      eager
      v-model="menu"
      :offset="[9, 12]"
  >
    <v-card :width="320" max-width="100vw" rounded>
      <v-card-text class="px-7">

        <ToolbarMenuTitle title="Design & Web Development"/>

        <ToolbarMenuItems class="mb-4">
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                to="/"
            >
              <Icon
                  name="lucide:home" :size="27"
                  class="text-center mx-2"
              />
            </v-btn>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                to="/experience"
            >
              <Icon
                  name="lucide:code-xml" :size="28"
                  class="text-center mx-2"
              />
            </v-btn>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                href="mailto:hello@dxlliv.dev"
                @click="onMenuClose"
            >
              <Icon
                  name="mdi:at" :size="26"
                  class="text-center mx-2"
              />

              <ContactDialog/>
            </v-btn>
          </v-breadcrumbs-item>
        </ToolbarMenuItems>

        <ToolbarMenuTitle title="Drones & Commissions"/>

        <ToolbarMenuItems class="mb-2">
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                @click="onMenuClose"
            >
              <Icon
                  name="lucide:image-play" :size="28"
                  class="text-center mx-2"
              />

              <ShootingDialog/>
            </v-btn>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                to="/drones"
            >
              <Icon
                  name="tabler:drone" :size="29"
                  style="margin-top: -1px;"
                  class="text-center mx-2"
              />
            </v-btn>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            <v-btn
                v-bind="buttonProps"
                @click="onMenuClose"
            >
              <Icon
                  name="lucide:calendar-days" :size="28"
                  class="text-center mx-2"
                  style="margin-top: -4px;"
              />

              <AgentDialog/>
            </v-btn>
          </v-breadcrumbs-item>
        </ToolbarMenuItems>

      </v-card-text>
    </v-card>
  </v-menu>
</template>