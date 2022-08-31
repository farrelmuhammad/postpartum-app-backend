import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
// import db from './config/Database.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
dotenv.config();

const app = express();

// (async () => {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(userRoute)
app.use(productRoute)

app.listen(process.env.PORT, () => {
    console.log('Server up an running...')
})