import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import connectDB from './db/db.js';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 204,
  credentials: true,
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500; 
  const message = error.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false, 
    message,
    statusCode,
  });
})