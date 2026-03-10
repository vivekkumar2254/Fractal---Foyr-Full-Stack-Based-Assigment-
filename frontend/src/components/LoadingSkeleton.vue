<template>
  <div class="space-y-4">
    <div 
      v-for="i in count" 
      :key="i"
      class="bg-white rounded-lg shadow-md p-6 animate-pulse"
    >
      <div class="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>

      <div class="space-y-2 mb-4">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>

      <div class="h-3 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 3
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
