<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const width = ref(0)

const updateProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  width.value = scrollHeight <= 0 ? 0 : (scrollTop / scrollHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="reading-progress" :style="{ width: `${width}%` }" />
</template>
