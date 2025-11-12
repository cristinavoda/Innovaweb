<template>
  <section class="pricing-section" ref="pricingSection">
    <h2 class="title">Planes y Precios</h2>
    <div class="line-separator"></div>

    <div class="pricing-grid">
      <div class="plan-card basic">
        <h3>Básico</h3>
        <p class="subtitle">Sencillo, eficiente, perfecto</p>
        <div class="price">43,99€<span>/mes</span></div>
        <ul>
          <p>Hosting incluido</p>
          <p>Diseño web sencillo</p>
          <p>3 secciones máximo</p>
          <p>Dominio y SSL incluidos</p>
          <p>SEO básico</p>
          <p>Soporte 24/5</p>
        </ul>
        <button class="select-btn">Elegir plan</button>
      </div>

      <div class="plan-card advanced">
        <h3>Avanzado</h3>
        <p class="subtitle">La excelencia hecha web</p>
        <div class="price">64,99€<span>/mes</span></div>
        <ul>
          <p>Diseño web avanzado</p>
          <p>4 secciones máximo</p>
          <p>Dominio y SSL incluidos</p>
          <p>SEO básico</p>
          <p>Mantenimiento 24/7</p>
          <lp>Optimización de rendimiento</lp>
        </ul>
        <button class="select-btn">Elegir plan</button>
      </div>

      <div class="plan-card premium">
        <h3>Premium</h3>
        <p class="subtitle">Soluciones premium, resultados premium</p>
        <div class="price">79,99€<span>/mes</span></div>
        <ul>
          <p>Diseño profesional sin límites</p>
          <p>WooCommerce incluido</p>
          <p>SEO avanzado</p>
          <p>IA y automatizaciones</p>
          <p>Backup diario</p>
          <p>Soporte prioritario 24/7</p>
        </ul>
        <button class="select-btn">Elegir plan</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pricingSection = ref(null)

onMounted(() => {
  const cards = pricingSection.value.querySelectorAll('.plan-card')
  const line = pricingSection.value.querySelector('.line-separator')

  // Animación del separador
  gsap.fromTo(
    line,
    { width: 0, opacity: 0 },
    {
      scrollTrigger: { trigger: line, start: 'top 80%' },
      width: '180px',
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  // Animación de entrada de las tarjetas
  gsap.from(cards, {
    scrollTrigger: { trigger: pricingSection.value, start: 'top 80%' },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  })

  // Efecto de “latido” en los botones
  gsap.to('.select-btn', {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.8,
    ease: 'ease.inOut'
  })
})
</script>

<style scoped>
.pricing-section {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #ffffff, #f7f9fa);
}
h2 {
  color :#444  
}
.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f3c3c;
  margin-bottom: 1rem;
}

.line-separator {
  width: 0;
  height: 4px;
  margin: 2rem auto 4rem;
  background: linear-gradient(270deg, #00ffff, #ffffff, #00c3ff, cyan);
  border-radius: 5px;
  opacity: 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.plan-card {
  width: 100%;
  max-width: 340px;
  background: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.plan-card h3 {
  font-size: 1.6rem;
  color: #004e4e;
}

.subtitle {
  color: #777;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: darkcyan;
  margin: 1rem 0;
}
.price span {
  font-size: 1rem;
  color: #777;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  color: #444;
  text-align: left;
}
.plan-card li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
}
.plan-card li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: darkcyan;
}

.select-btn {
  background: rgb(249, 250, 250);
  border: none;
  color: rgb(114, 113, 113);
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}
.select-btn:hover {
  background: #6b6e6e;
  color: #e4f4ff;
}

/* Colores por plan */
.basic { background: linear-gradient(180deg, #fefefe, #eaf9f9); }
.advanced { background: linear-gradient(180deg, #ffffff, #e4f4ff); }
.premium { background: linear-gradient(180deg, #ffffff, #e7f8ef); }
</style>
