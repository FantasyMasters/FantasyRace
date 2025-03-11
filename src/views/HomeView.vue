<template>

<main class="main">
  <!-- Sección de la imagen principal -->
  <section class="hero">
    <img src="../assets/f1_2.png" alt="Liga Fantasy" class="hero__image">
    <div class="hero__content">
      <h1 class="hero__title">DESCUBRE LA LIGA FANTASY</h1>
      <button class="hero__button" @click="goToLogin">GO</button>
    </div>
  </section>

  <!-- Sección de noticias -->
  <section class="news">
    <div class="news__content">
      <h2 class="news__title">ÚLTIMAS NOTICIAS</h2>
      <p class="news__text">
        ¡Hamilton y Verstappen libran una batalla épica en el Gran Premio de Silverstone!
        En una jornada llena de adrenalina y giros inesperados, el Circuito de Silverstone fue testigo de una de las carreras más emocionantes de la temporada 2025 de Fórmula 1. 
        Lewis Hamilton (Mercedes) y Max Verstappen (Red Bull) volvieron a protagonizar un duelo al límite que mantuvo a los aficionados al borde de sus asientos.
      </p>
      <button class="news__button">Saber más</button>
    </div>
    <div class="news__image-wrapper">
      <img src="../assets/F1_3.jpg" alt="Noticia F1" class="news__image">
      <div class="news__overlay"></div>
      
    </div>
  </section>

<section class="morenews">
    <h2 class="morenews__title">NOTICIAS DESTACADAS</h2>
    <div class="morenews__container">
      <div class="morenews__content">
        <img src="../assets/F1_4.jpg" alt="Noticia 1">
        <p class="morenews__text">¡Hamilton hace historia y se corona campeón de la F1 2025 en un final épico!<br><br>
          En una de las temporadas más emocionantes de la Fórmula 1, Lewis Hamilton ha hecho historia al conquistar su octavo título mundial en un final de infarto en el Gran Premio de Abu Dabi. Con una estrategia impecable y adelantamientos memorables, el británico superó a sus rivales en las últimas vueltas. </p>
      </div>
      <div class="morenews__content">
        <img src="../assets/f1_5.jpg" alt="Noticia 2">
        <p class="morenews__text">¡Caos en la pista!
      Impactante accidente entre dos monoplazas sacude el Gran Premio de 2025. <br><br>
      El Gran Premio de 2025 quedó marcado por un impactante accidente que dejó a todos sin aliento. En la vuelta 32, dos monoplazas colisionaron a alta velocidad en una de las curvas más desafiantes del circuito, provocando la inmediata aparición del auto de seguridad.<br><br> Afortunadamente,
      ambos pilotos salieron ilesos, aunque sus equipos enfrentarán serios desafíos para reparar los daños.
    </p>
      </div>
      <div class="morenews__content">
        <img src="../assets/f1_6.jpg" alt="Noticia 3">
        <p class="morenews__text">¡Bombazo en la F1! Ayrton Senna ficha por Ferrari en un movimiento histórico <br><br>En un giro inesperado que ha sacudido el mundo del automovilismo, Ayrton Senna ha sido anunciado como el nuevo piloto de Ferrari para la próxima temporada.</p>
      </div>
    </div>
</section>

<section class="sponsors">
  <h2 class="sponsors__title">PATROCINADORES</h2>
  <div class="sponsors__container">
    <div class="sponsors__three">
      <img src="../assets/patrocinadores1.jpg" alt="Sponsor 1" class="sponsor-img">
      <img src="../assets/patrocinadores2.jpg" alt="Sponsor 2" class="sponsor-img">
      <img src="../assets/patrocinadores3.jpg" alt="Sponsor 3" class="sponsor-img">
    </div>
    <div class="sponsors__two">
      <img src="../assets/patrocinadores4.jpg" alt="Sponsor 4" class="sponsor-img">
      <img src="../assets/patrocinadores5.jpg" alt="Sponsor 5" class="sponsor-img">
    </div>
  </div>
</section>

<section class="contact">
  <div class="contact__container">
    <h2 class="contact__tittle">CONTACTO</h2>
    <div class="contact__background"></div> 
    <form class="contact__form">
      <input type="text" class="contact__input" placeholder="Nombre" required>
      <input type="email" class="contact__input" placeholder="Email" required>
      <input type="tel" class="contact__input" placeholder="Número de contacto" required>
      <textarea class="contact__textarea" placeholder="Escribe tu pregunta o comentario..." required></textarea>
      <button type="submit" class="contact__button">Enviar</button>
    </form>
  </div>
</section>

</main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login'); 
};
</script>

<style scoped>

.hero {
  position: relative;
  width: 100vw;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.hero__content {
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
}

.hero__title {
  font-size: 4.5rem;
  margin-bottom: 20px;
  text-shadow: 10px 10px 10px rgba(253, 1, 1, 0.846);
}

.hero__button {
  background-color: red;
  color: white;
  border: none;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  font-size: 2rem;
  opacity: 0.8;
}

.hero__button:hover {
  background-color: rgb(11, 195, 1);
}


.news {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  
  padding: 20px 5%;
  margin-top: 80px;
}


.news__content {
  background-color: black;
  color: white;
  padding: 30px; 
  flex: 1;
  position: relative; 
  z-index: 0; 
  width: 100%;  
  height: 100%;
  display: flex;  
  flex-direction: column;  
  justify-content: center;
}

.news__title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 254, 254, 0.846);
}

.news__text {
  font-size: 1.8rem;
  line-height: 1.5;
  flex-grow: 1;  
}

