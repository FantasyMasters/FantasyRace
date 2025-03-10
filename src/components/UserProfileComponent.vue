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
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Last Name:</strong> {{ user.lastname }}</p>
        <p><strong>Nick:</strong> {{ user.nick }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Country:</strong> {{ user.country }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>

      <!-- History Sections -->
      <div class="profile__history seasons">
        <h4>Years</h4>
        <ul v-if="userHistory.years.length">
          <li v-for="year in userHistory.years" :key="year">{{ year }}</li>
        </ul>
        <p v-else>No years available</p>
      </div>

      <div class="profile__history pilotos">
        <h4>Races</h4>
        <ul v-if="userHistory.races.length">
          <li v-for="race in userHistory.races" :key="race">{{ race }}</li>
        </ul>
        <p v-else>No races available</p>
      </div>

      <div class="profile__history teams">
        <h4>Constructors</h4>
        <ul v-if="userHistory.constructors.length">
          <li v-for="constructor in userHistory.constructors" :key="constructor">{{ constructor }}</li>
        </ul>
        <p v-else>No constructors available</p>
      </div>

      <div class="profile__history tracks">
        <h4>Drivers</h4>
        <ul v-if="userHistory.drivers.length">
          <li v-for="driver in userHistory.drivers" :key="driver">{{ driver }}</li>
        </ul>
        <p v-else>No drivers available</p>
      </div>

      <div class="profile__history clasification">
        <h4>Score</h4>
        <ul v-if="userHistory.score.length">
          <li v-for="score in userHistory.score" :key="score">{{ score }}</li>
       </ul>
        <p v-else>No score available</p>
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

const f1Store = useF1Store();
const router = useRouter();

onMounted(() => {
  if (!f1Store.user) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      f1Store.setUser(parsedUser);
      f1Store.loadUserSelections(parsedUser.id);
    }
  }
});

const user = computed(() => f1Store.user);
const userHistory = computed(() => f1Store.userHistory);

const logout = () => {
  localStorage.removeItem('user');
  f1Store.setUser(null);
  router.push('/');
};

const playAgain = () => {
  router.push('/years');
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
