import i5 from "../assets/i5.jpg";
import "./header.css";
import Connexion from "./connexion.jsx";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="entete">

        {/* Logo + Nom */}
        <div className="brand">
          <img src={i5} alt="logo" className="i5" />
          <span className="nom">MAM</span>
        </div>

        {/* Bouton Hamburger (mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="/home">Accueil</a>
          <a href="/service">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Bouton Desktop */}
        <button
          className="btconnexion desktop-btn"
          onClick={() => setShowModal(true)}
        >
          Connecter
        </button>

        <Connexion
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </header>
  );
}
