import React, {useEffect, useState} from "react";
import "./Card3.css";
import axios from "axios";
import config from "../../../../config.json";


function Card3 () {
    const [prof, setProf] = useState({})

    useEffect(() => {

        axios.get(`${config.apiUrl}/profile/`)
            .then((response) => {
                setProf(response.data);

            })
            .catch((error) => {
                console.log(error);

            });
    });
    if(Object.keys(prof).length!==0)
    {
        return(
            <div className="container">
                <section>

                    <h1 id="p">Mon Parcours</h1>
                    <div  className="container" >
                        <h3 className="card-title"> </h3>
                        <div className="row">
                            <div className="col-md-12 animate fadeInDown two" >
                                <div className="main-timeline4 ">
                                    {prof.map((parcours,key) =>
                                        <div className="timeline animate fadeInDown two " key={key}>
                                            <span className="timeline-icon"></span>
                                            <span className="year pulse-grow-on-hover">{parcours.annee}</span>
                                            <div className="timeline-content pulse-grow-on-hover">
                                                <h3 className="title">{parcours.titre}</h3>
                                                <p className="description">
                                                    {parcours.text}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );

    }
}

export default Card3;
