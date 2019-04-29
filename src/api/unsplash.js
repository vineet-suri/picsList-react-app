import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ba9ad039af83bc12b1e7d56022582c792558d5eee602f34dfe41ac850725ff9c'
    }
});
