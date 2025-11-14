<template>
  <div class="home">
<HeroCard />
<div class="line-separator"></div>  
<section class="metodologia-intro container" data-aos="fade-up">
  <h2> Nuestra Metodología </h2>

  <p>
    En InnovaWeb® transformamos ideas en plataformas digitales estratégicas,
    rápidas y orientadas a resultados. Nuestro proceso combina ingeniería de alto 
    nivel, diseño premium y optimización técnica avanzada que garantiza rendimiento,
    seguridad y visibilidad en Google.
  </p>

  <p>
    Desarrollamos cada proyecto con precisión empresarial, asegurando un producto 
    final sólido, escalable y preparado para competir.
  </p>

  <router-link to="/metodologia" class="btn-metodologia">
    Leer más →
  </router-link>
</section>

    <section id="precios" class="pricing-section">

  <div class="line-separator"></div> 

  <h2 class="section-title">Planes y Precios</h2>
  
<div class="pricing-container">
   
    <div class="pricing-card basic">
      <h3>Básico</h3>
      <p class="subtitle">Sencillo, eficiente, perfecto</p>
      <p class="price">250€ <span>/mes</span></p>
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

    
    <div class="pricing-card advanced">
      <h3>Avanzado</h3>
      <p class="subtitle">La excelencia hecha web</p>
      <p class="price">450€ <span>/mes</span></p>
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

    
    <div class="pricing-card premium">
      <h3>Premium</h3>
      <p class="subtitle">Soluciones premium, resultados premium</p>
      <p class="price">750€ <span>/mes</span></p>
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
        
        <div class="card" data-aos="flip-up" v-for="(service, index) in servicios" :key="index">
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
    </div>

<div class="line-separator"></div>

  </template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import AOS from 'aos'
import HeroCard from '../components/HeroCard.vue'


export default {
  name: 'Home',
   components: {
    HeroCard
    
  },
  
  setup() {
    components: {
    HeroCard
    
  }
   
const servicios = [
  {
    titulo: 'Diseño Web',
    descripcion: 'Creamos sitios modernos y responsivos.',
    imagen: '@/images/diseno-web.jpg',
  },
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Aplicaciones interactivas y rápidas.',
    imagen: '@/images/frontend.jpg',
  },
  {
    titulo: 'Mantenimiento',
    descripcion: 'Soporte y actualizaciones constantes.',
    imagen: '@/images/mantenimiento.jpg',
  },
  {
    titulo: 'Mantenimiento Web',
    descripcion: 'Soporte continuo y actualizaciones.',
    imagen: '/images/Services/mantenimiento.png',
    ruta: '/informacion/mantenimiento'
  },
];

    const portfolio = [
      { titulo: 'Proyecto 1', imagen: '/src/assets/logo.png' },
      { titulo: 'Proyecto 2', imagen: '/src/assets/logo.png' },
      { titulo: 'Proyecto 3', imagen: '/src/assets/logo.png' },
    ]

    onMounted(() => {
     
      AOS.init({ once: true, duration: 1000 })

      
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
.home {
  width: 100vw;
  min-width: 100%;
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
}

section {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  
  .home {
    width: 100%;
    
  }
}
.hero {
  text-align: center;
  padding: 1rem 2rem;
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
.metodologia-intro {
  max-width: 900px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
}

.metodologia-intro h2 {
 
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff; 
  background: linear-gradient(120deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  opacity: 0;
  transform: translateY(20px);
  animation: titleEnter 0.8s ease-out forwards;
}

@keyframes titleEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


h2.subtitle {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #e0e0e0; 
  letter-spacing: 0.3px;
  margin-bottom: 1rem;
}


@media (max-width: 768px) {
  h1.section-title {
    font-size: 2.5rem;
    letter-spacing: 0.3px;
  }
  h2.subtitle {
    font-size: 1.3rem;
  }
}


.metodologia-intro p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #2c2c2c;
}

.btn-metodologia {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  border: 2px solid var(--theme-green, #f8fcfc);
  box-shadow: 1px 1px 1px #009688;
  color: var(--theme-green, #008b8b);
  transition: 0.3s ease;
}

.btn-metodologia:hover {
  background: var(--theme-green, #008b8b);
  color: white;
}

.metodologia-preview {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 900px;
  margin: auto;
}
.btn-leer-mas {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: transparent;
  color: #0b9fda;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}
.btn-leer-mas:hover {
  color: #00332a;
}

.services, .portfolio {
  padding: 4rem 0;
}
/* TITULO PRINCIPAL H1 */
h2{
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;

  /* Opciones de color */
  color: #ffffff; /* sólido clásico */
  /* o degradado premium */
  background: linear-gradient(120deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Sombra sutil */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);

  /* Animación de entrada */
  opacity: 0;
  transform: translateY(20px);
  animation: titleEnter 0.8s ease-out forwards;
}

@keyframes titleEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* SUBTITULO H2 */
h2.subtitle {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #e0e0e0; /* gris claro elegante */
  letter-spacing: 0.3px;
  margin-bottom: 1rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  h2.section-title {
    font-size: 2.5rem;
    letter-spacing: 0.3px;
  }
  h2.subtitle {
    font-size: 1.3rem;
  }
}

.service-cards, .projects {
  background-color: transparent;
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


.line-separator {
  width: 100px;
  height: 4px;
  margin: 2rem auto 4rem;
  background: linear-gradient(270deg, #00ffff, #ffffff, #081ddb,#ffffff, rgb(62, 187, 187));
  border-radius: 5px;
  animation: drawFlow 2s ease-out forwards, gradientFlow 3s linear infinite;
  opacity: 0;
}

@keyframes drawFlow {
  to {
    width: 920px;
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


.pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}


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


.basic {
  background: linear-gradient(135deg, #00bcd4, #f3f6f7);
}
.advanced {
  background: linear-gradient(135deg, #009688, #dae6e3);
}
.premium {
  background: linear-gradient(135deg, #a0f1eb, #00332a);
}


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
@media (max-width: 768px) {
  html, body {
    overflow-x: hidden; 
  }

  .home,
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 0.5rem; 
    margin: 0;
  }

  
  .pricing-container,
  .service-cards,
  .projects {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
