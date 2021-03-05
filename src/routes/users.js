import express from "express";
import {findAllUsers, findOneUser} from "../controllers/get_users";
import {validateFindInUrl, findInUrl} from "../middlewares/validators";
import {isAdmin, getRole} from "../middlewares/roleAuth";
const router = express.Router();

//findUserSchema
//validateFindUser

router.get("/users", findAllUsers);
router.get("/users/:id", validateFindInUrl(findInUrl), findOneUser);

router.get("/userss", getRole);

export default router;