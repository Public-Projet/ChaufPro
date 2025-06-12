<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <header class="bg-primary text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
        <p class="text-xl opacity-90">Dernière mise à jour : 2 juin 2025</p>
      </div>
    </header>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div class="prose max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">1. Acceptation des conditions</h2>
          <p>
            En utilisant les services de chaufeurPro, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">2. Description des services</h2>
          <p>
            chaufeurPro propose une plateforme de mise en relation entre clients et chauffeurs professionnels pour des services de transport privé. Nos services incluent mais ne sont pas limités à :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Services de chauffeur ponctuels</li>
            <li>Transferts aéroport</li>
            <li>Services de transport régulier</li>
            <li>Location de véhicules avec chauffeur</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">3. Engagements des utilisateurs</h2>
          <p>
            En utilisant nos services, vous vous engagez à :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Fournir des informations exactes et à jour</li>
            <li>Respecter les chauffeurs et leur véhicule</li>
            <li>Ne pas fumer dans les véhicules sans autorisation</li>
            <li>Payer les services utilisés conformément aux tarifs en vigueur</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">4. Tarifs et paiement</h2>
          <p>
            Les tarifs sont disponibles sur notre plateforme et peuvent être modifiés sans préavis. Le paiement s'effectue :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Par carte bancaire via notre plateforme sécurisée</li>
            <li>Par virement bancaire pour les comptes entreprises</li>
            <li>En espèces dans la limite de 1000€ (conformément à la législation française)</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">5. Annulation et remboursement</h2>
          <p>
            Toute annulation doit être effectuée au minimum :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>24h à l'avance pour les services standard (remboursement intégral)</li>
            <li>48h à l'avance pour les services premium (remboursement intégral)</li>
            <li>Moins de 24h avant le service : des frais d'annulation de 50% peuvent être appliqués</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">6. Responsabilités</h2>
          <p>
            chaufeurPro décline toute responsabilité pour :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Les retards dus à des circonstances indépendantes de notre volonté (embouteillages, conditions météo, etc.)</li>
            <li>Les objets oubliés dans les véhicules</li>
            <li>Les dommages causés intentionnellement par le client</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">7. Protection des données</h2>
          <p>
            Nous collectons et traitons vos données personnelles conformément à notre Politique de Confidentialité et au RGPD. Les données collectées incluent :
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Informations de contact</li>
            <li>Historique des trajets</li>
            <li>Préférences de service</li>
            <li>Données de paiement (cryptées)</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">8. Modifications des CGU</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés des changements majeurs par email.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-6">9. Loi applicable et juridiction</h2>
          <p>
            Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera de la compétence exclusive des tribunaux de Paris.
          </p>

          <div class="mt-16 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <p>Pour toute question concernant ces conditions :</p>
            <p class="mt-2 font-medium">marciasmars@gmail.comr</p>
            <p class="mt-1">+229 0166672622</p>
            <p class="mt-1">Akonanboè, Porto-Novo</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead(() => ({
  title: 'Conditions Générales',
}));
</script>

<style scoped>
.prose h2 {
  @apply border-b border-gray-200 pb-2;
}

.prose ul {
  @apply mt-2 mb-4;
}

.prose p {
  @apply mb-4;
}
</style>