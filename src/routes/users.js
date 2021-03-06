import express from "express";
import {findAllUsers, findOneUser} from "../controllers/get_users";
import {validateFindInUrl, findInUrl} from "../middlewares/validators";
import {getRole, isAdmin} from "../middlewares/roleAuth";
import { login } from "../controllers/login";
const router = express.Router();

//findUserSchema
//validateFindUser

router.get("/users", findAllUsers);
router.get("/users/:id", validateFindInUrl(findInUrl), findOneUser);

router.get("/userss", getRole, isAdmin, findAllUsers);

export default router;