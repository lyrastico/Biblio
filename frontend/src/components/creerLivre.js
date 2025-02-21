import React, { useState } from "react";
import { ajouterLivre } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreerLivre = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 📝 Gérer les changements dans les inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📨 Envoyer les données du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await ajouterLivre(formData);
    if (result) {
      setMessage("📖 Livre ajouté avec succès !");
      setTimeout(() => navigate("/livres"), 1500);
    } else {
      setMessage("❌ Une erreur s'est produite !");
    }
  };

  return (
    <div className="form-container">
      <h2>📖 Ajouter un Livre</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Ex: 1984"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Auteur :</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Ex: Vive les pieds"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          placeholder="Ajoutez une courte description du livre..."
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="coverImage">URL de l'image de couverture :</label>
        <input
          type="text"
          id="coverImage"
          name="coverImage"
          placeholder="Ex: https://pieds.com/image.jpiedg"
          value={formData.coverImage}
          onChange={handleChange}
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default CreerLivre;
