import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">❤️</span>
          <span className="logo-text">MWANA</span>
        </div>
        <nav className="navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Accueil</NavLink>
          <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'active-link' : ''}>À propos</NavLink>
          <NavLink to="/catalogue" className={({ isActive }) => isActive ? 'active-link' : ''}>Catalogue</NavLink>
          <NavLink to="/actualites" className={({ isActive }) => isActive ? 'active-link' : ''}>Actualités</NavLink>
          <NavLink to="/ressources" className={({ isActive }) => isActive ? 'active-link' : ''}>Ressources</NavLink>
        </nav>
        <button className="don-btn">
          <NavLink to="/faire-un-don" className={({ isActive }) => isActive ? 'active-link' : ''}>Faire un don</NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
