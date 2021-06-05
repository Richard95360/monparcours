import React, { Component } from "react";
import imgedhec from "../img/edhec.png";
import imgEcole from "../img/ecole.png";

const forma = {
  udemy: [
    {
      title: "Formation",
      ecole: "Udemy",
      date: "Novembre 2020",
      comp: "JavascriptES6 & Angular2+ &ReactJs",
      metier: "Developeur Front/End",
    },
  ],
  ajcFormation: [
    {
      ecole: "AJC Formation",
      date: "Avril 2017 à Novembre 2017",
      comp: "JavascriptES6 & Angular2+ &ReactJs",
      metier: "Developeur Front/End",
    },
  ],
  dorancoForm: [
    {
      ecole: "Doranco Formation",
      date: "Juin 2016 à  Décembre 2016",
      comp: "JSP / JSF",
      metier: "Developeur Java/Jee",
    },
  ],
};

const FormStyle = { fontSize: "20px" };

const Formation = (props) => <div></div>;

export class FormationRic extends Component {
  render() {
    return (
      <>
        {forma.udemy &&
          forma.udemy.map((f, index) => {
           
            return (
              <section  key={index}>
                <div key={index}>
                  <div className="exp">
                    <div className="exp-logo">
                      <h3>{f.title}</h3>
                      <a href="#ed">
                        <img src={imgedhec} alt="" />
                      </a>
                    </div>
                    <div className="exp-info" >
                      <h3 style={FormStyle}>{f.ecole}</h3>
                      <h4 style={FormStyle}>{f.date}</h4>
                      <p style={FormStyle}>{f.comp}</p>
                      <p style={FormStyle}>{f.metier}</p>
                    </div>
                  </div>
                  <Formation
                    titre={f.title}
                    date={f.date}
                    ecole={f.ecole}
                    comp={f.comp}
                    metier={f.metier}
                    key={index}
                  />
                </div>
              </section>
            );
          })}

        {forma.ajcFormation &&
          forma.ajcFormation.map((fo, index) => {
           
            return (
              <section  key={index}>
                <div key={index}>
                  <div className="exp">
                    <div className="exp-logo">
                      <a href="#ecole">
                        <img src={imgEcole} alt="" />
                      </a>
                    </div>
                    <div className="exp-info">
                      <h3 style={FormStyle}>{fo.ecole}</h3>
                      <h4 style={FormStyle}>{fo.date}</h4>
                      <p style={FormStyle}>{fo.comp}</p>
                    </div>
                    <div className="exp-desc">
                      <p style={FormStyle}>{fo.metier}</p>
                    </div>
                  </div>

                  <Formation
                    date={fo.date}
                    ecole={fo.ecole}
                    comp={fo.comp}
                    metier={fo.metier}
                    key={index}
                  />
                </div>
              </section>
            );
          })}

        {forma.dorancoForm &&
          forma.dorancoForm.map((form, index) => {
            return (
              <section  key={index}>
                <div key={index}>
                  <div className="exp">
                    <div className="exp-logo">
                      <a href="#ecole">
                        <img src={imgEcole} alt="" />
                      </a>
                    </div>
                    <div className="exp-info">
                      <h3 style={FormStyle}>{form.ecole}</h3>
                      <h4 style={FormStyle}>{form.date}</h4>
                      <p style={FormStyle}>{form.comp}</p>
                    </div>
                    <div className="exp-desc">
                      <p style={FormStyle}>{form.metier}</p>
                    </div>
                  </div>

                  <Formation
                    date={form.date}
                    ecole={form.ecole}
                    comp={form.comp}
                    metier={form.metier}
                    key={index}
                  />
                </div>
              </section>
            );
          })}
      </>
    );
  }
}

export default FormationRic;
