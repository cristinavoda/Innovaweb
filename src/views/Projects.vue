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
    titulo: 'Abogada Maria de Luca',
    imagen: '/images/maria.png',
    link: 'https://abogada-maria-de-luca.netlify.app/'
  },
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
    titulo: 'Landing page',
    imagen: '/images/pagina-roxana.png',
    link: 'https://roxana-oana-calin-pshicolog-terapeut.netlify.app/'
  }
]
</script>
<style>
h1 {
 text-align: center;
  padding: 2rem 1rem 0.1rem; 
  background: linear-gradient(180deg, #ffffff, #f7f9fa);
  position: relative;
  background: linear-gradient(45deg, #333533, #d1cfcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-shadow: black;
  
  
}
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
  height: 80%;
  border-radius: 8px;
  margin-bottom: 1rem;

}

.project-card img {
  width: 98%;
  height: 80%;
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
  color: #585b5e; 
border-bottom:  #656769 2px solid; 
border-radius: 18px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  
  color: #1e90ff;
border-bottom:  #1e90ff 2px solid;  }
 
 @media (max-width: 768px) {
  .projects-grid {
    flex-direction: column;
    align-items: center;
  }}
</style>