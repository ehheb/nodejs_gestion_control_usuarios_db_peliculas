import express from "express";
import {signup} from "../controllers/signup";
import {login} from "../controllers/login";
import {resetPassword, updatePassword} from "../controllers/reset_password"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/reset-password", resetPassword);
//router.post("/update-password", updatePassword);
router.put("/users/:userId/update-password/", updatePassword);


export default router;

