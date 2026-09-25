<script setup>
import { portfolio } from '@/entities/portfolio/model/portfolio.data'

const footerLinks = [
  { label: 'Email', href: portfolio.links.email },
  { label: 'GitHub', href: portfolio.links.github },
  { label: 'LinkedIn', href: portfolio.links.linkedin },
  { label: 'CV', href: portfolio.links.cv },
]
</script>

<template>
  <footer class="footer fade-in">
    <div class="footer-inner">
      <span class="footer-left">&copy; 2026 Gilianne Reyes</span>

      <div class="footer-links">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          :href="link.href"
          class="footer-link"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
}

.footer-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer-left {
  color: var(--tertiary-text);
  font-size: var(--font-size-xs);
  font-weight: 400;
  letter-spacing: 0.02em;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.footer-link {
  color: var(--tertiary-text);
  font-size: var(--font-size-xs);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: var(--transition-smooth);
}

.footer-link:hover {
  color: var(--primary-text);
  opacity: 1;
}

@media (max-width: 768px) {
  .footer {
    margin-top: 2rem;
    padding: 1.5rem 0;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
