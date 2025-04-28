import express from "express";
import userController from "../controllers/userControlers.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";

const { registerUser } = userController;
const { getUserByEmail } = userMiddlewares;

const router = express.Router();

router.post("/register",getUserByEmail, registerUser);

export default router;
