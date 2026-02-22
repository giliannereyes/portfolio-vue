<script setup>
import { portfolio } from '@/entities/portfolio/model/portfolio.data'
import SectionHeader from '@/shared/ui/SectionHeader.vue'
</script>

<template>
  <section id="experience" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="experience" number="03" />

      <div class="timeline">
        <article
          v-for="(item, index) in portfolio.experiences"
          :key="item.period + item.role"
          class="timeline-item slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="timeline-dot" aria-hidden="true" />
          <div class="timeline-content">
            <p class="timeline-period">{{ item.period }}</p>
            <h3 class="timeline-role">{{ item.role }}</h3>
            <p class="timeline-company">{{ item.company }}</p>
            <p class="timeline-summary">{{ item.summary }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0.3rem;
  bottom: 0.3rem;
  width: 1px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1rem 1fr;
  gap: 1rem;
  padding: 0.2rem 0 1rem;
}

.timeline-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--accent-color);
  margin-top: 0.35rem;
}

.timeline-content {
  border: 1px solid var(--border-color);
  border-radius: var(--rounded-corner);
  background: var(--glass-bg);
  padding: 1rem 1rem 1.1rem;
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--tertiary-text);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.timeline-role {
  font-size: var(--font-size-large);
  color: var(--primary-text);
  margin: 0;
}

.timeline-company {
  font-size: var(--font-size-small);
  color: var(--secondary-text);
  margin-top: 0.2rem;
}

.timeline-summary {
  font-size: var(--font-size-small);
  line-height: 1.6;
  color: var(--secondary-text);
  margin-top: 0.75rem;
}
</style>
