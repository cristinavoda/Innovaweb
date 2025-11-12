<template>
  <div class="relative w-full h-[70vh] flex items-center justify-center bg-black overflow-hidden">
    <canvas ref="canvas" class="absolute inset-0"></canvas>
  </div>
</template>

<script>
export default {
  name: "ArtisticSilhouette",
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;

    const image = new Image();
    image.src = "/images/silhouette.png";

    image.onload = () => {
      const scale = 0.7; // tamaño relativo
      const iw = image.width * scale;
      const ih = image.height * scale;
      const ix = (canvas.width - iw) / 2;
      const iy = (canvas.height - ih) / 2;

      // dibuja la silueta invisible
      ctx.drawImage(image, ix, iy, iw, ih);

      const imageData = ctx.getImageData(ix, iy, iw, ih);
      const pixels = imageData.data;
      const dots = [];

      // limpia antes de dibujar los puntos
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // crea los puntos solo donde la silueta es negra
      for (let y = 0; y < ih; y += 3) {
        for (let x = 0; x < iw; x += 3) {
          const index = (y * iw + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          // Detectar píxeles no blancos
if (r < 240 || g < 240 || b < 240) {
  dots.push({
    x: x * scale + (canvas.width - image.width * scale) / 2,
    y: y * scale + (canvas.height - image.height * scale) / 2,
    baseX: x * scale + (canvas.width - image.width * scale) / 2,
    baseY: y * scale + (canvas.height - image.height * scale) / 2
  })
}

        }
      }

      // animación parallax con el ratón
      window.addEventListener("mousemove", (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 40;
        const dy = (e.clientY / window.innerHeight - 0.5) * 40;
        draw(dots, dx, dy);
      });

      function draw(points, dx = 0, dy = 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        for (const p of points) {
          ctx.beginPath();
          ctx.arc(p.x + dx, p.y + dy, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      draw(dots);
    };
  },
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
