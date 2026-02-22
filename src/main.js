import { createApp } from 'vue'
import App from '@/app/App.vue'
import '@/app/styles/main.css'

const savedTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.setAttribute('data-theme', savedTheme)

createApp(App).mount('#app')
