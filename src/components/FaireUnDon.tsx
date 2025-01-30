import React, { useState } from "react";
import "./FaireUnDon.css";

const FaireUnDon = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [montant, setMontant] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState("");
  const [association, setAssociation] = useState("");
  const [wantsMessage, setWantsMessage] = useState(false);

  const associations = [
    { name: "Orphelinat Lumière", country: "Cameroun" },
    { name: "Association Enfant Espoir", country: "Sénégal" },
    { name: "Orphelinat des Anges", country: "Mali" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nom, prenom, email, telephone, montant, message, method, association });
  };

  return (
    <div className="don-container">
      <h1>❤️Soutenez-nous</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group name-row">
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nom de famille"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Numéro de téléphone</label>
          <input
            type="tel"
            placeholder="+XXX..."
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Choisissez une association</label>
          <select
            value={association}
            onChange={(e) => setAssociation(e.target.value)}
            required
          >
            <option value="">-- Sélectionnez --</option>
            {associations.map((asso, index) => (
              <option key={index} value={asso.name}>
                {asso.name} - {asso.country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Montant</label>
          <input
            type="number"
            placeholder="USD"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Méthode de paiement</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          >
            <option value="">-- Sélectionnez --</option>
            <option value="mobile-money">Mobile Money</option>
            <option value="paypal">PayPal</option>
            <option value="visa">Carte Visa</option>
          </select>
        </div>
        <div className="form-group">
          <label>Voulez-vous laisser un message ?</label>
          <select
            value={wantsMessage ? "oui" : "non"}
            onChange={(e) => setWantsMessage(e.target.value === "oui")}
          >
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </div>
        {wantsMessage && (
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Écrivez votre message ici"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        )}
        <button type="submit" className="don-submit-button">
          Donner
        </button>
      </form>
    </div>
  );
};

export default FaireUnDon;
