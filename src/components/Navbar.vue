<template>
  <nav class="navbar">
<div class="navbar-brand" data-aos="fade-up">
   <img src="/icons/logo.png" alt="Cristina Voda" />
<h1 > Páginas Web  </h1>
</div>
    
    <ul :class="['nav-links', { open: menuOpen }]" ref="menu">
      <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>

      <li class="submenu">
        <a href="#" @click.prevent="toggleSubmenu('precios')">Precios</a>
        <ul :class="['dropdown', { open: activeSubmenu === 'precios' }]">
          <li><router-link to="/precios" @click="closeMenu">Básico</router-link></li>
          <li><router-link to="/precios" @click="closeMenu">Avanzado</router-link></li>
          <li><router-link to="/precios" @click="closeMenu">Premium</router-link></li>
        </ul>
      </li>

      <li><router-link to="/modular" @click="closeMenu">Servicios</router-link></li>
       <li><router-link to="/projects" @click="closeMenu">Proyectos</router-link></li>

       <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
      
      <li><router-link to="/nosotros" @click="closeMenu">Nosotros</router-link></li>
      <li><router-link to="/contacto" @click="closeMenu">Contacto</router-link></li>
    </ul>
    <div class="hamburger" ref="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const router = useRouter();

const menuOpen = ref(false);
const activeSubmenu = ref(null);

const hamburger = ref(null);
const menu = ref(null);

let autoCloseTimer = null;
let submenuCloseTimeout = null;


const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  animateHamburger(menuOpen.value);

  if (menuOpen.value) startTimer();
  else clearTimeout(autoCloseTimer);
};


const startTimer = () => {
  clearTimeout(autoCloseTimer);
  autoCloseTimer = setTimeout(() => {
    menuOpen.value = false;
    animateHamburger(false);
  }, 6000);
};


const closeMenu = () => {
  menuOpen.value = false;
  activeSubmenu.value = null;
  animateHamburger(false);
};


const toggleSubmenu = (name) => {
  clearTimeout(submenuCloseTimeout);

  if (activeSubmenu.value === name) {
    submenuCloseTimeout = setTimeout(() => {
      activeSubmenu.value = null;
    }, 1000); 
  } else {
    activeSubmenu.value = name;
  }
};


const goHome = () => {
  router.push('/');
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


const animateHamburger = (isOpen) => {
  const bars = hamburger.value.querySelectorAll('span');
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


onMounted(() => {
  document.addEventListener('click', (e) => {
    if (
      menuOpen.value &&
      !menu.value.contains(e.target) &&
      !hamburger.value.contains(e.target)
    ) {
      closeMenu();
    }
  });
});
</script>


<style scoped >

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
   height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0  42px;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(18px);
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
}

.navbar h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #f2f7f5; 
   background: linear-gradient(45deg, #3a3b3a, #f7f3f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-shadow: 1px solid black;
  transform: translateY(20px);
  animation: titleEnter 0.8s ease-out forwards;
}

.nav-links {
  display: flex;
  padding: 0.1rem 2rem;
  list-style: none;
  font-size: 1.6rem;
  gap: 4rem;
  background: linear-gradient(45deg, #333533, #979494);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-shadow: 1px solid black;
  
}
.nav-links a:hover {
  color:darkcyan;
  border-bottom: 1px 1px 1px darkcyan;
}


nav .nav-links a:not(.submenu-toggle) {
  position: relative;
  text-decoration: none;
   background: linear-gradient(45deg, #484b48, #b9b5b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-overflow: black;
  padding-bottom: 4px;
  display: inline-block;
  font-weight: 500;
}


nav .nav-links a:not(.submenu-toggle)::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #1b0e92, #1bc8cd, #4c35cf);
  background-size: 200%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

nav .nav-links a:not(.submenu-toggle):hover::after,
nav .nav-links a.router-link-active:not(.submenu-toggle)::after {
  transform: scaleX(1);
  animation: flow 1.5s linear infinite;
}

@keyframes flow {
  0% { background-position: 0% }
  100% { background-position: 200% }
}

.nav-link li a {
  background: linear-gradient(45deg, #484b48, #b9b5b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.55);
  padding: 4px 12px;
  gap:8rem;
  transition: 0.25s;
}

.nav-links-li a:hover {
  color:darkcyan;
  border-bottom: 1px 1px 1px darkcyan;
}

.nav-links li:hover {
  color: #0a7e65;
  border-bottom:1px 1px #0a8c95;
}
.nav-links a:hover::after {
  width: 100%;
}

.submenu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  margin-right: 10px;
  background: rgba(255, 255, 255, 0.20);
   padding: 10px 0;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 0.35s ease;
}

.dropdown.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown li a {
  display: block;
  margin-right: 40px;
  padding: 10px 10px;
  white-space: nowrap;
}


.hamburger {
  display: none;
  right: 10px;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  cursor: pointer;
  z-index: 1100;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: rgb(129, 127, 127);
  text-shadow: 2px 1px white;
  border-radius: 3px;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .navbar {
    align-items: center;
  }
  
  .nav-links {
    position: fixed;
    inset: 0; 
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end; 
    padding-top: 25px;
    padding-right: 40px;
    gap: 30px;
    background: rgba(240, 238, 238, 0.95); 
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
  }

  .nav-links.open {
    transform: translateX(0);
    opacity: 1;
  }


 

  .nav-links li {
    list-style: none;
    right: 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-size: 2.2rem;
      font-weight: 600;
  }
.nav-links a::after {
  content: '';
  position: absolute;
  right: 0;

  bottom: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #7c9696, #0a8c95);
  transition: width 0.35s ease;
}
.nav-links a:hover {
  color: #0a7e65;
  border-bottom:1px 1px #0a8c95;
}
.nav-links a:hover::after {
  width: 100%;
}

  .dropdown {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    background: rgba(240, 237, 237, 0.25);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.35s ease;
  }

  .dropdown.open {
    max-height: 500px;
    opacity: 1;
  }
}
.navbar h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #f2f7f5; 
   background: linear-gradient(45deg, #272727, #f7f3f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  text-shadow: 2px 1pxsolid black;
  transform: translateY(20px);
  animation: titleEnter 0.8s ease-out forwards;
}

</style>