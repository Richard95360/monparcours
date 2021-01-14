import React from "react";
import trail from '../img/trail.png'
import cuisine from '../img/cuisine.jpeg'
import jeuxv from '../img/gaming.jpeg'
import litera from '../img/livre.jpeg'

const Interet = (props) => (
    <section>
    <h2>Centres d'intérêt</h2>
    <figure className="interet">
      <img src={trail} alt=""/>
      <figcaption>jogging</figcaption>
    </figure>
    <figure className="interet">
      <img src={cuisine} alt=""/>
      <figcaption>Cuisine</figcaption>
    </figure>
    <figure className="interet">
      <img src={jeuxv} alt=""/>
      <figcaption>jeux video</figcaption>
    </figure>
    <figure className="interet">
      <img src={litera} alt=""/>
      <figcaption>Littérature</figcaption>
    </figure>
  </section>

);

export default Interet;