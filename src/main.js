import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import AOS from 'aos'
import 'aos/dist/aos.css'


import './assets/style.css'

const app = createApp(App)


app.mixin({
  mounted() {
    AOS.init({ once: true }) 
  }
})

app.use(router)
app.mount('#app')
