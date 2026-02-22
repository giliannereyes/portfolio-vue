<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.pageYOffset > 300
}

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button id="backToTop" class="back-to-top" :class="{ visible }" aria-label="Back to top" @click="goTop">
    <span class="back-to-top-icon">&uarr;</span>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 2.25rem;
  height: 2.25rem;
  background: var(--glass-bg);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  color: var(--primary-text);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  z-index: 1100;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-glass);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  border-color: var(--accent-color);
  transform: translateY(-2px);
  opacity: 1;
}
</style>
