<script setup>
import { portfolio } from '@/entities/portfolio/model/portfolio.data'

const firstName = 'gilianne'.split('')
const lastName = 'reyes'.split('')
</script>

<template>
  <header class="header fade-in">
    <div class="content-wrap hero-grid">
      <div class="hero-content">
        <div class="hero-label">{{ portfolio.meta.label }}</div>
        <h1 class="name">
          <span class="name-line">
            <span
              v-for="(char, index) in firstName"
              :key="`first-${index}`"
              class="name-char"
              :style="{ animationDelay: `${index * 0.06}s` }"
              >{{ char }}</span
            >
          </span>
          <span class="name-line">
            <span
              v-for="(char, index) in lastName"
              :key="`last-${index}`"
              class="name-char"
              :style="{ animationDelay: `${(index + firstName.length) * 0.06}s` }"
              >{{ char }}</span
            >
          </span>
        </h1>
        <p class="title">{{ portfolio.meta.tagline }}</p>
        <div class="hero-links">
          <a :href="portfolio.links.email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16v16H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>mail</span>
          </a>
          <a :href="portfolio.links.github" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>github</span>
          </a>
          <a :href="portfolio.links.linkedin" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5ZM7.09 20.452H3.556V9h3.534v11.452ZM5.323 7.45a2.05 2.05 0 1 1 0-4.101 2.05 2.05 0 0 1 0 4.101Zm15.129 13.002h-3.533v-5.73c0-1.366-.028-3.123-1.904-3.123-1.906 0-2.197 1.489-2.197 3.026v5.827H9.286V9h3.39v1.561h.047c.472-.895 1.625-1.84 3.346-1.84 3.578 0 4.237 2.355 4.237 5.417v6.314Z"
              />
            </svg>
            <span>linkedin</span>
          </a>
          <a :href="portfolio.links.cv" download="Gilianne-Reyes-CV.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M4 21h16" />
            </svg>
            <span>CV</span>
          </a>
        </div>
      </div>

      <div class="hero-image-wrap slide-up" style="animation-delay: 0.24s">
        <img :src="'/hero.png'" alt="Hero portrait" class="hero-image" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-top: 4rem;
}

.hero-grid {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  align-items: center;
  gap: 3rem;
}

.hero-content {
  min-width: 0;
}

.hero-label {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--tertiary-text);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.name {
  font-size: clamp(2.8rem, 8.2vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--primary-text);
  line-height: 0.95;
  text-transform: lowercase;
}

.name-line {
  display: block;
  white-space: nowrap;
}

.name-line:first-child {
  margin-bottom: 0.05em;
}

.name-char {
  display: inline-block;
  margin-right: 0.01em;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.title {
  font-size: var(--font-size-large);
  color: var(--secondary-text);
  margin: 2rem 0 0 0;
  font-weight: 400;
  line-height: 1.5;
  max-width: 30rem;
}

.hero-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--secondary-text);
  font-size: var(--font-size-xs);
  font-weight: 500;
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: transparent;
  transition: var(--transition-smooth);
}

.hero-links a svg {
  width: 0.8rem;
  height: 0.8rem;
  flex-shrink: 0;
}

.hero-links a:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  border-color: var(--accent-color);
  transform: translateY(-1px);
  text-decoration: none;
  opacity: 1;
}

.hero-image-wrap {
  justify-self: end;
  width: 100%;
  max-width: 280px;
  padding: 0.5rem;
  border: 1px solid color-mix(in srgb, var(--accent-color) 22%, transparent);
  border-radius: 1.1rem;
  overflow: hidden;
  background:
    linear-gradient(
      155deg,
      color-mix(in srgb, var(--accent-color) 14%, transparent),
      color-mix(in srgb, var(--bg-color) 82%, transparent)
    );
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.32),
    0 0 0 1px color-mix(in srgb, var(--accent-color) 10%, transparent);
  transform: rotate(1.5deg);
  transition: var(--transition-smooth);
}

.hero-image-wrap:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow:
    0 16px 34px rgba(0, 0, 0, 0.4),
    0 0 0 1px color-mix(in srgb, var(--accent-color) 18%, transparent);
}

.hero-image {
  display: block;
  width: 100%;
  height: 350px;
  border-radius: 0.8rem;
  object-fit: cover;
  object-position: center 40%;
}

@media (max-width: 1040px) {
  .hero-grid {
    grid-template-columns: minmax(0, 1fr) 250px;
    gap: 2rem;
  }

  .hero-image-wrap {
    max-width: 250px;
  }

  .hero-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .header {
    min-height: 70vh;
    padding-top: 3rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .hero-image-wrap {
    justify-self: start;
    max-width: 240px;
    transform: rotate(0deg);
  }

  .hero-image {
    height: 290px;
  }
}
</style>
