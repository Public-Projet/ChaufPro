// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [600, 700]
    }
  },

  app: {
    head: {
      title: 'ChauffeurPro - Votre partenaire de mobilité professionnelle',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nous mettons à votre disposition des chauffeurs professionnels pour répondre aux besoins de mobilité de votre entreprise.' },
        { name: 'author', content: 'Mirobex' },
        { name: 'theme-color', content: '#0400f0' },
        { name: 'keywords', content: 'Chauffeur, ChauffeurPro, Cotonou, marché béninois, entreprises, expansion, Afrique' },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'ChauffeurPro - Votre partenaire de mobilité professionnelle' },
        { property: 'og:description', content: 'Nous mettons à votre disposition des chauffeurs professionnels pour répondre aux besoins de mobilité de votre entreprise.' },
        { property: 'og:image', content: 'https://raw.githubusercontent.com/Repo-Files/ChaufPro/refs/heads/main/img/seo.png' },
        { property: 'og:url', content: 'https://mirobex.bj' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ChauffeurPro - Votre partenaire de mobilité professionnelle' },
        { name: 'twitter:description', content: 'Nous mettons à votre disposition des chauffeurs professionnels pour répondre aux besoins de mobilité de votre entreprise.' },
        { name: 'twitter:image', content: 'https://raw.githubusercontent.com/Repo-Files/ChaufPro/refs/heads/main/img/seo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ChauffeurPro.bj' }
      ]
    }
  },
})