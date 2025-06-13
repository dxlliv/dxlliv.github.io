<script setup lang="ts">
const username = 'dxlliv'
const availabilityDate: Ref<string> = ref('')

onMounted(() => {
  fetchLatestCommit()
})

const isPastAvailability = computed(() => {
  return availabilityDate.value ? new Date() > availabilityDate.value : false
})

function fetchLatestCommit() {
  fetch('https://api.github.com/users/' + username + '/events/public')
      .then(function (response) {
        if (!response.ok) throw new Error('User not found or request failed');
        return response.json();
      })
      .then(function (events) {
        let latestCommitDate = null;

        for (let event of events) {
          if (event.type === 'PushEvent') {
            // ignore uptime status repos
            if (event.repo.url.endsWith('/status')) {
              continue
            }

            let commitDate = new Date(event.created_at);
            if (!latestCommitDate || commitDate > latestCommitDate) {
              latestCommitDate = commitDate;
            }
          }
        }

        availabilityDate.value = new Date(latestCommitDate.setDate(latestCommitDate.getDate() + 7));
      })
      .catch(function (error) {
        console.error('Error fetching commit data:', error);
      });
}
</script>

<template>
  <div class="dx-toolbar__availability">
    {{$t('toolbar.availability')}}

    <v-badge
        class="ml-6"
        :color="!isPastAvailability ? 'green' : 'grey-darken-3'"
    />

    <slot />
  </div>
</template>

<style scoped lang="scss">
.dx-toolbar__availability {
  position: relative;
  cursor: pointer;
  padding-right: 28px;

  .v-badge {
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 4px;
    height: 3px;

    :deep(.v-badge__badge) {
      min-width: 15px;
      height: 15px;
    }
  }
}
</style>