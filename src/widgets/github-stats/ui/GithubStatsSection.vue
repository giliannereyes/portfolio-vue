<script setup>
import SectionHeader from '@/shared/ui/SectionHeader.vue'

const graphUrl = 'https://ghchart.rshah.org/giliannereyes'
</script>

<template>
  <section id="github-stats" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="github stats" number="05" />

      <div class="stats-card slide-up">
        <img
          :src="graphUrl"
          alt="GitHub contributions graph for giliannereyes"
          class="contrib-graph"
          loading="lazy"
          decoding="async"
        />
        <a
          href="https://github.com/giliannereyes"
          target="_blank"
          rel="noopener noreferrer"
          class="graph-link"
        >
          View profile on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-card {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--rounded-corner);
  background: var(--glass-bg);
  overflow: auto;
}

.contrib-graph {
  display: block;
  width: 100%;
  min-width: 700px;
  height: auto;
}

.graph-link {
  display: inline-block;
  margin-top: 0.75rem;
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--secondary-text);
}

.graph-link:hover {
  color: var(--primary-text);
  opacity: 1;
}

@media (max-width: 768px) {
  .stats-card {
    padding: 0.75rem;
  }
}
</style>
