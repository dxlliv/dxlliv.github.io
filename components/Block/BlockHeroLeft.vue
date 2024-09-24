<script setup lang="ts">
const {title, icon, avatar, dark, intersectScroll} = defineProps<{
  title: string
  icon?: string
  iconRotating?: boolean
  avatar?: string
  dark?: boolean
}>()

const emit = defineEmits(['iconClick'])
</script>

<template>
  <Block>
    <v-row no-gutters>
      <v-col :offset-lg="1" :lg="4" :cols="12" class="text-center align-self-center">

        <BlockHeroIcon
            :avatar="avatar"
            :icon="icon" :rotating="iconRotating"
            :dark="dark"
            @click="emit('iconClick')"
        />

      </v-col>
      <v-col :offset-lg="1" :lg="6" :cols="12" class="text-center text-lg-left">

        <BlockHeroTitle
            :title="title"
            :dark="dark"
        />

        <BlockHeroDescription :dark="dark">
          <slot name="description"/>
        </BlockHeroDescription>

        <slot name="actions"/>

      </v-col>
    </v-row>
  </Block>
</template>

<style scoped lang="scss">

</style>