import express from "express";
import userController from "../controllers/userControlers.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";
import jwtTokenMiddleware from "../middleware/jwtTokenMiddleware.mjs";

const { registerUser } = userController;
const { getUserByEmail } = userMiddlewares;
const { createHashPassword } = hashPasswordMiddleware;
const { generateJWTToken } = jwtTokenMiddleware;

const router = express.Router();

router.post("/register", getUserByEmail, createHashPassword, registerUser,generateJWTToken);

export default router;
