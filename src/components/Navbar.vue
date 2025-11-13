<template>
  <nav class="navbar">
    <div class="logo" @click="goHome">InnovaWeb</div>

    
    <div class="hamburger" ref="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

  
    <ul class="nav-links" :class="{ open: menuOpen }" ref="menu">
      <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
      <li><router-link to="/precios" @click="closeMenu">Precios</router-link></li>

      <li class="submenu">
        <a href="#" @click.prevent="toggleSubmenu('servicios')">Servicios ▾</a>
        <ul class="dropdown" :class="{ open: activeSubmenu === 'servicios' }">
          <li v-for="(item, index) in servicios" :key="index">
            <router-link :to="item.link" @click="closeMenu">{{ item.nombre }}</router-link>
          </li>
        </ul>
      </li>

      <li class="submenu">
        <a href="#" @click.prevent="toggleSubmenu('portfolio')">Portfolio ▾</a>
        <ul class="dropdown" :class="{ open: activeSubmenu === 'portfolio' }">
          <li v-for="(item, index) in portfolioItems" :key="index">
            <router-link :to="item.link" @click="closeMenu">{{ item.nombre }}</router-link>
          </li>
        </ul>
      </li>

      <li><router-link to="/nosotros" @click="closeMenu">Nosotros</router-link></li>
      <li><router-link to="/contacto" @click="closeMenu">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, nextTick, watch } from "vue";
import { gsap } from "gsap";

export default {
  name: "Navbar",
  setup() {
    const menuOpen = ref(false);
    const activeSubmenu = ref(null);
    const hamburger = ref(null);
    const menu = ref(null);
    let autoCloseTimer = null;

    const servicios = [
      { nombre: "Diseño Web", link: "/servicios#diseno-web" },
      { nombre: "Desarrollo Frontend", link: "/servicios#frontend" },
      { nombre: "Mantenimiento", link: "/servicios#mantenimiento" },
    ];

    const portfolioItems = [
      { nombre: "Proyecto 1", link: "/portfolio#proyecto1" },
      { nombre: "Proyecto 2", link: "/portfolio#proyecto2" },
      { nombre: "Proyecto 3", link: "/portfolio#proyecto3" },
    ];

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;

      if (menuOpen.value) startAutoCloseTimer();
      animateHamburger(menuOpen.value);
    };

    const closeMenu = () => {
      menuOpen.value = false;
      activeSubmenu.value = null;
      animateHamburger(false);
      clearTimeout(autoCloseTimer);
    };

    const startAutoCloseTimer = () => {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = setTimeout(() => {
        closeMenu();
      }, 6000); // ⏱️ Se cierra después de 6 segundos sin interacción
    };

    const toggleSubmenu = (name) => {
      activeSubmenu.value = activeSubmenu.value === name ? null : name;
    };

    const goHome = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    };

    // Detectar clic fuera del menú
    onMounted(() => {
      document.addEventListener("click", (e) => {
        if (
          menuOpen.value &&
          !menu.value.contains(e.target) &&
          !hamburger.value.contains(e.target)
        ) {
          closeMenu();
        }
      });

      // GSAP animación de entrada para submenús (desktop)
      nextTick(() => {
        const submenus = document.querySelectorAll(".submenu");
        submenus.forEach((menu) => {
          const dropdown = menu.querySelector(".dropdown");
          menu.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768)
              gsap.to(dropdown, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
          });
          menu.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768)
              gsap.to(dropdown, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in",
              });
          });
        });
      });
    });

    // Animación hamburguesa con GSAP
    const animateHamburger = (isOpen) => {
      const bars = hamburger.value.querySelectorAll("span");
      if (isOpen) {
        gsap.to(bars[0], { rotate: 45, y: 8, duration: 0.3 });
        gsap.to(bars[1], { opacity: 0, duration: 0.2 });
        gsap.to(bars[2], { rotate: -45, y: -8, duration: 0.3 });
      } else {
        gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(bars[1], { opacity: 1, duration: 0.2 });
        gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.3 });
      }
    };

    return {
      menuOpen,
      activeSubmenu,
      servicios,
      portfolioItems,
      toggleMenu,
      toggleSubmenu,
      goHome,
      closeMenu,
      hamburger,
      menu,
    };
  },
};
</script>

<style scoped>
/* --- NAVBAR BASE --- */
/* Estilos generales */
nav {
  position: fixed;
  top: 20px0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.3rem;
  font-weight: bold;
}

/* 🔹 Menú de navegación */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

/* 🔹 Hamburguesa oculta en escritorio */
.hamburger {
  display: none; /* por defecto, oculto en escritorio */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  z-index: 1001;
  background: transparent;
  border: none;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 🔸 Animación hamburguesa → X */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* 🔹 Responsive: versión móvil */
@media (max-width: 768px) {
 

  .hamburger {
    display: flex;
    top: 15px;
    right: 70px;
  }

  .bar {
    width: 25px;
    height: 3px;
    right:80px;
    background-color: #797373; 
    transition: all 0.3s ease;
  
  }
  .nav-links {
    position: fixed;
    top: 60px;
    right: -100%;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    background: white;
    align-items: center;
    justify-content: start;
    padding-top: 2rem;
    gap: 1.5rem;
    transition: right 0.4s ease;
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .nav-links a {
    color: #222;
    text-decoration: none;
    font-size: 1.2rem;
  }

  /* Submenú en móviles */
  .submenu .dropdown {
    display: none;
    flex-direction: column;
    background: #f9f9f9;
    width: 100%;
  }

  .submenu .dropdown.open {
    display: flex;
  }
}

</style>
