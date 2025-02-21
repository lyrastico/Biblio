import jwt from "jsonwebtoken";
import User from "../models/user.js";

// 🛡️ Middleware de protection des routes (utilisateur authentifié)
export const protect = async (req, res, next) => {
    let token;

    // Vérification si un token est envoyé dans les headers
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]; // Extraire le token après "Bearer"

            // Vérifier et décoder le token JWT
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Récupérer l'utilisateur sans mot de passe
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({ message: "Utilisateur non trouvé" });
            }

            next(); // Passer au middleware suivant
        } catch (error) {
            console.error("Erreur d'authentification :", error);
            return res.status(401).json({ message: "Token invalide ou expiré" });
        }
    } else {
        return res.status(401).json({ message: "Accès non autorisé, token manquant" });
    }
};

// 🛡️ Middleware pour les admins uniquement
export const adminOnly = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(403).json({ message: "Accès interdit, vous devez être administrateur" });
    }
};
