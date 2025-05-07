import express from "express";
import userController from "../controllers/userControlers.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";
import jwtTokenMiddleware from "../middleware/jwtTokenMiddleware.mjs";

const { registerUser,loginUser,sendUserDetails } = userController;
const { getUserByEmail } = userMiddlewares;
const { createHashPassword,compareHashPassword } = hashPasswordMiddleware;
const { generateJWTToken,authorizeWithJWT } = jwtTokenMiddleware;

const router = express.Router();

router.post("/register", getUserByEmail, createHashPassword, registerUser,generateJWTToken);
router.post("/login", getUserByEmail,loginUser ,compareHashPassword,generateJWTToken);
router.get("/getUser",authorizeWithJWT, sendUserDetails);

export default router;

