<template>
  <div class="metodologia">

    <!-- HERO -->
    <section class="hero-metodologia" data-aos="fade-up">
      <h1>Metodología de Excelencia</h1>
      <p>
        Un proceso premium diseñado para garantizar rendimiento, estabilidad,
        posicionamiento y una presencia digital sólida para tu negocio.
      </p>
    </section>

    <!-- PASOS -->
    <section class="steps container" data-aos="fade-up">
      <h2>Nuestro Proceso</h2>

      <div class="steps-grid">
        <div class="step">
          <span class="num">01</span>
          <h3>Análisis Estratégico</h3>
          <p>
            Definimos objetivos, público objetivo y funcionalidades clave. 
            Estudiamos tu sector y competencia para diseñar un enfoque técnico 
            y visual alineado con tu marca.
          </p>
        </div>

        <div class="step">
          <span class="num">02</span>
          <h3>Arquitectura & Diseño UX/UI</h3>
          <p>
            Creamos wireframes, estructura limpia y navegación intuitiva.
            Diseñamos interfaces modernas, accesibles y centradas en la conversión.
          </p>
        </div>

        <div class="step">
          <span class="num">03</span>
          <h3>Desarrollo Técnico</h3>
          <p>
            Programamos con buenas prácticas, código optimizado y estándares 
            profesionales. Usamos tecnologías actuales para máxima velocidad 
            y estabilidad.
          </p>
        </div>

        <div class="step">
          <span class="num">04</span>
          <h3>Optimización & Publicación</h3>
          <p>
            Realizamos pruebas, auditorías de rendimiento, seguridad,
            SEO técnico y finalmente publicamos tu web en producción.
          </p>
        </div>
      </div>
    </section>

    <!-- GARANTIAS -->
    <section class="garantias container" data-aos="fade-up">
      <h2>Lo Que Garantizamos</h2>

      <ul class="garantias-list">
        <li>- Código limpio, escalable y documentado</li>
        <li>-  Arquitectura preparada para crecer</li>
        <li>-  Seguridad reforzada y protección de datos</li>
        <li>-  Web optimizada para velocidad y SEO</li>
        <li>-  Diseño premium adaptado a todos los dispositivos</li>
        <li>-  Acompañamiento y soporte profesional</li>
      </ul>
    </section>

    <!-- STACK TECNICO -->
    <section class="stack container" data-aos="fade-up">
      <h2>Tecnologías Con Las Que Trabajamos</h2>

      <div class="stack-grid">
        <span>HTML5 / CSS3 / SASS</span>
        <span>JavaScript ES6+</span>
        <span>Vue.js & React</span>
        <span>Node.js</span>
        <span>PHP / Laravel</span>
        <span>WordPress & WooCommerce</span>
        <span>APIs REST</span>
        <span>SEO Técnico & WPO</span>
        <span>Google Analytics / Search Console</span>
      </div>
    </section>

    <!-- EXPERIENCIA / CREDIBILIDAD -->
    <section class="calidad container" data-aos="fade-up">
      <h2>Calidad Corporativa</h2>
      <p>
        Desarrollamos cada proyecto con estándares profesionales: análisis detallado,
        planificación sólida, código robusto y optimización continua. Nuestro objetivo 
        es que tu web no solo funcione, sino que compita, convierta y proyecte la 
        imagen de una empresa seria y eficiente.
      </p>
      <p>
        Cumplimos con buenas prácticas de desarrollo, accesibilidad WCAG,
        directrices Core Web Vitals y procesos de control de calidad para evitar errores 
        en producción.
      </p>
    </section>
<div class="extra">
      <h2>Compromiso y calidad</h2>
      
    <p>
      En <strong>InnovaWeb</strong> seguimos una metodología técnica orientada a resultados,
      diseñada para garantizar rendimiento, escalabilidad y posicionamiento orgánico.
    </p>

      <p>
        Nuestro equipo combina creatividad, análisis de negocio y tecnología para crear sitios que comunican, venden y crecen contigo.
        Apostamos por la transparencia, las actualizaciones constantes y la satisfacción total del cliente.
      </p>
    </div>
  </div>
  <li><router-link to="/" class="btn-inicio">Inicio</router-link></li>

    <!-- CTA -->
    <section class="cta-final" data-aos="fade-up">
      <h2>¿Listo para crear una web profesional?</h2>
      <p>Transformemos tu idea en una plataforma potente y optimizada.</p>
      <router-link to="/contacto" class="cta-btn">Solicitar Presupuesto</router-link>
    </section>

  
</template>

<script>
export default {
  name: "Metodologia",
};
</script>

<style scoped>

.metodologia {
  padding-top: 8rem;
  color: #222;
}
h1 {
    color: #098678;
}

.hero-metodologia {
  text-align: center;
  padding: 2rem 1rem;
  max-width: 800px;
  margin: auto;
}

.hero-metodologia h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.hero-metodologia p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #4a4a4a;
}

.steps h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.steps-grid {
  display: grid;
  gap: 2rem;
}

.step {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #eee;
}

.step .num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--theme-green, #008b8b);
}


.garantias-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.garantias-list li {
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
}


.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.stack-grid span {
  background: #f3f3f3;
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

/* CALIDAD */
.calidad p {
  margin: 1rem 0;
  line-height: 1.7;
}

/* CTA FINAL */
.cta-final {
  text-align: center;
  margin: 3rem 0;
}

.cta-btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  background: var(--theme-green, #008b8b);
  color: white;
  font-weight: 600;
  margin-top: 1rem;
  text-decoration: none;
}
.extra {
  background-color: #f8f8f8;
  color: #098678;
  padding: 1.5rem;
  border-radius: 10px;
}


.btn-inicio {
  font-size: 1.5rem;
  display: inline-block;
  margin-top: 1.5rem;
  margin-left: 35px;
  background-color: transparent;
  color: #0b9fda;
  padding: 0.3rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
  box-shadow:1px 1px 1px #098678;
}





</style>
