import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

// Import your locale messages
import en from '../i18n/en-US.json'
import de from '../i18n/de.json'
import es from '../i18n/es.json'
import fr from '../i18n/fr.json'
import pt from '../i18n/pt.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    es,
    fr,
    pt
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
