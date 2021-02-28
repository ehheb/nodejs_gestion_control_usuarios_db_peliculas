import express from "express";
import {findAllUsers, findOneUser} from "../controllers/get_users";
import {validateFindUser, findUsersSchema} from "../middlewares/validators"
const router = express.Router();

router.get("/users", findAllUsers);
router.get("/users/:id", validateFindUser(findUsersSchema), findOneUser);

export default router;