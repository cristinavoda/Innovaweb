<template>
  <footer class="footer">
    <div class="footer-inner container">
     
      <div class="brand">
        <h2>Paginas web economicas-Cristina Voda</h2>
        <p>Desarrollo web elegante y funcional, optimizado para cada negocio en Lleida ,Barcelona ,Madrid ,Valencia y otras ciudades.</p>
      </div>

      
      <div class="links">
        <h3>Navegación</h3>
        <div class="links-columns">
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/precios">Precios</router-link></li>
            <li><router-link to="/modular">Servicios</router-link></li>
          </ul>
          <ul>
            <li><router-link to="/nosotros">Nosotros</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
            <li><router-link to="/portfolio">Portfolio</router-link></li>
          </ul>
        </div>
      </div>

      
      <div class="social">
        
        <div class="icons">
          <a href="https://wa.me/34634688218" target="_blank"><i class="fab fa-whatsapp"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="mailto:paginaswebpersonalizadas.es@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Cristina Voda · Lleida, Catalunya · España
    </div>

   
    <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const particlesCanvas = ref(null);

onMounted(() => {
  const canvas = particlesCanvas.value;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = 300;

  const particles = [];
  const PARTICLE_COUNT = 35;
  const MAX_DIST = 120;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 2 + Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: 'rgba(0, 204, 204, 0.25)'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > width) p.dx = -p.dx;
      if (p.y < 0 || p.y > height) p.dy = -p.dy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0,204,204,${0.15 * (1 - dist / MAX_DIST)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = 300;
  });
});
</script>

<style scoped>
  
.footer {
  position: relative;
  background: #ffffff;
  padding: 0.1rem 2rem 2rem;
  color: #555;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

.footer-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
  align-items: start;
}


.brand h2 {
  color: rgb(95, 97, 100);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
}
.brand h2::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 310px;
  height: 3px;
  background: linear-gradient(90deg,  #0913a1, #e9eeee, #0a9999);
  transform: scaleX(1);
  animation: flow 1.5s linear infinite;
  border-radius: 2px;
}
@keyframes flow {
  0% { background-position: 0% }
  100% { background-position: 200% }
}

.brand p {
  opacity: 0.7;
  font-size: 0.8rem;
  line-height: 1.6;
  transition: opacity 0.3s ease;
}
.brand:hover p {
  opacity: 1;
}


.links h3,
.social h3 {
  margin-left: 35px;
  margin-bottom: 1rem;
  color: rgb(39, 74, 172);
  font-size: 0.8rem;
  font-weight: 600;
}


.links-columns {
  display: flex;
  gap: 2rem;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.links a {
  text-decoration: none;
  color: #555;
  position: relative;
  padding-bottom: 3px;
  display: inline-block;
  transition: color 0.3s ease;
}
.links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #dfe4e4, #0a8c95);
  transition: width 0.35s ease;
}
.links a:hover {
  color: #00b3b3;
}
.links a:hover::after {
  width: 100%;
}


.icons {
  display: flex;
  gap: 1.2rem;
  font-size: 1.5rem;
  perspective: 500px;
}
.icons a {
  color: #555;
  display: inline-block;
  transition: transform 0.4s ease, color 0.3s ease;
}
.icons a:hover {
  color: #00b3b3;
  transform: rotateY(15deg) scale(1.2) translateY(-3px);
}


.footer-bottom {
  margin-top: 0.1rem;
  padding-top: 0.2rem;
  border-top: 1px solid rgba(0,0,0,0.08);
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  transition: color 0.3s ease;
}
.footer-bottom:hover {
  color: #210b81;
}


@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .links-columns {
    flex-direction: column;
    gap: 1rem;
  }
}
.particles-canvas {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 800px;
  z-index: 0;
  pointer-events: none;

}
</style>
