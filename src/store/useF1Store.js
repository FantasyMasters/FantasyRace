import { defineStore } from 'pinia';
import axios from 'axios';

export const useF1Store = defineStore('f1', {
  state: () => ({
    selectedYear: null,
    selectedRace: null,
    selectedConstructor: null,
    selectedDriver: null,
    score: 0,
    user: null,
    userHistory: {
      constructors: [],
      drivers: [],
      races: [],
      years: []
    },
    error: null, // Estado para almacenar errores
  }),

  actions: {
    // 🟢 CARGAR USUARIO DESDE JSON-SERVER
    async fetchUser(userId) {
      this.error = null; // Limpiar errores previos
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.user = response.data;
          this.userHistory = {
            constructors: this.user.constructors || [],
            drivers: this.user.drivers || [],
            races: this.user.races || [],
            years: this.user.years || []
          };
          this.saveUserToStorage(); // Guardar usuario en localStorage
        } else {
          this.error = 'Usuario no encontrado';
          this.user = null;
        }
      } catch (error) {
        this.error = 'Error al obtener usuario: ' + error.message;
        console.error('Error fetching user:', error);
      }
    },

    // 🟢 GUARDAR USUARIO EN LOCALSTORAGE
    saveUserToStorage() {
      try {
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        this.error = 'Error guardando usuario en localStorage: ' + error.message;
        console.error('Error saving user:', error);
      }
    },

    // 🟢 ASIGNAR USUARIO AL STORE
    setUser(user) {
      this.user = user;
      this.saveUserToStorage();
    },

    // 🟢 CERRAR SESIÓN
    logoutUser() {
      this.user = null;
      this.userHistory = {
        constructors: [],
        drivers: [],
        races: [],
        years: []
      };
      localStorage.removeItem('user');
    },

    // 🟢 GUARDAR SELECCIONES DEL USUARIO
    setYear(year) {
      this.clearSelections();
      this.selectedYear = year;
      this.saveToLocalStorage('year', this.selectedYear);
    },

    setRace(race) {
      this.selectedRace = race;
      this.saveToLocalStorage('race', race);
    },

    setConstructor(constructor) {
      this.selectedConstructor = constructor;
      this.saveToLocalStorage('constructor', constructor);
    },

    setDriver(driver) {
      this.selectedDriver = driver;
      this.saveToLocalStorage('driver', driver);
    },

    setScore(score) {
      this.score = score;
      this.saveToLocalStorage('score', score);
    },

    // 🟢 GUARDAR EN LOCALSTORAGE (FUNCIÓN REUTILIZABLE)
    saveToLocalStorage(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        this.error = `Error guardando ${key} en localStorage: ` + error.message;
        console.error(`Error saving ${key}:`, error);
      }
    },

    // 🟢 LIMPIAR SELECCIONES
    clearSelections() {
      try {
        this.selectedYear = null;
        this.selectedRace = null;
        this.selectedConstructor = null;
        this.selectedDriver = null;
        this.score = 0;
        ['year', 'race', 'constructor', 'driver', 'score'].forEach(key => localStorage.removeItem(key));
      } catch (error) {
        this.error = 'Error limpiando selecciones: ' + error.message;
        console.error('Error clearing selections:', error);
      }
    }
  }
});
