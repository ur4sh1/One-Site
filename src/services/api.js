import axios from 'axios';

const api = axios.create({
    baseURL:'https://raw.githubusercontent.com/ur4sh1/one-site-resources/main/api'
});

export default api;