<template>
  <div class="space-y-4">
    <ActivityCard 
      v-for="activity in activities" 
      :key="activity._id"
      :activity="activity"
    />

    <LoadingSkeleton v-if="isLoading" />

    <div 
      v-if="!hasMore && activities.length > 0" 
      class="text-center py-8 text-gray-500"
    >
      <p class="text-lg">🎉 You've reached the end!</p>
      <p class="text-sm mt-2">No more activities to load</p>
    </div>

    <div 
      v-if="!isLoading && activities.length === 0" 
      class="text-center py-12"
    >
      <p class="text-xl text-gray-600">No activities found</p>
      <p class="text-sm text-gray-500 mt-2">Check back later for updates</p>
    </div>

    <div 
      v-if="error" 
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
    >
      <p class="font-bold">Error</p>
      <p>{{ error }}</p>
    </div>

    <div ref="observerTarget" class="h-10"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import ActivityCard from './ActivityCard.vue'
import LoadingSkeleton from './LoadingSkeleton.vue'

const activities = ref([])
const isLoading = ref(false)
const hasMore = ref(true)
const error = ref(null)
const lastId = ref(null)
const observerTarget = ref(null)
let observer = null

const fetchActivities = async () => {
  if (isLoading.value || !hasMore.value) return

  try {
    isLoading.value = true
    error.value = null

    const params = new URLSearchParams({
      limit: '10'
    })

    if (lastId.value) {
      params.append('lastId', lastId.value)
    }

    const response = await axios.get(`/api/feed?${params.toString()}`)

    const { data, hasMore: more } = response.data

    activities.value = [...activities.value, ...data]

    hasMore.value = more

    if (data.length > 0) {
      lastId.value = data[data.length - 1]._id
    }

  } catch (err) {
    console.error('Error fetching activities:', err)
    error.value = 'Failed to load activities. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const setupInfiniteScroll = () => {
  observer = new IntersectionObserver(
    (entries) => {
      const firstEntry = entries[0]
      if (firstEntry.isIntersecting && hasMore.value && !isLoading.value) {
        fetchActivities()
      }
    },
    {
      rootMargin: '100px'
    }
  )

  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
}

onMounted(() => {
  fetchActivities()
  setTimeout(setupInfiniteScroll, 500)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
