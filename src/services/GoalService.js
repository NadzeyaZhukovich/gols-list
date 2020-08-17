import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getGoals() {
        return apiClient.get('/goals');
    },
    postGoals() {
        return apiClient.post('/goals');
    }
}