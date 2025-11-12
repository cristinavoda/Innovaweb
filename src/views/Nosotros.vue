<template>
  <section class="nosotros">
    <div class="nosotros-container">
      <h2> </h2>
      
      <div class="nosotros-imagen">
        <img src="/images/design.png" alt="Cristina Voda" />
       
      </div>

  
      <div class="nosotros-texto">
        
        <p>
          Actualmente las páginas web suelen tener plantillas similares,
          sin diferenciación, con diseños responsive pero sin pensar en mobile first.  
          <br /><br />
          Es el momento de destacar con un diseño web personalizado en HTML5,
          con estilo propio y una experiencia visual diferente.
        </p>
        <p class="firma">Cristina Voda</p>
      </div>
    </div>
  </section>
   <svg
          class="wave"
          viewBox="1 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.31,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: url(#grad)"
          ></path>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00b8b8" />
              <stop offset="100%" stop-color="#f8b195" />
            </linearGradient>
          </defs>
        </svg>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
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
  width: 100%;
  background: linear-gradient(135deg, #fdfdfd, #f4f9f9);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
}

.nosotros-container {
  display: flex;
  width: 90%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nosotros-imagen {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nosotros-imagen img {
  width: fit-content;
  
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 2px 10px 25px rgba(241, 224, 122, 0.904);
  object-fit: cover;
  z-index: 2;
}

.wave {
  position: absolute;
  left: -300px;
  width: 100%;      /* Ocupa todo el ancho del contenedor */
  height: 150px;    /* Altura de la onda (puedes ajustar) */
  display: block;
  bottom: -250px;
  transform: translateY(-50%);
  width: 220px;
  opacity: 0.7;
  z-index: 1;
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

/* Responsive */
@media (max-width: 900px) {
  .nosotros-container {
    flex-direction: column;
    text-align: center;
  }
  .wave {
    display: none;
  }
  .nosotros-imagen img {
    width: 60%;
    margin-bottom: 2rem;
  }
  .firma {
    text-align: center;
  }
}
</style>
