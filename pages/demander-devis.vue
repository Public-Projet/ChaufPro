<template>
  <div class="font-sans antialiased text-gray-800">
    <header class="relative bg-primary text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Demander un devis</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Obtenez une estimation personnalisée pour votre besoin de mobilité.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
    </header>

    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-200">
          <p class="text-gray-700 mb-8 text-center">
            Remplissez ce formulaire pour nous décrire votre besoin. <br>
            Nous vous recontacterons très vite avec un devis détaillé.
          </p>

          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label for="service" class="block text-gray-700 text-sm font-bold mb-2">
                Service souhaité <span class="text-red-500">*</span>
              </label>
              <select id="service" v-model="formData.service"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required>
                <option value="" disabled> -- Sélectionnez un service --</option>
                <option v-for="s in availableServices" :key="s.slug" :value="s.slug">
                  {{ s.title }}
                </option>
              </select>
            </div>

            <div class="mb-6">
              <label for="requestType" class="block text-gray-700 text-sm font-bold mb-2">
                Type de demande <span class="text-red-500">*</span>
              </label>
              <select id="requestType" v-model="formData.requestType"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required>
                <option value="" disabled>-- Choisissez le type de demande --</option>
                <option value="ponctuel">Ponctuel (Transfert, Rendez-vous)</option>
                <option value="journee">Journée</option>
                <option value="semaine">Semaine</option>
                <option value="mois">Mois</option>
                <option value="evenementiel">Événementiel</option>
                <option value="sans-vehicule">Mise à dispo. sans véhicule</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="startDate" class="block text-gray-700 text-sm font-bold mb-2">
                  Date de début <span class="text-red-500">*</span>
                </label>
                <input type="date" id="startDate" v-model="formData.startDate"
                  class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required />
              </div>
              <div>
                <label for="endDate" class="block text-gray-700 text-sm font-bold mb-2">
                  Date de fin (si applicable)
                </label>
                <input type="date" id="endDate" v-model="formData.endDate"
                  class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
            </div>

            <div class="mb-6">
              <label for="pickupTime" class="block text-gray-700 text-sm font-bold mb-2">
                Heure de prise en charge <span class="text-red-500">*</span>
              </label>
              <input type="time" id="pickupTime" v-model="formData.pickupTime"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="pickupLocation" class="block text-gray-700 text-sm font-bold mb-2">
                Lieu de prise en charge <span class="text-red-500">*</span>
              </label>
              <input type="text" id="pickupLocation" v-model="formData.pickupLocation"
                placeholder="Ex: Aéroport de Cotonou, Hôtel Azalaï"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="destination" class="block text-gray-700 text-sm font-bold mb-2">
                Destination (si applicable)
              </label>
              <input type="text" id="destination" v-model="formData.destination"
                placeholder="Ex: Hôtel de la Plage, Centre-ville"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>

            <div class="mb-6">
              <label for="passengers" class="block text-gray-700 text-sm font-bold mb-2">
                Nombre de passagers <span class="text-red-500">*</span>
              </label>
              <input type="number" id="passengers" v-model.number="formData.passengers" min="1" placeholder="Ex: 1"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="vehicleType" class="block text-gray-700 text-sm font-bold mb-2">
                Type de véhicule préféré
              </label>
              <select id="vehicleType" v-model="formData.vehicleType"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Indifférent</option>
                <option value="berline">Berline Standard</option>
                <option value="berline-luxe">Berline Luxe</option>
                <option value="van">Van / Minibus (jusqu'à 7 passagers)</option>
                <option value="suv">SUV</option>
                <option value="autre">Autre (précisez dans le message)</option>
              </select>
            </div>

            <div class="mb-6">
              <label for="fullName" class="block text-gray-700 text-sm font-bold mb-2">
                Votre nom complet <span class="text-red-500">*</span>
              </label>
              <input type="text" id="fullName" v-model="formData.fullName" placeholder="Votre nom et prénom"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                Votre email <span class="text-red-500">*</span>
              </label>
              <input type="email" id="email" v-model="formData.email" placeholder="email@example.com"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">
                Votre téléphone <span class="text-red-500">*</span>
              </label>
              <input type="tel" id="phone" v-model="formData.phone" placeholder="Ex: +229 01 XXXXXXXX"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-gray-700 text-sm font-bold mb-2">
                Détails supplémentaires (facultatif)
              </label>
              <textarea id="message" v-model="formData.message" rows="5"
                placeholder="Précisez tout détail important pour votre demande..."
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
            </div>

            <div class="mb-6 flex items-center">
              <input type="checkbox" id="consent" v-model="formData.consent"
                class="form-checkbox h-5 w-5 text-primary rounded" required />
              <label for="consent" class="ml-2 text-gray-700 text-sm">
                J'accepte que mes données soient utilisées pour le traitement de ma demande. <span
                  class="text-red-500">*</span>
              </label>
            </div>

            <div class="flex items-center justify-center">
              <button type="submit"
                class="bg-primary hover:bg-pmrDark text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Envoyer ma demande de devis
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { services } from '@/data/services';


const route = useRoute();

// variable reactive
const formData = ref({
  service: '',
  requestType: '',
  startDate: '',
  endDate: '',
  pickupTime: '',
  pickupLocation: '',
  destination: '',
  passengers: 1,
  vehicleType: '',
  fullName: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
});

// Services
const availableServices = ref(services);

onMounted(() => {
  if (route.query.service) {
    const preselectedService = services.find(s => s.slug === route.query.service);
    if (preselectedService) {
      formData.value.service = preselectedService.slug;
      if (preselectedService.slug === 'transferts-aeroport') {
        formData.value.requestType = 'ponctuel';
      }
    }
  }
});

// Soummision
const submitForm = () => {
  if (formData.value.consent) {
    console.log('Formulaire de devis soumis :', formData.value);
    alert('Votre demande de devis a été envoyée avec succès ! Nous vous recontacterons bientôt.');

    // Rstaurer le formulaire apresè la soumission
    formData.value = {
      service: '',
      requestType: '',
      startDate: '',
      endDate: '',
      pickupTime: '',
      pickupLocation: '',
      destination: '',
      passengers: 1,
      vehicleType: '',
      fullName: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    };
  } else {
    alert('Veuillez accepter les conditions d\'utilisation pour envoyer votre demande.');
  }
};

// SEO
useHead(() => ({
  title: 'Demander un Devis - ChaufPro',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Obtenez un devis personnalisé et rapide pour vos services de chauffeur professionnel avec ChaufPro.'
    }
  ]
}));
</script>
