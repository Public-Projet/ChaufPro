<template>
  <div class="font-sans antialiased text-gray-800 ">
    <header v-if="service" class="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
      <img :src="service.image" :alt="service.title" class="absolute inset-0 w-full h-full object-cover opacity-60">
      <div class="relative z-10 container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ service.title }}</h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto">{{ service.tagline }}</p>
      </div>
    </header>

    <section v-if="service" class="py-12 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="md:col-span-2">
          <h2 class="text-3xl font-bold mb-6 text-primary">Détails du service</h2>
          <p class="text-gray-700 leading-relaxed mb-8">{{ service.description }}</p>

          <h3 class="text-2xl font-semibold mb-4 text-gray-800">Nos caractéristiques</h3>
          <ul class="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li v-for="(feature, index) in service.features" :key="index">
              <span class="font-medium">{{ feature }}</span>
            </li>
          </ul>

          <h3 class="text-2xl font-semibold mb-4 text-gray-800">Vos avantages</h3>
          <ul class="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li v-for="(benefit, index) in service.benefits" :key="index">
              <span class="font-medium">{{ benefit }}</span>
            </li>
          </ul>

          <div class="mt-8 text-center md:text-left">
            <NuxtLink :to="`/demander-devis?service=${service.slug}`" class="inline-block bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
              {{ service.callToAction }}
            </NuxtLink>
          </div>
        </div>

        <div class="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Informations complémentaires</h3>
          <p class="text-gray-600 mb-4">
            Pour toute question ou demande spécifique concernant ce service, n'hésitez pas à nous contacter directement.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li>
              <span class="font-semibold">Email :</span> marciasmars@gmail.com
            </li>
            <li>
              <span class="font-semibold">Téléphone :</span> +229 0166672622
            </li>
            <li>
              <span class="font-semibold">Horaires :</span> Lun-Sam, 8h-18h
            </li>
          </ul>
          <div class="mt-6">
            <NuxtLink to="/contact" class="inline-block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg text-center transition duration-300 ease-in-out">
              Nous contacter
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section v-else class="py-20 text-center bg-gray-100 min-h-screen-minus-nav">
      <h1 class="text-3xl font-bold text-red-600 mb-4">Service non trouvé</h1>
      <p class="text-lg text-gray-600 mb-8">Désolé, le service que vous recherchez n'existe pas ou a été retiré.</p>
      <NuxtLink to="/services" class="text-primary hover:underline">Retourner au services</NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { services } from '@/data/services'; 

const route = useRoute();
const slug = route.params.slug;

const service = computed(() => {
  return services.find(s => s.slug === slug);
});

// SEO
useHead(() => ({
  title: service.value ? `${service.value.title}` : 'Service non trouvé',
}));
</script>

<style scoped>
.min-h-screen-minus-nav {
  min-height: calc(100vh - 64px);
}
</style>
