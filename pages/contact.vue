<template>
  <div class="font-sans antialiased text-gray-800">
    <header class="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
      <div class="relative z-10 container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto">
          Nous sommes à votre écoute pour répondre à toutes vos questions.
        </p>
      </div>
    </header>

    <section class="py-12 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        <div class="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <h2 class="text-3xl font-bold text-primary mb-6">Nos coordonnées</h2>
          <div class="space-y-6 text-gray-700 text-lg">
            <div class="flex items-center">
              <IconMail class="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <div>
                <span class="font-semibold">Email:</span>
                <a href="mailto:marciasmars@gmail.com"
                  class="text-primary hover:underline block">marciasmars@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center">
              <IconPhone class="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <div>
                <span class="font-semibold">Téléphone:</span>
                <a href="tel:+2290166672622" class="text-primary hover:underline block">+229 0166672622</a>
              </div>
            </div>

            <div class="flex items-start">
              <IconMap class="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <div>
                <span class="font-semibold">Adresse:</span>
                <address class="not-italic block">
                  Akonanboè, P-Novo
                </address>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <h2 class="text-3xl font-bold text-primary mb-6">Nos horaires</h2>
          <div class="space-y-4 text-gray-700 text-lg">
            <div class="flex justify-between items-center pb-2 border-b border-gray-200">
              <span class="font-semibold">Lundi - Samedi :</span>
              <span>8h00 - 18h00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Dimanche :</span>
              <span>Fermé</span>
            </div>
            <p class="mt-4 text-sm text-gray-600">
              Des services d'urgence ou des réservations spécifiques peuvent être possibles en dehors de ces heures, sur
              demande préalable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-6 max-w-5xl">
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Localisez-nous</h2>
        <div class="bg-white rounded-lg shadow-xl overflow-hidden aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0385431949253!2d2.5937765967895468!3d6.516805700000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b5171fc2bf25b%3A0xfd0bb096b72caff5!2sVoie%20Bitum%C3%A9e%20(%20Akonaboe-djassin)!5e0!3m2!1sfr!2sbj!4v1749261631625!5m2!1sfr!2sbj"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p class="text-center text-gray-600 mt-6">
          N'hésitez pas à nous rendre visite à notre adresse ou à utiliser la carte ci-dessus pour nous localiser.
        </p>
      </div>
    </section>

    <section class="py-16 bg-secondary text-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Une question ?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Pour toute demande spécifique ou assistance, notre équipe est prête à vous aider. Contactez-nous par téléphone
          ou email.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="tel:+2290166672622"
            class="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            Appelez-nous
          </a>
          <a href="mailto:marciasmars@gmail.com"
            class="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            Envoyez un email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { IconMail, IconPhone, IconMap } from '@tabler/icons-vue';

// SEO
useHead(() => ({
  title: 'Contactez-nous',
}));
</script>
