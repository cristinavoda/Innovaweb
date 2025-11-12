<template>
  <section class="silhouette-section" ref="sectionRef">
    <canvas ref="canvas"></canvas>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const canvas = ref(null);
const sectionRef = ref(null);

onMounted(() => {
  const c = canvas.value;
  const ctx = c.getContext("2d");
  
  // Ajustar tamaño del canvas
  const resize = () => {
    c.width = sectionRef.value.clientWidth;
    c.height = sectionRef.value.clientHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  // Puntos de la silueta (puedes cambiar la forma)
  const points = [];
  const rows = 20;
  const cols = 10;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({
        x: x * 30 + 50,
        y: y * 30,
        ox: x * 30 + 50,
        oy: y * 30
      });
    }
  }

  let mouse = { x: c.width/2, y: c.height/2 };

  // Evento ratón
  sectionRef.value.addEventListener("mousemove", e => {
    const rect = c.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function animate() {
    ctx.clearRect(0, 0, c.width, c.height);
    points.forEach(p => {
      // Movimiento parallax
      const dx = (mouse.x - c.width/2) * 0.05;
      const dy = (mouse.y - c.height/2) * 0.05;
      ctx.beginPath();
      ctx.arc(p.ox + dx, p.oy + dy, 4, 0, Math.PI*2);
      ctx.fillStyle = "#111";
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Animación GSAP al entrar en viewport
  gsap.from(sectionRef.value, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
  });
});
</script>

<style scoped>
.silhouette-section {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #f8f8f8; /* fondo claro para destacar la silueta */
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
