import { ref, watchEffect } from 'vue';

export function useFetchApi(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchData = async () => {
    if (!url.value) return; // Evita llamadas si la URL está vacía

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(url.value);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      const result = await response.json();
      data.value = result.MRData || result; // Adaptado a la estructura de la API de F1
    } catch (err) {
      error.value = err.message;
      console.error('Error al obtener datos:', err);
    } finally {
      isLoading.value = false;
    }
  };

  watchEffect(fetchData); // Ejecuta fetchData cada vez que cambia la URL

  return { data, error, isLoading };
}