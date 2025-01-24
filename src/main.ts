import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Import all language files
import en from './i18n/en-US.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import de from './i18n/de.json'
import pt from './i18n/pt.json'

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en-US', // Default locale
  fallbackLocale: 'en-US', // Fallback if translation is missing
  messages: {
    'en-US': en,
    'es': es,
    'fr': fr,
    'de': de,
    'pt': pt
  }
})

const app = createApp(App)
app.use(i18n)
// ... other app configurations
app.mount('#app') 