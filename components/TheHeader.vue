<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div>
          <NuxtLink to="/" class="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
            <img src="/img/logo.png" alt="Logo" class="h-8 mr-2" />
            <h1 class="text-2xl font-bold text-primary">chaufeurPro</h1>
          </NuxtLink>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path" 
              :to="item.path" 
              class="nav-link"
              :class="{ 'router-link-active': $route.path === item.path }"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile hamburger -->
        <button @click="isOpen = !isOpen"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
          :aria-expanded="isOpen" aria-label="Toggle navigation">
          <IconMenu v-if="!isOpen" class="h-6 w-6" />
          <IconX v-else class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            @click="close"
            class="mobile-link"
            :class="{ 'router-link-active': $route.path === item.path }"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { IconMenu, IconX } from '@tabler/icons-vue'

const isOpen = ref(false)

// Navigation items centralisée
const navItems = [
  { path: '/services', label: 'Nos services' },
  { path: '/about', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
]

const close = () => {
  isOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200;
}

.mobile-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors duration-200;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.router-link-active {
  @apply text-primary font-semibold;
}
</style>