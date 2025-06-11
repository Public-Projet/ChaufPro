<template>
  <main>
    <header class="relative bg-primary text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Nos solutions de mobilité professionnellees</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Explorez l'étendue de nos prestations, du service ponctuel aux solutions de flotte complètes, et trouvez
          l'accompagnement idéal pour vos déplacements.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
    </header>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.slug"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">{{ service.title }}</h3>
              <p class="mb-4">
                {{ service.description.slice(0, 150) }}...
              </p>
              <NuxtLink :to="`/services/${service.slug}`" class="text-primary hover:underline font-medium">
                En savoir plus &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-pmrDark text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Un besoin spécifique ?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Notre équipe est là pour construire la solution de mobilité qui vous convient. Contactez-nous pour une offre
          sur mesure.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/demander-devis"
            class="bg-white text-pmrDark hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Demander un devis
          </NuxtLink>
          <NuxtLink to="/contact"
            class="border-2 border-white text-white hover:bg-white hover:text-pmrDark px-8 py-3 rounded-lg font-semibold transition duration-300">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { services } from '@/data/services'; // Assurez-vous que ce chemin est correct et contient TOUS vos services

useHead({
  title: 'Tous nos services - ChaufPro',
  meta: [
    {
      name: 'description',
      content: 'Découvrez la gamme complète des services de chauffeurs professionnels offerts par ChaufPro pour les entreprises : ponctuel, navette, VIP, flotte externalisée et plus encore.'
    },
    {
      name: 'keywords',
      content: 'tous les services, chauffeurs entreprises, mobilité B2B, transport professionnel, solutions de transport'
    }
  ]
})
</script>