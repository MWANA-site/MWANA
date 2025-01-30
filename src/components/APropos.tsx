import React from "react";
import "./APropos.css";
const APropos = () => {
  return (
    <div className="apropos-container">
      <h1>&Agrave; propos de MWANA</h1>
      <p>
        Nous connectons les orphelinats et les associations d&apos;enfants en Afrique avec des donateurs du monde entier. Imaginez un endroit o&ugrave; chaque euro compte, o&ugrave; chaque don est un pas vers un avenir meilleur pour ces enfants. C&apos;est exactement ce que nous faisons!
      </p>
      <p>
        Avec un système de paiement sécurisé et une transparence totale, vous pouvez donner en toute confiance. Ensemble, faisons briller l&apos;espoir!
      </p>
      <p>
        Mwana, c&apos;est bien plus qu&apos;un simple site de dons. C&apos;est une aventure humaine, un pont entre les cœurs généreux et les enfants qui ont besoin d&apos;un coup de pouce. Créé par la visionnaire <strong>Rêve Moussialy</strong>, ce projet représente une bouffée d&apos;air frais dans le monde des dons.
      </p>
      <div className="contact-info">
        <h2>Notre adresse</h2>
        <p>123 Rue de l&apos;Espoir, Libreville, Gabon</p>
        <h2>Nous contacter</h2>
        <p>Email : contact@mwana.org</p>
        <p>Téléphone : +241 01 23 45 67</p>
        <h2>Suivez-nous</h2>
        <ul>
          <li><a href="https://www.facebook.com/Mwana" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/Mwana" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/Mwana" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};
export default APropos;
