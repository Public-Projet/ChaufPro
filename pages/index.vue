<template>
  <main>
    <!-- Header Hero -->
    <header class="relative h-screen bg-gray-900 text-white">
      <img
        src="https://img.freepik.com/photos-gratuite/homme-beau-elegant-dans-salon-voiture_1157-30216.jpg?ga=GA1.1.54047769.1748811830&semt=ais_items_boosted&w=740"
        alt="Voiture professionnelle" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 container mx-auto px-6 py-24">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight mb-4 max-w-2xl font-heading">Votre partenaire de
          mobilité <span class="text-primary">professionnelle</span></h1>
        <p class="text-lg md:text-xl mb-6 max-w-2xl">
          Nous mettons à votre disposition des chauffeurs professionnels pour répondre aux besoins de mobilité de votre
          entreprise.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center">
            <IconSearch class="w-5 h-5 mr-2" />
            Trouver un chauffeur
          </button>
          <NuxtLink to="/demander-devis"
            class="border-2 border-white bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center">
            <IconReceiptEuro class="w-5 h-5 mr-2" />
            Devenir un devis
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Nos Valeurs -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Nos valeurs</h2>
        <p class="text-center mb-12 max-w-2xl mx-auto">
          Nous nous engageons à offrir un service d'excellence basé sur trois valeurs fondamentales qui guident notre
          approche.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="index"
            class="group bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-primary hover:shadow-lg hover:border-secondary transition-all duration-300">
            <div class="flex justify-center items-center mb-4">
              <component :is="value.icon"
                class="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors duration-300">{{
              value.title }}</h3>
            <p> {{ value.description }} </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Services -->
    <section class="py-16 bg-white" id="services">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Nos services</h2>
        <p class="text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre gamme complète de services de chauffeurs professionnels adaptés à vos besoins spécifiques de
          votre entreprise.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="service in randomServices" :key="service.slug"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">{{ service.title }}</h3>
              <p class="mb-4">
                {{ service.description.slice(0, 150) }}...
              </p>
              <NuxtLink :to="`/services/${service.slug}`"
                class="flex items-center text-primary hover:underline font-medium">
                En savoir plus
                <IconArrowRight class="ml-2 w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/services"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300">
            <IconPlus class="mr-2 w-5 h-5" />
            Voir tous nos services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-secondary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Prêt à simplifier votre mobilité professionnelle ?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/demander-devis"
            class="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Demander un devis
          </NuxtLink>
          <NuxtLink to="/contact"
            class="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-lg font-semibold transition duration-300">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { values } from '@/data/values'
import { services } from '@/data/services'
import { IconSearch, IconReceiptEuro, IconArrowRight, IconPlus } from '@tabler/icons-vue'

// Sélection aléatoire de 3 services
const randomServices = computed(() => {
  const shuffled = [...services].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
})

useHead({
  title: 'ChauffeurPro - Votre partenaire de mobilité professionnelle'
})
</script>