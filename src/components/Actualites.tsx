import React from "react";
import "./Actualites.css"; // Assure-toi d'importer le CSS correspondant

const Actualites = () => {
  return (
    <section id="actualites" className="actualites-container">
      <h2>Actualités des Orphelinats</h2>
      <div className="actualites-content">
        <img src="/path/to/image.jpg" alt="Orphelinat" />
        <p>Découvrez les dernières nouvelles de nos orphelinats partenaires.</p>
      </div>
    </section>
  );
};

export default Actualites;
