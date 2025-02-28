<template>
    <main class="faq">
      <!-- Imagen de fondo -->
      <img src="@/assets/f1_2.png" alt="Fondo F1" class="faq__background" />
  
      <section class="faq__container">
        <h1 class="faq__title">¿Como Jugar?</h1>
  
        <details class="faq__item">
          <summary class="faq__question">¿Cómo elijo mis pilotos?</summary>
          <p class="faq__answer">
            Puedes seleccionar un equipo de 5 pilotos dentro del presupuesto.
          </p>
        </details>
  
        <details class="faq__item">
          <summary class="faq__question">¿Cómo se calculan los puntos?</summary>
          <p class="faq__answer">
            Los puntos se asignan según el rendimiento en cada carrera.
          </p>
        </details>
  
        <details class="faq__item">
          <summary class="faq__question">¿Puedo cambiar mi equipo durante la temporada?</summary>
          <p class="faq__answer">
            Sí, hay un número limitado de cambios por temporada.
          </p>
        </details>
  
        <details class="faq__item">
          <summary class="faq__question">¿Cuánto cuesta participar?</summary>
          <p class="faq__answer">
            La participación en la liga es gratuita.
          </p>
        </details>

        <details class="faq__item">
          <summary class="faq__question">¿Cómo se asignan los premios?</summary>
          <p class="faq__answer">
            Los premios se asignan a los mejores equipos al final de la temporada.
          </p>
          </details>         
          
        <details class="faq__item">
            <summary class="faq__question">¿Qué pasa si un piloto se lesiona?</summary>
            <p class="faq__answer">
            Si un piloto se lesiona, puedes reemplazarlo siguiendo las reglas de cambios de la temporada.
            </p>
        </details>

        <details class="faq__item">
            <summary class="faq__question">¿Cómo se manejan los empates?</summary>
            <p class="faq__answer">
            En caso de empate, se utilizarán criterios adicionales como el número de victorias.
            </p>
        </details>

        <details class="faq__item">
            <summary class="faq__question">¿Puedo unirme a la liga en cualquier momento?</summary>
            <p class="faq__answer">
            Sí, puedes unirte en cualquier momento, pero tus puntos comenzarán a contar desde la fecha de inscripción.
            </p>
        </details>

        <details class="faq__item">
            <summary class="faq__question">¿Hay algún límite de edad para participar?</summary>
            <p class="faq__answer">
            No, la liga está abierta a participantes de todas las edades.
            </p>
        </details>

        <details class="faq__item">
            <summary class="faq__question">¿Cómo puedo contactar con el soporte?</summary>
            <p class="faq__answer">
            Puedes contactar con el soporte a través del formulario de contacto en nuestro sitio web.
            </p>
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
  