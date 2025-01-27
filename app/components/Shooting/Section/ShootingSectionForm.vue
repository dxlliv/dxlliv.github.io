<script setup lang="ts">
const dialog = ref(false)
const contactFormSent = ref(false)

function onFormSent() {
  dialog.value = false
  contactFormSent.value = true
}

watch(() => dialog.value, value => {
  if (!value) {
    useFormStore().$v.$reset();
  }
})
</script>

<template>
  <ShootingSection>

    <v-container class="pa-0" :max-width="488">

      <ContactForm
          class="px-9"
          @sent="onFormSent"
      />

      <div class="px-10">
        <v-divider class="mt-8 mb-9">
          or
        </v-divider>
      </div>

      <div class="mx-9">
        <v-row no-gutters>
          <v-col :cols="3">
            <v-btn
                block flat color="grey-lighten-4"
                class="px-0" size="large" target="_blank"
                href="https://instagram.com/dxlliv"
            >
              <Icon name="simple-icons:instagram" :size="18" />
            </v-btn>
          </v-col>
          <v-col class="flex-grow-1 pl-4">
            <v-btn
                block flat color="grey-lighten-4"
                class="px-0" size="large" target="_blank"
                href="https://instagram.com/dxshooting"
            >
              @dxshooting
            </v-btn>
          </v-col>
        </v-row>
      </div>

    </v-container>

  </ShootingSection>
</template>

<style scoped lang="scss">

</style>