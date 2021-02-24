import express from "express";
import {signup} from "../controllers/signup";
import {login} from "../controllers/login";
import {resetPassword} from "../controllers/reset_password"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/reset-password"/* , resetPassword */);


export default router;

