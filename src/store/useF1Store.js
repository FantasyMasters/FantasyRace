import { defineStore } from 'pinia';  //This is from Pinia (a store for Vue.js). It helps save and manage app data.
import axios from 'axios'; //This is used to make HTTP requests (get data from the server).

//Hese are the user’s current selections, stores the logged-in user’s data
export const useF1Store = defineStore('f1', {
  state: () => ({
    selectedYear: null,
    selectedRace: null,
    selectedConstructor: null,
    selectedDriver: null,
    user: null,
    userHistory: { //This keeps a list of past selections (teams, drivers, races, years, and scores).
      constructors: [],
      drivers: [],
      races: [],
      years: [],
      score: [],
    },
    error: null,
  }),

  //This calculates the total score by adding all numbers in userHistory.score.
  getters: {
    totalScore(state) {
      return state.userHistory.score.reduce((acc, value) => acc + value, 0);
    },
  },

  //This section has different functions to get, save, and update data.
  actions: {
    async fetchUser(userId) {  // This function gets user data from a fake database (JSON Server).
      this.error = null;
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.setUser(response.data); //If the user exists, save the data inside this.user.
        } else {
          this.error = 'Usuario no encontrado';
          this.user = null;
        }
      } catch (error) {
        this.error = 'Error al obtener usuario: ' + error.message;
      }
    },

    // Save the user’s history (teams, drivers, races, etc.) and Call saveUserToStorage() to store user data in localStorage.
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

    //Load user fromLocalStore and save in to user
    loadUserFromStorage() {
      const user = localStorage.getItem('user');
      if (user) {
        this.setUser(JSON.parse(user));
      }
    },
    //Here adds elections to userHistory
    async addToUserHistory(type, value, score) {
      if (!this.user || this.userHistory[type].includes(value)) return;
      
      this.userHistory[type].push(value);
      this.user[type] = [...(this.user[type] || []), value];

      if (score !== undefined && !this.userHistory.score.includes(score)) {
        this.userHistory.score.push(score);
        this.user.score = [...this.userHistory.score];
      }
  //Here updates the userStorage data
      this.saveUserToStorage();
      try {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, this.user);
      } catch (error) {
        console.error(`Error actualizando ${type}:`, error);
      }
    },

    //Here saves the numbers and names of the years complements
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

    //This clear the user selections if they want to game again
    clearSelections() {
      this.selectedYear = this.selectedRace = this.selectedConstructor = this.selectedDriver = null;
      this.userHistory = { constructors: [], drivers: [], races: [], years: [], score: [] };
      localStorage.removeItem('user');
    }
  }
});
