import express from "express";
import userController from "../controllers/userControlers.mjs";
import bordingController from "../controllers/bordingControlers.mjs";
import paymentControler from "../controllers/paymentControler.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";
import jwtTokenMiddleware from "../middleware/jwtTokenMiddleware.mjs";
import OTPMiddlewere from "../middleware/OTPMiddlewere.mjs";

const { registerUser,loginUser,sendUserDetails,updateOwner,sendOTPByEmail,compareOTPByEmail,updatePassword,cheackUser } = userController;
const { addPlace,getPlace,getMyPlaces,updatePlace,deletePlace } =bordingController
const { payHere } =paymentControler
const { getUserByEmail } = userMiddlewares;
const { createHashPassword,compareHashPassword } = hashPasswordMiddleware;
const { generateJWTToken,authorizeWithJWT } = jwtTokenMiddleware;
const { createOTP } = OTPMiddlewere;

const router = express.Router();

router.post("/register", getUserByEmail, createHashPassword, registerUser,generateJWTToken);
router.post("/login", getUserByEmail,loginUser ,compareHashPassword,generateJWTToken);
router.post("/createOTP", getUserByEmail,loginUser,createOTP,sendOTPByEmail);
router.post("/compareOTP", getUserByEmail,loginUser,compareOTPByEmail);
router.post("/resetPassword", getUserByEmail,loginUser,createHashPassword,updatePassword);
router.get("/check",cheackUser);

router.get("/getOwner",authorizeWithJWT, sendUserDetails);
router.put("/updateOwner",authorizeWithJWT,createHashPassword,updateOwner);

router.post("/addPlace",authorizeWithJWT,addPlace);
router.post("/getPlace",authorizeWithJWT,getPlace);
router.get("/getMyPlaces",authorizeWithJWT,getMyPlaces);
router.put("/updatePlace",authorizeWithJWT,updatePlace);
router.delete("/deletePlace",authorizeWithJWT,deletePlace);

router.post("/pay",authorizeWithJWT,payHere);




export default router;

