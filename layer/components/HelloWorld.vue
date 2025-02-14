<script setup lang="ts">
const { myLayer } = useAppConfig()
const { y } = useRuntimeConfig().public.foo.deep;
const { $foo } = useNuxtApp();
const { t } = useI18n();
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
    <pre>{{ $foo.bar() }}{{ y }}</pre>
    <pre>{{ t('message.hello') }}</pre>
  </div>
</template>
