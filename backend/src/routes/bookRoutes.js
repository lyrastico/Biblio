import express from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/bookController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, createBook); // 🆕 Ajout d'un livre (admin uniquement)
router.get("/", getAllBooks); // 📚 Récupération de tous les livres
router.get("/:id", getBookById); // 🔍 Récupération d'un livre par ID
router.put("/:id", protect, adminOnly, updateBook); // ✏️ Mise à jour d'un livre (admin)
router.delete("/:id", protect, adminOnly, deleteBook); // ❌ Suppression d'un livre (admin)

export default router;
