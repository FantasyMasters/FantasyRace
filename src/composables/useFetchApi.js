import { ref, watchEffect } from 'vue';
// Definimos un composable que recibe una URL reactiva como parámetro
//We define a composable that receives a reactive URL as a parameter

export function useFetchApi(url) {
   // Definimos una variable reactiva para almacenar los datos obtenidos de la API
  //We define a reactive variable to store the data obtained from the API
  const data = ref(null);
  // Definimos una variable reactiva para almacenar posibles errores en la petición
  //We define a reactive variable to store possible errors in the request
  const error = ref(null);
  // Definimos una variable reactiva para indicar si la petición está en curso
  //We define a reactive variable to indicate whether the request is in progress
  const isLoading = ref(false);
// Función asíncrona para realizar la petición a la API
//Asynchronous function to make the request to the API
  const fetchData = async () => {
    if (!url.value) return; // Si la URL está vacía o no está definida, salimos sin hacer nada
                            //If the URL is empty or not defined, we exit without doing anything.
    isLoading.value = true;// Marcamos que la carga ha iniciado
                          //We mark that the loading has started
    error.value = null;// Reseteamos cualquier error previo
                       //We reset any previous errors
    try {
      // Hacemos la petición a la API usando fetch
      //We make the request to the API using fetch
      const response = await fetch(url.value);
      // Si la respuesta no es exitosa, lanzamos un error con el código de estado y mensaje
      //If the response is not successful, we throw an error with the status code and message
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      // Convertimos la respuesta en formato JSON
      //We convert the response into JSON format
      const result = await response.json();
      // Guardamos los datos en la variable `data`, adaptándolos a la estructura de la API de F1
      //We save the data in the `data` variable, adapting it to the structure of the F1 API
      data.value = result.MRData || result; // Adaptado a la estructura de la API de F1
                                            //Adapted to the F1 API structure
       // Capturamos cualquier error y lo almacenamos en `error`
       // We catch any errors and store them in `error
    } catch (err) {
      error.value = err.message;
      console.error('Error al obtener datos:', err);
    } finally {
      // Terminamos la carga, independientemente del resultado
      //We finish the load, regardless of the result
      isLoading.value = false;
    }
  };
  // Ejecutamos la función fetchData automáticamente cuando `url` cambia
  //We run the fetchData function automatically when `url` changes

  watchEffect(fetchData); // Ejecuta fetchData cada vez que cambia la URL
// Retornamos las variables reactivas para que puedan ser utilizadas en los componentes
//We return the reactive variables so that they can be used in the components
  return { data, error, isLoading };
}