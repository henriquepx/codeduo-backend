import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/Auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

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