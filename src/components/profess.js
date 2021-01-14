import React from "react";
import logo from "../img/rh-.png"
import logo1 from "../img/prestashop.png"

const Profess = (props) => (

    <section>
    <h2>Experience Professionnelles</h2>
    <div className="exp">
      <div className="exp-logo">
        <a href="#im"><img src={logo} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>CGI-BNF</h3>
        <h4>Richard Haddad</h4>
        <h4>Aout 2018 à Octobre 2020</h4>
        <p>TMA CGI , maintenance d’une application projet ESCO 
          numerisation de documents , gestion des bugs 
          des évolutions, en méthode agile , framework Jetspeed , 
          Spring mvc hibernate , jquery, javacript,  
          java/jee webservice soapRest ,jsp, XML ,  tomcat,Junit ,
          Jenkins integration continue ,git  ,sonar</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Java Full/Stack</p>

      </div>
    </div>
    <div className="exp">
      <div className="exp-logo">
        <a href="#prest"><img src={logo1} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>UTI-Group</h3>
        <h4>Richard Haddad</h4>
        <h4>Février 2018 àAvril 2018</h4>
        <p>Conception de projet  VSA-ENTERPRISE en  Interne, 
          en Java Jee Angular4 ,Springboot , amélioration 
          des classes java, et des vues sur le projet D’actualisation
          des collaborateurs mensuelle sur Internet des collaborateurs(CRA)  , formation Agile en interne.</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Java Full/Stack</p>

      </div>
    </div>
    <div className="exp">
      <div className="exp-logo">
        <a href="#pref"><img src={logo1} alt=""/></a>
      </div>
      <div className="exp-info">
        <h3>EDF</h3>
        <h4>Richard Haddad</h4>
        <h4>Avril 2014 à Mai 2016</h4>
        <p>Conception et développement d'une application J2EE 
          dans le cadre d’une maintenance pour un grand compte 
          dans le domaine de l'énergie .Rédaction de Fiches de Test.
          Mise au point de modèles de données Développements de couches
          de persistance et   aide au développement  sur les nouveaux 
          compteur LINKY projet  en java jee spring mvc angularjs , 
          hibernate.</p>
      </div>
      <div className="exp-desc">
       <p>Developeur Java Full/Stack</p>

      </div>
    </div>
  </section>
);

export default Profess;