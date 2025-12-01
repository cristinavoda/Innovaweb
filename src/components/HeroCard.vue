<template>
  <section class="hero-section">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/promocion.mp4" type="video/mp4" />
    </video>

    <div class="marquee-container">
      <p class="marquee-content">
       Diseño Web Profesional · Páginas Web desde 250€ · Hosting + Dominio · Entrega Rápida · Google Business Incluido · Soporte Total · ¡Impulsa Tu Negocio Ahora!
     DISEÑO Y DESARROLLO DE PÁGINAS WEB · TU PÁGINA WEB PERSONALIZADA · SEO y SEM  Diseño de Páginas Web para Negocios · SEO y visibilidad en Google · Tiendas Online · Webs Profesionales · Optimización móvil · Experiencias Modernas para Impulsar tu Marca
Páginas Web desde 299€ · Tu Negocio en Google · Más Clientes · Más Ventas · Hosting + Dominio · Diseño Profesional que Conecta · Resultados Reales

      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 50% 45%;
  margin-top: -30px;
}



.marquee-container {
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  position: absolute;
  margin-top: 0;
  padding:  0;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  padding-left: 100%;
  background-color: #fff;
  font-size: 1.5rem;
  color: #4b4949;
  font-weight: 600;
  animation: move-marquee 15s linear infinite;
  letter-spacing: 1px;
}

@keyframes move-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-30%); }
}

@media (max-width: 768px) {
  .hero-section {
    height: 75vh;
  }

  .marquee-content {
    font-size: 1.5rem;
  }
}
</style>
