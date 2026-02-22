<template>
  <footer class="footer fade-in">
    <div class="footer-inner">
      <span class="footer-left">&copy; 2026 Gilianne Reyes</span>
      <span class="footer-right">Built with Vue</span>
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
}

.footer-left,
.footer-right {
  color: var(--tertiary-text);
  font-size: var(--font-size-xs);
  font-weight: 400;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .footer {
    margin-top: 2rem;
    padding: 1.5rem 0;
  }
}
</style>
