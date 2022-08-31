import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
// import db from './config/Database.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
dotenv.config();

const app = express();

// const port = process.env.APP_PORT || 5000;

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
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(userRoute);
app.use(productRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server up an running...')
});