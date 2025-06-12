<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <header class="relative bg-primary text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">À propos de chaufeurPro</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Votre partenaire de confiance pour des solutions de mobilité professionnelle haut de gamme.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
    </header>

    <section class="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div class="max-w-6xl mx-auto">
        <!-- Notre mission -->
        <section class="container mx-auto px-4 py-16">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Notre mission</h2>
              <div class="prose text-gray-600 max-w-none">
                <p>
                  chaufeurPro est une plateforme innovante de mise à disposition de chauffeurs professionnels et standards,
                  destinée aux entreprises, agences et particuliers. Nous offrons un accès rapide, fiable et digitalisé
                  à des chauffeurs
                  qualifiés, pour des besoins ponctuels ou réguliers.
                </p>
              </div>
              <div class="mt-4">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>Réservation rapide et simple en ligne</li>
                  <li>Devis instantané, sans surprise</li>
                  <li>Chauffeurs professionnels certifiés</li>
                  <li>Suivi et support personnalisés</li>
                  <li>Adapté aux entreprises comme aux particuliers</li>
                </ul>
              </div>
            </div>

            <div class="lg:w-1/2">
              <img
                src="https://img.freepik.com/photos-gratuite/chauffeur-uber-elegant-donnant-taxi_23-2149241800.jpg?ga=GA1.1.54047769.1748811830&semt=ais_items_boosted&w=740"
                alt="chaufeurPro" class="rounded-2xl shadow-xl w-full h-auto">
            </div>
          </div>
        </section>

        <!-- Valeurs -->
        <section class="mt-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Nos valeurs</h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div v-for="(value, index) in values" :key="index"
              class="bg-gray-50 p-6 rounded-lg shadow border-l-4 border-primary hover:shadow-md transition">
              <div class="flex items-center mb-2">
                <component :is="value.icon" class="h-8 w-8 mr-2 " />
                <h3 class="text-xl font-bold text-primary">{{ value.title }}</h3>
              </div>
              <p class="text-gray-600 text-sm">
                {{ value.description }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { values } from '@/data/values';

useHead({
  title: 'À propos',
});
</script>

<style scoped>
.skew-y-1 {
  transform: skewY(-1deg);
}

.prose p {
  @apply mb-4;
}
</style>