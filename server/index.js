import express from 'express';
import cors from 'cors'
import router from './routes.js';
import dotenv from 'dotenv'
const app = express()
app.use(cors({
    origin: '*',
    credentials: true,
}))
dotenv.config()
app.use('/', router);
app.listen(() => {
    console.log(`Server running`)
})