import { createUser, confirmEmail, login, resetPassword, resettingPassword, getAllusers } from "../Controllers/userController.js";

import dotenv from "dotenv";
dotenv.config({path:"backend/config/.env"});

import express from "express";
const router = express.Router();

router.post("/createuser", createUser);
router.post("/confirm-email/:token",confirmEmail);
router.post("/login",login);
router.post("/resetpassword",resetPassword);
router.patch("/resettingpassword/:email/:token",resettingPassword)


const User = router;
export default User;