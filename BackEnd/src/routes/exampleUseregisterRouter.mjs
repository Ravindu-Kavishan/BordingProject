import express from 'express';
import userController from '../controllers/exampleUserControlers.mjs'; 
const { registerUser } = userController; 

const router = express.Router();

router.post('/register', registerUser);

export default router;
