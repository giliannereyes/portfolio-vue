<script setup>
import { computed, ref } from 'vue'
import { portfolio } from '@/entities/portfolio/model/portfolio.data'
import SectionHeader from '@/shared/ui/SectionHeader.vue'
import FlagshipProjectCard from '@/widgets/projects/ui/FlagshipProjectCard.vue'

const page = ref(0)
const pageSize = 3

const orderedProjects = computed(() => [...portfolio.projects].sort((a, b) => a.order - b.order))
const featured = computed(() => orderedProjects.value.filter((project) => project.featured))
const other = computed(() => orderedProjects.value.filter((project) => !project.featured))
const totalPages = computed(() => Math.max(1, Math.ceil(other.value.length / pageSize)))
const pagedProjects = computed(() => {
  const start = page.value * pageSize
  return other.value.slice(start, start + pageSize)
})

const prevPage = () => {
  page.value = page.value === 0 ? totalPages.value - 1 : page.value - 1
}

const nextPage = () => {
  page.value = page.value === totalPages.value - 1 ? 0 : page.value + 1
}

const goToPage = (index) => {
  page.value = index
}
</script>

<template>
  <section id="projects" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="featured projects" number="02" />

      <div class="flagship-grid">
        <FlagshipProjectCard
          v-for="(project, index) in featured"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tech="project.tech"
          :github="project.github"
          :live="project.live"
          :index="index"
        />
      </div>

      <div class="projects-head">
        <h3 class="subsection-title">All Projects</h3>
      </div>

      <div class="projects-cards">
        <article v-for="project in pagedProjects" :key="project.title" class="project-card slide-up">
          <p class="project-tech">{{ project.tech.join(' / ') }}</p>
          <h4 class="project-title">{{ project.title }}</h4>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-actions">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
              View source
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="project-link">
              Live
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <div class="page-nav" aria-label="All projects pages">
        <button type="button" class="arrow-btn" aria-label="Previous projects page" @click="prevPage">
          &lt;
        </button>
        <div class="page-dots">
          <button
            v-for="(_, index) in totalPages"
            :key="index"
            type="button"
            class="dot"
            :class="{ active: index === page }"
            :aria-label="`Go to projects page ${index + 1}`"
            @click="goToPage(index)"
          />
        </div>
        <button type="button" class="arrow-btn" aria-label="Next projects page" @click="nextPage">
          &gt;
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flagship-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.75rem;
}

.projects-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.subsection-title {
  font-size: var(--font-size-small);
  font-weight: 500;
  color: var(--tertiary-text);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--font-mono);
}

.page-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.9rem;
}

.arrow-btn {
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--secondary-text);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  font-size: var(--font-size-xs);
  font-family: var(--font-mono);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.arrow-btn:hover {
  color: var(--primary-text);
  border-color: var(--accent-color);
}

.projects-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: var(--rounded-corner);
  background: var(--glass-bg);
  padding: 1rem;
}

.project-tech {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--tertiary-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: var(--font-size-large);
  color: var(--primary-text);
  margin: 0;
}

.project-description {
  font-size: var(--font-size-small);
  color: var(--secondary-text);
  line-height: 1.6;
  margin-top: 0.6rem;
}

.project-actions {
  margin-top: auto;
  padding-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.project-link {
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

.project-link:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  border-color: var(--accent-color);
  opacity: 1;
  text-decoration: none;
}

.page-dots {
  display: flex;
  gap: 0.45rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: transparent;
  cursor: pointer;
}

.dot.active {
  background: var(--accent-color);
  border-color: var(--accent-color);
}

@media (max-width: 980px) {
  .projects-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .flagship-grid {
    grid-template-columns: 1fr;
  }

  .projects-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .projects-cards {
    grid-template-columns: 1fr;
  }
}
</style>
