<template>
  <section ref="hero" class="hero-section">
    <img src="/images/cuarzo.png" class="hero-image" />
    <video ref="bgVideo" src="/videos/eye-stars-blue.mp4" autoplay muted loop playsinline class="hero-video"></video>

    <div class="hero-content">
      <h1 ref="title"><span></span> </h1>
      <p ref="subtitle" class="typewriter"></p>
      <button ref="btn" class="hero-btn">Descubre más</button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup() {
    const hero = ref(null)
    const bgVideo = ref(null)
    const title = ref(null)
    const subtitle = ref(null)
    const btn = ref(null)
    onMounted(() => {
      // Hover GSAP para video
      hero.value.addEventListener("mouseenter", () => {
        gsap.to(bgVideo.value, { opacity: 1, scale: 1.1, duration: 1, ease: "power2.out" });
      });
      hero.value.addEventListener("mouseleave", () => {
        gsap.to(bgVideo.value, { opacity: 0, scale: 1, duration: 1, ease: "power2.out" });
      });

      // Timeline GSAP
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // h1: fade + slide desde arriba
      tl.from(title.value, { y: -50, opacity: 0, duration: 1 });

      
      const text = "Creamos experiencias digitales inolvidables. Innovación digital y diseño con propósito,Tu página web te permite expresar la esencia de tu marca de forma natural y coherente.";
      let index = 0;
      tl.from(subtitle.value, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .to(subtitle.value, {
          duration: text.length * 0.06,
           onUpdate: function () {
      const progress = this.progress(); // entre 0 y 1
      const length = Math.floor(progress * text.length);
      subtitle.value.innerHTML = text.substring(0, length);
    },
  }, "-=0.3");

      // button: bounce
      tl.from(btn.value, { y: 20, opacity: 0, scale: 0.9, duration: 0.8, ease: "bounce.out" }, "-=0.3");
    });
    

    return { hero, bgVideo, title, subtitle, btn }
  }
  
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-image,
.hero-video {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

.hero-image { z-index: 1; opacity: 1; }
.hero-video { z-index: 0; opacity: 0; }

.hero-section:hover .hero-image { opacity: 0; }
.hero-section:hover .hero-video { opacity: 1; }

.hero-content {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; max-width: 1200px;
  text-align: center;
  color: white;
  z-index: 3;
}

 h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

.hero-content h1 span { color: #00c8ff; }

.hero-content .typewriter {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  line-height: 1.8;
  font-weight: 400;
  white-space: pre-line;
  max-width: 800px;
  color:#fcfdfd;
  border-right: 3px solid rgb(251, 252, 252);
  text-shadow: 4px 3px 8px rgba(46,44,51,0.4);
}

.hero-btn {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid white;
  background-color: rgba(255,255,255,0.15);
  color: white;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  cursor: pointer;
}

.hero-btn:hover {
  background-color: white;
  color: #222;
  transform: scale(1.05);
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: darkcyan; }
}
/* Al hacer hover sobre el contenedor: mostrar video, ocultar imagen */
.media-container:hover .hero-image {
  opacity: 0;
}

.media-container:hover .hero-video {
  opacity: 1;
}
/* Mobile Hero */
@media (max-width: 768px) {
  .hero-content .typewriter {
    bottom: auto;        /* desactiva la posición inferior */
    top: 2rem;           /* coloca el texto cerca de la parte superior */
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;   /* tamaño más pequeño para móviles */
    line-height: 1.5;
    max-width: 90%;      /* ancho adaptativo */
    word-wrap: break-word; /* permite que las palabras se rompan si es necesario */
  }
}
.grid-container {
    grid-template-columns: 1fr; /* un item por fila */
    gap: 0.8rem;
  }

  .grid-item {
    flex-direction: column; /* se mantiene columna */
  }

  .image {
    height: 200px; /* imagen más alta para móvil */
  }

  .text {
    font-size: 1.1rem; /* texto más legible */
    padding: 1.2rem;
  }


@media (max-width: 480px) {
  .image {
    height: 180px; /* ajusta si quieres más compacta */
  }

  .text {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>