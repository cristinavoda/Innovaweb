<template>
  <div id="app">
    <Navbar />
    <router-view />

    <!-- Módulo decorativo -->
   

    <Footer />

    <!-- Botones flotantes -->
    <WhatsAppButton />
    <PhoneButton />

    <!-- Botón scroll top -->
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

/* Scroll top */
.scroll-top-btn {
  position: fixed;
  bottom: 10rem;
  right: 2rem;
  background-color: rgb(247, 248, 248);
  color: darkcyan;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-size: 2.2rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  background-color: #0b8a8a;
  color: #ffffff;
  transform: scale(1.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
}

.arrow {
  display: inline-block;
  font-weight: bold;
  font-size: 1.8rem;
  animation: float 1.5s ease-in-out infinite;
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
    bottom: 15px;
    right: 15px;
  }
}
</style>
