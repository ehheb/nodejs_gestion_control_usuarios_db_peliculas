import express from "express";
import {addRole} from "../controllers/add_roles_users"

const router = express.Router();

router.post("/roles", addRole);
//router.post("/users/:userId/roles/:roleId")

export default router;
