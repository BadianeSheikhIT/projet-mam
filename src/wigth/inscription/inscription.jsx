import React from 'react';  
import './inscription.css';
import './input.css'
import RadioButtonsGroup from './checkGenre.jsx';
import RadioButtonsGroupTypte from './checkType.jsx';
export default function Inscription({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="form-boxI">
        <h2>S' inscription</h2>
        <div className="row">
            <input type="text" className='input1' placeholder="Nom" />
            <input type="text" className='input2' placeholder="Prenom" />
        </div>
        <div className='row'>
            <input type="tel" className='input1' placeholder="Telephone" />
            <input type="text" className='input2' placeholder="Address" />
        </div>
        <input type="email" className='input3' placeholder="Email" />
        
        <div className="row">
            <input type="password" className='input4' placeholder="Mot de passe" />
            <input type="password" className='input5' placeholder="Confirmer le mot de passe" />

        </div>
        <div className='checked'>
          <RadioButtonsGroup />
          <RadioButtonsGroupTypte/>
        </div>

        <button 
        className='inscription'
        onClick={onClose}>
            S'inscrire
        </button>
      </div>
    </div>
  );
}
