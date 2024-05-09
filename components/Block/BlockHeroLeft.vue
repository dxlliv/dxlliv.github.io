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
      <v-col :lg="5" :cols="12" class="text-center align-self-center">

        <BlockHeroIcon
            :avatar="avatar"
            :icon="icon" :rotating="iconRotating"
            :dark="dark"
            @click="emit('iconClick')"
        />

      </v-col>
      <v-col :lg="7" :cols="12" class="text-center text-lg-left">

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