<template>
  <section class="modular-grid">
    <div
      v-for="(item, index) in 9"
      :key="index"
      class="grid-item"
      :class="getSize(index)"
      ref="gridItems"
    >
      <div class="image" :style="{ backgroundImage: `url(${images[index % images.length]})` }"></div>
      <div class="text">
        <h3>{{ titles[index] }}</h3>
        <p>{{ descriptions[index] }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const gridItems = ref([])

    const images = [
      '/images/mod1.jpg', '/images/mod2.jpg', '/images/mod3.jpg',
      '/images/mod4.jpg', '/images/mod5.jpg', '/images/mod6.jpg',
      '/images/mod7.jpg', '/images/mod8.jpg', '/images/mod9.jpg'
    ]

    const titles = [
      'Diseño Creativo', 'Innovación Digital', 'Experiencia Visual',
      'Soluciones Web', 'Branding Único', 'Tecnología Moderna',
      'Estrategia Digital', 'Arte y Funcionalidad', 'Impacto Visual'
    ]

    const descriptions = [
      'Creamos proyectos únicos y originales.',
      'Tu marca destacará con estilo propio.',
      'Experiencias digitales que emocionan.',
      'Webs intuitivas y funcionales.',
      'Identidad de marca coherente y atractiva.',
      'Tecnología al servicio de tus ideas.',
      'Estrategias que impulsan resultados.',
      'Combinamos arte y funcionalidad.',
      'Impacto visual memorable para tu público.'
    ]

    const getSize = (index) => {
      const sizes = ['large', 'medium', 'small', 'small', 'medium', 'medium', 'small', 'large', 'medium']
      return sizes[index % sizes.length]
    }

    onMounted(() => {
      gridItems.value.forEach((el) => {
        // Animación al aparecer
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 100,
          rotateX: gsap.utils.random(-10, 10),
          rotateY: gsap.utils.random(-10, 10),
          scale: 0.9,
          duration: 1.2,
          ease: 'power3.out',
        })
 el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateY = (x - centerX) / centerX * 10 // máximo 10 grados
    const rotateX = -(y - centerY) / centerY * 10

    gsap.to(el, { rotateY: rotateY, rotateX: rotateX, transformPerspective: 600, transformOrigin: 'center', duration: 0.3 })
  })

  el.addEventListener('mouseleave', () => {
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' })
    gsap.to(image, { x: 0, scale: 1, duration: 0.8, ease: 'power3.out' })
  })

  el.addEventListener('mouseenter', () => {
    gsap.to(image, { x: 10, scale: 1.05, duration: 0.8, ease: 'power3.out' })
  })

        // Hover GSAP
        el.addEventListener('mouseenter', () => {
          gsap.to(el.querySelector('.image'), { x: 10, scale: 1.05, duration: 0.8, ease: 'power3.out' })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(el.querySelector('.image'), { x: 0, scale: 1, duration: 0.8, ease: 'power3.out' })
        })
      })
    })

    return { gridItems, getSize, images, titles, descriptions }
  },
}
</script>

<style scoped>
.modular-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: 1rem;
  padding: 2rem;
  perspective: 1200px;
  background: linear-gradient(135deg, #ebf4f7, #efefef);
}

.grid-item {
  display: flex;
  overflow: hidden;
  border-radius: px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item.large { grid-column: span 2; grid-row: span 2; }
.grid-item.medium { grid-column: span 2; grid-row: span 1; }
.grid-item.small { grid-column: span 1; grid-row: span 1; }

.image {
  width: 60%;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.8s ease;
}

.text {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  background: rgba(255,255,255,0.25);
}

.text h3 {
  color: darkcyan;
  margin-bottom: 0.4rem;
}

.text p {
  font-size: 0.9rem;
  color: #444;
  opacity: 0.9;
}
</style>
