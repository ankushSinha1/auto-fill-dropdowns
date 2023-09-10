import axios from "axios"
export const router = axios.create({
    baseURL: 'http://localhost:4000/',
})