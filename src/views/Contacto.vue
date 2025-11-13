<template>
  

  <section class="contact">
     <div class ="contact-bg">

    <h1 data-aos="fade-down">Contacto</h1>
    <p data-aos="fade-up" data-aos-delay="400">
      ¿Quieres una página web elegante y personalizada? ¡Hablemos!
    </p>
     
       <a href="mailto:paginaswebpersonalizadas.es@gmail.com" class="btn email-btn" title="paginasweb">
    <span class="btn-text">paginaswebpersonalizadas.es@gmail.com</span>

</a>

<div class="contact-cards">
  
 
     <a href="https://wa.me/34634688218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
             class="card" data-aos="fade-right" data-aos-delay="300"
          >
            <i class="fab fa-whatsapp"></i>
            <h2>Teléfono / WhatsApp</h2>
    <p>+34 634 688 218</p>
          </a>
  

 
          
      <div class="card" data-aos="fade-right" data-aos-delay="500">
        <h2> Ubicación</h2>
        <p>Lleida, Catalunya, España</p>
      </div>
</div>
   
     
    

    
    <div class="form-card" data-aos="fade-up" data-aos-delay="600">
      <h2>Envíanos un mensaje</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Tu nombre" required />
        <input type="email" v-model="email" placeholder="Tu email" required />
        <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
     </div>
  </section>
 
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert(`Gracias ${name.value}, tu mensaje ha sido enviado!`)
  name.value = ''
  email.value = ''
  message.value = ''
}

onMounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
.contact {
  min-height: 110vh;
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fdfdfd;
  color: #002f33;
}
.contact-bg {
                                                                                                                                                                      
background-image: url('images/contact-background.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto; 
background-position: center;

  
}

.contact h1 {
  font-size: 2.5rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #343534, #faf8f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  
  
  
}

.contact p {
  font-size: 1.2rem;
  margin-top: 2.5rem;
  background: linear-gradient(45deg, #121312, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
}
btn email-btn{
  width: auto;
}
.contact-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1rem;
  
}

.card {
  background-color: #fff;
  padding: 3rem 3rem;
  gap:2rem;
  margin-top: 30px;
  border-radius: 1rem;
  max-width: 250px;
  box-shadow:2px 1px 4px#ecf0ee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

.card h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgb(101, 104, 104);
}

.card p {
  font-size: 1rem;
  color: rgb(88, 92, 92);
}


.form-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  margin: 0 auto;
  box-shadow:2px 1px 4px#ecf0ee;
}
.form-card:hover {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 10px 10px 10px#b4b0b0;
  max-width: 500px;
  margin: 0 auto;
  
}

.form-card h2 {
  margin-bottom: 1rem;
   margin-bottom: 1rem;
  color: rgb(122, 126, 126);
   
  
}

.form-card input,
.form-card textarea {
  width: 90%;
  padding: 0.8rem 1rem;
  margin-left: 0.1rem;
  margin-bottom: 1rem;
  border: 1px solid #fff;
  border-radius: 0.8re;
 
  font-size: 1rem;
}

.form-card textarea {
  resize: vertical;
  min-height: 100px;
}

.btn {
  background-color: rgb(248, 250, 250);
   box-shadow: 0 1px 2px rgb(66, 68, 68);
  color: rgb(56, 54, 54);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: rgb(196, 199, 199);
  transform: scale(1.05);
}
btn-icon {
  font-size: 1px;
}
.whatsapp-button {
  position: fixed;
  width: 62px;
  height: 62px;
  bottom: 25px;
  right: 25px;
  color: white;
   background-color: #25d366;
   box-shadow: 0 0 20px rgba(226, 233, 228, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;}



  .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }
@media (max-width: 768px) {
  .navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease;
  }

  

  .hamburger {
    display: flex;
    top: 15px;
    right: 30px;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #fff; 
    transition: all 0.3s ease;
    margin: 1px 0;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    flex-direction: column;
    align-items: right;
    width: 30%;
    padding: 1rem 0;
    gap: 1rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
  }

  
  .nav-links.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  
  
  .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }

  .lang-switch {
    position: absolute;
    top: 15px;
    right: 200px;
  }
}
@media (max-width: 768px) {
  .contact-form {
    width: 90%;
    padding: 0,5rem;
  }

  .contact {
    padding: 1rem;
    background-size: cover; 
  }

  .contact-form {
    width: 90%;
    padding: 1rem;
  }
}
</style>
