<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-6 gap-8">
        <div class="lg:col-span-2">
          <h3 class="text-xl font-semibold text-primary mb-4">chaufeurPro</h3>
          <p class="text-gray-400">
            Votre partenaire de mobilité professionnelle. Des chauffeurs qualifiés pour vos besoins professionnels.
          </p>
        </div>

        <div>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><NuxtLink href="/services/service-ponctuel" class="text-gray-400 hover:text-white transition">Service ponctuel</NuxtLink></li>
            <li><NuxtLink href="/services/transferts-aeroport" class="text-gray-400 hover:text-white transition">Transferts aéroport</NuxtLink></li>
            <li><NuxtLink href="/services/location-longue-duree" class="text-gray-400 hover:text-white transition">Service régulier</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Entreprise</h4>
          <ul class="space-y-2">
            <li><NuxtLink href="/about" class="text-gray-400 hover:text-white transition">À propos</NuxtLink></li>
            <li><NuxtLink href="/terms" class="text-gray-400 hover:text-white transition">Conditions générales</NuxtLink></li>
            <li><NuxtLink href="#" class="text-gray-400 hover:text-white transition">Carrières</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <address class="not-italic text-gray-400">
            <p>Akonanboè, P-Novo</p>
            <p class="mt-2">marciasmars@gmail.com</p>
            <p>+229 0166672622</p>
          </address>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} chaufeurPro. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
