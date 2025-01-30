import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Ensemble, luttons contre les maux par l&apos;action</h1>
        <p>
          Soutenez les orphelinats et associations d&apos;Afrique pour offrir espoir
          et opportunités aux enfants dans le besoin.
        </p>
        <div className="hero-buttons">
          <button className="bg-rose-600">Faire un don</button>
          <button className="bg-white">En savoir plus</button>
        </div>
      </div>
    </section>
  );
}
