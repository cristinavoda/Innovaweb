<template>
  <nav class="navbar">
    <div class="logo" @click="goHome">InnovaWeb</div>

    <!-- Botón hamburguesa -->
    <div class="hamburger" @click="toggleMenu">
      <span :class="{ 'active': menuOpen }"></span>
      <span :class="{ 'active': menuOpen }"></span>
      <span :class="{ 'active': menuOpen }"></span>
    </div>

    <!-- Menú principal -->
    <ul class="nav-links" :class="{ open: menuOpen }">
      <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/precios">Precios</router-link></li>
      <li class="submenu">
        <a href="#" @click.prevent="toggleSubmenu('servicios')">
          Servicios ▾
        </a>
        <ul class="dropdown" :class="{ open: activeSubmenu === 'servicios' }">
          <li v-for="(item, index) in servicios" :key="index">
            <router-link :to="item.link">{{ item.nombre }}</router-link>
          </li>
        </ul>
      </li>

      <li class="submenu">
        <a href="#" @click.prevent="toggleSubmenu('portfolio')">
          Portfolio ▾
        </a>
        <ul class="dropdown" :class="{ open: activeSubmenu === 'portfolio' }">
          <li v-for="(item, index) in portfolioItems" :key="index">
            <router-link :to="item.link">{{ item.nombre }}</router-link>
          </li>
        </ul>
      </li>

      <li><router-link to="/nosotros">Nosotros</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'Navbar',
  setup() {
    const menuOpen = ref(false)
    const activeSubmenu = ref(null)

    const servicios = [
      { nombre: 'Diseño Web', link: '/servicios#diseno-web' },
      { nombre: 'Desarrollo Frontend', link: '/servicios#frontend' },
      { nombre: 'Mantenimiento', link: '/servicios#mantenimiento' }
    ]

    const portfolioItems = [
      { nombre: 'Proyecto 1', link: '/portfolio#proyecto1' },
      { nombre: 'Proyecto 2', link: '/portfolio#proyecto2' },
      { nombre: 'Proyecto 3', link: '/portfolio#proyecto3' }
    ]

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const toggleSubmenu = (name) => {
      activeSubmenu.value = activeSubmenu.value === name ? null : name
    }

    const goHome = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      menuOpen.value = false
    }

    // Animaciones GSAP para submenus desktop
    onMounted(() => {
      nextTick(() => {
        const submenus = document.querySelectorAll('.submenu')

        submenus.forEach((menu) => {
          const dropdown = menu.querySelector('.dropdown')

          menu.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
              gsap.to(dropdown, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                
              )
            }
          })

          menu.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
              gsap.to(dropdown, { opacity: 0, y: -10, duration: 0.3, ease: 'power2.in' })
            }
          })
        })
      })
    })

    return { menuOpen, activeSubmenu, servicios, portfolioItems, toggleMenu, toggleSubmenu, goHome }
  }
}
</script>

<style scoped>
/* Navbar base */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4%;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0077cc;
  cursor: pointer;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 25px;
  background-color: #0077cc;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger span.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.active:nth-child(2) {
  opacity: 0;
}
.hamburger span.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Menú principal */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  text-decoration: none;
  color: #111111;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #0077cc;
  border-bottom: 2px solid #0077cc;
}
/* Eliminar los puntos de la lista principal y de los submenús */
.nav-links,
.nav-links ul.dropdown {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Submenus */
.submenu .dropdown {
  position: absolute;
  top: 100%;
  right: px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 180px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 0.3s;
  z-index: 1000;
}

.submenu .dropdown.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.dropdown li {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid transparent;
  transition: all 1.5s;
}

.dropdown li:last-child {
  border-bottom: none;
}

.dropdown li a {
  display: block;
  color: #111111;
}

.dropdown li a:hover {
  color: #0077cc;
}

.dropdown li:hover {
  border-bottom: 2px solid #0077cc;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    background-color: #ffffff;
    flex-direction: column;
    padding-top: 5rem;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -4px 0 20px rgba(0,0,0,0.1);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  /* Submenus en móvil */
  .submenu .dropdown {
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    display: none;
    flex-direction: column;
    background: none;
    box-shadow: none;
  }

  .submenu .dropdown.open {
    display: flex;
  }

  .dropdown li {
    border-bottom: 1px solid #eee;
  }
}
</style>
