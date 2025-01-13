import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/dataBase.js';
import foodsRouter from './routes/foods.router.js';
import socialsRouter from './routes/socials.router.js';
import headersRouter from './routes/headers.router.js';
import historiesRouter from './routes/histories.router.js';

const app = express();


const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config();
dotenv.config({ path: envFile });

console.log(`Corriendo en modo ${process.env.NODE_ENV}`);

const PORT = process.env.PORT || 8080;

connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173', // Permitir solo tu frontend (ajusta según el puerto que uses)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir estos métodos HTTP
  }));

app.use(express.json());
app.use('/api/foods', foodsRouter);
app.use('/api/socials', socialsRouter);
app.use('/api/headers', headersRouter);
app.use('/api/histories', historiesRouter);


app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
