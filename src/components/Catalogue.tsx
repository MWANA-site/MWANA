import React from "react";
import "./Catalogue.css";

const Catalogue = () => {
  return (
    <section id="catalogue" className="catalogue-container">
      <h2>Nos Associations et Orphelinats</h2>
      <div className="catalogue-list">
        <div className="catalogue-item">
          <h3>Association ABC</h3>
          <p>Lieu: Dakar, Sénégal</p>
        </div>
        <div className="catalogue-item">
          <h3>Orphelinat XYZ</h3>
          <p>Lieu: Abidjan, Côte d&apos;Ivoire</p>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
