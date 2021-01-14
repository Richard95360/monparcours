import React from "react";

const Competences = (props) => (
    <section>
    <h2>Compétences</h2>
    <h3 className="h3gauche">Professionnelles</h3>
    <div className="comp">
      <p>HTML / CSS</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <div className="comp">
      <p>Java / SQL</p>
      <div className="conteneur-barre"><span className="barre c95"></span></div>
    </div>
    <div className="comp">
      <p>JavascriptES6</p>
      <div className="conteneur-barre"><span className="barre c90"></span></div>
    </div>
    <div className="comp">
      <p>Agular</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <div className="comp">
      <p>ReactJs</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <h3 className="h3gauche">Personnelles</h3>
    <div className="comp2">
      <p>Creativité</p>
      <p>90%</p>
      <div className="conteneur-barre2"><span className="barre c90"></span></div>
    </div>
    <div className="comp2">
      <p>Adaptation</p>
      <p>85%</p>
      <div className="conteneur-barre2"><span className="barre c85"></span></div>
    </div>
    <div className="comp2">
      <p>Serieux</p>
      <p>95%</p>
      <div className="conteneur-barre2"><span className="barre c95"></span></div>
    </div>
    <div className="comp2">
      <p>Pedagogie</p>
      <p>95%</p>
      <div className="conteneur-barre2"><span className="barre c95"></span></div>
    </div>
  </section>

);

export default Competences;