import React from "react";

const FormStyle = { fontSize: "20px" };

const compt = {
  competence: 'Compétences',
  profess:'Professionnelles',
  langage:'HTML / CSS',
  langageOne:'Java /Jee',
  langagetwo:'JavascriptES6',
  langagetree:'Angular',
  langefort:'ReactJs'
}

const perso = {
  person:'Personnelles',
  creat:'Creativité',
  Adapt:'Adaptation',
  Seri:'Serieux',
  Pedago:'Pedagogie'
}
const Competences = (props) => (

    
    <section>
    <h2 style={FormStyle}>{compt.competence}</h2>
    <h3 className="h3gauche" style={FormStyle}>{compt.profess}</h3>
    <div className="comp">
      <p style={FormStyle}>{compt.langage}</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <div className="comp">
      <p style={FormStyle}>{compt.langageOne}</p>
      <div className="conteneur-barre"><span className="barre c95"></span></div>
    </div>
    <div className="comp">
      <p style={FormStyle}>{compt.langagetwo}</p>
      <div className="conteneur-barre"><span className="barre c90"></span></div>
    </div>
    <div className="comp">
      <p style={FormStyle}>{compt.langagetree}</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <div className="comp">
      <p style={FormStyle}>{compt.langefort}</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <h3 className="h3gauche" style={FormStyle}>{perso.person}</h3>
    <div className="comp2">
      <p style={FormStyle}>{perso.creat}</p>
      <p>90%</p>
      <div className="conteneur-barre2"><span className="barre c90"></span></div>
    </div>
    <div className="comp2">
      <p style={FormStyle}>{perso.Adapt}</p>
      <p>85%</p>
      <div className="conteneur-barre2"><span className="barre c85"></span></div>
    </div>
    <div className="comp2">
      <p style={FormStyle}>{perso.Seri}</p>
      <p>95%</p>
      <div className="conteneur-barre2"><span className="barre c95"></span></div>
    </div>
    <div className="comp2">
      <p style={FormStyle}>{perso.Pedago}</p>
      <p>95%</p>
      <div className="conteneur-barre2"><span className="barre c95"></span></div>
    </div>
  </section>

);



export default Competences;