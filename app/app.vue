<script setup lang="ts">
const app = useNuxtApp()
</script>
<template>
  <div>
    {{ app.$foo }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
