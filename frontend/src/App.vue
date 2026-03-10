<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <header class="bg-white shadow-md sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">
          📱 Activity Feed
        </h1>
        <p class="text-gray-600 mt-1">Infinite scroll with cursor-based pagination</p>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <ActivityFeed />
    </main>

    <footer class="mt-12 pb-8 text-center text-gray-600">
      <p class="text-sm">Built with Vue 3 + Express + MongoDB</p>
    </footer>
  </div>
</template>

<script setup>
import ActivityFeed from './components/ActivityFeed.vue'
</script>
