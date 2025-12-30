import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import JLoading from './components/global/JLoading.vue'

import { i18n, setLocale } from './i18n'

import './styles/variable.scss'
import './styles/main.scss'

const app = createApp(App)

// Plugins
app.use(i18n)
app.use(createPinia())
app.use(router)

await setLocale('ko')

// Global Components
app.component('JLoading', JLoading)

app.mount('#app')
