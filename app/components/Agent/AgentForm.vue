<script setup lang="ts">
const agentStore = useAgentStore()
const appConfig = useAppConfig()
const {t} = useI18n()

const agentBaseURL = appConfig.agent.baseURL

const listElement = useTemplateRef<any>('listElement')
const waitingReply = ref(false)

onMounted(() => {
  agentStore.initialize(listElement, agentBaseURL, t('agent.reply.notAvailable'))
})

async function onNewMessage() {
  const message = String(agentStore.text)

  agentStore.text = ''

  agentStore.agent.addNewMessage('me', message)

  waitingReply.value = true

  await agentStore.agent.sendMessage(message)

  waitingReply.value = false
}
</script>

<template>
  <v-list
      v-if="agentStore.agent"
      ref="listElement" class="mt-2"
      height="50vh" :max-height="400"
  >
    <v-list-item v-for="message of agentStore.agent.chat" :class="['py-1']">
      <AgentMessage :author="message.author" :class="[{ 'float-right': message.author === 'me' }]">
        {{message.text}}
      </AgentMessage>
    </v-list-item>

    <v-list-item v-if="waitingReply" class="py-1">
      <AgentMessageWaiting />
    </v-list-item>

    <v-list-item v-if="agentStore.agent.chat && agentStore.agent.chat.length === 0" class="fill-height text-center">
      {{$t('agent.intro.line1')}}<br />
      {{$t('agent.intro.line2')}}
    </v-list-item>
  </v-list>

  <v-text-field
      v-model="agentStore.text"
      variant="solo" flat hide-details
      autocomplete="off" spellcheck="false"
      :readonly="waitingReply"
      :placeholder="$t('agent.field')"
      @keydown.enter="onNewMessage"
  >
    <template v-slot:prepend>
      <Icon
          name="mdi:account-circle-outline" :size="24"
          class="ml-5 mr-n4 text-grey-darken-3"
      />
    </template>
  </v-text-field>
</template>
