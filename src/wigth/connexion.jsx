import React from 'react';  
import './connexion.css';
import Inscription from './inscription/inscription.jsx';
import { useState } from 'react';
export default function Connexion({ show, onClose }) {
  if (!show) return null;
const [showModal, setShowModalInscription] = useState(false);
  return (
    <div className="modal">
      <div className="form-box">
        <h2>Connexion</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <button 
        className='connexion'
        >
            Se connecter
            
        </button>
        <p className="mess">Cliquer ici pour creer un compte :
            <a
                href="#"
                className="inscriptionLink"
                onClick={(e) => {
                    e.preventDefault(); // empêche rechargement page
                    setShowModalInscription(true);
                }}
                >
                s'inscrire ici
            </a>
    </p>
        <Inscription
            show={showModal}
            onClose={() => setShowModalInscription(false)}
            />
        <button className='fermer' onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}
