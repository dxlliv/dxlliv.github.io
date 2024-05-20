<script setup lang="ts">
const emit = defineEmits(['sent'])

const formStore = useFormStore()
const form = ref(undefined)

const $v = formStore.$v

async function onFormSend() {
  const result = await formStore.$v.$validate()

  if (!result) {
    return
  }

  formStore.reset()
  emit('sent')

  setTimeout(() => {
    window.open(formStore.href)
  }, 2000)
}
</script>

<template>
  <form
      class="dxlliv-shop__item__contact"
      autocomplete="off"
      ref="form"
  >
    <v-text-field
        name="name" autocomplete="off" spellcheck="false"
        :label="$t('form.fields.name.label')" :maxlength="30"
        :placeholder="$t('form.fields.name.placeholder')"
        v-model="formStore.fieldName"
        :error="$v.fieldName.$invalid"
    />

    <v-textarea
        name="message"
        :label="$t('form.fields.message.label')"
        :placeholder="$t('form.fields.message.placeholder')"
        autocomplete="off" spellcheck="false"
        v-model="formStore.fieldMessage"
        :error="$v.fieldMessage.$invalid"
    />

    <v-btn
        block :text="$t('form.action.send')"
        size="x-large" color="grey-darken-2"
        @click="onFormSend"
    />

  </form>
</template>

<style scoped lang="scss">
.dxlliv-shop__item__contact {
  :deep(.v-input__details) {
    min-height: 20px;
  }

  &__accept-label {
    margin-top: 4px;
    font-size: 16px;
  }
}
</style>