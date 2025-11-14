<template>
  <div>
    <!-- Fondo oscuro borroso -->
    <div 
      v-if="visible" 
      class="overlay" 
      @click="closeModal"
      ref="overlay"
    ></div>

    <!-- Modal -->
    <div 
      v-if="visible" 
      class="modal" 
      ref="modal"
    >
      <h2>Configuración de Cookies</h2>
      <p class="subtitle">Controla qué tipos de cookies deseas permitir.</p>

      <div class="option">
        <label>🍪 Cookies esenciales</label>
        <span>Obligatorias</span>
      </div>

      <div class="option">
        <label>📊 Cookies analíticas</label>
        <label class="switch">
          <input type="checkbox" v-model="analytics">
          <span class="slider"></span>
        </label>
      </div>

      <div class="option">
        <label>🎯 Marketing</label>
        <label class="switch">
          <input type="checkbox" v-model="marketing">
          <span class="slider"></span>
        </label>
      </div>

      <div class="buttons">
        <button class="btn cancel" @click="closeModal">Cancelar</button>
        <button class="btn save" @click="saveSettings">Guardar</button>
      </div>
    </div>

    <!-- Botón flotante -->
    <div class="cookie-floating" @click="openModal">
      ⚙️
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      visible: false,
      analytics: true,
      marketing: false,
    };
  },

  methods: {
    openModal() {
      this.visible = true;
      this.$nextTick(() => {
        gsap.fromTo(
          this.$refs.modal,
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
        );
        gsap.fromTo(
          this.$refs.overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
      });
    },

    closeModal() {
      gsap.to(this.$refs.modal, {
        opacity: 0,
        scale: 0.9,
        duration: 0.25,
        onComplete: () => {
          this.visible = false;
        }
      });
    },

    saveSettings() {
      alert("Preferencias de cookies guardadas ✔");
      this.closeModal();
    }
  }
};
</script>

<style scoped>
/* Fondo oscuro blur */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(4px);
  z-index: 9998;
}

/* Modal glassmorphism */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: min(90%, 420px);
  padding: 24px;

  background: rgba(255,255,255,0.15);
  border-radius: 18px;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.22);

  box-shadow: 0 8px 40px rgba(0,0,0,0.35);

  z-index: 9999;
  color: white;
  text-align: left;
}

h2 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
}

.subtitle {
  margin-bottom: 20px;
  opacity: 0.8;
}

/* Opciones */
.option {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 14px 0;
}

/* Switch moderno */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.switch input { display: none; }

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 40px;
  transition: 0.3s;
}

.slider:before {
  content: "";
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
}

input:checked + .slider {
  background: #00c9a7;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

/* Botones */
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 25px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.cancel {
  background: rgba(255,255,255,0.1);
  color: #eee;
}

.save {
  background: #00c9a7;
  color: black;
  font-weight: 600;
}

/* Botón flotante */
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

  background: rgba(255,255,255,0.13);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);

  border-radius: 50%;
  cursor: pointer;

  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);

  transition: transform 0.25s ease, background 0.3s ease;
  z-index: 9999;
}

.cookie-floating:hover {
  transform: scale(1.12);
  background: rgba(255,255,255,0.22);
}
</style>
