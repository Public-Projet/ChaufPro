<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100 p-6 relative overflow-hidden">
    <div class="rounded-lg p-8 md:p-12 text-center w-full relative z-10">
      <img src="/img/404.png" alt="Page non trouvée" class="w-[40%] h-auto mx-auto titleScrole" />

      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        La page que vous recherchez a peut-être été déplacée, supprimée ou n'existe pas.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/"
          class="inline-flex items-center bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          <IconHome class="w-5 h-5 mr-2" />
          Retour à l'accueil
        </NuxtLink>
        <NuxtLink to="/contact"
          class="inline-flex items-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          <IconMessage class="w-5 h-5 mr-2" />
          Nous contacter
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconHome, IconMessage } from '@tabler/icons-vue'

useHead({
  title: 'Page non trouvée - 404',
})

definePageMeta({
  layout: false
});
</script>

<style scoped>
.titleScrole {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>
