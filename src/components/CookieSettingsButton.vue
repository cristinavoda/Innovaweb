<template>
  <div class="cookie-floating" @click="openSettings">
    ⚙️
  </div>
</template>

<script>
export default {
  methods: {
    openSettings() {
      alert("Abrirá el panel de configuración de cookies (puedes personalizarlo)");
      
    }
  }
};
</script>

<style scoped>
.cookie-floating {
  position: fixed;
  bottom: 94px;
  right: 36px;

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
</style>
