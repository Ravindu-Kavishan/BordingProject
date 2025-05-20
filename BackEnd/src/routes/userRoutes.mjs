import express from "express";
import userController from "../controllers/userControlers.mjs";
import bordingController from "../controllers/bordingControlers.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";
import jwtTokenMiddleware from "../middleware/jwtTokenMiddleware.mjs";

const { registerUser,loginUser,sendUserDetails,updateOwner } = userController;
const { addPlace,getPlace,getMyPlaces,updatePlace } =bordingController
const { getUserByEmail } = userMiddlewares;
const { createHashPassword,compareHashPassword } = hashPasswordMiddleware;
const { generateJWTToken,authorizeWithJWT } = jwtTokenMiddleware;

const router = express.Router();

router.post("/getAllPlaces",);
router.post("/login", getUserByEmail,loginUser ,compareHashPassword,generateJWTToken);
router.get("/getOwner",authorizeWithJWT, sendUserDetails);
router.put("/updateOwner",authorizeWithJWT,createHashPassword,updateOwner);
router.post("/addPlace",authorizeWithJWT,addPlace);
router.post("/getPlace",authorizeWithJWT,getPlace);
router.get("/getMyPlaces",authorizeWithJWT,getMyPlaces);
router.put("/updatePlace",authorizeWithJWT,updatePlace);

export default router;

