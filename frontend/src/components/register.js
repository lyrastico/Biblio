import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(formData);
    if (result) {
      setMessage("✅ Compte créé avec succès ! Redirection...");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage("❌ Erreur lors de la création du compte.");
    }
  };

  return (
    <div className="form-container">
      <h2>Créer un compte</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nom d'utilisateur :</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Mot de passe :</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Register;
