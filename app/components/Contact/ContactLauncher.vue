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
  <AppDialog>

    <div class="pa-6">
      <ContactForm
          @sent="onFormSent"
      />
    </div>

  </AppDialog>

  <ContactFormSent v-model="contactFormSent"/>
</template>