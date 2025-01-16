<script setup lang="ts">
const agentStore = useAgentStore()
const appConfig = useAppConfig()

const agentBaseURL = appConfig.agent.baseURL

const listElement = useTemplateRef<any>('listElement')
const waitingReply = ref(false)

onMounted(() => {
  agentStore.initialize(listElement, agentBaseURL)
})

const text = ref('')

async function onNewMessage() {
  const message = String(text.value)

  text.value = ''

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
      Let's talk about projects!<br />
      What do you have in mind?
    </v-list-item>
  </v-list>

  <v-text-field
      v-model="text"
      variant="solo" flat hide-details
      autocomplete="off" spellcheck="false"
      :readonly="waitingReply"
      placeholder="Type a message"
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
