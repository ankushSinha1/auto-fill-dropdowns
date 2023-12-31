import express from 'express';
import cors from 'cors'
import router from './routes.js';
import dotenv from 'dotenv'
const app = express()
app.use(cors({
    origin: 'https://dropdowns-i47a.onrender.com',
    credentials: false,
}))
dotenv.config()
app.use('/', router);
app.listen(process.env.PORT, () => {
    console.log(`Server running at: ${process.env.PORT}`)
})