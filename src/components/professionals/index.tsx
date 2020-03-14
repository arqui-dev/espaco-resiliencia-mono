import React from "react";

import './masonry.css';

const professionals = require('../../utils/professionalList.json');

export const ProfessionalList = () => {
    return (
        <section className="section" id="team">
            <div className="container">
                <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Profissionais </h2>
                <h4 className="is-subtitle green-text has-text-weight-semibold has-text-centered is-size-5-mobile is-size-4">
                Somos Psicólogos, Psiquiatras, Neuropsicólogos, Psicopedagogos, Nutricionistas, Pedagogos e Terapeuta.
                </h4>
                <br />
            </div> 
            <div className="container">
                <div className="masonry">
                    {professionals.map((element: { name: string; speciality: string; register: string; picture: string; description: string; }) => {
                        return(
                            <div className="item">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="media">
                                            {element.picture.length > 0 ?
                                           ( <div className="media-left">
                                                <figure className="image is-128x128">
                                                    <img src={element.picture} alt={element.name}></img>
                                                </figure>
                                            </div>) 
                                            :<></> } 
                                            <div className="media-content">
                                                <p className="title is-size-5-desktop is-size-4-tablet is-size-6-mobile">{element.name}</p>
                                                <p className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">{element.speciality}{element.register}</p>
                                            </div>
                                        </div>
                                        <div className="content is-size-6 has-text-justified has-text-weight-light">{element.description}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}       
                </div>
            </div>
        </section>           
    )
}