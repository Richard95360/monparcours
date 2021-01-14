import React from "react";
import imgedhec from '../img/edhec.png'
import imgEcole from '../img/ecole.png'

const Formation = (props) => (
    <section>
    <h2>Formation</h2>
    <div className="exp">
      <div className="exp-logo">
        <a href="#ed"><img src={imgedhec} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>Udemy</h3>
        <h4>Novembre 2020</h4>
        <p>JavascriptES6 & Angular2+ &ReactJs</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Front/End</p>
      </div>
    </div>

    <div className="exp">
      <div className="exp-logo">
        <a href="#ecole"><img src={imgEcole} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>AJC Formation</h3>
        <h4>Avril 2017 à Novembre 2017</h4>
        <p>Angularjs</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Java/Jee</p>
      </div>
    </div>
    <div className="exp">
      <div className="exp-logo">
        <a href="#ecole"><img src={imgEcole} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>Doranco Formation</h3>
        <h4>Juin 2016 à  Décembre 2016</h4>
        <p>JSP / JSF</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Java/Jee</p>
      </div>

    </div>
    
  </section>
);

export default Formation;