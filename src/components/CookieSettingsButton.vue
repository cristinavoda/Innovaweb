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
      // Aquí puedes abrir un modal, un drawer, etc.
    }
  }
};
</script>

<style scoped>
.cookie-floating {
  position: fixed;
  bottom: 90px;
  right: 16px;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;

  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 50%;
  cursor: pointer;

  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);

  transition: transform 0.25s ease, background 0.3s ease;
  z-index: 9999;
}

.cookie-floating:hover {
  transform: scale(1.12);
  background: rgba(255, 255, 255, 0.22);
}
</style>
