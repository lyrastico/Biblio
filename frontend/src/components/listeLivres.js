import React, { useEffect, useState } from "react";
import { getLivres } from "../services/api";
import Livre from "./livre";

const ListeLivres = () => {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    getLivres().then(setLivres);
  }, []);

  return (
    <div>
      <h2>📚 Liste des Livres</h2>
      {livres.length === 0 ? (
        <p>Aucun livre disponible.</p>
      ) : (
        livres.map(livre => <Livre key={livre._id} livre={livre} />)
      )}
    </div>
  );
};

export default ListeLivres;
