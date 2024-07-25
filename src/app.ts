import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import connectDB from '../Config/database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

connectDB();

app.use(bodyParser.json());
app.use('', authRoutes);
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
