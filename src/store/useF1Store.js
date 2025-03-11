import { defineStore } from 'pinia';
import axios from 'axios';

export const useF1Store = defineStore('f1', {
  state: () => ({
    selectedYear: null,
    selectedRace: null,
    selectedConstructor: null,
    selectedDriver: null,
    user: null,
    userHistory: {
      constructors: [],
      drivers: [],
      races: [],
      years: [],
      score: [],
    },
    error: null,
  }),

  getters: {
    totalScore(state) {
      return state.userHistory.score.reduce((acc, value) => acc + value, 0);
    },
  },

  actions: {
    // 🚀 Nueva función para registrar usuarios
    async registerUser(userData) {
      this.error = null;
      try {
        // Verifica si el usuario ya existe por email
        const existingUsers = await axios.get(`http://localhost:3000/users?email=${userData.email}`);

        if (existingUsers.data.length > 0) {
          this.error = "El usuario ya existe con este email.";
          return;
        }

        // Si no existe, lo registramos en la base de datos
        const response = await axios.post('http://localhost:3000/users', {
          ...userData,
          constructors: [],
          drivers: [],
          races: [],
          years: [],
          score: [],
        });

        if (response.data) {
          this.setUser(response.data);
        }
      } catch (error) {
        this.error = "Error al registrar usuario: " + error.message;
      }
    },

    async fetchUser(userId) {
      this.error = null;
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.setUser(response.data);
        } else {
          this.error = 'Usuario no encontrado';
          this.user = null;
        }
      } catch (error) {
        this.error = 'Error al obtener usuario: ' + error.message;
      }
    },

    setUser(user) {
      this.user = user;
      this.userHistory = {
        constructors: user.constructors || [],
        drivers: user.drivers || [],
        races: user.races || [],
        years: user.years || [],
        score: user.score || [],
      };
      this.saveUserToStorage();
    },

    saveUserToStorage() {
      localStorage.setItem('user', JSON.stringify(this.user));
    },

    loadUserFromStorage() {
      const user = localStorage.getItem('user');
      if (user) {
        this.setUser(JSON.parse(user));
      }
    },

    async addToUserHistory(type, value, score) {
      if (!this.user || this.userHistory[type].includes(value)) return;

      this.userHistory[type].push(value);
      this.user[type] = [...(this.user[type] || []), value];

      if (score !== undefined && !this.userHistory.score.includes(score)) {
        this.userHistory.score.push(score);
        this.user.score = [...this.userHistory.score];
      }

      this.saveUserToStorage();
      try {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, this.user);
      } catch (error) {
        console.error(`Error actualizando ${type}:`, error);
      }
    },

    setYear(year) { this.addToUserHistory('years', year); this.selectedYear = year; },
    setRace(race) { this.addToUserHistory('races', race.raceName); this.selectedRace = race; },
    setConstructor(constructor) { this.addToUserHistory('constructors', constructor.name); this.selectedConstructor = constructor; },
    setDriver(driver) { 
      const fullName = `${driver.givenName} ${driver.familyName}`;
      this.addToUserHistory('drivers', fullName);
      this.selectedDriver = driver;
    },
    setScore(score) { this.addToUserHistory('score', score); },

    async loadUserSelections(userId) {
      await this.fetchUser(userId);
    },

    clearSelections() {
      this.selectedYear = this.selectedRace = this.selectedConstructor = this.selectedDriver = null;
      this.userHistory = { constructors: [], drivers: [], races: [], years: [], score: [] };
      localStorage.removeItem('user');
    }
  }
});
