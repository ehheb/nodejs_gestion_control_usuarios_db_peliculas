import express from "express";
import {findAllUsers, findOneUser} from "../controllers/get_users";


const router = express.Router();

router.get("/users", findAllUsers);
router.get("/users/:id", findOneUser);


export default router;