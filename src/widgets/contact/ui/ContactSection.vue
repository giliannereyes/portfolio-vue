<script setup>
import { ref } from 'vue'
import { portfolio } from '@/entities/portfolio/model/portfolio.data'
import SectionHeader from '@/shared/ui/SectionHeader.vue'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || null
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || null
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || null
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || null
const TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || 'giliannekatereyes@yahoo.com'

const formData = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const notification = ref({ visible: false, message: '', type: 'success' })

const showNotification = (message, type) => {
  notification.value = { visible: true, message, type }
  window.setTimeout(() => {
    notification.value.visible = false
  }, 4000)
}

const sendTemplate = async (templateId, templateParams) => {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      user_id: PUBLIC_KEY,
      template_id: templateId,
      template_params: templateParams,
    }),
  })

  if (!response.ok) {
    const errorText = (await response.text())?.trim()
    let details = errorText

    try {
      const parsed = JSON.parse(errorText)
      details = parsed?.text || parsed?.message || errorText
    } catch {
      // response is plain text
    }

    throw new Error(details || `EmailJS send failed (${response.status})`)
  }
}

const submitContact = async () => {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    showNotification(
      'Email service is not configured yet. Please add VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY.',
      'error',
    )
    return
  }

  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    showNotification('Please fill in all fields before sending.', 'error')
    return
  }

  if (!OWNER_TEMPLATE_ID && !USER_TEMPLATE_ID) {
    showNotification('No EmailJS templates configured.', 'error')
    return
  }

  isSubmitting.value = true

  try {
    const requests = []

    if (OWNER_TEMPLATE_ID) {
      requests.push(
        sendTemplate(OWNER_TEMPLATE_ID, {
          from_name: formData.value.name,
          reply_to: formData.value.email,
          message: formData.value.message,
          email: TO_EMAIL,
          to_email: TO_EMAIL,
          user_email: formData.value.email,
        }),
      )
    }

    if (USER_TEMPLATE_ID) {
      requests.push(
        sendTemplate(USER_TEMPLATE_ID, {
          from_name: 'Gilianne',
          reply_to: TO_EMAIL,
          message: formData.value.message,
          email: formData.value.email,
          to_email: formData.value.email,
        }),
      )
    }

    await Promise.all(requests)
    showNotification("Message sent successfully! I'll get back to you soon.", 'success')
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('EmailJS send failed:', error)
    const details = error instanceof Error ? error.message : 'Unknown error'
    showNotification(`Could not send your message. ${details}`, 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section fade-in">
    <div class="content-wrap">
      <SectionHeader title="contact" number="06" />

      <div class="contact-section">
        <div class="contact-info">
          <p>
            Open to collaboration, consulting, and interesting engineering problems. Reach out directly or use
            the form below.
          </p>
          <div class="contact-links">
            <a href="mailto:giliannekatereyes@yahoo.com" class="contact-link">
              <span>giliannekatereyes@yahoo.com</span>
            </a>
            <a :href="portfolio.links.github" class="contact-link" target="_blank" rel="noopener">
              <span>github.com/giliannereyes</span>
            </a>
            <a :href="portfolio.links.linkedin" class="contact-link" target="_blank" rel="noopener">
              <span>linkedin.com/in/giliannereyes</span>
            </a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitContact">
          <div class="form-group">
            <input v-model="formData.name" type="text" name="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <input v-model="formData.email" type="email" name="email" placeholder="Your email" required />
          </div>
          <div class="form-group">
            <textarea
              v-model="formData.message"
              name="message"
              placeholder="Your message"
              rows="5"
              required
            />
          </div>
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span class="button-text">{{ isSubmitting ? 'sending...' : 'send message' }}</span>
          </button>
        </form>
      </div>
    </div>

    <div v-if="notification.visible" class="notification" :class="notification.type === 'success' ? 'notification-success' : 'notification-error'">
      {{ notification.message }}
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.contact-info p {
  font-size: var(--font-size-small);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: var(--secondary-text);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none !important;
  color: var(--secondary-text);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: var(--rounded-corner-small);
  transition: var(--transition-smooth);
  font-size: var(--font-size-small);
  font-family: var(--font-mono);
  background: transparent;
}

.contact-link:hover {
  background: var(--hover-bg);
  color: var(--primary-text);
  text-decoration: none !important;
  transform: translateX(4px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--rounded-corner-small);
  background: var(--bg-color);
  color: var(--primary-text);
  font-family: var(--font-family);
  font-size: var(--font-size-small);
  transition: var(--transition-smooth);
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-color-alpha);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--tertiary-text);
}

.submit-button {
  background: transparent;
  color: var(--primary-text);
  border: 1px solid var(--border-color);
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-family: var(--font-family);
  font-size: var(--font-size-small);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
  align-self: flex-start;
}

.submit-button:hover {
  background: var(--accent-color);
  color: var(--bg-color);
  border-color: var(--accent-color);
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.notification {
  position: fixed;
  top: 4.5rem;
  right: 1.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--rounded-corner);
  box-shadow: var(--shadow-raised);
  z-index: 10000;
  max-width: 400px;
  font-size: var(--font-size-small);
  line-height: 1.4;
  color: white;
  backdrop-filter: var(--blur);
}

.notification-success {
  background: rgba(46, 160, 67, 0.9);
}

.notification-error {
  background: rgba(218, 54, 51, 0.9);
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
