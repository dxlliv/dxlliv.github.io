<script setup lang="ts">
const {title, icon, avatar, dark, intersectScroll} = defineProps<{
  title: string
  icon?: string
  avatar?: string
  dark?: boolean
}>()

const emit = defineEmits(['iconClick'])
</script>

<template>
  <Block :dark="dark">
    <v-row no-gutters>
      <v-col :offset-lg="1" :lg="3" :cols="12" align-self="center" class="text-center hidden-lg-and-up">

        <BlockHeroIcon
            :avatar="avatar"
            :icon="icon"
            :dark="dark"
            @click="emit('iconClick')"
        />

      </v-col>
      <v-col :offset="0" :lg="6" :cols="12" align-self="center" class="text-center text-lg-right">

        <BlockHeroTitle
            :title="title"
            :dark="dark"
        />

        <BlockHeroDescription :dark="dark">
          <slot name="description"/>
        </BlockHeroDescription>

        <slot name="actions"/>

      </v-col>
      <v-col :lg="6" :cols="12" class="text-center align-self-center hidden-md-and-down">

        <BlockHeroIcon
            :avatar="avatar"
            :icon="icon"
            :dark="dark"
        />

      </v-col>
    </v-row>
  </Block>
</template>

<style scoped lang="scss">

</style>