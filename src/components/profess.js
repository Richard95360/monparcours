import React, { Component } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";




 class Profess extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       exper: 'Experience Professionnelles',
       titre:{
         name:'CGI-BNF',
         nameH4:'Richard Haddad',
         nameH41:'Aout 2018 à Octobre 2020',
         para:'évolutions et maintien en condition opérationnelle d’une application(portail/portlets Java/J2E,full statck, gestionnaire de portlets, JetSpeed, spring MVC hibernate,XML,XSD,JSP,Javascript & Jquery,base de donnée PostgreSQL) de gestion des partenariats numérique de la Bibliothèque nationale de France (signalisation,numériqation et versement de documents dans Gallica par un pool de plusieurs dizaines de partenaires institutionnels),dans le cadre d’une methode agile (scrum)',
         metier:'Developeur Java Full/Stack'
        
        },
        UTI : {
          name:'UTI-Group',
          nameH4:'Richard Haddad',
          nameDate:'Février 2018 àAvril 2018',
          para:'Conception de projet VSA-ENTERPRISE en Interne, en Java Jee Angular4,Springboot,amélioration des classes java, et des vues sur le projet D’actualisationdes collaborateurs mensuelle sur Internet des collaborateurs(CRA),formation Agile en interne.',
          metier:'Developeur Java Full/Stack'
        },
        EDF : {
          name:'EDF',
          nameH4:'Richard Haddad',
          nameDate:'Avril 2014 à Mai 2016',
          para:`Conception et développement d'une application J2EE 
          dans le cadre d’une maintenance pour un grand compte 
          dans le domaine de l'énergie .Rédaction de Fiches de Test.
          Mise au point de modèles de données Développements de couches
          de persistance et aide au développement  sur les nouveaux 
          compteur LINKY projet en java jee spring mvc angularjs , 
          hibernate.`,
          metier:'Developeur Java Full/Stack'

        }
    }
  }

  render() {
    const {exper,titre,UTI,EDF} = this.state
    const FormStyle = { fontSize: "20px" };
    return (
      <div>
          <section>
    <h2 style={FormStyle}>{exper}</h2>
    <div className="exp">
         <BsFillBriefcaseFill size="50px"/>
      <div className="exp-info">
        <h3 style={FormStyle}>{titre.name}</h3>
        <h4 style={FormStyle}>{titre.nameH4}</h4>
        <h4 style={FormStyle}>{titre.nameH41}</h4>
        <p style={FormStyle}>{titre.para}</p>
      </div>
      <div className="exp-desc">
       <p style={FormStyle}>{titre.metier}</p>

      </div>
    </div>
    <div className="exp">
      <BsFillBriefcaseFill size="50px"/>
      <div className="exp-info">
        <h3 style={FormStyle}>{UTI.name}</h3>
        <h4 style={FormStyle}>{UTI.nameH4}</h4>
        <h4 style={FormStyle}>{UTI.nameDate}</h4>
        <p style={FormStyle}>{UTI.para}</p>
      </div>
      <div className="exp-desc">
       <p style={FormStyle}>{UTI.metier}</p>

      </div>
    </div>
    <div className="exp">
      <BsFillBriefcaseFill size="50px"/>
      <div className="exp-info">
        <h3 style={FormStyle}>{EDF.name}</h3>
        <h4 style={FormStyle}>{EDF.nameH4}</h4>
        <h4 style={FormStyle}>{EDF.nameDate}</h4>
        <p style={FormStyle}>{EDF.para}</p>
      </div>
      <div className="exp-desc">
       <p style={FormStyle}>{EDF.metier}</p>

      </div>
    </div>
  </section>
      </div>
    )
  }
}



export default Profess;