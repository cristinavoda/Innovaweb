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
  bottom: 300px;
  right: 30px;
  background-color: #008b8b; 
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  display: flex;
  cursor: pointer;
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
    margin-bottom: 300px; 
    right: 50%;
    transform: translate(50%, 50%);
    width: 45px;
    height: 45px;
    font-size: 18px;
    background-color: #009999;
  }

  .scroll-top:hover {
    transform: translate(50%, 50%) scale(1.1);
  }
}


</style>
