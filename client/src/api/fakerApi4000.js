import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.ubicquia.com/api/',
    headers: {
        'x-api-key': `${process.env.VUE_APP_FAKER_API}`, //need to prefix evn variable : VUE_APP(same in react)
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})