<template>
  <div v-if="f1Store.error" class="error-message">
    <p>{{ f1Store.error }}</p>
  </div>

  <div class="profile__container" v-if="user">
    <div class="profile__grid">
      <!-- User Details Section -->
      <div class="profile__details">
        <div class="profile__avatar">
          <!-- Replace with an actual avatar if available -->
          <div class="avatar-placeholder"></div>
        </div>
        <p><strong>Nombre:</strong> {{ user.name }}</p>
        <p><strong>Apellido:</strong> {{ user.lastname }}</p>
        <p><strong>Nick:</strong> {{ user.nick }}</p>
        <p><strong>Edad:</strong> {{ user.age }}</p>
        <p><strong>Procedencia:</strong> {{ user.country }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>

      <!-- History Sections -->
      <div class="profile__history seasons">
        <h4>Años</h4>
        <ul v-if="userHistory.years.length">
          <li v-for="year in userHistory.years" :key="year">{{ year }}</li>
        </ul>
        <p v-else>No seleccionado</p>
      </div>

      <div class="profile__history pilotos">
        <h4>Carreras</h4>
        <ul v-if="userHistory.races.length">
          <li v-for="race in userHistory.races" :key="race">{{ race }}</li>
        </ul>
        <p v-else>Sin seleccionar</p>
      </div>

      <div class="profile__history teams">
        <h4>Escuderias</h4>
        <ul v-if="userHistory.constructors.length">
          <li v-for="constructor in userHistory.constructors" :key="constructor">{{ constructor }}</li>
        </ul>
        <p v-else>Sin seleccionar</p>
      </div>

      <div class="profile__history tracks">
        <h4>Pilotos</h4>
        <ul v-if="userHistory.drivers.length">
          <li v-for="driver in userHistory.drivers" :key="driver">{{ driver }}</li>
        </ul>
        <p v-else>No seleccionado</p>
      </div>

      <div class="profile__history clasification">
        <h4>Puntuación</h4>
        <ul v-if="userHistory.score.length">
          <li v-for="score in userHistory.score" :key="score">{{ score }}</li>
       </ul>
        <p v-else>Sin puntuación</p>
      </div>

      <div class="profile__history totals">
        <h4>Total</h4>
        <p v-if="userHistory.score.length">Puntos: {{ totalScore }}</p>
        <p v-else>Sin Puntuación</p>
      </div>

    </div>
  
    <!-- Actions Section -->
    <div class="profile__actions">
      <button @click="logout">Cerrar Sesión</button>
      <button @click="playAgain">Juega de Nuevo</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useF1Store } from '@/store/useF1Store';
// Instancia del store de Pinia para manejar los datos del usuario y su historial
// Instance of the Pinia store to handle user data and history
const f1Store = useF1Store();

// Instancia de Vue Router para manejar la navegación entre páginas
// Vue Router instance to handle navigation between pages
const router = useRouter();

// Hook `onMounted` se ejecuta cuando el componente se monta en la vista
// Hook `onMounted` runs when the component is mounted on the view
onMounted(() => {
   // Si no hay un usuario en el store, intenta cargarlo desde el localStorage
   // If there is no user in the store, try to load it from localStorage
  if (!f1Store.user) {
    const storedUser = localStorage.getItem('user'); // Obtiene el usuario almacenado - Gets the stored user

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);// Convierte el JSON en un objeto - Converts JSON to an object
      f1Store.setUser(parsedUser); // Guarda el usuario en el store - save the user in store
      f1Store.loadUserSelections(parsedUser.id); // Carga las selecciones del usuario desde la API-Load user selections from the API
    }
  }
});
// Computed property que obtiene el usuario desde el store
// Computed property that the user gets from the store
const user = computed(() => f1Store.user);

// Computed property que obtiene el historial del usuario desde el store
// Computed property that gets the user's history from the store
const userHistory = computed(() => f1Store.userHistory);

// Computed property que calcula el puntaje total sumando todos los valores en `score`
// Computed property that calculates the total score by adding all the values ​​in `score`
const totalScore = computed(() => {
  return userHistory.value.score.reduce((acc, value) => acc + value, 0);
});
// Función para cerrar sesión
// Function to log out
const logout = () => {
  localStorage.removeItem('user');// Elimina el usuario del localStorage - Delete the user from localStorage
  f1Store.setUser(null);// Resetea el usuario en el store - Reset the user in the store
  router.push('/');// Redirige a la página de inicio- redirect to home page
};
// Función para volver a jugar (redirigir al usuario a la vista de selección de año)
// Playback function (redirect user to the year selection view)
const playAgain = () => {
  router.push('/years');// Navega a la vista de selección de años- Redirect to page years
};

</script>

<style scoped>
.profile__container {
  background-color: rgba(2, 0, 0, 0.8);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(2, 0, 0, 0.63);
  color: white;
  font-size: 1.4rem;
}

.profile__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns */
  gap: 20px;
  grid-template-rows: auto; /* Allow rows to adjust based on content */
}

@media (max-width: 720px) {
  .profile__grid {
    display: flex;
    flex-direction: column;
  }
  .profile__actions {
    display: flex;
    flex-direction: column;
  }
  .profile__details {
    margin-bottom: 0.5rem;
  }
}

.profile__details {
  grid-column: 1 / 2; /* Span one column */
  grid-row: 1 / 4; /* Span all rows */
  background-color: rgba(219, 219, 219, 0.08);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(2, 0, 0, 0.63);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Align items to the start of the column */
  margin-right: 1rem;
  margin-bottom: -4rem;
}

.profile__details p {
  margin-bottom: 15px; /* Add spacing between items */
}

.profile__avatar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
}

.profile__history {
  background-color: rgba(219, 219, 219, 0.08);
  padding: 15px;
  border-radius: 15px;
}

.profile__history h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.profile__history ul {
  list-style-type: none;
  padding: 0;
}

.profile__history li {
  font-size: 1rem;
  margin-bottom: 5px;
}

/* Specific grid assignments for each history section */
.profile__history.seasons {
  grid-column: 2 / 3;
  grid-row: 1;
}

.profile__history.pilotos {
  grid-column: 3 / 4;
  grid-row: 1;
}

.profile__history.teams {
  grid-column: 2 / 3;
  grid-row: 2;
}

.profile__history.tracks {
  grid-column: 3 / 4;
  grid-row: 2;
}

.profile__history.clasification {
  /* grid-column: 2 / 3; */
  grid-row: 3;
}

.profile__history.totals {
  grid-column: 3 / 4;
  grid-row: 3;
}

.profile__actions {
  margin-top: 20px;
  text-align: center; /* Center the buttons */
}

.profile__actions button {
  background-color: #dbdbdb;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.profile__actions button:hover {
  background-color: rgba(219, 219, 219, 0.8);
}

.error-message {
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 720px) {
  .profile__container {
    margin: 2rem;
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
  .profile__grid {
    display: flex;
    flex-direction: column;
  }
  .profile__actions {
    display: flex;
    flex-direction: column;
  }
  .profile__details {
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
}
</style>
