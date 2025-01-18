import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/dataBase.js';
import foodsRouter from './routes/foods.router.js';
import socialsRouter from './routes/socials.router.js';
import headersRouter from './routes/headers.router.js';
import historiesRouter from './routes/histories.router.js';

const app = express();

dotenv.config();
dotenv.config({ path: '.env.development' });

const PORT = process.env.PORT;

connectDB();

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',  // Para desarrollo
      'https://pizzeriadonremolo-nu.vercel.app',  // Producción
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);  // Permite la conexión
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
}));


app.use(express.json());
app.use('/api/foods', foodsRouter);
app.use('/api/socials', socialsRouter);
app.use('/api/headers', headersRouter);
app.use('/api/histories', historiesRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
