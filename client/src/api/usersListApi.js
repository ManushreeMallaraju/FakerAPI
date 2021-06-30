import axios from 'axios';

export default axios.create({
    baseURL: 'https://mocki.io/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
      
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})