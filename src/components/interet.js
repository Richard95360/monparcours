import React from "react";
import trail from '../img/trail.png'
import cuisine from '../img/cuisine.jpeg'
import jeuxv from '../img/gaming.jpeg'
import litera from '../img/livre.jpeg'

const interet = {

  inte:"Centres d'intérêt",
  jog:'Jogging',
  cuis:'Cuisine',
  jeuvi:'jeux video',
  litte:'Littérature'

}

const Interet = (props) => (
    <section>
    <h2>{interet.inte}</h2>
    <figure className="interet">
      <img src={trail} alt=""/>
      <figcaption>{interet.jog}</figcaption>
    </figure>
    <figure className="interet">
      <img src={cuisine} alt=""/>
      <figcaption>{interet.cuis}</figcaption>
    </figure>
    <figure className="interet">
      <img src={jeuxv} alt=""/>
      <figcaption>{interet.jeuvi}</figcaption>
    </figure>
    <figure className="interet">
      <img src={litera} alt=""/>
      <figcaption>{interet.litte}</figcaption>
    </figure>
  </section>

);

export default Interet;