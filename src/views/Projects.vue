<template>
  <section class="portfolio container">
   
    

    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in portfolio"
        :key="index"
        data-aos="fade-up"
      >

      <h3>{{ project.titulo }}</h3>

        <img :src="project.imagen" :alt="project.titulo" />

        <div class="project-info">
        
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
    titulo: 'Restaurante Sensus ',
    imagen: '/images/sensus.png',
    link: 'https://sensusrestaurante.netlify.app/'
  },
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
    titulo: 'Web Design',
    imagen: '/images/proyecto7.png',
    link: 'https://paginaswebpersonalizadas.es/'
  },
  {
    titulo: 'Studioart',
    imagen: '/images/proyecto1.jpg',

    link: 'https://interiorista.netlify.app/'
  },
  {
    titulo: 'Psicologo Online',
    imagen: '/images/pagina-roxana.png',
    link: 'https://roxana-oana-calin-pshicolog-terapeut.netlify.app/'
  },
 
 
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
  margin-top: 2.5rem;
}


.card, .project-card {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 0px;
  text-align: center;
  width: 350px;
  height: 100%;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.card:hover, .project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}


.project-card h3 {
  margin: 0.4rem 0 1rem;
  background: linear-gradient(45deg, #282928, #e6e1e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.45rem;
  font-weight: 600;
  font-family: "Roboto Slab";
  
}
.project-card img {
  width: 98%;
  height: 100%;
  border-radius: 0px;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}


.project-link {
  display: inline-block;
  margin-top: 0.7rem;
  color: #57575a; 
  border-bottom: #1c1c1d 1px solid; 
  font-weight: 600;
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