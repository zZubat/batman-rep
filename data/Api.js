import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=67f2f4c&&s=batman'
});

export default api;