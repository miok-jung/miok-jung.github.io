import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'

import JLoading from './components/global/JLoading.vue'

import './styles/variable.scss'
import './styles/main.scss'

const app = createApp(App)

// Plugins
app.use(createPinia())
app.use(router)

// Global Components
app.component('JLoading', JLoading)

app.mount('#app')
