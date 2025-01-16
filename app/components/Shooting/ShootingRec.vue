<template>
  <div>
    <v-badge dot color="red"/>
    <strong>REC</strong>
  </div>
</template>

<style scoped lang="scss">
.v-badge {
  margin-top: 52px;
  margin-left: 2px;
  animation: blink 3s infinite;

  :deep(.v-badge__badge) {
    width: 12px;
    height: 12px;
    border-radius: 8px;
  }
}

@keyframes blink {
  0%, 75% {
    opacity: 1;
  }
  85%, 95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

strong {
  position: absolute;
  margin-top: -2px;
  margin-left: -17px;
  transform: rotateZ(-90deg);
  font-family: "Bebas Neue", serif;
  font-weight: 600;
  font-size: 30px;

  @media (max-width: 959px) {
    margin-top: -3px;
  }
}
</style>