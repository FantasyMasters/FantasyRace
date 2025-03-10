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
      score: 0,
    },
    error: null,
  }),

  actions: {
    // 🟢 Cargar usuario y su historial desde JSON Server
    async fetchUser(userId) {
      this.error = null;
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.user = response.data;

          // Inicializar historial si no existe
          this.userHistory = {
            constructors: response.data.constructors || [],
            drivers: response.data.drivers || [],
            races: response.data.races || [],
            years: response.data.years || [],
            score: response.data.score
          };

          this.saveUserToStorage();
        } else {
          this.error = 'Usuario no encontrado';
          this.user = null;
        }
      } catch (error) {
        this.error = 'Error al obtener usuario: ' + error.message;
        console.error('Error fetching user:', error);
      }
    },

    // 🟢 Guardar usuario en LocalStorage
    saveUserToStorage() {
      try {
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        console.error('Error guardando usuario en localStorage:', error);
      }
    },

    // 🟢 Cargar usuario desde LocalStorage
    loadUserFromStorage() {
      try {
        const user = localStorage.getItem('user');
        if (user) {
          this.user = JSON.parse(user);
          this.userHistory = {
            constructors: this.user.constructors || [],
            drivers: this.user.drivers || [],
            races: this.user.races || [],
            years: this.user.years || [],
            score: this.user.score
          };
        }
      } catch (error) {
        console.error('Error cargando usuario desde localStorage:', error);
      }
    },

    setUser(user) {
      this.user = user;
      this.saveUserToStorage();
    },

    // 🟢 Guardar selección en historial y JSON Server
    async addToUserHistory(type, value, score) {
      if (!this.user) return;

      if (!this.userHistory[type].includes(value)) {
        this.userHistory[type].push(value);

        if (!this.user[type]) {
          this.user[type] = []; // Asegurar que el array existe
        }

        this.user[type].push(value);

        try {
          await axios.put(`http://localhost:3000/users/${this.user.id}`, this.user);
          this.saveUserToStorage(); // Guardar cambios en LocalStorage también
        } catch (error) {
          console.error(`Error actualizando ${type}:`, error);
        }
      }
      if (score !== undefined) {
        if (!this.userHistory.score.includes(score)) {
          this.userHistory.score.push(score);  // Agregar el puntaje al historial
          this.user.score = this.userHistory.score;  // Asegurarnos de que el score se guarde en el user también
        }
      }
    },

    // 🟢 Métodos para guardar selecciones
    setYear(year) {
      this.selectedYear = year;
      this.userHistory.years.push(year);
      this.addToUserHistory('years', year); // Guarda en JSON Server
    },

    setRace(race) {
      this.selectedRace = race;
      this.userHistory.races.push(race.raceName); // Solo guarda el nombre de la carrera
      this.addToUserHistory('races', race.raceName); // Guarda en JSON Server
    },

    setConstructor(constructor) {
      this.selectedConstructor = constructor;
      this.userHistory.constructors.push(constructor.name); // Solo guarda el nombre del constructor
      this.addToUserHistory('constructors', constructor.name); // Guarda en JSON Server
    },

    setDriver(driver) {
      this.selectedDriver = driver;
      const fullName = driver.givenName + " " + driver.familyName; // Nombre completo del piloto
      this.userHistory.drivers.push(fullName); // Guarda solo el nombre completo del piloto
      this.addToUserHistory('drivers', fullName); // Guarda en JSON Server
    },

    setScore(score){
      this.score = score;
      this.userHistory.score.push(score); // Guarda solo el nombre completo del piloto
      this.addToUserHistory('score', score); // Guarda en JSON Se
    },

    // 🟢 Guardar en LocalStorage
    saveToLocalStorage(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error guardando ${key}:`, error);
      }
    },

    // 🟢 Cargar historial desde JSON Server
    async loadUserSelections(userId) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.userHistory = {
            constructors: response.data.constructors || [],
            drivers: response.data.drivers || [],
            races: response.data.races || [],
            years: response.data.years || [],
            score: response.data.score
          };
        }
      } catch (error) {
        console.error('Error cargando historial del usuario:', error);
      }
    },

    // 🟢 Limpiar selecciones
    clearSelections() {
      this.selectedYear = null;
      this.selectedRace = null;
      this.selectedConstructor = null;
      this.selectedDriver = null;
      this.score = null;
      ['year', 'race', 'constructor', 'driver', 'score'].forEach(key => localStorage.removeItem(key));
    }
  }
});
