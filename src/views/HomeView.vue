<template>

<main class="main">
  <!-- Sección de la imagen principal -->
  <section class="hero">
    <img src="../assets/f1_2.png" alt="Liga Fantasy" class="hero__image">
    <div class="hero__content">
      <h1 class="hero__title">DESCUBRE LA LIGA FANTASY</h1>
      <button class="hero__button">GO</button>
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
    </div>
    <div class="news__image-wrapper">
      <img src="../assets/F1_3.jpg" alt="Noticia F1" class="news__image">
      <div class="news__overlay"></div>
    </div>
  </section>
</main>
</template>
<script setup>

</script>

<style scoped>
/* ---- Sección Hero (Imagen principal) ---- */
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
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(253, 1, 1, 0.846);
}

.hero__button {
  background-color: red;
  color: white;
  border: none;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  font-size: 1.5rem;
  opacity: 0.8;
}

.hero__button:hover {
  background-color: rgb(11, 195, 1);
}

/* ---- Sección de Noticias ---- */
.news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  padding: 50px 5%;
}

.news__content {
  background-color: black;
  color: white;
  padding: 20px;
  flex: 1;
}

.news__title {
  font-size: 2rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 254, 254, 0.846);

}

.news__text {
  font-size: 1rem;
  line-height: 1.5;
}

/* Imagen con recuadro y overlay */
.news__image-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news__image {
  width: 100%;
  max-width: 400px;
  display: block;
}

.news__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 255, 255, 0.5); /* Turquesa semi-transparente */
  top: 0;
  left: 0;
  transition: 0.3s;
}

.news__image-wrapper:hover .news__overlay {
  opacity: 0;
}
</style>

