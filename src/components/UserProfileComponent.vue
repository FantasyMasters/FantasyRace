<template>
  <div v-if="f1Store.error" class="error-message">
    <p>{{ f1Store.error }}</p>
  </div>

  <div class="profile__container" v-if="user">
    <h2 class="profile__title">User Profile</h2>
    <div class="profile__details">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Last Name:</strong> {{ user.lastname }}</p>
      <p><strong>Nick:</strong> {{ user.nick }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Country:</strong> {{ user.country }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>

    <div class="profile__history">
      <h3>History</h3>

      <div v-if="userHistory.years.length">
        <h4>Years</h4>
        <ul>
          <li v-for="year in userHistory.years" :key="year">{{ year }}</li>
        </ul>
      </div>

      <div v-if="userHistory.races.length">
        <h4>Races</h4>
        <ul>
          <li v-for="race in userHistory.races" :key="race">{{ race }}</li>
        </ul>
      </div>

      <div v-if="userHistory.constructors.length">
        <h4>Constructors</h4>
        <ul>
          <li v-for="constructor in userHistory.constructors" :key="constructor">{{ constructor }}</li>
        </ul>
      </div>

      <div v-if="userHistory.drivers.length">
        <h4>Drivers</h4>
        <ul>
          <li v-for="driver in userHistory.drivers" :key="driver">{{ driver }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useF1Store } from '@/store/useF1Store';

const f1Store = useF1Store();

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
</script>

<style scoped>
.profile__container {
  background-color: rgba(2, 0, 0, 0.8);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(2, 0, 0, 0.63);
  text-align: center;
  position: relative;
  color: white;
}

.profile__title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.profile__details p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.profile__history {
  margin-top: 20px;
}

.profile__history h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
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

.error-message {
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
