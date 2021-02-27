import express from "express";
import {addRole, userRole} from "../controllers/add_roles_users"

const router = express.Router();

router.post("/roles", addRole);
router.post("/users/:userId/roles/:roleId", userRole);

export default router;
