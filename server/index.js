import express from 'express';
import cors from 'cors'
import router from './routes.js';
import dotenv from 'dotenv'
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: false,
}))
dotenv.config()
app.use('/', router);
app.listen(process.env.PORT, () => {
    console.log(`Server running at: ${process.env.PORT}`)
})