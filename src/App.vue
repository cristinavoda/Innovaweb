<template>
  <div id="app">
    <Navbar />
    <router-view />
    <CookiesBanner />
    <DrawerSidebar v-if="showDrrawer" @close="showDrower=false" />
    <Footer />
    <WhatsAppButton />
    <PhoneButton />
    
<div class="cookie-floating" @click="openModal" aria-label="Configuración de cookies">
  ⚙️
</div>
<CookieSettingsModal v-model="showCookiesModal" />

    
    <button 
      v-if="showButton" 
      class="scroll-top-btn"  
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <span class="arrow">↑</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import PhoneButton from './components/PhoneButton.vue'
import CookiesBanner from "./components/CookiesBanner.vue";
import CookieSettingsButton from "./components/CookieSettingsButton.vue";
import CookieSettingsModal from "./components/CookieSettingsModal.vue";
const showCookiesModal = ref(false)
const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})


</script>

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #fff;
  color: #111;
}


.scroll-top-btn {
  position: fixed;
  bottom: 160px;
  right: 1.3%;
  background-color: transparent;
  color: rgb(96, 99, 99);
  border: none;
  width: 40px;
  height: 40px;
  font-size: 2.2rem;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  background-color: transparent;
  color: #464444;
  transform: scale(1.15);
  
}

.arrow {
  display: inline-block;
  font-weight: bold;
  font-size: 1.8rem;
  animation: float 1.5s ease-in-out infinite;
}
.cookie-floating {
  position: fixed;
  bottom: 94px;
  right: 20px;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;

  background: transparent;
  
  cursor: pointer;

 

  transition: transform 0.25s ease, background 0.3s ease;
  z-index: 9999;
}

.cookie-floating:hover {
  transform: scale(1.12);
  
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@media (max-width: 768px) {
  .scroll-top-btn {
    width: 45px;
    height: 45px;
    font-size: 18px;
    bottom: 175px;
    margin-right: 15px;
  }
}
</style>
