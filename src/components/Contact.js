import React, { Component } from 'react';
import img from '../img/richard.jpeg';
import pdf from '../img/richardCvDev.pdf'
import ReactTooltip from 'react-tooltip'
import { FaAngular,FaReact } from "react-icons/fa";
import {SiJavascript,SiJava} from 'react-icons/si'


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class composant extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title:'Qui suis-je ?',
       prof:'Developpeur ',
       metier:'Java/jee Full/Stack ReactJs& Angular2+ & JavaScript',
       infosContact:{
         nom:'Haddad Richard',
         adresse:'2 Rue de pierrefitte - 95360 Montmagny',
         tel:'06 09 92 46 80',
         email:'richard.haddad1@free.fr'
       }

    }
  }
  
 
  render (){ 

    const { title, prof,metier, infosContact} = this.state
    let resumeData = this.props.resumeData;
    const FormStyle = { fontSize: "20px" };
  
    return (
  <section>
      <div className="photo">
        <img src={img} alt="" zoom=""/>
    </div>
   
    <div className="prez">
       <h2 style={FormStyle}>{title}</h2>
       <p style={FormStyle}>{prof}<strong>{metier}</strong>&nbsp;</p>

     
       <ReactTooltip 
           place="top"
           effect="solid"/>
        <a target='_blank' rel="noopener noreferrer"  data-tip="Telecharger Le CV ici" href={pdf}>telechager</a>
        <div className="row banner">
       
          <ul className="social">
          
            {resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a data-tip=" Lien Linkedin" href={item.url} target="blank">
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
          <p style={{fontSize : '25px'}}>Nom : </p>
          <p style={FormStyle}>{infosContact.nom}</p>
        </div>
        <div className="contact-flex">
          <p style={{fontSize : '25px'}}>Adresse : </p>
          <p style={FormStyle}>{infosContact.adresse}</p>
        </div>
        <div className="contact-flex">
          <p style={{fontSize : '25px'}}>Téléphone : </p>
          <p style={FormStyle}>{infosContact.tel}</p>
        </div>
        <div className="contact-flex">
          <p style={{fontSize : '25px'}}>Mail : </p>
          <p style={FormStyle}><a href="mailto:richard.haddad1@free.fr">{infosContact.email}</a></p>
        </div>
        <div className="social">
          <FaReact size="40px"/>
          <FaAngular size="40px"/>
          <SiJavascript size="40px" />
          <SiJava size="40px"/>
        </div>
      </div>
     
  </section>
  


   
     
    
);


    
   }
 }

export default composant;