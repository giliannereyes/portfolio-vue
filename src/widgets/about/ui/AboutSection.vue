<script setup>
import { portfolio } from '@/entities/portfolio/model/portfolio.data'
import SectionHeader from '@/shared/ui/SectionHeader.vue'
</script>

<template>
  <section id="about" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="about" number="01" />
      <div class="about-content">
        <p v-for="text in portfolio.meta.about" :key="text">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-content p {
  font-size: var(--font-size-base);
  line-height: 1.75;
  color: var(--secondary-text);
  max-width: 36rem;
}

@media (max-width: 768px) {
  .about-content p {
    font-size: var(--font-size-small);
  }
}
</style>
