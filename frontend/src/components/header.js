import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const username = localStorage.getItem("userName");
    if (token && username) {
      setUser({ username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <h1>📚 Bibliothèque</h1>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/livres">Liste des livres</Link> | 
        <Link to="/ajouter-livre">Ajouter un livre</Link> | 

        {user ? (
          <>
            <span>👤 {user.username}</span> | 
            <button onClick={handleLogout} className="logout-btn">Se déconnecter</button>
          </>
        ) : (
          <>
            <Link to="/register">Créer un compte</Link> | 
            <Link to="/login">Se connecter</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
