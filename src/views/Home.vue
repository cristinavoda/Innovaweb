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

  <div class="service-list">
    <div
      class="service-item"
      v-for="(service, index) in servicios"
      :key="index"
      data-aos="fade-up"
    >
      <img :src="service.imagen" :alt="service.titulo" />

      <div class="service-content">
        <h3>{{ service.titulo }}</h3>
        <p>{{ service.descripcion }}</p>
      </div>

      <div v-if="index < servicios.length - 1" class="separator"></div>
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
           <a :href="project.link" target="_blank" class="project-link">Ver proyecto</a>
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
  components: { HeroCard },

  setup() {

    const servicios = [
      {
        titulo: 'Diseño Web',
        descripcion: 'Creamos sitios modernos y responsivos una página web con un diseño personalizado a partir de tu identidad corporativa ,con unestilo unico para diferencirte en tu sector.',
        imagen: '/images/mod9.jpg',
      },
      {
        titulo: 'Desarrollo Frontend',
        descripcion: 'Aplicaciones interactivas y rápidas,adaptadas a moviles ,rapidas ,creemos interfaces interactivas y fluidas con tehnologias de ultima generation ,animaciones para una experencia inmersiva',
        imagen: '/images/code.jpg',
      },
      {
        titulo: 'Marqueting y SEO',
        descripcion: 'Optimizamos tu presencia online para que tus clientes te encuentren.Estrategia SEO ,posicionamiento de nombre de marca para aparecer en los primeros puestos con el nombre de la marca,',
        imagen: '/images/seo.png',
      },
      {
        titulo: 'Mantenimiento Web',
        descripcion: 'Soporte continuo y actualizaciones ,seguridad ,copias de respaldo y mejoras continuas  para que tu web sea siempre al dia y funcionando perfectamente',
        imagen: '/images/mantenimiento.png',
      },
    ]

    const portfolio = [
      { titulo: 'Studioart', imagen: '/images/proyecto1.jpg', link: 'https://interiorista.netlify.app/' },
      { titulo: 'Proyecto 2', imagen: '/images/proyecto2.png', link: 'https://paginaswebpersonalizadas.es/' },
      { titulo: 'Proyecto 3', imagen: '/images/proyecto3.png', link: 'https://maltratoemocionalpsicologicoeconomico.wordpress.com/2023/07/30/el-amor-no-duele/#more-34' },
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
  
  
  margin: 0;
  padding-left: 2rem;
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

h2{
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
text-align: center;
  
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
  transition: transform 0.3s,  box-shadow 0.3s ease;
}

.card:hover, .project-card:hover {
  transform: translateY(-10px);
}
.service-cards img {
  width: 98%;
  border-radius: 8px;
  margin-bottom: 1rem;

}
.service-cards h3 {
  color: #008b8b;
}
.project-card img {
  width: 98%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.pricing-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #ffffff, #f9f9f9);
  text-align: center;
}

.project-card h3 {
  margin-top: 0.8rem;
  color: #0f4392;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #1e90ff; 
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #00ffff; }

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #155b9c;
  font-weight: 700;
  letter-spacing: 1px;
}


.line-separator {
  width: 400px;
  height: 4px;
  margin: 2rem auto 4rem;
  background: linear-gradient(270deg, #00ffff, #ffffff, #081ddb,#ffffff, rgb(62, 187, 187));
  border-radius: 5px;
  animation: drawFlow 2s ease-out forwards, gradientFlow 3s linear infinite;
  opacity: 0;
}

@keyframes drawFlow {
  to {
    width: 400px;
    opacity: 1;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
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
.home {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}
* {
  box-sizing: border-box;
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
.services {
  padding: 60px 20px;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap; 
  color :rgb(61, 59, 59);
}

.service-item img {
  width: 450px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}

.service-content h3 {
  margin: 1 0 0.5rem 0;
  color: rgb(27, 133, 133);
  font-size: 1.2rem;
}
.service-content title {
  margin-left: 10px;
  color: #615c5c;
  line-height: 1.5;
}
.service-content p {
  margin: 0;
  color: #615c5c;
  line-height: 1.5;
}

.separator {
  height: 1px;
  background: linear-gradient(270deg, #00ffff, #ffffff, #081ddb,#ffffff, rgb(62, 187, 187));
  width: 100%;
  margin: 20px 0;
}


@media (max-width: 768px) {
  .service-item {
    flex-direction: column;
    text-align: center;
  }

  .service-item img {
    width: 350px;
    height: 150px;
  }
}

</style>
