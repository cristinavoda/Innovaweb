import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Estilos globales
import './assets/style.css'

const app = createApp(App)

// Inicializar AOS
app.mixin({
  mounted() {
    AOS.init({ once: true }) // las animaciones solo ocurren una vez
  }
})

app.use(router)
app.mount('#app')
