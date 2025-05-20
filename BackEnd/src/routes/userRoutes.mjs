import express from "express";
import userController from "../controllers/userControlers.mjs";
import bordingController from "../controllers/bordingControlers.mjs";
import userMiddlewares from "../middleware/userMiddlewares.mjs";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";
import jwtTokenMiddleware from "../middleware/jwtTokenMiddleware.mjs";
import plaseMiddleware from "../middleware/plaseMiddleware.mjs";
import connectDetailsContoller from "../controllers/connectDetailsContoller.mjs";


const { registerUser, loginUser, sendUserDetails, updateOwner } =userController;
const { addPlace, getPlace, getMyPlaces, updatePlace, getALLPlaces } =bordingController;
const {conectPlaseWithOwner}=connectDetailsContoller;

const { getUserByEmail,getUserDetails } = userMiddlewares;
const { createHashPassword, compareHashPassword } = hashPasswordMiddleware;
const { generateJWTToken, authorizeWithJWT } = jwtTokenMiddleware;
const { getPlaceDetails } = plaseMiddleware;

const router = express.Router();

router.get("/getAllPlaces", getALLPlaces);
router.post("/getPlaseDetails", getPlaceDetails,getUserDetails,conectPlaseWithOwner);


router.get("/getOwner", authorizeWithJWT, sendUserDetails);
router.put("/updateOwner", authorizeWithJWT, createHashPassword, updateOwner);
router.post("/addPlace", authorizeWithJWT, addPlace);
router.post("/getPlace", authorizeWithJWT, getPlace);
router.get("/getMyPlaces", authorizeWithJWT, getMyPlaces);
router.put("/updatePlace", authorizeWithJWT, updatePlace);

export default router;
