import express from "express";
import {addRole, userRole} from "../controllers/add_roles_users";
import {validateRole, roleSchema, validateUserRole, userRoleSchema} from "../middlewares/validators"

const router = express.Router();

router.post("/roles", validateRole(roleSchema), addRole);
router.post("/users/:userId/roles/:roleId", validateUserRole(userRoleSchema), userRole);

export default router;
