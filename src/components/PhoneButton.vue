<template>
  <a href="tel:+34634688218" class="phone-button" aria-label="Llamar por teléfono">
    <i class="fas fa-phone"></i>
  </a>
</template>

<script>
export default {
  name: "PhoneButton",
};
</script>

<style scoped>
.phone-button {
  position: fixed;
  bottom: 25px;         
  left: 20px;
  background-color: #0a84ff; 
  color: white;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.phone-button:hover {
  transform: scale(1.1);
  opacity: 0.9;
}
</style>
