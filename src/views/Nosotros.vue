<template>
  <section class="nosotros">
    <div class="nosotros-container">
      <div class="nosotros-imagen">
        <img src="/images/design.png" alt="Cristina Voda" />
        
      </div>

      <div class="nosotros-texto">
        <p>
          Actualmente las páginas web suelen tener plantillas similares,
          sin diferenciación, con diseños responsive pero sin pensar en mobile first.  
          <br /><br />
          Es el momento de destacar con un diseño web personalizado en HTML5, Vue ,React ,JS,y otros programas.
          con estilo propio y una experiencia visual diferente.
        </p>
        <p class="firma">Cristina Voda</p>
      </div>
    </div>

    <canvas ref="canvas" class="wave-canvas"></canvas>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const canvas = ref(null);
onMounted(() => {
  const ctx = canvas.value.getContext("2d");
  let t = 0;

  const draw = () => {
    const w = (canvas.value.width = canvas.value.offsetWidth);
    const h = (canvas.value.height = canvas.value.offsetHeight);
    ctx.clearRect(0, 0, w, h);

    // Degradado animado suave
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, `hsl(${(t * 40) % 360}, 80%, 60%)`);
    gradient.addColorStop(1, `hsl(${(t * 40 + 120) % 360}, 80%, 60%)`);
    ctx.fillStyle = gradient;

   
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = h / 2 + Math.sin(x * 0.02 + t) * 25 + Math.cos(x * 0.04 + t / 2) * 15;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    t += 0.03; 
    requestAnimationFrame(draw);
  };

  draw();
  gsap.from('.nosotros-texto', {
    scrollTrigger: {
      trigger: '.nosotros-texto',
      start: 'top 85%',
    },
    opacity: 0,
    x: 80,
    duration: 1.2,
    ease: 'power3.out',
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

.nosotros {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #fff, #f8f9fa);
  padding-bottom: 100px;
}

.nosotros-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  z-index: 2;
  position: relative;
}


.nosotros-imagen {
  margin-top: -220px;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nosotros-imagen img {
  width: fit-content;
  max-width: 900px;
  margin-left :30px;
  box-shadow: 2px 10px 25px rgba(241, 224, 122, 0.904);
  object-fit: cover;
  z-index: 2;
  transition: all 0.4s ease;
}


.nosotros-texto {
  margin-top: 35px;
  flex: 1.3;
  padding: 3rem;
  z-index: 2;
}

h2 {
  font-size: 2rem;
  color: darkcyan;
  margin-bottom: 1rem;
  
}

p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.firma {
  margin-top: 1.5rem;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  color: #008b8b;
  text-align: right;
  transform: rotate(-2deg);
  text-shadow: 0 2px 3px rgba(0,0,0,0.1);
}
.wave-canvas {
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1;
}

@media (max-width: 900px) {
  .nosotros-container {
    flex-direction: column;
    text-align: center;
  }
  
  .wave {
    display: none;
  }
  .nosotros-imagen img {
    width: 100%;
    margin-top: 250px;
    margin-left: 20px;
  }
  .firma {
    text-align: center;
  }
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 160px;
  z-index: 0;
  opacity: 0.85;
  animation: waveMove 10s ease-in-out infinite alternate;
  pointer-events: none;
}


@keyframes waveMove {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
  }
}


@media (max-width: 768px) {
  .wave {
    height: 120px;
    animation-duration: 12s;
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .nosotros-container {
    flex-direction: column;
    text-align: center;
  }
  .nosotros-imagen img {
    width: 100%;
    height: 40vh; 
    max-width: none;
    object-fit: cover;
   
    box-shadow: none; 
  }
  .wave-canvas {
    height: 80px;
  }
}
@media (min-width: 1200px) {
  .nosotros-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 3rem 5rem;
  }

  .nosotros-imagen {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 01px;
  }

  .nosotros-imagen img {
    width: 1080px;
    height: 600px;
    max-width: 170%;
    border-radius: 0px;
    margin-left: -300px;
  }

  .nosotros-texto {
    flex: 2;
    text-align: left;
    line-height: 1.7;
    font-size: 1.15rem;
  }

  .nosotros-texto p {
    max-width: 700px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
   .nosotros-imagen  {
    width: 1080px;
    height: 700px;
    margin-left: 60px;
    max-width: 170%;
    border-radius: 0px;
    margin-left: -300px;
  }
}
</style>
