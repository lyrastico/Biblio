import React from "react";

const Livre = ({ livre }) => {
  return (
    <div className="livre-card">
      <h3>{livre.title}</h3>
      <p><strong>Auteur :</strong> {livre.author}</p>
      <p>{livre.description}</p>
      {livre.coverImage && <img src={livre.coverImage} alt={livre.title} />}
    </div>
  );
};

export default Livre;
