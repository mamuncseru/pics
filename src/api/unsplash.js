import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TQsvKDjR_Rds0r5taP943gJzaZPti7RFhgnHt6e5j1o'
    }
});