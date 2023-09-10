import axios from "axios"
export const router = axios.create({
    baseURL: 'https://dropdowns-server.onrender.com',
})