// Imports
import express from "express";
import {home, addRoommate, getRoommates} from "../controllers/userController.js";

// Variables
const router = express.Router();


// Rutas
router.get("/", home);

router.post("/roommate", addRoommate);

router.get("/roommates", getRoommates);

export default router