import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(compression());
app.use(bodyParser.json());
app.use(express.json());

const corsOptions = {
  origin: 'https://codeduo.vercel.app',
  optionsSuccessStatus: 204,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
};

app.use(cors(corsOptions));
app.use(cookieParser());

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
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'https://codeduo.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);

    socket.on('codeChange', (newCode) => {
      io.to(roomId).emit('codeChange', newCode); 
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
