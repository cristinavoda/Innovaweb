<template>
  <section class="pricing-section" ref="pricingSection">
    <h2 class="title">Planes y Precios</h2>
    <div class="line-separator"></div>

    <div class="pricing-grid">
      <div class="plan-card basic">
        <h3>Básico</h3>
        <p class="subtitle"> Eficiente</p>


        <div class="price">150€</div>
        <ul  class="plan-features">
          <li>Hosting incluido</li>
          <li>Diseño web sencillo</li>
          <li>3 secciones máximo</li>
          <li>Dominio y SSL incluidos</li>
          <li>SEO básico</li>
          <li>Soporte 24/5</li>
        </ul>
        
      </div>

      <div class="plan-card advanced">
        <h3>Avanzado</h3>
        <p class="subtitle">Presencia de marca completa</p>
        <div class="price">350€</div>
        <ul class="plan-features">
          <li>Diseño web avanzado</li>
          <li>4 secciones máximo</li>
          <li>Dominio y SSL incluidos</li>
          <li>SEO básico</li>
          <li>Mantenimiento 24/7</li>
          <li>Optimización de rendimiento</li>
        </ul>
        
      </div>

      <div class="plan-card premium">
        <h3>Premium</h3>
        <p class="subtitle">ecommerce,integraciones y rendimiento avanzado</p>
        <div class="price">650€</div>
        <ul class="plan-features">
          <li>Diseño profesional sin límites</li>
          <li>WooCommerce incluido</li>
          <li>SEO avanzado</li>
          <li>IA y automatizaciones</li>
          <li>Backup diario</li>
          <li>Soporte prioritario 24/7</li>
        </ul>
      
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

  
  gsap.fromTo(
    line,
    { width: 10, opacity: 0 },
    {
      scrollTrigger: { trigger: line, start: 'top 80%' },
      width: '780px',
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  
  gsap.from(cards, {
    scrollTrigger: { trigger: pricingSection.value, start: 'top 80%' },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  })

  
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
  padding: 6rem 1rem 8rem; 
  background: linear-gradient(180deg, #ffffff, #f7f9fa);
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-bottom: 6rem; 
}


h2 {
 
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-top: -100px;
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
.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff; 
  background: linear-gradient(120deg, #6a6b6b, #dddfe0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  opacity: 0;
  transform: translateY(20px);
  animation: titleEnter 0.8s ease-out forwards;
  margin-top: 0.1rem;
}

.line-separator {
  width: fit-content;
  height: 1px;
  margin: 1rem auto 0.1rem;
  background: linear-gradient(270deg, #444444, #ffffff, #3f3e41, rgb(233, 236, 236));
  border-radius: 5px;
  opacity: 0;
}
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes drawFlow {
  to {
    width: 400px;
    opacity: 1;
  }
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
  content: none;
  position: absolute;
  left: 0;
  color: darkcyan;
}
.plan-card.premium .plan-features li {
  color: #2f2440;
  text-shadow: 0 1px 1px white;
}

.plan-card.premium .plan-features li::before {
  content: none;
  position: absolute;
  left: 0;
  color: #6b3fa0;
  font-size: 0.85rem;
}
.plan-features li {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.plan-features li:hover {
  transform: translateX(3px);
  opacity: 0.9;
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


.basic { background: linear-gradient(180deg, #fefefe, #d8f8f8); }
.advanced { background: linear-gradient(180deg, #ffffff, #cbd5f7); }
.premium { background: linear-gradient(180deg, #ffffff, #e5cef3); }
.plan-card.premium h3 {
  color: #3a2b4d;
  text-shadow:
    -1px -1px 0 #fff,
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff;
}


@media (min-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 5rem;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
 .pricing-grid {
    display: flex;
    flex-direction: column; 
    gap: 1.2rem;
  width: 100%;
    
    padding: 0;
    margin: 0 auto;
  }

 
  .plan-card {
    width: 100%;
    max-width: 100%;
    border-radius: 0.9rem;
    padding: 1.2rem;
    margin: 0;
    box-sizing: border-box; 
  }

  
  .pricing-section .title {
    padding: 0 1rem;
  }
}
.line-separator {
  max-width: 350px;
}
</style>
