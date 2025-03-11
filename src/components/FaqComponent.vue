<script setup>
import { ref, onMounted } from 'vue';

// Estado para almacenar las preguntas frecuentes
const faqData = ref([]);

// Cargar los datos desde el archivo JSON
const fetchFaqData = async () => {
  try {
    const response = await fetch('/src/assets/faqData.json');
    faqData.value = await response.json();
  } catch (error) {
    console.error('Error al cargar los datos del FAQ:', error);
  }
};

onMounted(fetchFaqData);
</script>

<template>
  <main class="faq">
    <!-- Imagen de fondo -->
    <img src="@/assets/f1_2.png" alt="Fondo F1" class="faq__background" />

    <section class="faq__container">
      <h1 class="faq__title">FAQ'S</h1>

      <details v-for="(faq, index) in faqData" :key="index" class="faq__item">
        <summary class="faq__question">{{ faq.question }}</summary>
        <p class="faq__answer">{{ faq.answer }}</p>
      </details>
    </section>
  </main>
</template>

<style scoped>
/* Contenedor principal */
.faq {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
}

/* Imagen de fondo */
.faq__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

/* Caja principal */
.faq__container {
  height: 80%;
  padding: 2rem;
  background: rgba(206, 7, 7, 0.7);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
  color: white;
  position: relative;
  z-index: 2;
  max-width: 800px;
  overflow-y: auto;
  scrollbar-width: none;
}

/* Título */
.faq__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

/* Pregunta con efecto de despliegue */
.faq__item {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.faq__item[open] {
  background: rgba(255, 255, 255, 0.1);
}

.faq__question {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Eliminar el icono por defecto del summary */
.faq__question::-webkit-details-marker {
  display: none;
}

/* Añadir icono de flecha */
.faq__question::after {
  content: "▼";
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq__item[open] .faq__question::after {
  transform: rotate(180deg);
}

/* Respuesta oculta por defecto */
.faq__answer {
  font-size: 1rem;
  padding: 0 1rem 1rem;
  line-height: 1.5;
}
</style>
