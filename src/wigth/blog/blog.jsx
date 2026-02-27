import React from "react";
import i2 from "../../assets/i2.png";
import i8 from "../../assets/i8.jfif";
import i9 from "../../assets/i9.jpg";
import i10 from "../../assets/i10.jpg";
import "./blog.css";

function Blog1() {
  return (
    <section className="accueil-section">
      {/* Image principale */}
      <div className="headerBlog">
        <img src={i2} alt="Service médical" className="img1" />
        <div className="textBlog1">
          <h2 className="blog-title">Bienvenue sur notre blog de santé !</h2>
          <p className="blog-desc">
            Découvrez les dernières actualités, conseils et informations sur la santé...{" "}
            <a href="#" className="vplus">voir plus</a>
          </p>
        </div>
      </div>

      <h2 className="tmge">Témoignages</h2>

      {/* Bloc du choix mam */}
      <div className="acc2">
        {[{
            name: "Khadim",
            image: i8,
            description: "C’est l'organisation technique."
          },
          {
            name: "Eliza",
            image: i10,
            description: "C’est l’énergie et l'enthousiasme que l'on met dans son travail."
          },
          {
            name: "Patric",
            image: i9,
            description: "C’est le résultat visé."
          }].map((testimony, index) => (
          <div className="card" key={index}>
            <div className="tname">
              <img src={testimony.image} alt={`${testimony.name} logo`} className="i5" />
              <h3>{testimony.name}</h3>
            </div>
            <p className="desc">{testimony.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog1;