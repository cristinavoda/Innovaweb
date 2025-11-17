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
      
      hero.value.addEventListener("mouseenter", () => {
        gsap.to(bgVideo.value, { opacity: 1, scale: 1.1, duration: 1, ease: "power2.out" });
      });
      hero.value.addEventListener("mouseleave", () => {
        gsap.to(bgVideo.value, { opacity: 0, scale: 1, duration: 1, ease: "power2.out" });
      });

      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      
      tl.from(title.value, { y: -50, opacity: 0, duration: 1 });

      
      const text = "Creamos experiencias digitales inolvidables. Innovación digital y diseño con propósito,Tu página web te permite expresar la esencia de tu marca de forma natural y coherente.";
      let index = 0;
      tl.from(subtitle.value, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .to(subtitle.value, {
          duration: text.length * 0.06,
           onUpdate: function () {
      const progress = this.progress(); 
      const length = Math.floor(progress * text.length);
      subtitle.value.innerHTML = text.substring(0, length);
    },
  }, "-=0.3");

     
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
  height: 83vh;
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
  position: relative;
  transform: translate(-50%, -50%);
  width: 100%; max-width: 1200px;
  text-align: center;
  color: white;
  z-index: 3;
}

 h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 4rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

.hero-content h1 span { color: #00c8ff; }

.hero-content .typewriter {
  position: absolute;
  top: 19rem;
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

.media-container:hover .hero-image {
  opacity: 0;
}

.media-container:hover .hero-video {
  opacity: 1;
}

@media (max-width: 768px) {
  .hero-content .typewriter {
    bottom: auto;        
    top: 2rem;           

    font-size: 1.2rem;   
    line-height: 1.5;
    max-width: 90%;      
    word-wrap: break-word; 
  }
}
.grid-container {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .grid-item {
    flex-direction: column; 
  }

  .image {
    height: 200px; 
  }

  .text {
    font-size: 1.1rem; 
    padding: 1.2rem;
  }


@media (max-width: 480px) {
  .image {
    height: 180px; 
  }

  .text {
    font-size: 1rem;
    padding: 1rem;
  }
}
@media (max-width: 768px) {
  .hero-content {
    transform: none !important;
    left: 0 !important;
    top: 0 !important;
    position: relative !important;
    padding-top: 3rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hero-content .typewriter {
   margin-top: -3rem;             
    margin-left: 150px;
    transform: translateX(-50%);
    font-size: 1.4rem;       
    line-height: 1.6;
    max-width: 650px;       
  }
}

@media (min-width: 1024px) and (max-width: 1400px) {
  .hero-content .typewriter {
    position: absolute;
    top: calc(50% + 4rem); 
    text-align: left;
    margin-left: 300px;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;     
    line-height: 1.7;
    max-width: 700px;
    padding: 0 1rem;       
    white-space: pre-line;
  }
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .hero-content .typewriter {
    position: absolute;
    top: calc(50% + 4rem); 
     text-align: left;
     margin-left: 300px;;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;     
    line-height: 1.7;
    max-width: 700px;
    padding: 0 1rem;       
    white-space: pre-line;
  }
}
</style>