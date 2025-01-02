<script setup lang="ts">
const listElement = useTemplateRef<any>('listElement')
const waitingReply = ref(false)

const appConfig = useAppConfig()
const agentBaseURL = appConfig.agent.baseURL

const chatManager = new ChatManager(listElement, agentBaseURL)

const text = ref('')

async function onNewMessage() {
  const message = String(text.value)

  text.value = ''

  chatManager.addNewMessage('me', message)

  waitingReply.value = true

  await chatManager.sendMessage(message)

  waitingReply.value = false
}
</script>

<template>
  <v-list ref="listElement" class="mt-2" height="50vh" :max-height="400">
    <v-list-item v-for="message of chatManager.chat.value" :class="['py-1']">
      <AgentMessage :author="message.author" :class="[{ 'float-right': message.author === 'me' }]">
        {{message.text}}
      </AgentMessage>
    </v-list-item>

    <v-list-item v-if="waitingReply" class="py-1">
      <AgentMessageWaiting />
    </v-list-item>

    <v-list-item v-if="chatManager.chat.value.length === 0" class="fill-height text-center">
      Let's talk about projects!<br />
      What do you have in mind?
    </v-list-item>
  </v-list>

  <v-text-field
      v-model="text"
      variant="solo"
      flat
      hide-details
      :readonly="waitingReply"
      placeholder="Type a message"
      @keydown.enter="onNewMessage"
  >
    <template v-slot:prepend>
      <v-icon icon="mdi-account-circle-outline" class="ml-5 mr-n4" />
    </template>
  </v-text-field>
</template>
