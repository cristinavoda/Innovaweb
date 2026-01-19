<template>
  <section class="portfolio container">
    <h1 data-aos="fade-right">Proyectos</h1>
    

    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in portfolio"
        :key="index"
        data-aos="fade-up"
      >
        <img :src="project.imagen" :alt="project.titulo" />

        <div class="project-info">
          <h3>{{ project.titulo }}</h3>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="project-link"
          >
            Ver proyecto →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolio = [
  {
    titulo: 'Hotel Mirage',
    imagen: '/images/proyecto.png',
    link: 'https://hotelmirageweb.netlify.app/'
  },
  {
    titulo: 'Studioart',
    imagen: '/images/proyecto1.jpg',
    link: 'https://interiorista.netlify.app/'
  },
  {
    titulo: 'Web Design',
    imagen: '/images/proyecto7.png',
    link: 'https://paginaswebpersonalizadas.es/'
  },
  {
    titulo: 'Blog WordPress',
    imagen: '/images/proyecto3.png',
    link: 'https://maltratoemocionalpsicologicoeconomico.wordpress.com/2023/07/30/el-amor-no-duele/#more-34'
  }
]
</script>
<style>
.projects-grid {
  background-color: transparent;
  display: flex;
  padding: 2rem 1rem;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card, .project-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 350px;
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

.project-card img {
  width: 98%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
roject-card h3 {
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
 
</style>