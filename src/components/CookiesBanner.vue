<template>
  <div v-if="showBanner" class="cookie-banner">
    <p>
      Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar.
    </p>

    <div class="actions">
      <button class="accept" @click="acceptCookies">Aceptar</button>
      <button class="reject" @click="rejectCookies">Rechazar</button>
      <button class="settings" @click="openSettings">Configurar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: false,
    };
  },

  mounted() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      this.showBanner = true;
    }
  },

  methods: {
    acceptCookies() {
      localStorage.setItem("cookieConsent", "accepted");
      this.showBanner = false;
    },

    rejectCookies() {
      localStorage.setItem("cookieConsent", "rejected");
      this.showBanner = false;
    },

    openSettings() {
      alert("Aquí abrirá el panel de configuración (opcional)");
    },
  },
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: min(90%, 360px);
  padding: 14px 18px;

  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(14px);

  border-radius: 16px;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);

  color: #fff;
  font-size: 0.9rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.actions button {
  flex: 1;
  padding: 6px 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
}

.accept {
  background: #00d27f;
  color: #fff;
}

.reject {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.settings {
  background: rgba(0, 0, 0, 0.25);
  color: #ddd;
}
</style>
