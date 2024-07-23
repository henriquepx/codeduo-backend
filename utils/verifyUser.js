import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log('Token from cookie:', token); 

    if (!token) {
        console.log('No token found in cookies'); 
        return next(errorHandler(401, 'You are not authenticated!'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Token verification failed:', err); 
            return next(errorHandler(403, 'Token is not valid!'));
        }

        req.user = user;
        console.log('User verified successfully:', user);
        next();
    });
}
