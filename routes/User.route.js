import express from "express";
import { createUser } from "../controllers/User.controller.js";

const router = express.Router();

router.get("/", createUser);

export default router;