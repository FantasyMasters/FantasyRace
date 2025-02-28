<template>
    <main class="guides">
      <!-- Imagen de fondo -->
      <img src="@/assets/f1_2.png" alt="Fondo F1" class="guides__background"/>
  
      <section class="guides__container">
        <h1 class="guides__title">🏁Cómo Jugar en la FantasyRace🏁</h1>

        <details class="guides__item">
          <summary class="guides__question">Crea tu cuenta</summary>
          <p class="guides__answer">
            Para comenzar, dirígete a la sección de LOGIN y regístrate. Si ya tienes una cuenta, inicia sesión para continuar. Tu cuenta te permitirá guardar tu equipo, hacer cambios y seguir tu progreso a lo largo de la temporada.
          </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Elige el año de participación</summary>
            <p class="guides__answer">
                Cada temporada de Fórmula 1 es única, con cambios en escuderías, pilotos y reglas. Escoge el año en el que quieres competir y sumérgete en la estrategia del campeonato.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Selecciona la carrera en la que competirás</summary>
            <p class="guides__answer">
                El calendario de F1 está lleno de circuitos icónicos, cada uno con diferentes desafíos y estrategias. Escoge el Gran Premio en el que deseas participar y prepárate para analizar cada detalle, desde el clima hasta el rendimiento de los pilotos.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Forma tu escudería</summary>
            <p class="guides__answer">
                Es momento de construir tu equipo. Tendrás un presupuesto limitado, así que elige sabiamente. Cada escudería tiene características distintas: algunas son potencias en velocidad, otras en fiabilidad. Tu estrategia será clave para maximizar tus puntos.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Escoge a tu piloto estrella</summary>
            <p class="guides__answer">
                Dentro de tu equipo, deberás elegir un piloto líder. Su desempeño será crucial para tu éxito. Considera su historial en el circuito, su rendimiento en clasificación y su consistencia en carrera.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Administra tu equipo durante la temporada</summary>
            <p class="guides__answer">
                No se trata solo de hacer una elección inicial. A lo largo de la temporada, podrás realizar cambios en tu equipo, ajustando tu estrategia según el rendimiento de los pilotos y escuderías.
                Recuerda: Los cambios son limitados, así que adminístralos con inteligencia.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">Compite, suma puntos y sube en la clasificación</summary>
            <p class="guides__answer">
                Cada Gran Premio otorgará puntos a los equipos según el rendimiento de sus pilotos y escudería. Cuanto mejor rindan tus elecciones, más puntos obtendrás.
                Al final de la temporada, los jugadores con mayor puntuación recibirán premios y reconocimientos.
            </p>
        </details>

        <details class="guides__item">
            <summary class="guides__question">¿Tienes lo necesario para estar en el Top 10? </summary>
            <p class="guides__answer">
                Pon a prueba tu conocimiento, analiza las estadísticas y toma las mejores decisiones para convertirte en el campeón de la FantasyRace
            </p>
        </details>
  
      </section>
    </main>
  </template>
  
  <style scoped>
  /* Contenedor principal */
  .guides{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 2rem;
    overflow: hidden;
  }
  
  /* Imagen de fondo */
  .guides__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  
  }
  
  /* Caja principal */
  .guides__container {  
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
  .guides__title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  /* Pregunta con efecto de despliegue */
  .guides__item {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    overflow: hidden;
 
  }
  
  .guides__item[open] {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .guides__question {
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
  .guides__question::-webkit-details-marker {
    display: none;
  }
  
  /* Añadir icono de flecha */
  .guides__question::after {
    content: "▼";
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  .guides__item[open] .guides__question::after {
    transform: rotate(180deg);
  }
  
  /* Respuesta oculta por defecto */
  .guides__answer {
    font-size: 1rem;
    padding: 0 1rem 1rem;
    line-height: 1.5;
  } 
  </style>