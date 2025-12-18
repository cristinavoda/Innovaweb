<template>
  <a
    :href="whatsAppLink"
    class="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<script setup>
import { onMounted } from 'vue'
const phoneNumber = "34634688218" 
const message = "Hola, me gustaría información sobre el desarrollo de páginas web personalizadas."
const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

onMounted(() => {
  const button = document.querySelector('.whatsapp-float')
  if (button) {
      button.classList.add('show')
    button.style.opacity = '0'
    button.style.transform = 'translateY(100px)'
    setTimeout(() => {
      button.style.transition = 'all 0.8s ease'
      button.style.opacity = '1'
      button.style.transform = 'translateY(0)'
    }, 500)
  }
})
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 25px;
  right: 18px;
  background-color: #25d366;
  color:azure;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(252, 249, 249, 0.3);
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1000;
}

.whatsapp-button.show {
  transform: translateY(0);
  opacity: 1;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
}

.whatsapp-button img {
  width: 35px;
  height: 35px;
}
.whatsapp-float {
  position: fixed;
  width: 62px;
  height: 62px;
  bottom: 25px;
  right: 18px;
  color: white;
   background-color: #25d366;
   box-shadow: 0 0 20px rgba(226, 233, 228, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.whatsapp-float:hover {
     animation: pulse 1.8s ease-in-out;
  
  background-color:  #00b8b8; 
  box-shadow: 0 0 20px rgba(226, 233, 228, 0.8);
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .whatsapp-float {
    width: 55px;
    height: 55px;
    font-size: 1.8rem;
    bottom: 20px;
    right: 20px;
  }
}
</style>
