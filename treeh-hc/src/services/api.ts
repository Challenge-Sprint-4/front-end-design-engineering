import axios from 'axios';

const api = axios.create({
  // Altere esta URL para o endereço do seu backend Java/Quarkus
  baseURL: 'http://localhost:8080', 
});

export default api;