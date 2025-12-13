<template>
  
  <section class="galeria3d-section">
    <h2></h2>
    <div class="galeria3d-ui">
      <button @click="startTour">Iniciar Tour ▶</button>
      
      <button @click="exitTour">Salir ✕</button>
    </div>
    <canvas ref="galeriaCanvas"></canvas>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { gsap } from "gsap";

export default {
  setup() {
    const galeriaCanvas = ref(null);

    let renderer, scene, camera;
    let planos = [];
    let path;
    let tourTween = null;
    const tourObj = { t: 0 };

   
    const imagenes = [
      { src: "/images/img1.jpg", height: 0.9 },
      { src: "/images/img2.png", height: 0.7 },
      { src: "/images/img3.png", height: 1.1 },
      { src: "/images/img4.png", height: 0.8 },
      { src: "/images/img5.png", height: 0.65 },
      { src: "/images/img7.png", height: 0.65 },
    ];

    function createTourPath() {
      const points = [];
      points.push(new THREE.Vector3(0, 1.6, 8));
      planos.forEach((p, i) => {
        const y = 1.6 - Math.floor(i / 2) * 2;
        const x = (i % 2 === 0 ? -2 : 2);
        const z = -Math.floor(i / 2) * 4;
        points.push(new THREE.Vector3(x, y, z));
      });
      points.push(new THREE.Vector3(0, 1.6, -2));
      path = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
    }

    function startTour() {
      if (!path) return;
      tourObj.t = 0;
      if (tourTween) tourTween.kill();
      tourTween = gsap.to(tourObj, {
        t: 1,
        duration: 60,
        ease: "power1.inOut",
        onUpdate() {
          const pos = path.getPointAt(tourObj.t);
          camera.position.copy(pos);
          const lookT = Math.min(1, tourObj.t + 0.02);
          camera.lookAt(path.getPointAt(lookT));
        }
      });
    }

    function exitTour() {
      if (tourTween) tourTween.kill();
    }

    onMounted(() => {
      const canvas = galeriaCanvas.value;

     
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b0b0c);

      
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 300);
      camera.position.set(0, 1.6, 7);

      
      scene.add(new THREE.AmbientLight(0xffffff, 1));

      
      const loader = new THREE.TextureLoader();
      let loadedCount = 0;

      imagenes.forEach((img, i) => {
        loader.load(img.src, (texture) => {
          const geometry = new THREE.PlaneGeometry(3.0, img.height * 3.0);
          const material = new THREE.MeshBasicMaterial({ map: texture });
          const mesh = new THREE.Mesh(geometry, material);

          mesh.position.set(
            (i % 2 === 0 ? -2 : 2),
            1.6 - Math.floor(i / 2) * 2.0,
            -Math.floor(i / 2) * 4
          );

          scene.add(mesh);
          planos.push(mesh);

          loadedCount++;
          if (loadedCount === imagenes.length) {
            createTourPath();
            startTour(); 
          }
        });
      });
const particleCount = 200;
const particles = new THREE.BufferGeometry();
const positions = [];

for (let i = 0; i < particleCount; i++) {
  positions.push((Math.random() - 0.5) * 20);
  positions.push((Math.random() - 0.5) * 10);
  positions.push((Math.random() - 0.5) * 20);
}

particles.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.6 });
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);


particleSystem.rotation.y += 0.0005;
particleSystem.rotation.x += 0.0002;


const pointLight = new THREE.PointLight(0xffffff, 0.3);
camera.add(pointLight);
scene.add(camera);


gsap.to(pointLight, {
  intensity: 0.6,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

const bgGeometry = new THREE.PlaneGeometry(70, 30);
const bgMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0x0b0b0c) });
const bgPlane = new THREE.Mesh(bgGeometry, bgMaterial);
bgPlane.position.z = -20;
scene.add(bgPlane);


gsap.to(bgMaterial.color, {
  r: 0.08,
  g: 0.08,
  b: 0.12,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// En animate()
function animate() {
  requestAnimationFrame(animate);

  // Rotación sutil de los planos
  planos.forEach((p) => { p.rotation.y += 0.001; });

  // Raycaster detecta plano bajo el mouse
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(planos);

  planos.forEach((p) => {
    // reset glow
    p.material.emissive = new THREE.Color(0x000000);
  });

  intersects.forEach((intersect) => {
    // aplica glow
    intersect.object.material.emissive = new THREE.Color(0x00ffff); // azul holograma
    intersect.object.material.emissiveIntensity = 0.6;
  });

  renderer.render(scene, camera);
}

      // Animación
      const clock = new THREE.Clock();
      function animate() {
        const dt = clock.getDelta();
        planos.forEach((p) => { p.rotation.y += 0.001; });
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();

      // Responsive
      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    });

    return { galeriaCanvas, startTour, exitTour };
  }
};
</script>

<style scoped>
.galeria3d-section {
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  background: linear-gradient(180deg,#0b0b0c 0%, #0f1113 100%);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6);
}

.galeria3d-section h2 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 20;
}

.galeria3d-ui {
  position: absolute;
  top: 90px;
  left: 20px;
  z-index: 20;
  display: flex;
  gap: 10px;
}

.galeria3d-ui button {
  background: rgba(255,255,255,0.06);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 12px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  cursor: pointer;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
}
@media (max-width: 768px) {
  .galeria3d-section {
    height: 70vh;
  }

  canvas {
    width: 100%;
    height: 70vh;
  }

  /* Ajustar tamaño de planos si quieres que sean más pequeños */
  /* Esto se puede controlar también en JS si quieres cambiar geometría según screen */
}
.toggle-sidebar {
  position: fixed; /* o absolute según tu layout */
  z-index: 30;     /* mayor que 1 del canvas */
}

</style>
