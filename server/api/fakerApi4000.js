import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.ubicquia.com/api/',
    headers: {
        'x-api-key': '4ab59d335a06e29845bc0322da67513f6153ba3498b5f25b67331c625c82b7a6', //only works when we give a same varaible name in both client&server
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})