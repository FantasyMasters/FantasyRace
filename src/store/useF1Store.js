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
    error: null, // Nuevo estado para almacenar errores
  }),

  actions: {
    async fetchUser(userId) {
      this.error = null; // Limpiar errores previos
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        this.user = response.data;
        this.userHistory = {
          constructors: this.user.constructors,
          drivers: this.user.drivers,
          races: this.user.races,
          years: this.user.years
        };
      } catch (error) {
        this.error = 'Error fetching user: ' + error.message;
        console.error('Error fetching user:', error);
      }
    },

    // Mantener selections user
    setYear(year) {
      this.clearSelections();
      this.selectedYear = year;
      try {
        localStorage.setItem('year', JSON.stringify(this.selectedYear));
      } catch (error) {
        this.error = 'Error saving year to localStorage: ' + error.message;
        console.error('Error saving year:', error);
      }
    },

    setUser(user) {
      this.user = user;
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        this.error = 'Error saving user to localStorage: ' + error.message;
        console.error('Error saving user:', error);
      }
    },

    setRace(race) {
      this.selectedRace = race;
      try {
        localStorage.setItem('race', JSON.stringify(race));
      } catch (error) {
        this.error = 'Error saving race to localStorage: ' + error.message;
        console.error('Error saving race:', error);
      }
    },

    setConstructor(constructor) {
      this.selectedConstructor = constructor;
      try {
        localStorage.setItem('constructor', JSON.stringify(constructor));
      } catch (error) {
        this.error = 'Error saving constructor to localStorage: ' + error.message;
        console.error('Error saving constructor:', error);
      }
    },

    setDriver(driver) {
      this.selectedDriver = driver;
      try {
        localStorage.setItem('driver', JSON.stringify(driver));
      } catch (error) {
        this.error = 'Error saving driver to localStorage: ' + error.message;
        console.error('Error saving driver:', error);
      }
    },

    setScore(score) {
      this.score = score;
      try {
        localStorage.setItem('score', JSON.stringify(score));
      } catch (error) {
        this.error = 'Error saving score to localStorage: ' + error.message;
        console.error('Error saving score:', error);
      }
    },

    clearSelections() {
      try {
        this.selectedYear = null;
        this.selectedRace = null;
        this.selectedConstructor = null;
        this.selectedDriver = null;
        this.score = 0;
        localStorage.removeItem('year');
        localStorage.removeItem('race');
        localStorage.removeItem('constructor');
        localStorage.removeItem('driver');
        localStorage.removeItem('score');
      } catch (error) {
        this.error = 'Error clearing selections: ' + error.message;
        console.error('Error clearing selections:', error);
      }
    }
  }
});
