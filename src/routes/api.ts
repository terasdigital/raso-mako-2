import express from "express";
import authController from "../controllers/auth.controller";
import authMiddleWare from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.get("/auth/me", authMiddleWare, authController.me);

export default router;
