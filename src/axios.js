import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-clone1.herokuapp.com'
})

export default instance;