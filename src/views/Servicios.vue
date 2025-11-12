<template>
    
  <section class="servicios">
    <h1>Servicios</h1>
    <div class="cards">
      <div
        v-for="servicio in servicios"
        :key="servicio.titulo"
        class="card"
        data-aos="fade-up"
      >
        <img :src="servicio.imagen" :alt="servicio.titulo" class="card-img" />
        <h2>{{ servicio.titulo }}</h2>
        <p>{{ servicio.descripcion }}</p>
        <router-link :to="servicio.ruta" class="btn-info">Más información</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicios = [
  {
    titulo: 'Diseño Web',
    descripcion: 'Diseños modernos y responsive para cualquier dispositivo.',
    imagen: '/images/Services/diseno-web.jpg',
    ruta: '/informacion/diseno-web'
  },
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Aplicaciones dinámicas con Vue, JS, HTML y CSS.',
    imagen: '/images/Services/frontend.jpg',
    ruta: '/informacion/desarrollo-frontend'
  },
  {
    titulo: 'SEO & Posicionamiento',
    descripcion: 'Optimización para motores de búsqueda.',
    imagen: '/images/Services/seo.png',
    ruta: '/informacion/seo'
  },
  {
    titulo: 'Mantenimiento Web',
    descripcion: 'Soporte continuo y actualizaciones.',
    imagen: '/images/Services/mantenimiento.png',
    ruta: '/informacion/mantenimiento'
  }
]

</script>

<style scoped>
h1 {
   background: linear-gradient(45deg, #052a3be3, #63f3ecee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 8rem;
}

h2 {
  color: darkcyan;
  margin-top: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.75rem;
}

.btn-info {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: rgb(112, 111, 108);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
}

.btn-info:hover {
  background: darkcyan;
  color: #fff;
}


@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

}
</style>
