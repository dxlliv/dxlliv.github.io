<script setup lang="ts">
defineProps<{
  fullscreen?: boolean
}>()

const bottomSheet = ref(false)
const contactFormSent = ref(false)

function onFormSent() {
  bottomSheet.value = false
  contactFormSent.value = true
}

watch(() => bottomSheet.value, value => {
  if (!value) {
    useFormStore().$v.$reset();
  }
})
</script>

<template>
  <v-bottom-sheet
      v-model="bottomSheet"
      transition="dialog-bottom-transition"
      activator="parent"
  >
    <v-card class="v-card--rounded-top">

      <div class="pa-6">
        <ContactForm
            @sent="onFormSent"
        />
      </div>

    </v-card>
  </v-bottom-sheet>

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