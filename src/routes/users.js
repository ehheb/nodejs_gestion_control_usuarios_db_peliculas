import express from "express";
import {findAllUsers, findOneUser} from "../controllers/get_users";
import {validateFindInUrl, findInUrl} from "../middlewares/validators";
import {getRole, isAdmin, isEditor} from "../middlewares/roleAuth";

const router = express.Router();
//Rutas para obtener a los usuarios
router.get("/users", findAllUsers);
router.get("/users/:id", validateFindInUrl(findInUrl), findOneUser);

router.get("/userss", getRole, isEditor, findAllUsers);

export default router;