import express from "express";
import { createUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", createUser);
router.post("/update/:id", verifyToken, updateUser);

export default router;