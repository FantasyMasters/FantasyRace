import { defineStore } from 'pinia';

export const useF1Store = defineStore('f1', {
  state: () => ({
    selectedYear: null,
    selectedRace: null,
    selectedConstructor: null,
    selectedDriver: null,
    score: 0, // Nuevo estado para almacenar la puntuación
  }),
  actions: {
    setYear(year) {
      this.clearSelections(); // Vacía localStorage al elegir un nuevo año
      this.selectedYear = year;
      //localStorage.setItem('year', JSON.stringify(year));
	  localStorage.setItem('year', JSON.stringify(this.selectedYear));
    },
    setRace(race) {
      this.selectedRace = race;
      localStorage.setItem('race', JSON.stringify(race));
    },
    setConstructor(constructor) {
      this.selectedConstructor = constructor;
      localStorage.setItem('constructor', JSON.stringify(constructor));
    },
    setDriver(driver) {
      this.selectedDriver = driver;
      localStorage.setItem('driver', JSON.stringify(driver));
    },
    setScore(score) {
      this.score = score;
      localStorage.setItem('score', JSON.stringify(score));
    },
    clearSelections() {
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
    },
  },
});
