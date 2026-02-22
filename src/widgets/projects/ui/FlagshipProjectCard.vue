<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tech: {
    type: Array,
    required: true,
  },
  github: {
    type: String,
    default: '',
  },
  live: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="flagship slide-up" :style="{ animationDelay: `${index * 0.15}s` }">
    <div class="flagship-header">
      <span class="flagship-label">Featured</span>
    </div>

    <h3 class="flagship-title">{{ title }}</h3>
    <p class="flagship-description">{{ description }}</p>

    <div class="flagship-tech">
      <span v-for="item in tech" :key="item" class="tech-tag">{{ item }}</span>
    </div>

    <div class="flagship-links">
      <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer" class="flagship-link">
        View source
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>
      <a v-if="live" :href="live" target="_blank" rel="noopener noreferrer" class="flagship-link">
        Live
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.flagship {
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: var(--rounded-corner);
  background: var(--glass-bg);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  transition: var(--transition-smooth);
  position: relative;
}

.flagship:hover {
  border-color: var(--accent-color);
  box-shadow: var(--shadow-raised);
  transform: translateY(-2px);
}

.flagship-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.flagship-label {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--accent-color);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.flagship-title {
  font-size: var(--font-size-xx-large);
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

.flagship-description {
  color: var(--secondary-text);
  font-size: var(--font-size-base);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 36rem;
}

.flagship-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--tertiary-text);
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  text-transform: lowercase;
}

.flagship-links {
  display: flex;
  gap: 0.75rem;
}

.flagship-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--primary-text);
  font-size: var(--font-size-small);
  font-weight: 500;
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  transition: var(--transition-smooth);
}

.flagship-link:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  border-color: var(--accent-color);
  opacity: 1;
  text-decoration: none;
}

@media (max-width: 768px) {
  .flagship {
    padding: 1.5rem;
  }

  .flagship-title {
    font-size: var(--font-size-x-large);
  }
}
</style>
