import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';

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

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('codeChange', (code) => {
    socket.broadcast.emit('codeChange', code);
  });
});

connectDB();

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

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
