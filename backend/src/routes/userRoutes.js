import express from "express";
import { registerUser, loginUser, getAllUsers } from "../controllers/userController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers); // 🔒 Récupération de tous les utilisateurs (admin)

export default router;
