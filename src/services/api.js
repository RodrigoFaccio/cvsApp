import axios from 'axios';

const api = axios.create({
    baseURL:'http://cvs.com.br/aquario/api'
});

export default api;