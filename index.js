import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import connectDB from './db/db.js';

dotenv.config({ path: './.env' });

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
connectDB();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

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