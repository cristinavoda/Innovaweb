<template>
  <div class="silhouette-container">
    <canvas ref="canvas" class="silhouette-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "Silhouette",
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext("2d")

    const img = new Image()
    img.src = "/images/plantilla.png" // asegúrate de que esté en public/images/

    // Ajustamos el tamaño del canvas al ancho visible
    canvas.width = window.innerWidth * 0.4
    canvas.height = window.innerHeight * 0.8

    img.onload = () => {
      // Dibujamos la imagen en el canvas para leer sus píxeles
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const points = []

      // Escaneamos la imagen cada 6 píxeles para detectar forma
      for (let y = 0; y < canvas.height; y += 6) {
        for (let x = 0; x < canvas.width; x += 6) {
          const i = (y * canvas.width + x) * 4
          const alpha = imageData.data[i + 3]
          if (alpha > 100) {
            points.push({ x, y })
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "darkcyan")
      gradient.addColorStop(1, "darkblue")

      // Dibujamos los puntos con color degradado
      points.forEach((p) => {
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }
  },
}
</script>

<style scoped>
.silhouette-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100vh;
  background: linear-gradient(to right, #ffffff, #f2f2f2);
}

.silhouette-canvas {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}
</style>
