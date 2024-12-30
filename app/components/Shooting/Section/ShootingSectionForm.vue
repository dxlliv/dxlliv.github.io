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
    </v-container>

  </ShootingSection>
</template>

<style scoped lang="scss">

</style>