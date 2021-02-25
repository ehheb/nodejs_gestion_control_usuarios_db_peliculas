import express from "express";


const router = express.Router();

router.get("/users", signup);
router.get("/users:id", signup);
router.post("/users", login);
router.put("/users/:id"/* , resetPassword */);
router.delete("/users/:id"/* , resetPassword */);


export default router;