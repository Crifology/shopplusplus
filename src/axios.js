import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/shopplusplus-2f91d/us-central1/api'
})

export default instance;