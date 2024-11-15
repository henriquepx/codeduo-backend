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

const usersInRooms = [];

function getUsersInRoom(roomId) {
  return usersInRooms.filter(user => user.roomId === roomId);
}

function addUserToRoom(userId, roomId) {
  usersInRooms.push({ userId, roomId });
}

function removeUserFromRoom(userId, roomId) {
  const index = usersInRooms.findIndex(user => user.userId === userId && user.roomId === roomId);
  if (index !== -1) usersInRooms.splice(index, 1);
}

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => {
    const userId = socket.id; 

    socket.join(roomId);
    addUserToRoom(userId, roomId);

    const users = getUsersInRoom(roomId);
    io.to(roomId).emit('updateUserList', users);
    console.log(`User ${userId} joined room ${roomId}`);

    socket.on('codeChange', (newCode) => {
      io.to(roomId).emit('codeChange', newCode); 
    });

    socket.on('disconnect', () => {
      removeUserFromRoom(userId, roomId);
      const users = getUsersInRoom(roomId);
      io.to(roomId).emit('updateUserList', users.map(user => user.userId));
      console.log(`User ${userId} disconnected from room ${roomId}`);
    });
  });
});



server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});