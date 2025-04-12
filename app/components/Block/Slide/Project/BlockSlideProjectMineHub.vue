<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <BlockHeroTitle
        title="Minecraft ITALIA"
        badge="Project"
        color="green-darken-1"
        project
    />

    <BlockHeroDescription>
      <p>
        One of the most active<br/>
        Italian gaming community<br/>
        about Minecraft ~ 2011
      </p>
    </BlockHeroDescription>

    <BlockHeroBottomSheet activator="parent">
      <BlockHeroBottomText>

        <a href="https://minecraft-italia.it" target="_blank">
          Website
        </a>

        <BlockHeroButton
            variant="text" class="px-0 ml-2" target="_blank"
            href="https://discord.com/invite/minecraft-italia-522487914303586315"
        >
          <Icon name="simple-icons:discord" :size="20" class="text-black" />
        </BlockHeroButton>

        <BlockHeroButton
            variant="text" class="px-0" target="_blank"
            href="https://github.com/minehub-it"
        >
          <Icon name="simple-icons:github" :size="16" class="text-black" />
        </BlockHeroButton>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

  </BlockHeroCard>
</template>