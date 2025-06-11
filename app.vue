<template>
  <div class="min-h-screen bg-slate-100 text-gray-800 font-body">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s | ChaufPro',
})
</script>