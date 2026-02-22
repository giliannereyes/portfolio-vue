<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { portfolio } from '@/entities/portfolio/model/portfolio.data'
import SectionHeader from '@/shared/ui/SectionHeader.vue'

const iconMap = {
  Java: 'java',
  Python: 'python',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  C: 'c',
  'C++': 'cplusplus',
  React: 'react',
  Vue: 'vuedotjs',
  HTML: 'html5',
  CSS: 'css',
  'Tailwind CSS': 'tailwindcss',
  'Spring Boot': 'springboot',
  Supabase: 'supabase',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Docker: 'docker',
  Linux: 'linux',
  Git: 'git',
  GitHub: 'github',
  'GitHub Actions': 'githubactions',
  Vercel: 'vercel',
  Wireshark: 'wireshark',
}

const theme = ref('dark')
let themeObserver

const updateTheme = () => {
  theme.value = document.documentElement.getAttribute('data-theme') || 'dark'
}

onMounted(() => {
  updateTheme()
  themeObserver = new MutationObserver(updateTheme)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
})

onUnmounted(() => {
  if (themeObserver) themeObserver.disconnect()
})

const getIconUrl = (skill) => {
  if (skill === 'REST APIs') return ''
  if (skill === 'Java') {
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  }
  const slug = iconMap[skill]
  if (!slug) return ''

  if (skill === 'GitHub' || skill === 'Vercel') {
    const mono = theme.value === 'dark' ? 'ffffff' : '111111'
    return `https://cdn.simpleicons.org/${slug}/${mono}`
  }

  return `https://cdn.simpleicons.org/${slug}`
}
</script>

<template>
  <section id="skills" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="tech stack" number="04" />
      <div class="skills-grid">
        <div
          v-for="(skill, index) in portfolio.skills"
          :key="skill"
          class="skill-chip slide-up"
          :style="{ animationDelay: `${index * 0.03}s` }"
        >
          <img
            v-if="getIconUrl(skill)"
            :src="getIconUrl(skill)"
            :alt="`${skill} icon`"
            class="skill-icon"
            loading="lazy"
            decoding="async"
          />
          <span v-else class="skill-fallback-icon" aria-hidden="true">&lt;/&gt;</span>
          <span>{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.65rem;
  margin-top: 1.5rem;
}

.skill-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.15rem;
  font-size: var(--font-size-small);
  font-weight: 500;
  color: var(--secondary-text);
  background: transparent;
  padding: 0.35rem 0.65rem;
  border-radius: var(--rounded-corner-small);
  border: 1px solid var(--border-color);
  transition: var(--transition-smooth);
}

.skill-chip:hover {
  color: var(--primary-text);
  border-color: var(--accent-color);
  transform: translateY(-1px);
}

.skill-icon {
  width: 0.95rem;
  height: 0.95rem;
  flex-shrink: 0;
  filter: grayscale(0.1);
}

.skill-fallback-icon {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--tertiary-text);
  flex-shrink: 0;
}

@media (max-width: 980px) {
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
}
</style>
