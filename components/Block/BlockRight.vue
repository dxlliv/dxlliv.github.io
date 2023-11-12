<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
  avatar?: string
  dark?: boolean
}>()
</script>

<template>
  <Block>
    <v-row>
      <v-col :md="5" :cols="12" class="text-center align-self-center hidden-md-and-up">

        <BlockIcon
            :avatar="avatar"
            :icon="icon"
            :dark="dark"
        />

      </v-col>
      <v-col :md="7" :cols="12" class="text-center text-md-right">

        <BlockTitle
            :title="title"
            :dark="dark"
        />

        <BlockDescription :dark="dark">
          <slot name="description"/>
        </BlockDescription>

        <slot name="actions"/>

      </v-col>
      <v-col :md="5" :cols="12" class="text-center align-self-center hidden-sm-and-down">

        <BlockIcon
            :avatar="avatar"
            :icon="icon"
            :dark="dark"
        />

      </v-col>
    </v-row>
  </Block>
</template>