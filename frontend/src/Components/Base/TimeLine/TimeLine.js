import React, {useEffect, useState} from "react";
import "./TimeLine.css"
import axios from "axios";
import parse from "html-react-parser";
import config from "../../../config.json";
function TimeLine () {
   const [parcours,setParcours] = useState([]);
    useEffect(() => {

    axios.get(`${config.apiUrl}/parcour/`)
      .then((response) => {
        setParcours(response.data);

      })
      .catch((error) => {
        console.log(error);

      });
  });
    if(parcours.length !==0) {
        return (
            <div className="container">
                {parcours.length > 0 &&
                    <section>

                        <h1 id="p">Mon Parcours</h1>
                        <div className="container">
                            <h3 className="card-title"> </h3>
                            <div className="row">
                                <div className="col-md-12 animate fadeInDown two">
                                    <div className="main-timeline4 ">
                                        {parcours.map((p, key) =>
                                            <div className="timeline animate fadeInDown two " key={key}>
                                                <span className="timeline-icon"></span>
                                                <span className="year pulse-grow-on-hover">{p.annee}</span>
                                                <div className="timeline-content pulse-grow-on-hover">
                                                    <h3 className="title">{p.titre}</h3>
                                                    <p className="description">
                                                        {parse(p.text)}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>
        );
    }
}

export default TimeLine;
