import { defineStore } from 'pinia'; //defineStore is used to create a Pinia store
import axios from 'axios'; //axios is used to send requests to a backend API

export const useF1Store = defineStore('f1', { //These store the user’s selected F1 options.
  state: () => ({                             //Esta tienda guarda información sobre los usuarios y sus selecciones de F1.
    selectedYear: null,                       //El objeto state, contiene las variables reactivas que se inicilizan aqui
    selectedRace: null,                       //The state object contains reactive variables that are initialized here
    selectedConstructor: null,
    selectedDriver: null,
    user: null,
    userHistory: { // Keeps a record of the user’s selections (constructors, drivers, races, years, and scores).
      constructors: [], //Guarda el historial del usuario (selecciones anteriores).
      drivers: [],
      races: [],
      years: [],
      score: [],
    },
    error: null,
  }),

  getters: { // Suma todos los puntos en el historial de score, y recorre todo el score sumando los numeros.
    totalScore(state) { //Adds up all numbers in userHistory.score to get the total user score.
      return state.userHistory.score.reduce((acc, value) => acc + value, 0); //Goes through each score and adds it to acc (accumulator).
    },
  },

  actions: {
    //Function to register a new user
    //Funcion para registrar un nuevo usuario
    async registerUser(userData) {
      this.error = null;
      try {
        //Busca en la base de datos si el email del usuario ya existe.
        // Sends a request to the backend to check if the email is already registered.
        const existingUsers = await axios.get(`http://localhost:3000/users?email=${userData.email}`);

        if (existingUsers.data.length > 0) { //If the email already exists, it sets an error and stops.
          this.error = "El usuario ya existe con este email.";
          return;
        }
        //Si el usuario no existe, lo crea en la base de datos con listas vacías.
        // If don't exist register the new user
        const response = await axios.post('http://localhost:3000/users', {
          ...userData, //The user starts with empty history lists.
          constructors: [],
          drivers: [],
          races: [],
          years: [],
          score: [],
        });
                             //Si se creó con éxito, se guarda con setUser().
        if (response.data) { //If the request works, it calls setUser(response.data) to save the user in the state.
          this.setUser(response.data);
        }
      } catch (error) {
        this.error = "Error al registrar usuario: " + error.message;
      }
    },
  //Funcion para conseguir los datos del usuario
   //Function to get the user data
    async fetchUser(userId) {
      this.error = null;
      try { //Gets user data from the backend.
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        if (response.data) {
          this.setUser(response.data); //If the user exists, it saves the user data using setUser().
        } else {
          this.error = 'Usuario no encontrado';
          this.user = null;
        }
      } catch (error) {
        this.error = 'Error al obtener usuario: ' + error.message;
      }
    },
  //Guarda los datos en this.user.
  //Saves user data in this.user.
    setUser(user) {
      this.user = user;    //Copia el historial del usuario desde la base de datos.
      this.userHistory = { //Copies user history from the backend to userHistory, if a field is empty, it sets an empty array ([]).
        constructors: user.constructors || [],
        drivers: user.drivers || [],
        races: user.races || [],
        years: user.years || [],
        score: user.score || [],
      };                        //Guarda el usuario en el almacenamiento local (para no perderlo si se recarga la página).
      this.saveUserToStorage(); //Saves user data to local storage (so it stays after page reload).
    },
  //Guardar Usuario en el Almacenamiento Local
  //Converts user to JSON format and stores it in local storage.
  // Purpose: Keeps user data after page reload.
    saveUserToStorage() {
      localStorage.setItem('user', JSON.stringify(this.user));
    },
  //Obtiene los datos del usuario desde el almacenamiento local.
 //Gets user data from local storage.
    loadUserFromStorage() {
      const user = localStorage.getItem('user');
      if (user) { //If user data exists, it loads it into the store.
        this.setUser(JSON.parse(user));
      }
    },
 // Esta funcion Añade datos al Historial del Usuario.
 //Adds a new selection (year, race, driver, etc.) to the history.
    async addToUserHistory(type, value, score) {
      if (!this.user || this.userHistory[type].includes(value)) return; //Stops if there’s no user or the value is already in history.
 //Adds the new value to both userHistory and user.
      this.userHistory[type].push(value);
      this.user[type] = [...(this.user[type] || []), value];
 //If there’s a score, it adds it to the history.
      if (score !== undefined && !this.userHistory.score.includes(score)) {
        this.userHistory.score.push(score);
        this.user.score = [...this.userHistory.score];
      }

      this.saveUserToStorage(); //Saves changes to local storage.
  //Actualiza los datos del user en el backend.
 //Updates the user’s data in the backend.
 //If there’s an error, it logs it in the console.
      try {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, this.user);
      } catch (error) {
        console.error(`Error actualizando ${type}:`, error);
      }
    },
 //Aqui actualizamos las elecciones del user y los añade a su historias, reflejado en su perfil de usuario.
 //These update selections and add them to history.
 //Example: If a user selects a year, it saves the year and updates history.
    setYear(year) { this.addToUserHistory('years', year); this.selectedYear = year; },
    setRace(race) { this.addToUserHistory('races', race.raceName); this.selectedRace = race; },
    setConstructor(constructor) { this.addToUserHistory('constructors', constructor.name); this.selectedConstructor = constructor; },
    setDriver(driver) { 
      const fullName = `${driver.givenName} ${driver.familyName}`;
      this.addToUserHistory('drivers', fullName);
      this.selectedDriver = driver;
    },
    setScore(score) { this.addToUserHistory('score', score); },
 //Carga los datos desde el backend.
 //Loads user data from the backend.
    async loadUserSelections(userId) {
      await this.fetchUser(userId);
    },
 //Limpia el historial y borra los datos del local Storage
 //Clears user history and removes user data from local storage.
    clearSelections() {
      this.selectedYear = this.selectedRace = this.selectedConstructor = this.selectedDriver = null;
      this.userHistory = { constructors: [], drivers: [], races: [], years: [], score: [] };
      localStorage.removeItem('user');
    }
  }
});
