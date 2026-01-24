<template>
  <div class="home">
<HeroCard />
<div class="line-separator"></div>  

<h1>Diseño de Páginas Web Económicas en España</h1>

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


  <div class="line-separator"></div> 
   <section id="precios" class="pricing-section" data-aos="fade-in">

  <h2 class="section-title">Planes y Precios</h2>
  
<div class="pricing-container">
   
    <div class="pricing-card basic">
      <h3>Básico</h3>
      <p class="subtitle">Sencillo, eficiente, perfecto</p>
      <p class="price">150€ </p>
      <ul>
        <li>Hosting incluido</li>
        <li>Diseño web sencillo / corporativa</li>
        <li>Hasta 3 secciones</li>
        <li>Dominio y SSL incluidos</li>
        <li>25GB SSD</li>
        <li>Mantenimiento 24/5</li>
        <li>SEO básico</li>
      </ul>
      
    </div>

    
    <div class="pricing-card advanced">
      <h3>Avanzado</h3>
      <p class="subtitle">La excelencia hecha web</p>
      <p class="price">350€ </p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web avanzado</li>
        <li>Hasta 4 secciones</li>
        <li>100GB SSD</li>
        <li>Mantenimiento 24/7</li>
        <li>Optimización de rendimiento</li>
        <li>Google My Business</li>
      </ul>
      
    </div>

    
    <div class="pricing-card premium">
      <h3>Premium</h3>
      <p class="subtitle">Soluciones premium, resultados premium</p>
      <p class="price">650€ </p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web profesional</li>
        <li>Secciones ilimitadas</li>
        <li>200GB SSD</li>
        <li>Mantenimiento prioritario 24/7</li>
        <li>WooCommerce e IA</li>
        <li>Copias de seguridad diarias</li>
      </ul>
      
    </div>
  </div>
</section>

<div class="line-separator"></div>  

<div class="service-card">

 <section class="services container">
  <h2 data-aos="fade-right">Nuestros Servicios</h2>

  <div class="service-list">
    <div
      class="service-item"
      v-for="(service, index) in servicios"
      :key="index"
      data-aos="fade-up"
    >
     
      <div class="service-content">
        <h3 class="h3-services">{{ service.titulo }}</h3>
         <img :src="service.imagen" :alt="service.titulo" class="service-img" />
        <p>{{ service.descripcion }}</p>
      </div>

      <div v-if="index < servicios.length - 1" class="separator"></div>
    </div>
  </div>
</section>
</div>

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
 <section class="contact">
  <div class="contact-container">

      
      <div class="contact-info">
        <h2 data-aos="fade-down">Contacto</h2>
       </div>

      <div class="contact-form" data-aos="fade-down">
         <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Tu nombre" required />
        <input type="email" v-model="email" placeholder="Tu email" required />
        <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
     </div>
    </div>

    <div class="card-ubication" data-aos="fade-up" data-aos-delay="500">
        <h2> Ubicación</h2>
        <div class="map-container">
        <iframe
  width="100%"
  height="350"
  style="border:0; border-radius: 12px;"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.037566902099!2d0.7984!3d41.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6a7b692cf2a05%3A0x93bf9f0f7e2e76cc!2sCarrer%20Sant%20Miquel%2C%2012%2C%2025254%20Bell-lloc%20d'Urgell%2C%20Lleida!5e0!3m2!1ses!2ses!4v1731589912345"
>
</iframe>
</div>

        <p>Lleida, Catalunya, España</p>
    </div>
  </section>
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
    { titulo: 'Hotel Mirage', imagen: '/images/proyecto.png', link: 'https://hotelmirageweb.netlify.app/' },
      { titulo: 'Studioart', imagen: '/images/proyecto1.jpg', link: 'https://interiorista.netlify.app/' },
      { titulo: 'Web Design', imagen: '/images/proyecto7.png', link: 'https://paginaswebpersonalizadas.es/' },
      { titulo: 'Blog', imagen: '/images/proyecto3.png', link: 'https://maltratoemocionalpsicologicoeconomico.wordpress.com/2023/07/30/el-amor-no-duele/#more-34' },
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

  background: linear-gradient(135deg, #ffffff, #f0f0f0);
}



.hero .highlight {
  color: #353738;
}


.metodologia-intro {
  max-width: 900px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
}
.home h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem;
  font-weight: 800;
  text-align: center;
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
.metodologia-intro h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
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
  margin-top: rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
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
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 3rem;
  margin-top: -50px;
  text-align: center;
  color: #ffffff; 
  background: linear-gradient(120deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);opacity: 0;
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
  width: 550px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s,  box-shadow 0.3s ease;
}

.card:hover, .project-card:hover {
  transform: translateY(-10px);
}
.service-img {
  width: 100%;
  height: 800px;
  border-radius: 8px;
  margin-bottom: 1rem;

}
.service-titulo {
   font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff; 
  background: linear-gradient(120deg, #230577, #0072ff);
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
  color: #4b4e4e; }

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #155b9c;
  font-weight: 700;
  letter-spacing: 1px;
}
.line-separator {
  width: 90%;
  height: 1px;
  margin: 3rem auto;
  background: linear-gradient(90deg, rgb(150, 153, 155), #ffffff);
  background-size: 250% 250%;
  border-radius: 50px;

 
  animation:
    drawFlow 1.2s ease-out forwards,
    flow 3.5s linear infinite 1.2s,
    glowPulse 4s ease-in-out infinite 1.2s;
  
  opacity: 0;
  filter: drop-shadow(0 0 4px rgba(139, 141, 141, 0.4));
}


@keyframes drawFlow {
  to {
    width: 410px;
    opacity: 1;
  }
}


@keyframes flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}


@keyframes glowPulse {
  0% { filter: drop-shadow(0 0 4px rgba(112, 116, 116, 0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(109, 110, 110, 0.8)); }
  100% { filter: drop-shadow(0 0 4px rgba(213, 218, 218, 0.3)); }
}

@media (max-width: 600px) {
  .line-separator {
    height: 4px;
    animation-name: drawFlowMobile, flow, glowPulse;
  }

  @keyframes drawFlowMobile {
    to {
      width: 80%;
      opacity: 1;
    }
  }
}


@media (min-width: 1200px) {
  .line-separator {
    animation-name: drawFlowDesktop, flow, glowPulse;
  }

  @keyframes drawFlowDesktop {
    to {
      width: 90%;
      max-width: 1200px; 
      opacity: 1;
    }
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


.contact{
  min-height: 100vh;
  padding: 1rem 5rem;
  text-align: center;
  background-color: transparent;
   background-size: cover;       
  background-position: center;  
  background-repeat: no-repeat; 
  color: #f3f8f8;
  color: #eef3f3;
}

 p {
  font-size: 1rem;
  margin-top: 1rem;
  color: rgb(249, 253, 253);
  }
.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
}



.form-card h2 {
  margin-bottom: 1rem;
   margin-bottom: 1rem;
  color: rgb(253, 253, 253);
   
  
}
.contact-form input,
.contact-form textarea {
  width: 60%;
  padding: 0.8rem 0;
  margin-bottom: 1.8rem;

  border: none !important;
  border-bottom: 1px solid rgba(113, 116, 116, 0.6) !important;
  background: transparent;
  outline: none;

  font-size: 1rem;
  color: #eef3f3;

  border-radius: 0;
  box-shadow: none;
}

.map-container {
    right: 25px;
    top: 1rem;
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
