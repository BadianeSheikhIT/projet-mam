import i7 from "../../assets/i7.jpg";
import "./accueil1.css";

function Acceuil1() {
  return (
    <section className="accueil-section">

      {/* Image principale */}
      <div className="acc1">
        <div className="acc3">
          <img src={i7} alt="Service médical" className="img1" />
        </div>
      </div>

      {/* Bloc du choix mam */}
      <div className="acc2">

        <div className="card">
          <h3>Rendez-vous</h3>
          <p className="desc">
            C’est l'organisation technique. C'est l'art de coordonner le temps,
            les ressources et les disponibilités pour garantir la fluidité du service.
          </p>
        </div>

        <div className="card">
          <h3>Passion</h3>
          <p className="desc">
            C’est l’énergie et l'enthousiasme que l'on met dans son travail.
            Dans le service, la passion se traduit par une attitude positive,
            une écoute active et une envie sincère d'aider l'autre.
          </p>
        </div>

        <div className="card">
          <h3>Satisfaction</h3>
          <p className="desc">
            C’est le résultat visé. Elle se mesure à l'écart entre ce que
            le patient attendait et ce qu'il a réellement reçu.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Acceuil1;
