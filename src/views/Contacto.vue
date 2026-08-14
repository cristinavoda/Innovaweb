<template>

   <section class="contact">
     <div class ="contact-bg">
<div class ="contact-mail">
    <h1 data-aos="fade-down" class="h1">Contacto</h1>
    <p data-aos="fade-up" data-aos-delay="400">
      ¿Quieres una página web elegante y personalizada? 
    </p>
     
</div>

<div class="contact-cards">
  
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


    

 
          
      <div class="card-ubication" data-aos="fade-right" data-aos-delay="500">
        <h2> Ubicación</h2>
        <div class="map-container">
        <iframe
  width="100%"
  height="350"
  style="border:0; border-radius: 12px;"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.037566902099!2d0.7984!3d41.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6a7b692cf2a05%3A0x93bf9f0f7e2e76cc!2sCarrer%20Sant%20Miquel%2C%2012%2C%2025254%20Bell-lloc%20d'Urgell%2C%20Lleida!5e0!3m2!1ses!2ses!4v1731589912345"
>
</iframe>
</div>

        <p>Lleida, Catalunya, España</p>
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
  min-height: 120vh;
  padding:1rem 1rem;
  margin-left: 0px;
  text-align: left;
  background-color: #fdfdfd;
  color: #002f33;
   background: linear-gradient(180deg, #fefefe, #eaf9f9); 
}
.contact-bg {
                                                                                                                                                                      
background:  linear-gradient(180deg,#f0f7f7, #feffff, #f8fcfc);; 
  background-repeat:repeat-y;
  background-size: cover;
  width: 100%;
  height: auto; 
background-position: center;

  
}

.contact h1 {
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #484b48, #b9b5b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
  
  
  
}

.contact p {
  font-size: 1.2rem;
  margin-top: -1rem;
  background: linear-gradient(45deg, #121312, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
}

.contact-card {
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
  max-width: 300px;
  max-height: 510px;
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
  width: min(100%, 760px);
  margin: 70px auto 0;
  padding: 60px 70px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: none;
  border: none;
}

.form-card h2 {
  margin: 0 0 45px;
  color: #252525;
  text-align: left;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.form-card input,
.form-card textarea {
  display: block;
  width: 100%;
  padding: 16px 4px;
  margin: 0 0 30px;

  background: transparent;
  border: none;
  border-bottom: 1px solid #b8b8b8;
  border-radius: 0;

  color: #252525;
  font-family: inherit;
  font-size: 1rem;

  outline: none;
  transition: border-color 0.3s ease;
}

.form-card input:focus,
.form-card textarea:focus {
  border-bottom-color: #222;
}

.form-card textarea {
  min-height: 130px;
  resize: vertical;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 4px;

  background: transparent;
  border: none;
  border-bottom: 1px solid #222;
 border-radius: 0 !important;
  color: #222;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    padding 0.3s ease;
}

.btn:hover {
  color: #666;
  border-bottom-color: #666;
  padding-left: 8px;
  padding-right: 8px;
}
 .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }
  .map-container {
    right: 25px;
    top: 1rem;
  }
  h2 {
  margin-bottom: 1rem;
   margin-top: 3rem;
  color: rgb(62, 65, 65);
  text-align: center;
  text-shadow: 1px 1px 2px #fdfdfd;
  
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
.map-container {
  width: 100%;
  height:350px;
  max-width: 900px;        
  margin: 0 auto;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 1px 8px 20px rgba(0, 0, 0, 0.15);
}

.google-map {
  width: 100%;
  height: 350px;         
  border: 0;
}


@media (max-width: 768px) {
  .google-map {
    height: 250px;        
  }
}


@media (max-width: 480px) {
  .google-map {
    height: 200px;
  }
}

</style>
