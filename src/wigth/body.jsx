import React from "react";
import "./body.css";
import Acceuil1 from "./accueil/accueil1.jsx";
import Footer from "./footer.jsx";

function ContenuAccueil() {
  return (
    <div className="contenu">
      
      <section className="hero">
        <h1 className="accueil">
          Mame Assistance Medical
        </h1>
      </section>

      <section className="section-accueil1">
        <Acceuil1 />
      </section>

      <Footer />
    </div>
  );
}

export default ContenuAccueil;
