<script setup lang="ts">
defineProps<{
  fullscreen?: boolean
}>()

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
  <v-dialog
      v-model="dialog"
      max-width="400px"
      :fullscreen="fullscreen"
      transition="dialog-bottom-transition"
      activator="parent"
  >
    <v-card :rounded="!fullscreen">

      <div class="pa-6">
        <ContactForm
            @sent="onFormSent"
        />
      </div>

    </v-card>
  </v-dialog>

  <ContactFormSent v-model="contactFormSent"/>
</template>

<style scoped lang="scss">
.v-card {
  cursor: default;

  :deep(.v-btn) {
    background: #e0e0e0 !important;
    color: black !important;
    box-shadow: none;
  }
}
</style>