.news__image-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; 
  margin-left: -50px;
  margin-top: 60px;
}

.news__image {
  max-width: 760px;
  display: block;
}

.news__overlay {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 255, 255, 0.5); 
}

.news__button {
  background-color: red;
  color: white;
  border: none;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  font-size: 1.5rem;
  opacity: 0.8;
  max-width: 150px;
}

.news__button:hover {
  background-color: rgb(11, 195, 1);
}

.morenews {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 80px;
  gap: 80px;
  margin-top: 50px;
}

.morenews__title { 
  text-align: center;
  color: rgb(255, 3, 3);
  text-shadow: 2px 2px 5px rgba(4, 238, 242, 0.846);
  font-size: 4rem;
  margin-bottom: 30px; 
}

.morenews__container {
  display: flex;
  justify-content: center; 
  gap: 80px;
  width: 100%; 
  max-width: 1200px; 
}

.morenews__content {
  background-color: black; 
  color: white;
  padding: 15px;
  text-align: center;
  width: 30%; 
  border-radius: 8px; 
  overflow: hidden;
}

.morenews__content:hover {
  transform: scale(1.1); 
  box-shadow: 30px 0px 30px rgba(2, 255, 200, 0.6);
}

.morenews__content img {
  width: 100%; 
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px; 
}

.morenews__text {
  font-size: 1.3rem;
  margin-top: 10px;
}

.sponsors {
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 50px 0; 
}

.sponsors__title {
  text-align: center; 
  color: rgb(255, 3, 3);
  text-shadow: 2px 2px 5px rgba(4, 238, 242, 0.846);
  font-size: 4rem;
  margin-bottom: 80px;
}

.sponsors__container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 80px; 
}

.sponsors__three, .sponsors__two {
  display: flex;
  justify-content: center; 
  gap: 80px; 
}

.sponsor-img {
  max-width: 300px; 
  height: auto;
  object-fit: contain; 
}

.contact {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;
  margin-top: 30px; 
}

.contact__tittle {
  text-align: center;
  color: rgb(255, 3, 3);
  text-shadow: 2px 2px 5px rgba(4, 238, 242, 0.846);
  font-size: 4rem;
  position: absolute;
  top: -150px;
  z-index: 2;
}

.contact__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
  z-index: 1;
}

.contact__form {
  background-color: black;
  color: white;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 80px 80px 80px rgba(0, 255, 255, 0.976), 0 40px 80px rgba(255, 3, 3, 0.976);
}

.contact__input,
.contact__textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: #fbf9f9;
  color: rgb(252, 6, 6);
  font-size: 1rem;
}

.contact__textarea {
  height: 150px;
}

.contact__button {
  width: 100%;
  padding: 15px;
  background-color: #ff0000;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact__button:hover {
  background-color: #32fc05;
} 

/* Tablet Styles (768px - 1024px) */
@media (max-width: 1024px) {
  /* Desactivar efectos hover en tablet */
  .morenews__content:hover {
    transform: none;
    box-shadow: none;
  }
  
  .news {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .news__image-wrapper {
    margin-left: 0;
    margin-top: 15px;
  }

  .morenews__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 100%;
    max-width: 1200px;
  }

  .morenews__content {
    width: 100%;
  }

  /* Centrar el tercer elemento */
  .morenews__content:nth-child(3) {
    grid-column: span 2;
    justify-self: center;
    width: 50%;
  }

  .sponsors__three, .sponsors__two {
    gap: 10px;
  }
  .sponsor-img {
    max-width: 200px; 
    height: auto;
    object-fit: contain; 
  }

  .contact__tittle {
    top: -100px;
  }
}

/* Mobile Styles (up to 767px) */
@media (max-width: 767px) {
  /* Desactivar efectos hover en móvil */
  .morenews__content:hover {
    transform: none;
    box-shadow: none;
  } 
  
  .hero__title {
    font-size: 2.5rem;
  }
  
  .hero__button {
    padding: 12px 12px;
    font-size: 1.5rem;
  }
  
  .news__title, .morenews__title, .sponsors__title, .contact__tittle {
    font-size: 2.5rem;
  }
  
  .news__text {
    font-size: 1.4rem;
  }
  
  .morenews {
    padding: 40px 20px;
    gap: 40px;
  }
  
  /* Modificar a una sola columna */
  .morenews__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  
  .morenews__content {
    width: 90%;
  }
  
  /* Corregir el estilo especial del tercer elemento para móviles */
  .morenews__content:nth-child(3) {
    grid-column: auto;
    justify-self: auto;
    width: 90%;
  }
  
  .sponsors__three, .sponsors__two {
    flex-direction: column;
    gap: 30px;
  }
  
  .sponsor-img {
    max-width: 200px;
  }
  
  .contact {
    padding: 30px 15px;
  }
  
  .contact__form {
    padding: 25px;
  }
  
  .contact__tittle {
    top: -100px;
  }
}

/* Extra Small Screens (up to 480px) */
@media (max-width: 480px) {
  .hero__title {
    font-size: 2rem;
  }
  
  .hero__button {
    padding: 10px 10px;
    font-size: 1.2rem;
  }
  
  .news__title, .morenews__title, .sponsors__title, .contact__tittle {
    font-size: 2rem;
  }
  
  .news__text {
    font-size: 1.2rem;
  }
  
  .morenews__text {
    font-size: 1.1rem;
  }
  
  .contact__tittle {
    top: -80px;
  }
  
  .contact__button {
    font-size: 1rem;
  }
} 
</style>
