import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./components/accueil";
import ListeLivres from "./components/listeLivres";
import CreerLivre from "./components/creerLivre";
import Register from "./components/register";
import Login from "./components/login";
import "./app.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/livres" element={<ListeLivres />} />
        <Route path="/ajouter-livre" element={<CreerLivre />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
