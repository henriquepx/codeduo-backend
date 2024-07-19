import express from "express";
import { createUser } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';
import { updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", createUser);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;