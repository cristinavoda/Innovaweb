<template>
  <button
    v-show="showButton"
    class="scroll-top"
    @click="scrollToTop"
    aria-label="Volver arriba"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 25px;
  right: 95px;
  background-color: #1e6f6f; /* DarkCyan elegante */
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 9998;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.9;
}

.scroll-top:hover {
  transform: scale(1.1);
  background-color: #25d366; 
  color: #fff;
}

@media (max-width: 768px) {
  .scroll-top {
    right: 20px;
    bottom: 90px; 
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
}
</style>
