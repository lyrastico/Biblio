import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
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
    console.log("Données envoyées :", formData); // 🔍 Debugging
    const result = await loginUser(formData);
    if (result?.token) {
        localStorage.setItem("userToken", result.token);
        localStorage.setItem("userName", result.user.username);
        setUser(result.user);
        setMessage("✅ Connexion réussie !");
        setTimeout(() => navigate("/"), 2000);
    } else {
        setMessage("❌ Erreur lors de la connexion.");
    }
};


  return (
    <div className="form-container">
      <h2>Se connecter</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Mot de passe :</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
