import React, { Component } from 'react';

import img from '../img/richard.png';
import imgReact from '../img/iconReact.js.png';
import imgAngular from '../img/angular.png';
import imgJavascript from '../img/javaScript.png';
import imgjav from '../img/Jivi.png'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class composant extends Component {
 
  render (){ 
    let resumeData = this.props.resumeData;
    return (


  <section>
      <div className="photo">
        <img src={img} alt="" zoom/>
    </div>
   
    <div className="prez">
       <h2>Qui suis-je ?</h2>
       <p>Developpeur <strong>Java/jee Full/Stack ReactJs& Angular2+ & JavaScript</strong>&nbsp;
        je mi'interesse à l'
         informatique et les thématique liées au web en 2014.</p>
        <a href="#cv" >Telecharger mon CV</a>
        <div className="row banner">
          
          <ul className="social">
            {resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url} target="blanck">
                      <i className={item.className} ></i>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    
      <div className="contact">
        <h2>Information du contact</h2>
        <div className="contact-flex">
          <p>Nom : </p>
          <p>Haddad Richard</p>
        </div>
        <div className="contact-flex">
          <p>Adresse : </p>
          <p>2 Rue de pierrefitte - 95360 Montmangy</p>
        </div>
        <div className="contact-flex">
          <p>Téléphonne : </p>
          <p>06 09 92 46 80</p>
        </div>
        <div className="contact-flex">
          <p>Mail : </p>
          <p><a href="mailto:richard.haddad1@free.fr">richard.haddad1@free.fr</a></p>
        </div>
        <div className="social">
          <a href="#react"><img src={imgReact} alt="Logo Fb"/></a>
          <a href="#angular"><img src={imgAngular} alt="Logo Tw"/></a>
          <a href="#javascript"><img src={imgJavascript} alt="Logo Lk"/></a>
          <a href="#java"><img src={imgjav} alt="Logo Lk"/></a>
          
         
        </div>
        
         
       
      </div>
     
  </section>
  


   
     
    
);


    
   }
 }

export default composant;