import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

console.log("MONGO_URI utilisé:", process.env.MONGO_URI);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Route de vérification du statut du serveur
app.get("/status", (req, res) => {
  res.json({ status: "OK", message: "Le serveur fonctionne correctement 🚀" });
});

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
