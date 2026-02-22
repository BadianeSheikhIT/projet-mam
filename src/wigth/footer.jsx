
import React from "react";
import "./footer.css";
import i5 from "../assets/i5.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Nom */}
        <div className="footer-brand">
          <img src={i5} alt="logo MAM" className="footer-logo" />
          <span className="footer-name">MAM</span>
        </div>

        {/* Liens rapides */}
        <div className="footer-links">
          <h4>Liens rapides</h4>
          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Réseaux sociaux */}

        <div className="footer-links">
          <h4>Réseaux sociaux</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Dakar, Sénégal</p>
          <p>+221 77 000 00 00</p>
          <p>contact@mam.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2026 MAM - Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
