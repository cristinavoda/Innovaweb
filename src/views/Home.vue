<template>
  <div class="home">
<HeroCard />
 <ModularGrid /> 
    </div>
<!-- SECCIÓN DE PRECIOS -->
<section id="precios" class="pricing-section">
  <div class="line-separator"></div>  
  <h2 class="section-title">Planes y Precios</h2>
  <div class="line-separator"></div>

  <div class="pricing-container">
    <!-- Plan Básico -->
    <div class="pricing-card basic">
      <h3>Básico</h3>
      <p class="subtitle">Sencillo, eficiente, perfecto</p>
      <p class="price">43,99€ <span>/mes</span></p>
      <ul>
        <li>Hosting incluido</li>
        <li>Diseño web sencillo / corporativa</li>
        <li>Hasta 3 secciones</li>
        <li>Dominio y SSL incluidos</li>
        <li>25GB SSD</li>
        <li>Mantenimiento 24/5</li>
        <li>SEO básico</li>
      </ul>
      <button class="btn">Elegir plan</button>
    </div>

    <!-- Plan Avanzado -->
    <div class="pricing-card advanced">
      <h3>Avanzado</h3>
      <p class="subtitle">La excelencia hecha web</p>
      <p class="price">64,99€ <span>/mes</span></p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web avanzado</li>
        <li>Hasta 4 secciones</li>
        <li>100GB SSD</li>
        <li>Mantenimiento 24/7</li>
        <li>Optimización de rendimiento</li>
        <li>Google My Business</li>
      </ul>
      <button class="btn">Elegir plan</button>
    </div>

    <!-- Plan Premium -->
    <div class="pricing-card premium">
      <h3>Premium</h3>
      <p class="subtitle">Soluciones premium, resultados premium</p>
      <p class="price">79,99€ <span>/mes</span></p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web profesional</li>
        <li>Secciones ilimitadas</li>
        <li>200GB SSD</li>
        <li>Mantenimiento prioritario 24/7</li>
        <li>WooCommerce e IA</li>
        <li>Copias de seguridad diarias</li>
      </ul>
      <button class="btn">Elegir plan</button>
    </div>
  </div>
</section>

 <div class="line-separator"></div>  
    <section class="services container">
      <h2 data-aos="fade-right">Nuestros Servicios</h2>
      <div class="service-cards">
        <div class="card" data-aos="zoom-in" v-for="(service, index) in servicios" :key="index">
          <h3>{{ service.titulo }}</h3>
          <p>{{ service.descripcion }}</p>
        </div>
      </div>
    </section>
  <div class="line-separator"></div>  
    <section class="portfolio container">
      <h2 data-aos="fade-left">Proyectos Recientes</h2>
      <div class="projects">
        <div class="project-card" data-aos="flip-up" v-for="(project, index) in portfolio" :key="index">
          <img :src="project.imagen" :alt="project.titulo" />
          <h3>{{ project.titulo }}</h3>
        </div>
      </div>
    </section>
<div class="line-separator"></div>

  
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import AOS from 'aos'
import HeroCard from '../components/HeroCard.vue'
import ModularGrid from '../components/ModularGrid.vue'

export default {
  name: 'Home',
   components: {
    HeroCard,
    ModularGrid
  },
  
  setup() {
    components: {
    HeroCard,
    ModularGrid
  }
    const servicios = [
      { titulo: 'Diseño Web', descripcion: 'Creamos sitios modernos y responsivos.' },
      { titulo: 'Desarrollo Frontend', descripcion: 'Aplicaciones interactivas y rápidas.' },
      { titulo: 'Mantenimiento', descripcion: 'Soporte y actualizaciones constantes.' },
    ]

    const portfolio = [
      { titulo: 'Proyecto 1', imagen: '/src/assets/logo.png' },
      { titulo: 'Proyecto 2', imagen: '/src/assets/logo.png' },
      { titulo: 'Proyecto 3', imagen: '/src/assets/logo.png' },
    ]

    onMounted(() => {
      // Inicializar AOS
      AOS.init({ once: true, duration: 1000 })

      // Animación GSAP hero
      gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 })
      gsap.from('.hero p', { opacity: 0, y: -20, delay: 0.3, duration: 1 })
      gsap.from('.hero button', { opacity: 0, y: 20, delay: 0.6, duration: 1 })
    })

    const goToServicios = () => {
      window.scrollTo({
        top: document.querySelector('.services').offsetTop - 50,
        behavior: 'smooth'
      })
    }

    return { servicios, portfolio, goToServicios }
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero .highlight {
  color: #0077cc;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.services, .portfolio {
  padding: 4rem 0;
}

.service-cards, .projects {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card, .project-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover, .project-card:hover {
  transform: translateY(-10px);
}

.project-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.pricing-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #ffffff, #f9f9f9);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #111;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Línea animada separadora */
.line-separator {
  width: 500px;
  height: 4px;
  margin: 2rem auto 4rem;
  background: linear-gradient(270deg, #00ffff, #fffffa, #4108db, cyan);
  border-radius: 5px;
  animation: drawFlow 2s ease-out forwards, gradientFlow 3s linear infinite;
  opacity: 0;
}

@keyframes drawFlow {
  to {
    width: 120px;
    opacity: 1;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* Contenedor de las tarjetas */
.pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

/* Tarjetas */
.pricing-card {
  width: 300px;
  border-radius: 20px;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: fadeInUp 0.8s ease forwards;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Paleta de colores */
.basic {
  background: linear-gradient(135deg, #00bcd4, #007a99);
}
.advanced {
  background: linear-gradient(135deg, #009688, #005f4b);
}
.premium {
  background: linear-gradient(135deg, #004d40, #00332a);
}

/* Texto */
.pricing-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.price span {
  font-size: 1rem;
  opacity: 0.8;
}

/* Lista */
.pricing-card ul {
  text-align: left;
  margin: 1rem 0;
  list-style: none;
  padding: 0;
}

.pricing-card ul li {
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Botón */
.btn {
  background: #fff;
  color: #004d40;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #e0f7fa;
}

/* Animación de aparición */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
